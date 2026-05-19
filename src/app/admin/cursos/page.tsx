import React from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card } from '@/components/ui/Card';
import { Table } from '@/components/ui/Table';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Plus } from 'lucide-react';
import Link from 'next/link';

export default function Page() {
  const cur=[{id:1,n:'Matemática Preuniv.',a:'Ciencias',d:'Dr. García',e:'active'},{id:2,n:'Física General',a:'Ciencias',d:'Prof. Torres',e:'active'}];
  return (<div className="flex flex-col gap-6">
    <PageHeader title="Cursos" action={<Link href="/admin/cursos/nuevo"><Button><Plus className="w-4 h-4"/>Nuevo curso</Button></Link>}/>
    <Card><Table headers={['Nombre','Área','Docente','Estado','Acciones']}>
      {cur.map(c=>(<tr key={c.id} className="hover:bg-gray-50"><td className="px-6 py-3 font-semibold">{c.n}</td><td className="px-6 py-3">{c.a}</td><td className="px-6 py-3">{c.d}</td><td className="px-6 py-3"><Badge variant={c.e as any}>Activo</Badge></td>
        <td className="px-6 py-3 flex gap-2"><Link href={`/admin/cursos/${c.id}`}><Button variant="ghost" className="text-xs">Ver</Button></Link><Link href={`/admin/cursos/${c.id}/editar`}><Button variant="ghost" className="text-xs">Editar</Button></Link></td></tr>))}
    </Table></Card>
  </div>);
}
