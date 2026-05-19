import React from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card } from '@/components/ui/Card';
import { Table } from '@/components/ui/Table';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Plus, Search } from 'lucide-react';
import Link from 'next/link';

export default function Page() {
  const docs=[{id:1,n:'Dr. García',esp:'Matemática',em:'garcia@academia.com',cur:3,e:'active'},{id:2,n:'Prof. Torres',esp:'Física',em:'torres@academia.com',cur:2,e:'active'}];
  return (<div className="flex flex-col gap-6">
    <PageHeader title="Docentes" action={<Link href="/admin/docentes/nuevo"><Button><Plus className="w-4 h-4"/>Nuevo docente</Button></Link>}/>
    <div className="relative max-w-sm"><Search className="w-4 h-4 absolute left-3 top-3 text-gray-400"/><input className="w-full pl-9 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm" placeholder="Buscar por nombre o especialidad"/></div>
    <Card><Table headers={['Nombre','Especialidad','Correo','Cursos','Estado','Acciones']}>
      {docs.map(d=>(<tr key={d.id} className="hover:bg-gray-50"><td className="px-6 py-3 font-semibold">{d.n}</td><td className="px-6 py-3">{d.esp}</td><td className="px-6 py-3">{d.em}</td><td className="px-6 py-3 font-bold">{d.cur}</td><td className="px-6 py-3"><Badge variant={d.e as any}>Activo</Badge></td>
        <td className="px-6 py-3 flex gap-2"><Link href={`/admin/docentes/${d.id}`}><Button variant="ghost" className="text-xs">Ver</Button></Link><Link href={`/admin/docentes/${d.id}/editar`}><Button variant="ghost" className="text-xs">Editar</Button></Link></td>
      </tr>))}
    </Table></Card>
  </div>);
}
