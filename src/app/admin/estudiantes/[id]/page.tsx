import React from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { Avatar } from '@/components/ui/Avatar';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Table } from '@/components/ui/Table';
import Link from 'next/link';

export default function Page() {
  return (<div className="flex flex-col gap-6">
    <Breadcrumb items={[{label:'Estudiantes',href:'/admin/estudiantes'},{label:'Juan Pérez'}]}/>
    <PageHeader title="Juan Pérez" action={<div className="flex gap-2"><Link href="/admin/estudiantes/E-0023/editar"><Button variant="secondary">Editar</Button></Link><Button variant="danger">Eliminar</Button></div>}/>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="flex flex-col items-center text-center">
        <Avatar name="Juan Pérez" size="lg"/><h3 className="font-semibold mt-3">Juan Pérez</h3><Badge variant="active">Activo</Badge>
        <div className="w-full mt-4 text-left text-sm space-y-2"><div className="flex justify-between"><span className="text-gray-400">Código:</span><span className="font-semibold">E-0023</span></div><div className="flex justify-between"><span className="text-gray-400">DNI:</span><span className="font-semibold">74521836</span></div></div>
      </Card>
      <Card title="Notas" className="lg:col-span-2">
        <Table headers={['Curso','Promedio','Estado']}>
          <tr><td className="px-6 py-2 font-semibold">Matemática</td><td className="px-6 py-2 font-bold">15.4</td><td className="px-6 py-2"><Badge variant="active">Aprobado</Badge></td></tr>
          <tr><td className="px-6 py-2 font-semibold">Física</td><td className="px-6 py-2 font-bold">13.2</td><td className="px-6 py-2"><Badge variant="active">Aprobado</Badge></td></tr>
        </Table>
      </Card>
    </div>
  </div>);
}
