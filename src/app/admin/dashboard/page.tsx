import React from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { MetricCard } from '@/components/dashboard/MetricCard';
import { Card } from '@/components/ui/Card';
import { Table } from '@/components/ui/Table';
import { Badge } from '@/components/ui/Badge';
import { Users, DollarSign, CheckSquare, BookOpen, AlertTriangle, BarChart3 } from 'lucide-react';
import Link from 'next/link';

export default function Page() {
  return (<div className="flex flex-col gap-6">
    <PageHeader title="Dashboard — Ciclo 2025-II" />
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <MetricCard title="Estudiantes" value="142" subtitle="matriculados" icon={<Users className="w-5 h-5"/>}/>
      <MetricCard title="Ingresos" value="S/ 28,400" subtitle="este mes" icon={<DollarSign className="w-5 h-5"/>}/>
      <MetricCard title="Asistencia" value="89.3%" subtitle="promedio" icon={<CheckSquare className="w-5 h-5"/>}/>
      <MetricCard title="Cursos" value="8" subtitle="activos" icon={<BookOpen className="w-5 h-5"/>}/>
      <MetricCard title="Pagos pendientes" value="23" subtitle="por cobrar" icon={<AlertTriangle className="w-5 h-5"/>}/>
      <MetricCard title="Rendimiento" value="14.6" subtitle="promedio general" icon={<BarChart3 className="w-5 h-5"/>}/>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
      <Card title="Rendimiento por curso" className="lg:col-span-3">
        <div className="space-y-3">{[{n:'Matemática',v:15.2},{n:'Física',v:13.8},{n:'Química',v:16.1},{n:'Lengua',v:14.9}].map(c=>(
          <div key={c.n} className="flex items-center gap-3"><span className="text-sm w-24 shrink-0 font-medium">{c.n}</span><div className="flex-1 bg-gray-100 rounded-full h-3"><div className="bg-pacifico-500 h-3 rounded-full" style={{width:(c.v/20*100)+'%'}}/></div><span className="text-sm font-bold w-10 text-right">{c.v}</span></div>
        ))}</div>
      </Card>
      <Card title="Ingresos 2025" className="lg:col-span-2">
        <div className="h-40 flex items-end justify-between gap-2 px-2">{[12,18,15,22,28,25].map((v,i)=>(
          <div key={i} className="flex-1 flex flex-col items-center gap-1"><div className="w-full bg-pacifico-500 rounded-t" style={{height:(v/30*100)+'%'}}/><span className="text-[10px] text-gray-400">{['Ene','Feb','Mar','Abr','May','Jun'][i]}</span></div>
        ))}</div>
      </Card>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card title="Pagos pendientes hoy" action={<Link href="/admin/pagos" className="text-sm text-pacifico-700 font-semibold hover:underline">Ver todos →</Link>}>
        <Table headers={['Estudiante','Cuota','Monto','Vence']}>
          {[{n:'María García',c:'Cuota 5',m:'S/ 200',v:'15 may'},{n:'Carlos Ramos',c:'Cuota 4',m:'S/ 200',v:'15 abr'}].map((p,i)=>(
            <tr key={i} className="hover:bg-gray-50"><td className="px-6 py-2 font-semibold">{p.n}</td><td className="px-6 py-2">{p.c}</td><td className="px-6 py-2 font-bold">{p.m}</td><td className="px-6 py-2"><Badge variant="pending">{p.v}</Badge></td></tr>
          ))}
        </Table>
      </Card>
      <Card title="Actividad reciente">
        <div className="space-y-3 text-sm">{[{a:'Nota registrada',u:'Prof. García',t:'Hace 5 min'},{a:'Pago registrado',u:'Caja Torres',t:'Hace 12 min'},{a:'Matrícula creada',u:'Admin',t:'Hace 30 min'}].map((l,i)=>(
          <div key={i} className="flex justify-between items-center py-2 border-b border-gray-50"><div><p className="font-medium text-gray-900">{l.a}</p><p className="text-xs text-gray-400">{l.u}</p></div><span className="text-xs text-gray-400">{l.t}</span></div>
        ))}</div>
      </Card>
    </div>
  </div>);
}
