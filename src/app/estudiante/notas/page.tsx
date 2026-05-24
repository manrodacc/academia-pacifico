"use client";
import React, { useState } from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Table } from '@/components/ui/Table';
import { Target, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import Link from 'next/link';

const examenes = [
  { id: 1, sem: 'Semana 12', tipo: 'Semanal',     f: '19 may 2026', p: 288, pos: 15, ant: 272 },
  { id: 2, sem: 'Semana 11', tipo: 'Semanal',     f: '12 may 2026', p: 272, pos: 22, ant: 300 },
  { id: 3, sem: 'Simulacro 2', tipo: 'Simulacro', f: '05 may 2026', p: 300, pos: 10, ant: 280 },
  { id: 4, sem: 'Semana 10', tipo: 'Semanal',     f: '28 abr 2026', p: 280, pos: 18, ant: 260 },
  { id: 5, sem: 'Semana 9',  tipo: 'Semanal',     f: '21 abr 2026', p: 260, pos: 25, ant: 248 },
  { id: 6, sem: 'Simulacro 1', tipo: 'Simulacro', f: '14 abr 2026', p: 248, pos: 30, ant: 232 },
  { id: 7, sem: 'Semana 8',  tipo: 'Semanal',     f: '07 abr 2026', p: 232, pos: 35, ant: 220 },
  { id: 8, sem: 'Semana 7',  tipo: 'Semanal',     f: '31 mar 2026', p: 220, pos: 38, ant: 240 },
  { id: 9, sem: 'Semana 6',  tipo: 'Semanal',     f: '24 mar 2026', p: 240, pos: 28, ant: 208 },
  { id: 10, sem: 'Semana 5', tipo: 'Semanal',     f: '17 mar 2026', p: 208, pos: 40, ant: 200 },
];

export default function Page() {
  const [filtro, setFiltro] = useState<'todos' | 'semanal' | 'simulacro'>('todos');

  const filtered = filtro === 'todos' ? examenes : examenes.filter(e => 
    filtro === 'semanal' ? e.tipo === 'Semanal' : e.tipo === 'Simulacro'
  );

  const promedio = Math.round(examenes.reduce((s, e) => s + e.p, 0) / examenes.length);
  const mejorPuntaje = Math.max(...examenes.map(e => e.p));
  const mejorPosicion = Math.min(...examenes.map(e => e.pos));

  return (<div className="flex flex-col gap-6">
    <div>
      <PageHeader title="Mis Exámenes — Ciclo 2025-II" />
      <div className="mt-2 flex items-center gap-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-semibold">
          <Target className="w-3.5 h-3.5" />
          Área B — Ciencias Básicas y Tecnológicas
        </span>
      </div>
    </div>

    {/* Resumen de rendimiento */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <Card>
        <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Promedio General</p>
        <p className="text-3xl font-bold text-gray-900 mt-1">{promedio} <span className="text-base font-normal text-gray-400">/ 400</span></p>
        <p className="text-xs text-gray-500 mt-1">{examenes.length} exámenes rendidos</p>
      </Card>
      <Card>
        <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Mejor Puntaje</p>
        <p className="text-3xl font-bold text-green-600 mt-1">{mejorPuntaje} <span className="text-base font-normal text-gray-400">/ 400</span></p>
        <p className="text-xs text-gray-500 mt-1">Simulacro 2 · 05 may 2026</p>
      </Card>
      <Card>
        <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Mejor Posición</p>
        <p className="text-3xl font-bold text-pacifico-700 mt-1">{mejorPosicion}°</p>
        <p className="text-xs text-gray-500 mt-1">De 120 estudiantes del Área B</p>
      </Card>
    </div>

    {/* Filtros */}
    <div className="flex gap-2">
      {([['todos', 'Todos'], ['semanal', 'Semanales'], ['simulacro', 'Simulacros']] as const).map(([key, label]) => (
        <button
          key={key}
          onClick={() => setFiltro(key)}
          className={`px-4 py-2 rounded-lg text-sm font-semibold cursor-pointer transition-colors ${
            filtro === key
              ? 'bg-pacifico-700 text-white'
              : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
          }`}
        >
          {label}
        </button>
      ))}
    </div>

    {/* Tabla de exámenes */}
    <Card>
      <Table headers={['Examen', 'Tipo', 'Fecha', 'Puntaje', 'Tendencia', 'Posición']}>
        {filtered.map(e => {
          const diff = e.p - e.ant;
          return (
            <tr key={e.id} className="hover:bg-gray-50 border-b border-gray-100 last:border-0 transition-colors">
              <td className="px-6 py-4 font-semibold text-gray-900">{e.sem}</td>
              <td className="px-6 py-4">
                <Badge variant={e.tipo === 'Simulacro' ? 'pending' : 'active'}>
                  {e.tipo}
                </Badge>
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">{e.f}</td>
              <td className="px-6 py-4">
                <span className="font-bold text-gray-900">{e.p}</span>
                <span className="text-gray-400 text-sm"> / 400</span>
              </td>
              <td className="px-6 py-4">
                {diff > 0 ? (
                  <span className="inline-flex items-center gap-1 text-green-600 text-sm font-semibold">
                    <TrendingUp className="w-4 h-4" /> +{diff}
                  </span>
                ) : diff < 0 ? (
                  <span className="inline-flex items-center gap-1 text-red-600 text-sm font-semibold">
                    <TrendingDown className="w-4 h-4" /> {diff}
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-gray-400 text-sm font-semibold">
                    <Minus className="w-4 h-4" /> 0
                  </span>
                )}
              </td>
              <td className="px-6 py-4 font-semibold text-pacifico-700">{e.pos}°</td>
            </tr>
          );
        })}
      </Table>
    </Card>
  </div>);
}
