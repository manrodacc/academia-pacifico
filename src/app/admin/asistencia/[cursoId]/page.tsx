"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { PageHeader } from '@/components/layout/PageHeader';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { Table } from '@/components/ui/Table';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, AlertTriangle } from 'lucide-react';

type EstadoAtt = 'presente' | 'tardanza' | 'falta';

const SESIONES = [
  { value: '2026-05-25', label: 'Sesión 23 — Lun 25 may 2026' },
  { value: '2026-05-19', label: 'Sesión 22 — Lun 19 may 2026' },
  { value: '2026-05-12', label: 'Sesión 21 — Lun 12 may 2026' },
  { value: '2026-05-05', label: 'Sesión 20 — Lun 05 may 2026' },
];

const ESTUDIANTES_INICIAL: { id: number; cod: string; n: string; pct: number; estado: EstadoAtt }[] = [
  { id: 1,  cod: 'E-0042', n: 'Ana Delgado',      pct: 95, estado: 'presente' },
  { id: 2,  cod: 'E-0023', n: 'Juan Pérez',        pct: 80, estado: 'presente' },
  { id: 3,  cod: 'E-0024', n: 'María García',      pct: 92, estado: 'presente' },
  { id: 4,  cod: 'E-0035', n: 'Carlos Mendoza',    pct: 72, estado: 'tardanza' },
  { id: 5,  cod: 'E-0056', n: 'Carmen Ríos',       pct: 65, estado: 'falta'    },
  { id: 6,  cod: 'E-0019', n: 'Daniela Castro',    pct: 88, estado: 'presente' },
  { id: 7,  cod: 'E-0077', n: 'David Flores',      pct: 78, estado: 'presente' },
  { id: 8,  cod: 'E-0091', n: 'Diego Navarro',     pct: 90, estado: 'presente' },
  { id: 9,  cod: 'E-0028', n: 'Eduardo Rojas',     pct: 60, estado: 'falta'    },
  { id: 10, cod: 'E-0063', n: 'Elena Vargas',      pct: 85, estado: 'presente' },
  { id: 11, cod: 'E-0044', n: 'Fabiola Ruiz',      pct: 93, estado: 'presente' },
  { id: 12, cod: 'E-0082', n: 'Fernando Medina',   pct: 70, estado: 'presente' },
];

