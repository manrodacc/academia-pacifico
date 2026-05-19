import React from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card } from '@/components/ui/Card';
import { Table } from '@/components/ui/Table';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Plus } from 'lucide-react';
import Link from 'next/link';
export default function Page(){return(<div className="flex flex-col gap-6"><PageHeader title="Matrículas" action={<Link href="/admin/matriculas/nueva"><Button><Plus className="w-4 h-4"/>Nueva matrícula</Button></Link>}/>
  <Card><Table headers={['Estudiante','Ciclo','Cursos','Fecha','Estado','Acciones']}>
    <tr className="hover:bg-gray-50"><td className="px-6 py-3 font-semibold">Juan Pérez</td><td className="px-6 py-3">2025-II</td><td className="px-6 py-3">6</td><td className="px-6 py-3">03 feb 25</td><td className="px-6 py-3"><Badge variant="active">Activa</Badge></td><td className="px-6 py-3"><Link href="/admin/matriculas/1"><Button variant="ghost" className="text-xs">Ver</Button></Link></td></tr>
  </Table></Card></div>);}
