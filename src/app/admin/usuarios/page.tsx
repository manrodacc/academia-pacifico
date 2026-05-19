import React from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card } from '@/components/ui/Card';
import { Table } from '@/components/ui/Table';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Plus } from 'lucide-react';
import Link from 'next/link';
export default function Page(){return(<div className="flex flex-col gap-6"><PageHeader title="Usuarios del sistema" action={<Link href="/admin/usuarios/nuevo"><Button><Plus className="w-4 h-4"/>Crear usuario</Button></Link>}/>
  <Card><Table headers={['Nombre','Correo','Rol','Estado','Acciones']}>
    <tr className="hover:bg-gray-50"><td className="px-6 py-3 font-semibold">Juan Pérez</td><td className="px-6 py-3">juan@academia.com</td><td className="px-6 py-3">Estudiante</td><td className="px-6 py-3"><Badge variant="active">Activo</Badge></td><td className="px-6 py-3 flex gap-2"><Link href="/admin/usuarios/1/editar"><Button variant="ghost" className="text-xs">Editar</Button></Link><Button variant="ghost" className="text-xs">🔑</Button></td></tr>
    <tr className="hover:bg-gray-50"><td className="px-6 py-3 font-semibold">Admin Torres</td><td className="px-6 py-3">admin@academia.com</td><td className="px-6 py-3">Administrador</td><td className="px-6 py-3"><Badge variant="active">Activo</Badge></td><td className="px-6 py-3 flex gap-2"><Button variant="ghost" className="text-xs">Editar</Button><Button variant="ghost" className="text-xs">🔑</Button></td></tr>
  </Table></Card></div>);}
