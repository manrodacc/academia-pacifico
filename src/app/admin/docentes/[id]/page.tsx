"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { PageHeader } from '@/components/layout/PageHeader';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { Table } from '@/components/ui/Table';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import Link from 'next/link';

export default function Page() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = () => {
    setIsModalOpen(false);
    toast.success('Docente eliminado correctamente');
    setTimeout(() => {
      router.push('/admin/docentes');
    }, 1000);
  };

  return (<div className="flex flex-col gap-6">
    <Breadcrumb items={[{ label: 'Docentes', href: '/admin/docentes' }, { label: 'Dr. García' }]} />
    <PageHeader 
      title="Dr. García" 
      subtitle="Perfil del docente" 
      action={
        <div className="flex gap-2">
          <Link href="/admin/docentes/1/editar">
            <Button variant="secondary">Editar</Button>
          </Link>
          <Button variant="danger" onClick={() => setIsModalOpen(true)}>Eliminar</Button>
        </div>
      }
    />
    
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="flex flex-col items-center text-center">
        <div className="w-24 h-24 rounded-full border-4 border-gray-100 shadow-sm overflow-hidden bg-pacifico-100 flex items-center justify-center font-bold text-2xl text-pacifico-700 shrink-0">
          DG
        </div>
        <h3 className="font-semibold mt-3 text-lg text-gray-900">Dr. García</h3>
        <div className="mt-1">
          <Badge variant="active">Activo</Badge>
        </div>
        
        <div className="w-full mt-6 text-left text-sm space-y-3">
          <div className="flex justify-between border-b border-gray-100 pb-2"><span className="text-gray-400">Código:</span><span className="font-semibold text-gray-800">DOC-001</span></div>
          <div className="flex justify-between border-b border-gray-100 pb-2"><span className="text-gray-400">DNI:</span><span className="font-semibold text-gray-800">10293847</span></div>
          <div className="flex justify-between border-b border-gray-100 pb-2"><span className="text-gray-400">Especialidad:</span><span className="font-semibold text-gray-800">Matemática</span></div>
          <div className="flex justify-between border-b border-gray-100 pb-2"><span className="text-gray-400">Correo:</span><span className="font-semibold text-gray-800">garcia@academia.com</span></div>
          <div className="flex justify-between border-b border-gray-100 pb-2"><span className="text-gray-400">Teléfono:</span><span className="font-semibold text-gray-800">+51 987 654 321</span></div>
          <div className="flex justify-between"><span className="text-gray-400">Dirección:</span><span className="font-semibold text-gray-800 text-right max-w-[150px]">Av. Los Pinos 123, Trujillo</span></div>
        </div>
      </Card>
      
      <div className="lg:col-span-2 flex flex-col gap-6">
        <Card title="Cursos asignados">
          <Table headers={['Curso','Ciclo','Estudiantes']}>
            <tr><td className="px-6 py-3 font-semibold text-gray-800">Matemática Preuniversitaria</td><td className="px-6 py-3">2025-II</td><td className="px-6 py-3 font-medium">48</td></tr>
            <tr><td className="px-6 py-3 font-semibold text-gray-800">Álgebra Preuniversitaria</td><td className="px-6 py-3">2025-II</td><td className="px-6 py-3 font-medium">35</td></tr>
          </Table>
        </Card>
      </div>
    </div>

    <Modal
      isOpen={isModalOpen}
      title="Eliminar Docente"
      confirmLabel="Eliminar permanentemente"
      confirmVariant="danger"
      onClose={() => setIsModalOpen(false)}
      onConfirm={handleDelete}
    >
      <p>¿Estás seguro de que deseas eliminar al docente <strong>Dr. García</strong>? Esta acción no se puede deshacer y desvinculará todos sus cursos asignados.</p>
    </Modal>
  </div>);
}

