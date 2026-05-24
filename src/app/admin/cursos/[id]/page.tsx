"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { PageHeader } from '@/components/layout/PageHeader';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { Table } from '@/components/ui/Table';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import Link from 'next/link';
import { BookOpen, Calendar, User, Home, Award } from 'lucide-react';

export default function Page() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = () => {
    setIsModalOpen(false);
    toast.success('Curso eliminado correctamente');
    setTimeout(() => {
      router.push('/admin/cursos');
    }, 1000);
  };

  const estudiantesInscritos = [
    { cod: 'E-0023', n: 'Juan Pérez', em: 'juan@email.com', e: 'active' },
    { cod: 'E-0024', n: 'María García', em: 'maria@email.com', e: 'active' },
    { cod: 'E-0035', n: 'Carlos Mendoza', em: 'carlos@email.com', e: 'active' },
    { cod: 'E-0042', n: 'Ana Delgado', em: 'ana@email.com', e: 'active' },
    { cod: 'E-0051', n: 'Luis Torres', em: 'luis@email.com', e: 'active' }
  ];

  return (<div className="flex flex-col gap-6">
    <Breadcrumb items={[{ label: 'Cursos', href: '/admin/cursos' }, { label: 'Matemática Preuniversitaria' }]} />
    <PageHeader 
      title="Matemática Preuniversitaria" 
      subtitle="Módulo Académico · Código: CURS-001" 
      action={
        <div className="flex gap-2">
          <Link href="/admin/cursos/1/editar">
            <Button variant="secondary">Editar</Button>
          </Link>
          <Button variant="danger" onClick={() => setIsModalOpen(true)}>Eliminar</Button>
        </div>
      }
    />

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Columna Detalle (1/3) */}
      <div className="flex flex-col gap-6">
        <Card title="Información General">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Award className="w-5 h-5 text-pacifico-600 mt-0.5 shrink-0" />
              <div>
                <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Tipo de Evaluación</p>
                <p className="font-semibold text-gray-800 text-sm">Examen General UNT</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <User className="w-5 h-5 text-pacifico-600 mt-0.5 shrink-0" />
              <div>
                <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Docente Responsable</p>
                <Link href="/admin/docentes/1" className="font-semibold text-pacifico-600 hover:text-pacifico-700 text-sm hover:underline">
                  Dr. García
                </Link>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-pacifico-600 mt-0.5 shrink-0" />
              <div>
                <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Horario Sugerido</p>
                <p className="font-semibold text-gray-800 text-sm">Lunes, Miércoles, Viernes</p>
                <p className="text-xs text-gray-500">08:00 AM - 10:00 AM</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Home className="w-5 h-5 text-pacifico-600 mt-0.5 shrink-0" />
              <div>
                <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Aula Física</p>
                <p className="font-semibold text-gray-800 text-sm">Aula 104 (Piso 1)</p>
              </div>
            </div>

            <div className="pt-3 border-t border-gray-100 flex flex-col gap-1.5">
              <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Áreas Evaluadas (Admisión UNT)</span>
              <div className="flex gap-1.5 flex-wrap">
                <span className="px-2 py-0.5 text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100 rounded">Área A</span>
                <span className="px-2 py-0.5 text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100 rounded">Área B</span>
                <span className="px-2 py-0.5 text-xs font-semibold bg-purple-50 text-purple-700 border border-purple-100 rounded">Área C</span>
              </div>
            </div>

            <div className="pt-2 flex justify-between items-center border-t border-gray-100">
              <span className="text-gray-400 text-sm">Estado del Curso:</span>
              <Badge variant="active">Activo</Badge>
            </div>
          </div>
        </Card>
      </div>

      {/* Columna Contenido y Alumnos (2/3) */}
      <div className="lg:col-span-2 flex flex-col gap-6">
        <Card title="Descripción Académica">
          <p className="text-sm text-gray-600 leading-relaxed">
            Desarrollo completo de temas de Álgebra, Aritmética, Geometría y Trigonometría con enfoque preuniversitario para exámenes de admisión. El curso se enfoca en resolver simulacros y proveer las herramientas analíticas necesarias para resolver problemas de alta complejidad bajo presión de tiempo.
          </p>
        </Card>

        <Card title="Estudiantes Inscritos (Muestra)">
          <Table headers={['Código','Nombre Completo','Correo','Estado']}>
            {estudiantesInscritos.map((est, index) => (
              <tr key={index} className="hover:bg-gray-50 border-b border-gray-100 last:border-0">
                <td className="px-6 py-3 font-semibold text-gray-500 text-xs">{est.cod}</td>
                <td className="px-6 py-3 font-semibold text-gray-800">{est.n}</td>
                <td className="px-6 py-3 text-gray-600 text-sm">{est.em}</td>
                <td className="px-6 py-3">
                  <Badge variant={est.e as any}>Activo</Badge>
                </td>
              </tr>
            ))}
          </Table>
          <div className="mt-4 flex justify-between items-center text-xs text-gray-400">
            <span>Mostrando 5 de 48 alumnos</span>
            <Link href="/admin/cursos/1/estudiantes" className="text-pacifico-600 font-semibold hover:underline">
              Ver todos los estudiantes inscritos →
            </Link>
          </div>
        </Card>
      </div>
    </div>

    <Modal
      isOpen={isModalOpen}
      title="Eliminar Curso"
      confirmLabel="Eliminar permanentemente"
      confirmVariant="danger"
      onClose={() => setIsModalOpen(false)}
      onConfirm={handleDelete}
    >
      <p>¿Estás seguro de que deseas eliminar el curso <strong>Matemática Preuniversitaria</strong>? Esta acción no se puede deshacer y desvinculará a los 48 alumnos y docentes asignados a esta asignatura.</p>
    </Modal>
  </div>);
}

