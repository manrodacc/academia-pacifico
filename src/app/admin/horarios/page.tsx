import React from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Plus } from 'lucide-react';
import Link from 'next/link';
export default function Page(){return(<div className="flex flex-col gap-6"><PageHeader title="Horarios" action={<Link href="/admin/horarios/nuevo"><Button><Plus className="w-4 h-4"/>Nuevo bloque</Button></Link>}/>
  <Card title="Vista semanal"><div className="p-8 text-center bg-gray-50 border border-dashed border-gray-200 rounded-lg text-gray-400 text-sm font-medium">Grilla de horarios por curso y aula. Hover sobre un bloque para editar o eliminar.</div></Card></div>);}
