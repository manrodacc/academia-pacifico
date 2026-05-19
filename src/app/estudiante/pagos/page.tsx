import React from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card } from '@/components/ui/Card';
import { Table } from '@/components/ui/Table';
import { Badge } from '@/components/ui/Badge';
import { Alert } from '@/components/ui/Alert';
import Link from 'next/link';

const pagos=[
  {id:1,c:'Matrícula',v:'05 feb 2025',m:'S/ 200',e:'active',t:'Pagado'},
  {id:2,c:'Cuota 1',v:'15 feb 2025',m:'S/ 200',e:'active',t:'Pagado'},
  {id:3,c:'Cuota 2',v:'15 mar 2025',m:'S/ 200',e:'active',t:'Pagado'},
  {id:4,c:'Cuota 3',v:'15 abr 2025',m:'S/ 200',e:'active',t:'Pagado'},
  {id:5,c:'Cuota 4',v:'15 may 2025',m:'S/ 200',e:'active',t:'Pagado'},
  {id:6,c:'Cuota 5',v:'15 jun 2025',m:'S/ 200',e:'pending',t:'Pendiente'},
  {id:7,c:'Cuota 6',v:'15 jul 2025',m:'S/ 200',e:'inactive',t:'Futuro'},
];

export default function Page() {
  return (<div className="flex flex-col gap-6">
    <PageHeader title="Mis pagos — Ciclo 2025-II" />
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <Card><p className="text-xs text-gray-400 font-semibold">Total pagado</p><p className="text-xl font-bold text-gray-900">S/ 1,200</p></Card>
      <Card><p className="text-xs text-gray-400 font-semibold">Pendiente</p><p className="text-xl font-bold text-amber-600">S/ 400</p></Card>
      <Card><p className="text-xs text-gray-400 font-semibold">Próximo pago</p><p className="text-xl font-bold text-gray-900">15 jun 2025</p></Card>
    </div>
    <Card>
      <Table headers={['Concepto','Vencimiento','Monto','Estado','Acción']}>
        {pagos.map(p=>(<tr key={p.id} className="hover:bg-gray-50">
          <td className="px-6 py-3 font-semibold">{p.c}</td><td className="px-6 py-3">{p.v}</td><td className="px-6 py-3 font-bold">{p.m}</td>
          <td className="px-6 py-3"><Badge variant={p.e as any}>{p.t}</Badge></td>
          <td className="px-6 py-3">{p.e==='active'?<Link href={`/estudiante/pagos/${p.id}`} className="text-pacifico-700 text-sm font-semibold hover:underline">PDF</Link>:'—'}</td>
        </tr>))}
      </Table>
    </Card>
  </div>);
}
