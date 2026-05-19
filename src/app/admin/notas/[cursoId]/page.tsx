import React from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { Table } from '@/components/ui/Table';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
export default function Page(){return(<div className="flex flex-col gap-6">
  <Breadcrumb items={[{label:'Notas',href:'/admin/notas'},{label:'Matemática'}]}/>
  <PageHeader title="Notas — Matemática Preuniversitaria"/>
  <div className="flex gap-3"><Select label="Tipo de evaluación" options={[{value:'parcial1',label:'Parcial 1'}]}/><Input label="Fecha" type="date"/></div>
  <Card><Table headers={['N°','Código','Estudiante','Nota','Estado']}>
    <tr><td className="px-6 py-2">1</td><td className="px-6 py-2">E-0023</td><td className="px-6 py-2 font-semibold">Juan Pérez</td><td className="px-6 py-2"><input className="w-16 px-2 py-1 border border-gray-300 rounded text-sm text-center" defaultValue="14"/></td><td className="px-6 py-2"><Badge variant="active">Aprobado</Badge></td></tr>
    <tr><td className="px-6 py-2">2</td><td className="px-6 py-2">E-0024</td><td className="px-6 py-2 font-semibold">María García</td><td className="px-6 py-2"><input className="w-16 px-2 py-1 border border-gray-300 rounded text-sm text-center" defaultValue="16"/></td><td className="px-6 py-2"><Badge variant="active">Aprobado</Badge></td></tr>
    <tr><td className="px-6 py-2">3</td><td className="px-6 py-2">E-0025</td><td className="px-6 py-2 font-semibold">Carlos Ramos</td><td className="px-6 py-2"><input className="w-16 px-2 py-1 border border-gray-300 rounded text-sm text-center" defaultValue="9"/></td><td className="px-6 py-2"><Badge variant="danger">Desaprobado</Badge></td></tr>
  </Table></Card>
  <div className="flex justify-end gap-3"><Button variant="secondary">Cancelar</Button><Button>Guardar notas</Button></div>
</div>);}
