import React from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card } from '@/components/ui/Card';
import { Table } from '@/components/ui/Table';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Plus, Search } from 'lucide-react';
import Link from 'next/link';

const alumnos=[
  {id:'E-0023',n:'Juan Pérez',dni:'74521836',car:'Medicina',ci:'2025-II',e:'active'},
  {id:'E-0024',n:'María García',dni:'69874512',car:'Derecho',ci:'2025-II',e:'active'},
  {id:'E-0025',n:'Carlos Ramos',dni:'71239847',car:'Ing. Sistemas',ci:'2025-II',e:'inactive'},
];

export default function Page() {
  return (<div className="flex flex-col gap-6">
    <PageHeader title="Estudiantes" action={<Link href="/admin/estudiantes/nuevo"><Button><Plus className="w-4 h-4"/>Nuevo estudiante</Button></Link>}/>
    <div className="flex gap-3 flex-wrap">
      <div className="relative flex-1 min-w-[200px]"><Search className="w-4 h-4 absolute left-3 top-3 text-gray-400"/><input className="w-full pl-9 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm" placeholder="Buscar por nombre, código o DNI"/></div>
    </div>
    <Card>
      <Table headers={['Código','Nombre','DNI','Carrera','Ciclo','Estado','Acciones']} footer="Mostrando 3 de 142 estudiantes">
        {alumnos.map(a=>(<tr key={a.id} className="hover:bg-gray-50">
          <td className="px-6 py-3 font-medium text-gray-500">{a.id}</td>
          <td className="px-6 py-3 font-semibold text-gray-900">{a.n}</td>
          <td className="px-6 py-3">{a.dni}</td>
          <td className="px-6 py-3">{a.car}</td>
          <td className="px-6 py-3">{a.ci}</td>
          <td className="px-6 py-3"><Badge variant={a.e as any}>{a.e==='active'?'Activo':'Inactivo'}</Badge></td>
          <td className="px-6 py-3 flex gap-2">
            <Link href={`/admin/estudiantes/${a.id}`}><Button variant="ghost" className="text-xs">Ver</Button></Link>
            <Link href={`/admin/estudiantes/${a.id}/editar`}><Button variant="ghost" className="text-xs">Editar</Button></Link>
          </td>
        </tr>))}
      </Table>
    </Card>
  </div>);
}
