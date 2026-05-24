"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { PageHeader } from '@/components/layout/PageHeader';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { BookOpen, Calendar, Target, User, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function Page() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAnular = () => {
    setIsModalOpen(false);
    toast.success('Matrícula anulada correctamente');
    setTimeout(() => {
      router.push('/admin/matriculas');
    }, 1000);
  };

  const matriculaData = {
    cod: 'MAT-001',
    estudiante: 'Juan Pérez',
    dni: '74521836',
    ciclo: '2025-II',
    area: 'Área A',
    fecha: '03 feb 2025',
    estado: 'active',
    cursos: [
      { cod: 'CUR-001', n: 'Matemática Preuniversitaria', d: 'Dr. García' },
      { cod: 'CUR-002', n: 'Física General', d: 'Prof. Torres' },
      { cod: 'CUR-003', n: 'Química Orgánica e Inorgánica', d: 'Dr. García' },
      { cod: 'CUR-004', n: 'Lenguaje y Literatura', d: 'Prof. Quiroz' },
      { cod: 'CUR-006', n: 'Biología y Anatomía', d: 'Dra. Silva' },
      { cod: 'CUR-007', n: 'Aptitud Académica', d: 'Prof. Reyes' }
    ]
  };

  return (
    <div className="flex flex-col gap-6">
      <Breadcrumb items={[{ label: 'Matrículas', href: '/admin/matriculas' }, { label: matriculaData.cod }]} />
      
      <PageHeader 
        title="Detalle de matrícula" 
        subtitle={`Código: ${matriculaData.cod} · Estudiante: ${matriculaData.estudiante}`}
        action={
          <div className="flex gap-2">
            <Link href={`/admin/matriculas/1/editar`}>
              <Button variant="secondary">Editar asignaturas</Button>
            </Link>
            <Button variant="danger" onClick={() => setIsModalOpen(true)}>Anular matrícula</Button>
          </div>
        }
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="flex flex-col gap-6">
          <Card title="Resumen de Matrícula">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <User className="w-5 h-5 text-pacifico-600 mt-0.5 shrink-0" />
                <div>
                  <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Estudiante</p>
                  <p className="font-semibold text-gray-800 text-sm">{matriculaData.estudiante}</p>
                  <p className="text-xs text-gray-500">DNI: {matriculaData.dni}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Target className="w-5 h-5 text-pacifico-600 mt-0.5 shrink-0" />
                <div>
                  <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Área Objetivo UNT</p>
                  <p className="font-semibold text-pacifico-700 text-sm">{matriculaData.area}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-pacifico-600 mt-0.5 shrink-0" />
                <div>
                  <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Ciclo y Fecha</p>
                  <p className="font-semibold text-gray-800 text-sm">Ciclo: {matriculaData.ciclo}</p>
                  <p className="text-xs text-gray-500">Matriculado el {matriculaData.fecha}</p>
                </div>
              </div>

              <div className="pt-2 flex justify-between items-center border-t border-gray-100">
                <span className="text-gray-400 text-sm">Estado actual:</span>
                <Badge variant={matriculaData.estado as any}>
                  {matriculaData.estado === 'active' ? 'Activa' : 'Anulada'}
                </Badge>
              </div>
            </div>
          </Card>
        </div>

        <div className="lg:col-span-2 flex flex-col gap-6">
          <Card title={`Plan de Estudios Asignado (${matriculaData.cursos.length} cursos)`}>
            <div className="mb-4">
              <p className="text-sm text-gray-600">
                Listado de asignaturas obligatorias para el examen de <strong className="text-pacifico-700">{matriculaData.area}</strong> en las que el alumno está inscrito.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {matriculaData.cursos.map(c => (
                <div key={c.cod} className="flex items-start gap-3 p-4 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-pacifico-100 transition-all">
                  <div className="w-10 h-10 rounded-full bg-pacifico-50 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-pacifico-600" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-gray-400 mb-0.5">{c.cod}</span>
                    <span className="text-sm font-semibold text-gray-900 leading-tight mb-1">{c.n}</span>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <User className="w-3 h-3" /> {c.d}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        title="Anular Matrícula"
        confirmLabel="Anular permanentemente"
        confirmVariant="danger"
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleAnular}
      >
        <p>¿Estás seguro de que deseas anular la matrícula de <strong>{matriculaData.estudiante}</strong> para el ciclo <strong>{matriculaData.ciclo}</strong>? Esta acción lo desvinculará de los {matriculaData.cursos.length} cursos asignados y no se puede deshacer de forma sencilla.</p>
      </Modal>
    </div>
  );
}
