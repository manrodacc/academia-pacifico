import React from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card } from '@/components/ui/Card';
import Link from 'next/link';
import { BarChart3, CheckSquare, CreditCard, ClipboardList } from 'lucide-react';
const reps=[{n:'Rendimiento Académico',d:'Promedios por curso',h:'/admin/reportes/academico',i:BarChart3},{n:'Asistencia por curso',d:'Porcentajes y sesiones',h:'/admin/reportes/asistencia',i:CheckSquare},{n:'Reporte de Pagos',d:'Ingresos y deudas',h:'/admin/reportes/pagos',i:CreditCard},{n:'Matrículas',d:'Estudiantes por ciclo',h:'/admin/reportes/matriculas',i:ClipboardList}];
export default function Page(){return(<div className="flex flex-col gap-6"><PageHeader title="Reportes"/>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">{reps.map(r=>{const I=r.i;return(
    <Card key={r.n}><div className="flex items-start gap-4"><div className="p-3 bg-pacifico-50 rounded-lg text-pacifico-700"><I className="w-6 h-6"/></div><div><p className="font-semibold text-gray-900">{r.n}</p><p className="text-sm text-gray-500">{r.d}</p><Link href={r.h} className="text-sm text-pacifico-700 font-semibold hover:underline mt-2 inline-block">Ver reporte →</Link></div></div></Card>
  );})}</div></div>);}
