"use client";
import React, { useState, useMemo } from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { Table } from '@/components/ui/Table';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Datos de prueba (48 estudiantes)
const TODOS_ESTUDIANTES = [
  { cod: 'E-0042', n: 'Ana Delgado', em: 'ana.delgado@email.com', e: 'active' },
  { cod: 'E-0089', n: 'Andrés Vásquez', em: 'andres.vasquez@email.com', e: 'active' },
  { cod: 'E-0012', n: 'Beatriz Salazar', em: 'beatriz.salazar@email.com', e: 'active' },
  { cod: 'E-0035', n: 'Carlos Mendoza', em: 'carlos.mendoza@email.com', e: 'active' },
  { cod: 'E-0056', n: 'Carmen Ríos', em: 'carmen.rios@email.com', e: 'inactive' },
  { cod: 'E-0019', n: 'Daniela Castro', em: 'daniela.castro@email.com', e: 'active' },
  { cod: 'E-0077', n: 'David Flores', em: 'david.flores@email.com', e: 'active' },
  { cod: 'E-0091', n: 'Diego Navarro', em: 'diego.navarro@email.com', e: 'active' },
  { cod: 'E-0028', n: 'Eduardo Rojas', em: 'eduardo.rojas@email.com', e: 'active' },
  { cod: 'E-0063', n: 'Elena Vargas', em: 'elena.vargas@email.com', e: 'active' },
  { cod: 'E-0044', n: 'Fabiola Ruiz', em: 'fabiola.ruiz@email.com', e: 'active' },
  { cod: 'E-0082', n: 'Fernando Medina', em: 'fernando.medina@email.com', e: 'active' },
  { cod: 'E-0015', n: 'Gabriela Silva', em: 'gabriela.silva@email.com', e: 'inactive' },
  { cod: 'E-0050', n: 'Gonzalo Herrera', em: 'gonzalo.herrera@email.com', e: 'active' },
  { cod: 'E-0033', n: 'Héctor Jiménez', em: 'hector.jimenez@email.com', e: 'active' },
  { cod: 'E-0095', n: 'Hugo Paredes', em: 'hugo.paredes@email.com', e: 'active' },
  { cod: 'E-0007', n: 'Inés Campos', em: 'ines.campos@email.com', e: 'active' },
  { cod: 'E-0068', n: 'Isabel Vega', em: 'isabel.vega@email.com', e: 'active' },
  { cod: 'E-0021', n: 'Javier Morales', em: 'javier.morales@email.com', e: 'active' },
  { cod: 'E-0085', n: 'Jorge Castillo', em: 'jorge.castillo@email.com', e: 'active' },
  { cod: 'E-0023', n: 'Juan Pérez', em: 'juan.perez@email.com', e: 'active' },
  { cod: 'E-0047', n: 'Karla Montes', em: 'karla.montes@email.com', e: 'active' },
  { cod: 'E-0072', n: 'Kevin Guzmán', em: 'kevin.guzman@email.com', e: 'active' },
  { cod: 'E-0010', n: 'Laura Núñez', em: 'laura.nunez@email.com', e: 'active' },
  { cod: 'E-0055', n: 'Leonardo Cárdenas', em: 'leonardo.cardenas@email.com', e: 'inactive' },
  { cod: 'E-0038', n: 'Lucía Ortiz', em: 'lucia.ortiz@email.com', e: 'active' },
  { cod: 'E-0051', n: 'Luis Torres', em: 'luis.torres@email.com', e: 'active' },
  { cod: 'E-0099', n: 'Manuel Aguilar', em: 'manuel.aguilar@email.com', e: 'active' },
  { cod: 'E-0024', n: 'María García', em: 'maria.garcia@email.com', e: 'active' },
  { cod: 'E-0061', n: 'Mario Santos', em: 'mario.santos@email.com', e: 'active' },
  { cod: 'E-0004', n: 'Marta Reyes', em: 'marta.reyes@email.com', e: 'active' },
  { cod: 'E-0079', n: 'Nicolás Peña', em: 'nicolas.pena@email.com', e: 'active' },
  { cod: 'E-0030', n: 'Noelia Ramos', em: 'noelia.ramos@email.com', e: 'active' },
  { cod: 'E-0088', n: 'Omar Villanueva', em: 'omar.villanueva@email.com', e: 'active' },
  { cod: 'E-0017', n: 'Patricia Cruz', em: 'patricia.cruz@email.com', e: 'active' },
  { cod: 'E-0053', n: 'Pedro Alarcón', em: 'pedro.alarcon@email.com', e: 'active' },
  { cod: 'E-0092', n: 'Rafael León', em: 'rafael.leon@email.com', e: 'inactive' },
  { cod: 'E-0041', n: 'Raquel Bustamante', em: 'raquel.bustamante@email.com', e: 'active' },
  { cod: 'E-0066', n: 'Ricardo Fuentes', em: 'ricardo.fuentes@email.com', e: 'active' },
  { cod: 'E-0002', n: 'Rosa Espinoza', em: 'rosa.espinoza@email.com', e: 'active' },
  { cod: 'E-0075', n: 'Santiago Navarro', em: 'santiago.navarro@email.com', e: 'active' },
  { cod: 'E-0026', n: 'Silvia Cortez', em: 'silvia.cortez@email.com', e: 'active' },
  { cod: 'E-0081', n: 'Teresa Blanco', em: 'teresa.blanco@email.com', e: 'active' },
  { cod: 'E-0014', n: 'Tomás Romero', em: 'tomas.romero@email.com', e: 'active' },
  { cod: 'E-0059', n: 'Valeria Pineda', em: 'valeria.pineda@email.com', e: 'active' },
  { cod: 'E-0036', n: 'Víctor Lozano', em: 'victor.lozano@email.com', e: 'active' },
  { cod: 'E-0097', n: 'Ximena Salas', em: 'ximena.salas@email.com', e: 'active' },
  { cod: 'E-0009', n: 'Yolanda Miranda', em: 'yolanda.miranda@email.com', e: 'active' }
];

