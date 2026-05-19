import React from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card } from '@/components/ui/Card';
import Link from 'next/link';
const cursos=[{id:1,n:'Matemática',est:48},{id:2,n:'Física',est:45},{id:3,n:'Química',est:42},{id:4,n:'Lengua',est:48}];
export default function Page(){return(<div className="flex flex-col gap-6"><PageHeader title="Registro de notas"/>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">{cursos.map(c=>(
    <Card key={c.id}><p className="font-semibold">📚 {c.n}</p><p className="text-sm text-gray-500">{c.est} estudiantes</p>
      <Link href={`/admin/notas/${c.id}`} className="text-sm text-pacifico-700 font-semibold hover:underline mt-2 inline-block">Registrar →</Link></Card>
  ))}</div></div>);}
