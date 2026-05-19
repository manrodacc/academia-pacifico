import React from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card } from '@/components/ui/Card';
import { Table } from '@/components/ui/Table';

export default function Page() {
  return (<div className="flex flex-col gap-6">
    <PageHeader title="Dr. García" subtitle="Perfil del docente"/>
    <Card title="Datos"><div className="grid grid-cols-2 gap-4 text-sm"><div><p className="text-gray-400 text-xs">Especialidad</p><p className="font-semibold">Matemática</p></div><div><p className="text-gray-400 text-xs">Correo</p><p className="font-semibold">garcia@academia.com</p></div></div></Card>
    <Card title="Cursos asignados"><Table headers={['Curso','Ciclo','Estudiantes']}>
      <tr><td className="px-6 py-2 font-semibold">Matemática</td><td className="px-6 py-2">2025-II</td><td className="px-6 py-2">48</td></tr>
    </Table></Card>
  </div>);
}
