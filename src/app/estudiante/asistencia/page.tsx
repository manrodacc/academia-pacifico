"use client";
import React, { useState } from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card } from '@/components/ui/Card';
import { Table } from '@/components/ui/Table';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, Clock, AlertTriangle } from 'lucide-react';
import { toast } from 'sonner';

// Simulamos la hora actual (en producción sería new Date())
const HORA_ACTUAL = { hora: 8, minutos: 10, dia: 1 }; // Lunes 08:10

const CURSO_ACTUAL = {
  id: 1,
  nombre: 'Matemática Preuniversitaria',
  horario: { dia: 1, horaInicio: 8, horaFin: 10, aula: '102' },
};

function calcularEstadoAsistencia(horario: typeof CURSO_ACTUAL.horario) {
  if (horario.dia !== HORA_ACTUAL.dia) return null;
  const minActual = HORA_ACTUAL.hora * 60 + HORA_ACTUAL.minutos;
  const minInicio = horario.horaInicio * 60;
  const minFin = horario.horaFin * 60;
  
  // Fuera del horario de clase
  if (minActual < minInicio - 15 || minActual > minFin) return null;
  
  // Hasta 15 minutos después del inicio es presente
  if (minActual <= minInicio + 15) return 'presente';
  
  // Pasado los 15 minutos es tardanza
  return 'tardanza';
}

const SESIONES_HISTORICAS = [
  { f: 'Lun 03 may', s: 1, e: 'active', t: 'Presente' },
  { f: 'Mié 05 may', s: 2, e: 'active', t: 'Presente' },
  { f: 'Lun 10 may', s: 3, e: 'pending', t: 'Tardanza' },
  { f: 'Mié 12 may', s: 4, e: 'danger', t: 'Falta' },
  { f: 'Lun 17 may', s: 5, e: 'active', t: 'Presente' }
];

export default function Page() {
  const [cursoSeleccionado, setCursoSeleccionado] = useState('Matemática');
  const [asistenciaRegistrada, setAsistenciaRegistrada] = useState<{ estado: 'presente' | 'tardanza', hora: string } | null>(null);

  const estadoPermitido = calcularEstadoAsistencia(CURSO_ACTUAL.horario);
  const puedeRegistrar = estadoPermitido !== null && !asistenciaRegistrada;

  const handleRegistrar = () => {
    if (!estadoPermitido) return;
    
    const horaFmt = `${String(HORA_ACTUAL.hora).padStart(2,'0')}:${String(HORA_ACTUAL.minutos).padStart(2,'0')}`;
    setAsistenciaRegistrada({ estado: estadoPermitido, hora: horaFmt });
    
    toast.success(`Asistencia registrada como ${estadoPermitido === 'presente' ? 'Presente' : 'Tardanza'} a las ${horaFmt}`);
  };

  return (
    <div className="flex flex-col gap-6">
      <PageHeader title="Mi asistencia — Ciclo 2025-II" />
      
      {/* Módulo de Registro de Asistencia en Vivo */}
      <Card title="Clase Actual">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-gray-900">{CURSO_ACTUAL.nombre}</h3>
            <p className="text-sm text-gray-500 mt-1 flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Hoy, {String(CURSO_ACTUAL.horario.horaInicio).padStart(2,'0')}:00 - {String(CURSO_ACTUAL.horario.horaFin).padStart(2,'0')}:00 · Aula {CURSO_ACTUAL.horario.aula}
            </p>
          </div>

          <div className="shrink-0 w-full md:w-auto">
            {asistenciaRegistrada ? (
              <div className={`flex items-center gap-2 px-4 py-3 rounded-lg border ${asistenciaRegistrada.estado === 'presente' ? 'bg-green-50 border-green-200' : 'bg-amber-50 border-amber-200'}`}>
                <CheckCircle2 className={`w-5 h-5 ${asistenciaRegistrada.estado === 'presente' ? 'text-green-600' : 'text-amber-600'}`} />
                <div>
                  <p className={`text-sm font-bold ${asistenciaRegistrada.estado === 'presente' ? 'text-green-800' : 'text-amber-800'}`}>
                    Asistencia Registrada ({asistenciaRegistrada.estado === 'presente' ? 'Presente' : 'Tardanza'})
                  </p>
                  <p className={`text-xs ${asistenciaRegistrada.estado === 'presente' ? 'text-green-600' : 'text-amber-600'}`}>
                    Marcaste a las {asistenciaRegistrada.hora}
                  </p>
                </div>
              </div>
            ) : puedeRegistrar ? (
              <div className="flex flex-col gap-2">
                <Button 
                  onClick={handleRegistrar} 
                  className="w-full md:w-auto bg-pacifico-600 hover:bg-pacifico-700 text-white"
                  size="lg"
                >
                  <CheckCircle2 className="w-5 h-5 mr-2" />
                  Registrar mi asistencia ahora
                </Button>
                {estadoPermitido === 'tardanza' && (
                  <p className="text-xs text-amber-600 font-semibold text-center flex items-center justify-center gap-1">
                    <AlertTriangle className="w-3 h-3" /> Han pasado más de 15 min. Se marcará tardanza.
                  </p>
                )}
              </div>
            ) : (
               <div className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-500 font-medium">
                 El registro de asistencia no está habilitado en este momento.
               </div>
            )}
          </div>
        </div>
      </Card>

      <div className="flex gap-4 mb-2 flex-wrap mt-4">
        {['Matemática', 'Física', 'Química', 'Lengua'].map((c, i) => (
          <button 
            key={i} 
            onClick={() => setCursoSeleccionado(c)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold cursor-pointer transition-colors ${
              cursoSeleccionado === c ? 'bg-pacifico-700 text-white' : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <Card>
        <div className="flex items-center gap-6 mb-6">
          <div className="w-28 h-28 rounded-full border-4 border-pacifico-500 flex items-center justify-center shrink-0">
            <div className="text-center">
              <p className="text-2xl font-bold text-pacifico-700">92%</p>
              <p className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">asistencia</p>
            </div>
          </div>
          <div>
            <p className="text-lg font-bold text-gray-900">{cursoSeleccionado}</p>
            <p className="text-sm text-gray-600 mt-1">Has asistido a 44 de 48 sesiones programadas.</p>
            <div className="flex gap-4 mt-3 text-sm font-semibold bg-gray-50 p-2 rounded-lg inline-flex">
              <span className="text-green-700">Presente: 40</span>
              <span className="text-amber-700">Tardanzas: 4</span>
              <span className="text-red-700">Faltas: 4</span>
            </div>
          </div>
        </div>

        <Table headers={['Fecha', 'Sesión', 'Estado']}>
          {SESIONES_HISTORICAS.map((s, i) => (
            <tr key={i} className="hover:bg-gray-50 border-b border-gray-100 last:border-0">
              <td className="px-6 py-4 text-gray-600">{s.f}</td>
              <td className="px-6 py-4 font-medium text-gray-900">Sesión {s.s}</td>
              <td className="px-6 py-4">
                <Badge variant={s.e as any}>{s.t}</Badge>
              </td>
            </tr>
          ))}
        </Table>
      </Card>
    </div>
  );
}
