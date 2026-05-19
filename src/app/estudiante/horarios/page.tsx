import React from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card } from '@/components/ui/Card';

const days=['Lunes','Martes','Miérc.','Jueves','Viernes','Sábado'];
const slots=[
  {h:'08:00',d:{0:{n:'Matemática',p:'Prof. García',a:'102',c:'bg-blue-50 text-blue-700'},2:{n:'Matemática',p:'Prof. García',a:'102',c:'bg-blue-50 text-blue-700'},4:{n:'Matemática',p:'Prof. García',a:'102',c:'bg-blue-50 text-blue-700'}}},
  {h:'10:00',d:{1:{n:'Física',p:'Prof. Torres',a:'201',c:'bg-amber-50 text-amber-700'},3:{n:'Física',p:'Prof. Torres',a:'201',c:'bg-amber-50 text-amber-700'}}},
  {h:'14:00',d:{0:{n:'Química',p:'Prof. Chávez',a:'Lab 01',c:'bg-green-50 text-green-700'},2:{n:'Lengua',p:'Prof. Díaz',a:'105',c:'bg-purple-50 text-purple-700'}}},
];

export default function Page() {
  return (<div className="flex flex-col gap-6">
    <PageHeader title="Mi horario — Ciclo 2025-II" />
    <Card>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead><tr className="bg-pacifico-900 text-white text-xs font-semibold uppercase">
            <th className="p-3 border border-pacifico-800 w-20">Hora</th>
            {days.map(d=><th key={d} className="p-3 border border-pacifico-800">{d}</th>)}
          </tr></thead>
          <tbody>{slots.map((s,i)=>(
            <tr key={i} className="h-20 text-center">
              <td className="p-2 border border-gray-200 bg-gray-50 font-semibold text-gray-600 text-xs">{s.h}</td>
              {days.map((_,di)=>{const cl=s.d[di as keyof typeof s.d] as any;return(
                <td key={di} className={`p-2 border border-gray-200 ${cl?cl.c:''}`}>
                  {cl&&<div><p className="font-bold text-xs">{cl.n}</p><p className="text-[10px] opacity-70">{cl.p}</p><p className="text-[10px] opacity-50">Aula {cl.a}</p></div>}
                </td>
              );})}
            </tr>
          ))}</tbody>
        </table>
      </div>
    </Card>
  </div>);
}
