"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { PageHeader } from '@/components/layout/PageHeader';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { Avatar } from '@/components/ui/Avatar';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Table } from '@/components/ui/Table';
import { Modal } from '@/components/ui/Modal';
import Link from 'next/link';

export default function Page() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = () => {
    setIsModalOpen(false);
    toast.success('Estudiante eliminado correctamente');
    setTimeout(() => {
      router.push('/admin/estudiantes');
    }, 1000);
  };

  return (<div className="flex flex-col gap-6">
    <Breadcrumb items={[{label:'Estudiantes',href:'/admin/estudiantes'},{label:'Juan Pérez'}]}/>
    <PageHeader title="Juan Pérez" action={<div className="flex gap-2"><Link href="/admin/estudiantes/E-0023/editar"><Button variant="secondary">Editar</Button></Link><Button variant="danger" onClick={() => setIsModalOpen(true)}>Eliminar</Button></div>}/>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="flex flex-col items-center text-center">
        <Avatar name="Juan Pérez" size="lg"/><h3 className="font-semibold mt-3">Juan Pérez</h3><Badge variant="active">Activo</Badge>
        <div className="w-full mt-4 text-left text-sm space-y-2"><div className="flex justify-between"><span className="text-gray-400">Código:</span><span className="font-semibold">E-0023</span></div><div className="flex justify-between"><span className="text-gray-400">DNI:</span><span className="font-semibold">74521836</span></div></div>
      </Card>
      <Card title="Simulacros Generales (Admisión UNT - Área A)" className="lg:col-span-2">
        <Table headers={['Simulacro','Puntaje','Puesto','Rendimiento']}>
          <tr className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
            <td className="px-6 py-3 font-semibold text-gray-800">Simulacro General N° 1</td>
            <td className="px-6 py-3 font-bold text-gray-900">284.50 <span className="text-gray-400 font-normal text-xs">/ 400</span></td>
            <td className="px-6 py-3 text-gray-600">12° de 145</td>
            <td className="px-6 py-3"><Badge variant="active">Sobresaliente</Badge></td>
          </tr>
          <tr className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
            <td className="px-6 py-3 font-semibold text-gray-800">Simulacro General N° 2</td>
            <td className="px-6 py-3 font-bold text-gray-900">312.00 <span className="text-gray-400 font-normal text-xs">/ 400</span></td>
            <td className="px-6 py-3 text-gray-600">8° de 152</td>
            <td className="px-6 py-3"><Badge variant="active">Sobresaliente</Badge></td>
          </tr>
          <tr className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
            <td className="px-6 py-3 font-semibold text-gray-800">Simulacro General N° 3</td>
            <td className="px-6 py-3 font-bold text-gray-900">210.25 <span className="text-gray-400 font-normal text-xs">/ 400</span></td>
            <td className="px-6 py-3 text-gray-600">45° de 160</td>
            <td className="px-6 py-3"><Badge variant="active">Aprobado</Badge></td>
          </tr>
        </Table>
      </Card>
    </div>

    <Modal
      isOpen={isModalOpen}
      title="Eliminar Estudiante"
      confirmLabel="Eliminar permanentemente"
      confirmVariant="danger"
      onClose={() => setIsModalOpen(false)}
      onConfirm={handleDelete}
    >
      <p>¿Estás seguro de que deseas eliminar al estudiante <strong>Juan Pérez</strong>? Esta acción no se puede deshacer y borrará todos sus registros, notas y pagos asociados.</p>
    </Modal>
  </div>);
}
