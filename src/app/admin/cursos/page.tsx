"use client";
import React, { useState } from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { Table } from '@/components/ui/Table';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { Plus, Search, Trash2, Edit, Eye } from 'lucide-react';
import Link from 'next/link';
import { toast } from 'sonner';

export default function Page() {
  const [courses, setCourses] = useState([
    { id: 1, cod: 'CUR-001', n: 'Matemática Preuniversitaria', a: 'Área A, B, C, D', d: 'Dr. García', e: 'active' },
    { id: 2, cod: 'CUR-002', n: 'Física General', a: 'Área A, B', d: 'Prof. Torres', e: 'active' },
    { id: 3, cod: 'CUR-003', n: 'Química Orgánica e Inorgánica', a: 'Área A, B', d: 'Dr. García', e: 'active' },
    { id: 4, cod: 'CUR-004', n: 'Lenguaje y Literatura', a: 'Área A, B, C, D', d: 'Prof. Quiroz', e: 'active' },
    { id: 5, cod: 'CUR-005', n: 'Historia del Perú', a: 'Área C, D', d: 'Prof. Quiroz', e: 'active' }
  ]);

  const [search, setSearch] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [courseToDelete, setCourseToDelete] = useState<any>(null);

  const handleDeleteClick = (course: any) => {
    setCourseToDelete(course);
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    if (courseToDelete) {
      setCourses(courses.filter(c => c.id !== courseToDelete.id));
      setIsModalOpen(false);
      toast.success(`Curso "${courseToDelete.n}" eliminado con éxito`);
    }
  };

  const filteredCourses = courses.filter(c => 
    c.cod.toLowerCase().includes(search.toLowerCase()) ||
    c.n.toLowerCase().includes(search.toLowerCase()) ||
    c.a.toLowerCase().includes(search.toLowerCase()) ||
    c.d.toLowerCase().includes(search.toLowerCase())
  );

  return (<div className="flex flex-col gap-6">
    <div>
      <Breadcrumb items={[{ label: 'Cursos' }]} />
      <PageHeader 
        title="Cursos" 
        action={
          <Link href="/admin/cursos/nuevo">
            <Button>
              <Plus className="w-4 h-4 mr-1.5"/>Nuevo curso
            </Button>
          </Link>
        }
      />
    </div>

    <div className="relative max-w-sm">
      <Search className="w-4 h-4 absolute left-3 top-3.5 text-gray-400"/>
      <input 
        className="w-full pl-9 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-pacifico-500/20 focus:border-pacifico-500 transition-all duration-200" 
        placeholder="Buscar curso por código, nombre o área..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>

    <Card>
      {filteredCourses.length > 0 ? (
        <Table headers={['Código','Nombre','Área','Docente','Estado','Acciones']}>
          {filteredCourses.map(c=>(
            <tr key={c.id} className="hover:bg-gray-50 border-b border-gray-100 last:border-0">
              <td className="px-6 py-4 font-semibold text-gray-500 text-xs">{c.cod}</td>
              <td className="px-6 py-4 font-semibold text-gray-900">{c.n}</td>
              <td className="px-6 py-4 text-gray-600">{c.a}</td>
              <td className="px-6 py-4 text-gray-600">{c.d}</td>
              <td className="px-6 py-4">
                <Badge variant={c.e as any}>Activo</Badge>
              </td>
              <td className="px-6 py-4">
                <div className="flex gap-4">
                  <Link href={`/admin/cursos/${c.id}`} className="text-pacifico-700 hover:text-pacifico-850 hover:underline font-medium text-sm">
                    Ver
                  </Link>
                  <Link href={`/admin/cursos/${c.id}/editar`} className="text-pacifico-700 hover:text-pacifico-850 hover:underline font-medium text-sm">
                    Editar
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </Table>
      ) : (
        <div className="text-center py-12">
          <p className="text-sm text-gray-500">No se encontraron cursos que coincidan con la búsqueda.</p>
        </div>
      )}
    </Card>

    <Modal
      isOpen={isModalOpen}
      title="Eliminar Curso"
      confirmLabel="Eliminar permanentemente"
      confirmVariant="danger"
      onClose={() => setIsModalOpen(false)}
      onConfirm={confirmDelete}
    >
      <p>¿Estás seguro de que deseas eliminar el curso <strong>{courseToDelete?.n}</strong>? Esta acción no se puede deshacer y desvinculará a todos los estudiantes y docentes asignados a esta materia.</p>
    </Modal>
  </div>);
}

