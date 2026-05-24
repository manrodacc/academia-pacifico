"use client";
import React, { useState } from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { Table } from '@/components/ui/Table';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { Plus, Search } from 'lucide-react';
import Link from 'next/link';
import { toast } from 'sonner';

export default function Page() {
  const [matriculas, setMatriculas] = useState([
    { id: 1, cod: 'MAT-001', est: 'Juan Pérez', ciclo: '2025-II', area: 'Área A', cursos: 6, fecha: '03 feb 2025', e: 'active' },
    { id: 2, cod: 'MAT-002', est: 'María García', ciclo: '2025-II', area: 'Área B', cursos: 5, fecha: '04 feb 2025', e: 'active' },
    { id: 3, cod: 'MAT-003', est: 'Carlos Mendoza', ciclo: '2025-II', area: 'Área C', cursos: 6, fecha: '05 feb 2025', e: 'active' },
    { id: 4, cod: 'MAT-004', est: 'Ana Delgado', ciclo: '2025-II', area: 'Área D', cursos: 4, fecha: '06 feb 2025', e: 'inactive' }
  ]);

  const [search, setSearch] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [matriculaToAnular, setMatriculaToAnular] = useState<any>(null);

  const handleAnularClick = (mat: any) => {
    setMatriculaToAnular(mat);
    setIsModalOpen(true);
  };

  const confirmAnular = () => {
    if (matriculaToAnular) {
      setMatriculas(matriculas.map(m => m.id === matriculaToAnular.id ? { ...m, e: 'inactive' } : m));
      setIsModalOpen(false);
      toast.success(`Matrícula de "${matriculaToAnular.est}" anulada con éxito`);
    }
  };

  const filtered = matriculas.filter(m => 
    m.est.toLowerCase().includes(search.toLowerCase()) ||
    m.cod.toLowerCase().includes(search.toLowerCase()) ||
    m.area.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-6">
      <div>
        <Breadcrumb items={[{ label: 'Matrículas' }]} />
        <PageHeader 
          title="Matrículas" 
          action={
            <Link href="/admin/matriculas/nueva">
              <Button>
                <Plus className="w-4 h-4 mr-1.5"/>Nueva matrícula
              </Button>
            </Link>
          }
        />
      </div>

      <div className="relative max-w-sm">
        <Search className="w-4 h-4 absolute left-3 top-3.5 text-gray-400"/>
        <input 
          className="w-full pl-9 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-pacifico-500/20 focus:border-pacifico-500 transition-all duration-200" 
          placeholder="Buscar por código, nombre o área..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <Card>
        {filtered.length > 0 ? (
          <Table headers={['Código', 'Estudiante', 'Área Objetivo', 'Ciclo', 'Cursos', 'Fecha', 'Estado', 'Acciones']}>
            {filtered.map(m => (
              <tr key={m.id} className="hover:bg-gray-50 border-b border-gray-100 last:border-0 transition-colors">
                <td className="px-6 py-4 font-semibold text-gray-500 text-xs">{m.cod}</td>
                <td className="px-6 py-4 font-semibold text-gray-900">{m.est}</td>
                <td className="px-6 py-4 font-medium text-pacifico-700">{m.area}</td>
                <td className="px-6 py-4 text-gray-600">{m.ciclo}</td>
                <td className="px-6 py-4 text-gray-600 font-medium">{m.cursos} asignaturas</td>
                <td className="px-6 py-4 text-gray-600 text-sm">{m.fecha}</td>
                <td className="px-6 py-4">
                  <Badge variant={m.e as any}>{m.e === 'active' ? 'Activa' : 'Anulada'}</Badge>
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-4 items-center">
                    <Link href={`/admin/matriculas/${m.id}`} className="text-pacifico-700 hover:text-pacifico-850 hover:underline font-medium text-sm">
                      Ver
                    </Link>
                    {m.e === 'active' && (
                      <button 
                        onClick={() => handleAnularClick(m)}
                        className="text-red-600 hover:text-red-800 hover:underline font-medium text-sm"
                      >
                        Anular
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </Table>
        ) : (
          <div className="text-center py-12">
            <p className="text-sm text-gray-500">No se encontraron matrículas que coincidan con la búsqueda.</p>
          </div>
        )}
      </Card>

      <Modal
        isOpen={isModalOpen}
        title="Anular Matrícula"
        confirmLabel="Anular matrícula"
        confirmVariant="danger"
        onClose={() => setIsModalOpen(false)}
        onConfirm={confirmAnular}
      >
        <p>¿Estás seguro de que deseas anular la matrícula de <strong>{matriculaToAnular?.est}</strong>? Esta acción desvinculará al estudiante de todos los cursos asignados en este ciclo.</p>
      </Modal>
    </div>
  );
}
