import React from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card } from '@/components/ui/Card';
import { Table } from '@/components/ui/Table';
import { Badge } from '@/components/ui/Badge';

export default function Page() {
  const sesiones=[{f:'Lun 03 mar',s:1,e:'active',t:'Presente'},{f:'Mié 05 mar',s:2,e:'active',t:'Presente'},{f:'Lun 10 mar',s:3,e:'pending',t:'Tardanza'},{f:'Mié 12 mar',s:4,e:'danger',t:'Falta'},{f:'Lun 17 mar',s:5,e:'active',t:'Presente'}];
  return (<div className="flex flex-col gap-6">
    <PageHeader title="Mi asistencia — Ciclo 2025-II" />
    <div className="flex gap-4 mb-2 flex-wrap">
      {['Matemática','Física','Química','Lengua'].map((c,i)=><button key={i} className={`px-4 py-2 rounded-lg text-sm font-semibold cursor-pointer ${i===0?'bg-pacifico-700 text-white':'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'}`}>{c}</button>)}
    </div>
    <Card>
      <div className="flex items-center gap-6 mb-6">
        <div className="w-28 h-28 rounded-full border-4 border-pacifico-500 flex items-center justify-center"><div className="text-center"><p className="text-2xl font-bold text-pacifico-700">92%</p><p className="text-[10px] text-gray-500">asistencia</p></div></div>
        <p className="text-sm text-gray-600">44 de 48 sesiones asistidas</p>
      </div>
      <Table headers={['Fecha','Sesión','Estado']}>
        {sesiones.map((s,i)=>(<tr key={i} className="hover:bg-gray-50"><td className="px-6 py-3">{s.f}</td><td className="px-6 py-3">Sesión {s.s}</td><td className="px-6 py-3"><Badge variant={s.e as any}>{s.t}</Badge></td></tr>))}
      </Table>
      <div className="flex gap-6 mt-4 text-sm font-semibold">
        <span className="text-green-700">Presente: 40</span>
        <span className="text-amber-700">Tardanzas: 4</span>
        <span className="text-red-700">Faltas: 4</span>
      </div>
    </Card>
  </div>);
}
