import React from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import Link from 'next/link';

const cursos=[
  {id:1,n:'Matemática Preuniversitaria',d:'Prof. García',p:15.4,pct:77},
  {id:2,n:'Física General',d:'Prof. Torres',p:13.2,pct:66},
  {id:3,n:'Química',d:'Prof. Chávez',p:17.0,pct:85},
  {id:4,n:'Lengua y Literatura',d:'Prof. Díaz',p:16.8,pct:84},
];

export default function Page() {
  return (<div className="flex flex-col gap-6">
    <PageHeader title="Mis notas — Ciclo 2025-II" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {cursos.map(c=>(
        <Card key={c.id}>
          <div className="flex items-start justify-between">
            <div><p className="font-semibold text-gray-900">📚 {c.n}</p><p className="text-sm text-gray-500">{c.d}</p></div>
            <Badge variant={c.p>=10.5?'active':'danger'}>{c.p>=10.5?'Aprobado':'Desaprobado'}</Badge>
          </div>
          <div className="mt-4">
            <div className="flex justify-between text-sm mb-1"><span className="font-bold">{c.p} / 20</span><span className="text-gray-400">{c.pct}%</span></div>
            <div className="w-full bg-gray-100 rounded-full h-2"><div className="bg-pacifico-500 h-2 rounded-full" style={{width:c.pct+'%'}}/></div>
          </div>
          <Link href={`/estudiante/notas/${c.id}`} className="text-sm text-pacifico-700 font-semibold hover:underline mt-3 inline-block">Ver detalle →</Link>
        </Card>
      ))}
    </div>
  </div>);
}
