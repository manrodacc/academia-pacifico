import React from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { Table } from '@/components/ui/Table';
import { Badge } from '@/components/ui/Badge';
import { Target, CheckCircle2, XCircle } from 'lucide-react';

export default function Page() {
  const examen = {
    nombre: 'Semana 12',
    tipo: 'Semanal',
    fecha: 'Lunes 19 de mayo de 2026',
    puntajeTotal: 72,
    posicion: 15,
    totalAlumnos: 120,
    area: 'Área B',
    cursos: [
      { n: 'Matemática Preuniversitaria', preguntas: 20, aciertos: 15, puntaje: 15 },
      { n: 'Física General',              preguntas: 20, aciertos: 14, puntaje: 14 },
      { n: 'Química Orgánica e Inorgánica', preguntas: 20, aciertos: 16, puntaje: 16 },
      { n: 'Lenguaje y Literatura',        preguntas: 20, aciertos: 13, puntaje: 13 },
      { n: 'Aptitud Académica',            preguntas: 20, aciertos: 14, puntaje: 14 },
    ]
  };

  const totalPreguntas = examen.cursos.reduce((s, c) => s + c.preguntas, 0);
  const totalAciertos = examen.cursos.reduce((s, c) => s + c.aciertos, 0);

  return (<div className="flex flex-col gap-6">
    <Breadcrumb items={[{ label: 'Mis Exámenes', href: '/estudiante/notas' }, { label: examen.nombre }]} />
    <PageHeader title={examen.nombre} subtitle={`${examen.tipo} · ${examen.fecha}`} />

    {/* Resumen del examen */}
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
      <Card>
        <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Puntaje Total</p>
        <p className="text-3xl font-bold text-gray-900 mt-1">{examen.puntajeTotal} <span className="text-base font-normal text-gray-400">/ 100</span></p>
      </Card>
      <Card>
        <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Posición</p>
        <p className="text-3xl font-bold text-pacifico-700 mt-1">{examen.posicion}°</p>
        <p className="text-xs text-gray-500 mt-1">de {examen.totalAlumnos} estudiantes</p>
      </Card>
      <Card>
        <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Aciertos</p>
        <p className="text-3xl font-bold text-green-600 mt-1">{totalAciertos} <span className="text-base font-normal text-gray-400">/ {totalPreguntas}</span></p>
      </Card>
      <Card>
        <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Área Evaluada</p>
        <div className="mt-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-semibold">
            <Target className="w-3.5 h-3.5" />
            {examen.area}
          </span>
        </div>
      </Card>
    </div>

    {/* Desglose por curso */}
    <Card title="Desglose por Curso">
      <p className="text-sm text-gray-600 mb-4">Resultado detallado de cada asignatura evaluada en este examen.</p>
      <Table headers={['Curso', 'Preguntas', 'Aciertos', 'Errores', 'Puntaje']}>
        {examen.cursos.map((c, i) => (
          <tr key={i} className="hover:bg-gray-50 border-b border-gray-100 last:border-0 transition-colors">
            <td className="px-6 py-4 font-semibold text-gray-900">{c.n}</td>
            <td className="px-6 py-4 text-gray-600">{c.preguntas}</td>
            <td className="px-6 py-4">
              <span className="inline-flex items-center gap-1 text-green-600 font-semibold">
                <CheckCircle2 className="w-4 h-4" /> {c.aciertos}
              </span>
            </td>
            <td className="px-6 py-4">
              <span className="inline-flex items-center gap-1 text-red-500 font-semibold">
                <XCircle className="w-4 h-4" /> {c.preguntas - c.aciertos}
              </span>
            </td>
            <td className="px-6 py-4">
              <span className="font-bold text-gray-900">{c.puntaje}</span>
              <span className="text-gray-400 text-sm"> / {c.preguntas}</span>
            </td>
          </tr>
        ))}
        {/* Fila de totales */}
        <tr className="bg-gray-50 font-bold border-t-2 border-gray-200">
          <td className="px-6 py-4 text-gray-900">TOTAL</td>
          <td className="px-6 py-4 text-gray-600">{totalPreguntas}</td>
          <td className="px-6 py-4 text-green-600">{totalAciertos}</td>
          <td className="px-6 py-4 text-red-500">{totalPreguntas - totalAciertos}</td>
          <td className="px-6 py-4">
            <span className="text-gray-900">{examen.puntajeTotal}</span>
            <span className="text-gray-400 text-sm"> / 100</span>
          </td>
        </tr>
      </Table>
    </Card>

    {/* Barra visual de rendimiento por curso */}
    <Card title="Rendimiento Visual por Curso">
      <div className="space-y-4">
        {examen.cursos.map((c, i) => {
          const pct = Math.round((c.aciertos / c.preguntas) * 100);
          return (
            <div key={i}>
              <div className="flex justify-between text-sm mb-1.5">
                <span className="font-semibold text-gray-800">{c.n}</span>
                <span className="font-bold text-gray-600">{pct}% ({c.aciertos}/{c.preguntas})</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2.5">
                <div
                  className={`h-2.5 rounded-full transition-all ${pct >= 70 ? 'bg-green-500' : pct >= 50 ? 'bg-amber-500' : 'bg-red-500'}`}
                  style={{ width: pct + '%' }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  </div>);
}