export default function EstudiantesCursoPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Ordenar alfabéticamente por nombre
  const estudiantesOrdenados = useMemo(() => {
    return [...TODOS_ESTUDIANTES].sort((a, b) => a.n.localeCompare(b.n));
  }, []);

  const totalPages = Math.ceil(estudiantesOrdenados.length / itemsPerPage);
  
  const currentEstudiantes = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return estudiantesOrdenados.slice(startIndex, startIndex + itemsPerPage);
  }, [currentPage, estudiantesOrdenados]);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <Breadcrumb items={[
          { label: 'Cursos', href: '/admin/cursos' }, 
          { label: 'Matemática Preuniversitaria', href: '/admin/cursos/1' },
          { label: 'Estudiantes Inscritos' }
        ]} />
        <PageHeader 
          title="Estudiantes Inscritos" 
          subtitle="Matemática Preuniversitaria"
        />
      </div>

      <Card title={`Lista de estudiantes (${estudiantesOrdenados.length})`}>
        <div className="overflow-x-auto">
          <Table headers={['Código', 'Nombre Completo', 'Correo', 'Estado']}>
            {currentEstudiantes.map((est, index) => (
              <tr key={index} className="hover:bg-gray-50 border-b border-gray-100 last:border-0 transition-colors">
                <td className="px-6 py-4 font-semibold text-gray-500 text-xs">{est.cod}</td>
                <td className="px-6 py-4 font-semibold text-gray-800">{est.n}</td>
                <td className="px-6 py-4 text-gray-600 text-sm">{est.em}</td>
                <td className="px-6 py-4">
                  <Badge variant={est.e as any}>
                    {est.e === 'active' ? 'Activo' : 'Inactivo'}
                  </Badge>
                </td>
              </tr>
            ))}
          </Table>
        </div>

        {/* Paginación */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between border-t border-gray-100 px-6 py-4 mt-2">
            <span className="text-sm text-gray-500">
              Mostrando del <span className="font-semibold text-gray-900">{(currentPage - 1) * itemsPerPage + 1}</span> al <span className="font-semibold text-gray-900">{Math.min(currentPage * itemsPerPage, estudiantesOrdenados.length)}</span> de <span className="font-semibold text-gray-900">{estudiantesOrdenados.length}</span> estudiantes
            </span>
            <div className="flex gap-2">
              <Button 
                variant="secondary" 
                onClick={handlePrevPage} 
                disabled={currentPage === 1}
                className="px-3 py-1.5"
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Anterior
              </Button>
              <Button 
                variant="secondary" 
                onClick={handleNextPage} 
                disabled={currentPage === totalPages}
                className="px-3 py-1.5"
              >
                Siguiente
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}
