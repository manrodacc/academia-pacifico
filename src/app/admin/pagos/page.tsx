import React from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { MetricCard } from '@/components/dashboard/MetricCard';
import { Card } from '@/components/ui/Card';
import { Table } from '@/components/ui/Table';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Plus, Search, DollarSign, AlertTriangle, Clock } from 'lucide-react';
import Link from 'next/link';
export default function Page(){return(<div className="flex flex-col gap-6">
  <PageHeader title="Pagos" action={<Link href="/admin/pagos/nuevo"><Button><Plus className="w-4 h-4"/>Registrar pago</Button></Link>}/>
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
    <MetricCard title="Ingresos del mes" value="S/ 28,400" icon={<DollarSign className="w-5 h-5"/>}/>
    <MetricCard title="Pendientes" value="23" icon={<Clock className="w-5 h-5"/>}/>
    <MetricCard title="Vencidos" value="5" icon={<AlertTriangle className="w-5 h-5"/>}/>
  </div>
  <div className="relative max-w-sm"><Search className="w-4 h-4 absolute left-3 top-3 text-gray-400"/><input className="w-full pl-9 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm" placeholder="Buscar por estudiante"/></div>
  <Card><Table headers={['Estudiante','Concepto','Monto','Fecha','Estado','Método','Acciones']}>
    <tr className="hover:bg-gray-50"><td className="px-6 py-3 font-semibold">Juan Pérez</td><td className="px-6 py-3">Cuota 5</td><td className="px-6 py-3 font-bold">S/ 200</td><td className="px-6 py-3">15 may 25</td><td className="px-6 py-3"><Badge variant="active">Pagado</Badge></td><td className="px-6 py-3">Efectivo</td><td className="px-6 py-3"><Link href="/admin/pagos/1"><Button variant="ghost" className="text-xs">Ver</Button></Link></td></tr>
    <tr className="hover:bg-gray-50"><td className="px-6 py-3 font-semibold">María García</td><td className="px-6 py-3">Cuota 5</td><td className="px-6 py-3 font-bold">S/ 200</td><td className="px-6 py-3">—</td><td className="px-6 py-3"><Badge variant="pending">Pendiente</Badge></td><td className="px-6 py-3">—</td><td className="px-6 py-3"><Button variant="ghost" className="text-xs">Ver</Button></td></tr>
  </Table></Card>
</div>);}
