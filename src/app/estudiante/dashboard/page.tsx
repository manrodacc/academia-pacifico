import React from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { MetricCard } from '@/components/dashboard/MetricCard';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Table } from '@/components/ui/Table';
import { Alert } from '@/components/ui/Alert';
import { Calendar, BarChart3, CheckSquare, CreditCard } from 'lucide-react';
import Link from 'next/link';

export default function Page() {
  return (<div className="flex flex-col gap-6">
    <Alert type="warning" message="⚠ Tienes 1 pago pendiente. Acércate a caja para regularizar." />
    <PageHeader title="¡Hola, Alejandro! 👋" subtitle="Ciclo 2025-II · Mayo 2026" />
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <MetricCard title="Próxima clase" value="Matemática" subtitle="08:00 — Aula 102" icon={<Calendar className="w-5 h-5"/>} />
      <MetricCard title="Promedio general" value="14.8 / 20" subtitle="Aprobado" icon={<BarChart3 className="w-5 h-5"/>} />
      <MetricCard title="Asistencia" value="92%" subtitle="44 de 48 sesiones" icon={<CheckSquare className="w-5 h-5"/>} />
      <MetricCard title="Pagos" value="Al día" subtitle="S/ 1,200 pagado" icon={<CreditCard className="w-5 h-5"/>} />
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card title="Mis cursos esta semana" action={<Link href="/estudiante/horarios" className="text-sm text-pacifico-700 font-semibold hover:underline">Ver horario completo →</Link>}>
        <Table headers={['Curso','Docente','Día/Hora','Aula']}>
          <tr className="hover:bg-gray-50"><td className="px-6 py-3 font-semibold">Matemática</td><td className="px-6 py-3">Prof. García</td><td className="px-6 py-3">Lun 08:00</td><td className="px-6 py-3">Aula 102</td></tr>
          <tr className="hover:bg-gray-50"><td className="px-6 py-3 font-semibold">Física</td><td className="px-6 py-3">Prof. Torres</td><td className="px-6 py-3">Mar 10:00</td><td className="px-6 py-3">Aula 201</td></tr>
          <tr className="hover:bg-gray-50"><td className="px-6 py-3 font-semibold">Química</td><td className="px-6 py-3">Prof. Chávez</td><td className="px-6 py-3">Mié 08:00</td><td className="px-6 py-3">Lab 01</td></tr>
        </Table>
      </Card>
      <Card title="Últimas notas" action={<Link href="/estudiante/notas" className="text-sm text-pacifico-700 font-semibold hover:underline">Ver todas mis notas →</Link>}>
        <Table headers={['Curso','Evaluación','Nota','Estado']}>
          <tr className="hover:bg-gray-50"><td className="px-6 py-3 font-semibold">Matemática</td><td className="px-6 py-3">Parcial 2</td><td className="px-6 py-3 font-bold">16</td><td className="px-6 py-3"><Badge variant="active">Aprobado</Badge></td></tr>
          <tr className="hover:bg-gray-50"><td className="px-6 py-3 font-semibold">Física</td><td className="px-6 py-3">Simulacro 1</td><td className="px-6 py-3 font-bold">13</td><td className="px-6 py-3"><Badge variant="active">Aprobado</Badge></td></tr>
          <tr className="hover:bg-gray-50"><td className="px-6 py-3 font-semibold">Química</td><td className="px-6 py-3">Práctica 3</td><td className="px-6 py-3 font-bold">09</td><td className="px-6 py-3"><Badge variant="danger">Desaprobado</Badge></td></tr>
        </Table>
      </Card>
    </div>
  </div>);
}
