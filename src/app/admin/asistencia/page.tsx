"use client";
import React, { useState } from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { Users, Search } from 'lucide-react';
import Link from 'next/link';

const cursos = [
  { id: 1, cod: 'CUR-001', nombre: 'Matemática Preuniversitaria',       docente: 'Dr. García',   estudiantes: 48, sesiones: 22 },
  { id: 2, cod: 'CUR-002', nombre: 'Física General',                     docente: 'Prof. Torres', estudiantes: 42, sesiones: 20 },
  { id: 3, cod: 'CUR-003', nombre: 'Química Orgánica e Inorgánica',      docente: 'Prof. Quiroz', estudiantes: 38, sesiones: 21 },
  { id: 4, cod: 'CUR-004', nombre: 'Lenguaje y Literatura',              docente: 'Prof. Díaz',   estudiantes: 50, sesiones: 22 },
  { id: 5, cod: 'CUR-005', nombre: 'Historia del Perú',                  docente: 'Prof. Lozano', estudiantes: 35, sesiones: 19 },
  { id: 6, cod: 'CUR-006', nombre: 'Biología y Anatomía',                docente: 'Dra. Silva',   estudiantes: 40, sesiones: 21 },
  { id: 7, cod: 'CUR-007', nombre: 'Aptitud Académica',                  docente: 'Prof. Reyes',  estudiantes: 45, sesiones: 19 },
];

export default function Page() {
  const [search, setSearch] = useState('');

  const filtered = cursos.filter(c =>
    c.nombre.toLowerCase().includes(search.toLowerCase()) ||
    c.cod.toLowerCase().includes(search.toLowerCase()) ||
    c.docente.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-6">
      <div>
        <Breadcrumb items={[{ label: 'Asistencia' }]} />
        <PageHeader title="Asistencia" subtitle="Selecciona un curso para ver o registrar asistencias" />
      </div>

      {/* Búsqueda */}
      <div className="relative max-w-sm">
        <Search className="w-4 h-4 absolute left-3 top-3.5 text-gray-400" />
        <input
          className="w-full pl-9 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-pacifico-500/20 focus:border-pacifico-500 transition-all duration-200"
          placeholder="Buscar por curso, código o docente..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      {/* Grid de cursos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map(c => (
          <Link key={c.id} href={`/admin/asistencia/${c.id}`}>
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-pacifico-300 hover:-translate-y-0.5 transition-all duration-200 p-5 cursor-pointer group flex flex-col gap-3 h-full">
              <div>
                <span className="text-xs font-bold text-gray-400">{c.cod}</span>
                <h3 className="font-semibold text-gray-900 mt-0.5 group-hover:text-pacifico-700 transition-colors">{c.nombre}</h3>
                <p className="text-sm text-gray-500 mt-1">{c.docente}</p>
              </div>

              <div className="flex items-center gap-1.5 text-sm text-gray-600">
                <Users className="w-4 h-4 text-gray-400" />
                <span>{c.estudiantes} estudiantes</span>
                <span className="text-gray-300 mx-1">·</span>
                <span>{c.sesiones} sesiones registradas</span>
              </div>

              <div className="mt-auto pt-3 border-t border-gray-100">
                <span className="text-sm font-semibold text-pacifico-700 group-hover:underline">
                  Ver asistencias →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-gray-400 text-sm">
          No se encontraron cursos que coincidan con la búsqueda.
        </div>
      )}
    </div>
  );
}
