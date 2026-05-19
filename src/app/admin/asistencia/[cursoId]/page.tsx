import React from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card } from '@/components/ui/Card';
import { Table } from '@/components/ui/Table';
import { Button } from '@/components/ui/Button';
export default function Page(){return(<div className="flex flex-col gap-6">
  <PageHeader title="Asistencia — Matemática · Lunes 12 jun 2025"/>
  <div className="flex gap-3 items-center"><Button variant="secondary">✅ Marcar todos Presente</Button><span className="text-sm text-gray-500">P:40 T:3 F:5</span></div>
  <Card><Table headers={['N°','Nombre','Presente','Tardanza','Falta']}>
    {[{n:'Juan Pérez',s:0},{n:'María García',s:1},{n:'Carlos Ramos',s:2}].map((e,i)=>(
      <tr key={i} className="hover:bg-gray-50"><td className="px-6 py-2">{i+1}</td><td className="px-6 py-2 font-semibold">{e.n}</td>
        {[0,1,2].map(v=><td key={v} className="px-6 py-2 text-center"><input type="radio" name={`att-${i}`} defaultChecked={e.s===v} className="cursor-pointer"/></td>)}
      </tr>))}
  </Table></Card>
  <div className="flex justify-end gap-3"><Button variant="secondary">Cancelar</Button><Button>Guardar asistencia</Button></div>
</div>);}