export default function Page() {
  const router = useRouter();
  const [sesion, setSesion] = useState(SESIONES[0].value);
  const [estudiantes, setEstudiantes] = useState(ESTUDIANTES_INICIAL);

  const setEstado = (id: number, estado: EstadoAtt) => {
    setEstudiantes(prev => prev.map(e => e.id === id ? { ...e, estado } : e));
  };

  const marcarTodosPresente = () => {
    setEstudiantes(prev => prev.map(e => ({ ...e, estado: 'presente' as EstadoAtt })));
  };

  const resumen = {
    presente: estudiantes.filter(e => e.estado === 'presente').length,
    tardanza: estudiantes.filter(e => e.estado === 'tardanza').length,
    falta: estudiantes.filter(e => e.estado === 'falta').length,
  };

  const handleGuardar = () => {
    toast.success(`Asistencia guardada: ${resumen.presente}P · ${resumen.tardanza}T · ${resumen.falta}F`);
    setTimeout(() => router.push('/admin/asistencia'), 1500);
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <Breadcrumb items={[{ label: 'Asistencia', href: '/admin/asistencia' }, { label: 'Matemática Preuniversitaria' }]} />
        <PageHeader title="Asistencia — Matemática Preuniversitaria" subtitle="Dr. García · 48 estudiantes" />
      </div>

      {/* Selector de sesión + acción rápida */}
      <div className="flex flex-wrap items-end gap-4">
        <div className="w-72">
          <Select
            label="Sesión"
            options={SESIONES.map(s => ({ value: s.value, label: s.label }))}
            value={sesion}
            onChange={e => setSesion(e.target.value)}
          />
        </div>
        <Button variant="secondary" onClick={marcarTodosPresente}>
          <CheckCircle2 className="w-4 h-4 mr-1.5 text-green-600" />
          Marcar todos Presente
        </Button>

        {/* Contadores */}
        <div className="flex items-center gap-2 ml-auto flex-wrap">
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-green-50 border border-green-200 rounded-lg">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-sm font-semibold text-green-700">Presentes: {resumen.presente}</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 border border-amber-200 rounded-lg">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span className="text-sm font-semibold text-amber-700">Tardanzas: {resumen.tardanza}</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-red-50 border border-red-200 rounded-lg">
            <span className="w-2 h-2 rounded-full bg-red-500" />
            <span className="text-sm font-semibold text-red-700">Faltas: {resumen.falta}</span>
          </div>
        </div>
      </div>

      {/* Advertencia de asistencia crítica */}
      {estudiantes.some(e => e.pct < 75) && (
        <div className="flex items-center gap-2 px-4 py-3 bg-red-50 border border-red-200 rounded-xl text-sm">
          <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" />
          <span className="text-red-700 font-medium">
            {estudiantes.filter(e => e.pct < 75).length} estudiante(s) tienen asistencia crítica (&lt;75%) — marcados en rojo.
          </span>
        </div>
      )}

      {/* Lista de asistencia */}
      <Card>
        <div className="overflow-x-auto">
          <Table headers={['N°', 'Código', 'Estudiante', 'Asistencia del ciclo', 'Presente', 'Tardanza', 'Falta']}>
            {estudiantes.map((e, i) => {
              const critico = e.pct < 75;
              return (
                <tr key={e.id} className={`border-b border-gray-100 last:border-0 transition-colors ${critico ? 'bg-red-50/40 hover:bg-red-50/70' : 'hover:bg-gray-50'}`}>
                  <td className="px-6 py-3.5 text-gray-400 text-sm">{i + 1}</td>
                  <td className="px-6 py-3.5 text-xs font-bold text-gray-400">{e.cod}</td>
                  <td className="px-6 py-3.5">
                    <span className={`font-semibold text-sm ${critico ? 'text-red-700' : 'text-gray-900'}`}>{e.n}</span>
                    {critico && <span className="ml-2 text-[10px] font-bold text-red-500 bg-red-100 px-1.5 py-0.5 rounded">CRÍTICO</span>}
                  </td>
                  <td className="px-6 py-3.5">
                    <div className="flex items-center gap-2 min-w-[120px]">
                      <div className="flex-1 bg-gray-100 rounded-full h-1.5">
                        <div className={`h-1.5 rounded-full ${e.pct >= 75 ? 'bg-green-500' : 'bg-red-500'}`} style={{ width: e.pct + '%' }} />
                      </div>
                      <span className={`text-xs font-semibold ${e.pct >= 75 ? 'text-gray-600' : 'text-red-600'}`}>{e.pct}%</span>
                    </div>
                  </td>

                  {(['presente', 'tardanza', 'falta'] as EstadoAtt[]).map((op) => (
                    <td key={op} className="px-6 py-3.5 text-center">
                      <label className={`cursor-pointer inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors ${op === 'presente' ? 'hover:bg-green-50' : op === 'tardanza' ? 'hover:bg-amber-50' : 'hover:bg-red-50'}`}>
                        <input type="radio" name={`att-${e.id}`} checked={e.estado === op} onChange={() => setEstado(e.id, op)} className="sr-only" />
                        <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                          e.estado === op
                            ? op === 'presente' ? 'border-green-500 bg-green-500' : op === 'tardanza' ? 'border-amber-500 bg-amber-500' : 'border-red-500 bg-red-500'
                            : 'border-gray-300'
                        }`}>
                          {e.estado === op && <span className="w-2 h-2 rounded-full bg-white" />}
                        </span>
                      </label>
                    </td>
                  ))}
                </tr>
              );
            })}
          </Table>
        </div>
      </Card>

      <div className="flex justify-end gap-3">
        <Button variant="secondary" onClick={() => router.back()}>Cancelar</Button>
        <Button onClick={handleGuardar}>
          <CheckCircle2 className="w-4 h-4 mr-1.5" />
          Guardar asistencia
        </Button>
      </div>
    </div>
  );
}
