import React from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { Table } from '@/components/ui/Table';
import { Badge } from '@/components/ui/Badge';

export default function Page() {
  const notas=[{e:'Examen Parcial 1',f:'15 mar 2025',n:14},{e:'Simulacro 1',f:'22 mar 2025',n:16},{e:'Examen Parcial 2',f:'05 abr 2025',n:13},{e:'Simulacro 2',f:'12 abr 2025',n:15},{e:'Examen Final',f:'30 abr 2025',n:18}];
  return (<div className="flex flex-col gap-6">
    <Breadcrumb items={[{label:'Mis notas',href:'/estudiante/notas'},{label:'Matemática Preuniversitaria'}]} />
    <PageHeader title="Matemática Preuniversitaria" subtitle="Detalle de evaluaciones" />
    <Card>
      <Table headers={['Evaluación','Fecha','Nota','Estado']}>
        {notas.map((n,i)=>(<tr key={i} className="hover:bg-gray-50"><td className="px-6 py-3 font-semibold">{n.e}</td><td className="px-6 py-3">{n.f}</td><td className="px-6 py-3 font-bold">{n.n}</td><td className="px-6 py-3"><Badge variant={n.n>=10.5?'active':'danger'}>{n.n>=10.5?'Aprobado':'Desaprobado'}</Badge></td></tr>))}
        <tr className="bg-gray-50 font-bold"><td className="px-6 py-3">PROMEDIO FINAL</td><td className="px-6 py-3"></td><td className="px-6 py-3">15.2</td><td className="px-6 py-3"><Badge variant="active">Aprobado</Badge></td></tr>
      </Table>
    </Card>
  </div>);
}
