import React from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { MetricCard } from '@/components/dashboard/MetricCard';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Table } from '@/components/ui/Table';
import { Alert } from '@/components/ui/Alert';
import { Calendar, BarChart3, CheckSquare, CreditCard, Target } from 'lucide-react';
import Link from 'next/link';

export default function Page() {
  return (<div className="flex flex-col gap-6">
    <Alert type="warning" message="⚠ Tienes 1 pago pendiente. Acércate a caja para regularizar." />
    <div>
      <PageHeader title="¡Hola, Alejandro! 👋" subtitle="Ciclo 2025-II · Mayo 2026" />
      <div className="mt-2">
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-semibold">
          <Target className="w-3.5 h-3.5" />
          Área B — Ciencias Básicas y Tecnológicas
        </span>
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <MetricCard title="Próxima clase" value="Matemática" subtitle="08:00 — Aula 102" icon={<Calendar className="w-5 h-5"/>} />
      <MetricCard title="Último examen semanal" value="288 / 400" subtitle="Semana 12 · Puesto 15°" icon={<BarChart3 className="w-5 h-5"/>} />
      <MetricCard title="Asistencia" value="92%" subtitle="44 de 48 sesiones" icon={<CheckSquare className="w-5 h-5"/>} />
      <MetricCard title="Pagos" value="Al día" subtitle="S/ 1,200 pagado" icon={<CreditCard className="w-5 h-5"/>} />
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card title="Mis cursos esta semana" action={<Link href="/estudiante/horarios" className="text-sm text-pacifico-700 font-semibold hover:underline">Ver horario completo →</Link>}>
        <Table headers={['Curso','Docente','Día/Hora','Aula']}>
          <tr className="hover:bg-gray-50 border-b border-gray-100"><td className="px-6 py-3 font-semibold">Matemática</td><td className="px-6 py-3">Prof. García</td><td className="px-6 py-3">Lun 08:00</td><td className="px-6 py-3">Aula 102</td></tr>
          <tr className="hover:bg-gray-50 border-b border-gray-100"><td className="px-6 py-3 font-semibold">Física</td><td className="px-6 py-3">Prof. Torres</td><td className="px-6 py-3">Mar 10:00</td><td className="px-6 py-3">Aula 201</td></tr>
          <tr className="hover:bg-gray-50"><td className="px-6 py-3 font-semibold">Química</td><td className="px-6 py-3">Prof. Chávez</td><td className="px-6 py-3">Mié 08:00</td><td className="px-6 py-3">Lab 01</td></tr>
        </Table>
      </Card>

      <Card title="Últimos exámenes" action={<Link href="/estudiante/notas" className="text-sm text-pacifico-700 font-semibold hover:underline">Ver todos mis exámenes →</Link>}>
        <Table headers={['Semana','Tipo','Fecha','Puntaje','Puesto']}>
          <tr className="hover:bg-gray-50 border-b border-gray-100">
            <td className="px-6 py-3 font-semibold text-gray-900">Semana 12</td>
            <td className="px-6 py-3"><Badge variant="active">Semanal</Badge></td>
            <td className="px-6 py-3 text-sm text-gray-600">19 may 2026</td>
            <td className="px-6 py-3 font-bold text-gray-900">288 / 400</td>
            <td className="px-6 py-3 font-semibold text-pacifico-700">15°</td>
          </tr>
          <tr className="hover:bg-gray-50 border-b border-gray-100">
            <td className="px-6 py-3 font-semibold text-gray-900">Semana 11</td>
            <td className="px-6 py-3"><Badge variant="active">Semanal</Badge></td>
            <td className="px-6 py-3 text-sm text-gray-600">12 may 2026</td>
            <td className="px-6 py-3 font-bold text-gray-900">272 / 400</td>
            <td className="px-6 py-3 font-semibold text-pacifico-700">22°</td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className="px-6 py-3 font-semibold text-gray-900">Simulacro 2</td>
            <td className="px-6 py-3"><Badge variant="pending">Simulacro</Badge></td>
            <td className="px-6 py-3 text-sm text-gray-600">05 may 2026</td>
            <td className="px-6 py-3 font-bold text-gray-900">300 / 400</td>
            <td className="px-6 py-3 font-semibold text-pacifico-700">10°</td>
          </tr>
        </Table>
      </Card>
    </div>
  </div>);
}
