"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { PageHeader } from '@/components/layout/PageHeader';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { Select } from '@/components/ui/Select';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { BookOpen, Camera, UserPlus, UserCheck } from 'lucide-react';

export default function Page() {
  const router = useRouter();
  
  // Tabs "existente" o "nuevo"
  const [tipoAlumno, setTipoAlumno] = useState<'existente' | 'nuevo'>('existente');

  // Datos del nuevo estudiante
  const [nombre, setNombre] = useState('');
  const [foto, setFoto] = useState<string | null>(null);

  // Datos de Matrícula
  const [areaObjetivo, setAreaObjetivo] = useState('Área A');
  const [selectedCourses, setSelectedCourses] = useState<number[]>([]);

  // Lógica de foto
  const handleFotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFoto(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Cursos UNT
  const allCourses = [
    { id: 1, n: 'Matemática Preuniversitaria', a: ['Área A', 'Área B', 'Área C', 'Área D'] },
    { id: 2, n: 'Física General', a: ['Área A', 'Área B'] },
    { id: 3, n: 'Química Orgánica e Inorgánica', a: ['Área A', 'Área B'] },
    { id: 4, n: 'Lenguaje y Literatura', a: ['Área A', 'Área B', 'Área C', 'Área D'] },
    { id: 5, n: 'Historia del Perú', a: ['Área C', 'Área D'] },
    { id: 6, n: 'Biología y Anatomía', a: ['Área A'] },
    { id: 7, n: 'Aptitud Académica', a: ['Área A', 'Área B', 'Área C', 'Área D'] },
  ];

  const availableCourses = allCourses.filter(c => c.a.includes(areaObjetivo));

  const toggleCourse = (id: number) => {
    setSelectedCourses(prev => 
      prev.includes(id) ? prev.filter(cId => cId !== id) : [...prev, id]
    );
  };

  React.useEffect(() => {
    setSelectedCourses(availableCourses.map(c => c.id));
  }, [areaObjetivo]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedCourses.length === 0) {
      toast.error('Debes seleccionar al menos un curso para la matrícula.');
      return;
    }
    
    if (tipoAlumno === 'nuevo') {
      toast.success('Estudiante registrado y matriculado con éxito. Las credenciales de acceso se han generado automáticamente.');
    } else {
      toast.success('Matrícula registrada con éxito');
    }
    
    setTimeout(() => {
      router.push('/admin/matriculas');
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div>
        <Breadcrumb items={[{ label: 'Matrículas', href: '/admin/matriculas' }, { label: 'Nueva' }]} />
        <PageHeader title="Nueva matrícula" />
      </div>

      {/* Tipo de alumno */}
      <Card title="Tipo de Estudiante">
        <div className="flex flex-col sm:flex-row gap-4 mb-2">
          <label className={`flex-1 flex flex-col items-center gap-2 p-4 border rounded-xl cursor-pointer transition-all ${tipoAlumno === 'existente' ? 'border-pacifico-600 bg-pacifico-50/50 shadow-sm' : 'border-gray-200 hover:border-pacifico-200 hover:bg-gray-50'}`}>
            <input 
              type="radio" 
              name="tipoAlumno" 
              className="sr-only" 
              checked={tipoAlumno === 'existente'} 
              onChange={() => setTipoAlumno('existente')}
            />
            <UserCheck className={`w-8 h-8 ${tipoAlumno === 'existente' ? 'text-pacifico-600' : 'text-gray-400'}`} />
            <div className="text-center">
              <p className={`font-semibold ${tipoAlumno === 'existente' ? 'text-pacifico-900' : 'text-gray-700'}`}>Estudiante Existente</p>
              <p className="text-xs text-gray-500 mt-1">Matricular a un alumno que ya está registrado en el sistema.</p>
            </div>
          </label>

          <label className={`flex-1 flex flex-col items-center gap-2 p-4 border rounded-xl cursor-pointer transition-all ${tipoAlumno === 'nuevo' ? 'border-pacifico-600 bg-pacifico-50/50 shadow-sm' : 'border-gray-200 hover:border-pacifico-200 hover:bg-gray-50'}`}>
            <input 
              type="radio" 
              name="tipoAlumno" 
              className="sr-only" 
              checked={tipoAlumno === 'nuevo'} 
              onChange={() => setTipoAlumno('nuevo')}
            />
            <UserPlus className={`w-8 h-8 ${tipoAlumno === 'nuevo' ? 'text-pacifico-600' : 'text-gray-400'}`} />
            <div className="text-center">
              <p className={`font-semibold ${tipoAlumno === 'nuevo' ? 'text-pacifico-900' : 'text-gray-700'}`}>Estudiante Nuevo</p>
              <p className="text-xs text-gray-500 mt-1">Registrar sus datos personales e inscribirlo en un nuevo ciclo.</p>
            </div>
          </label>
        </div>
      </Card>

      {/* Datos del estudiante (Dinámico) */}
      <Card title={tipoAlumno === 'existente' ? "Seleccionar Estudiante" : "Registrar Datos del Estudiante"}>
        {tipoAlumno === 'existente' ? (
          <div className="max-w-md">
            <Select 
              label="Estudiante" 
              options={[
                { value: 1, label: 'E-0023 - Juan Pérez' },
                { value: 2, label: 'E-0024 - María García' },
                { value: 3, label: 'E-0035 - Carlos Mendoza' }
              ]} 
              placeholder="Buscar por nombre o código..."
              required
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            {/* Foto Uploader */}
            <div className="lg:col-span-1 flex flex-col items-center justify-center p-6 border border-gray-100 bg-gray-50/50 rounded-xl gap-4">
              <div className="relative group w-32 h-32 rounded-full border-4 border-white shadow-md overflow-hidden bg-pacifico-100 flex items-center justify-center shrink-0">
                {foto ? (
                  <img src={foto} alt={nombre || "Estudiante"} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-3xl font-bold text-pacifico-700">
                    {nombre ? nombre.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase() : "ES"}
                  </span>
                )}
                
                <label className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity duration-200 gap-1 text-xs">
                  <Camera className="w-6 h-6" />
                  <span>Subir foto</span>
                  <input type="file" accept="image/*" className="hidden" onChange={handleFotoChange} />
                </label>
              </div>
              
              <div className="flex flex-col items-center text-center gap-2">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Foto de Perfil</span>
                <p className="text-[11px] text-gray-400 max-w-[150px]">Recomendado: Imagen cuadrada, JPG o PNG.</p>
              </div>
            </div>

            {/* Inputs Personales */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <Input 
                label="Nombre completo" 
                value={nombre} 
                onChange={(e) => setNombre(e.target.value)} 
                placeholder="Ej: Juan Carlos Pérez"
                required={tipoAlumno === 'nuevo'} 
              />
              <Input label="DNI" placeholder="Ej: 74521836" hint="Debe tener exactamente 8 dígitos." required={tipoAlumno === 'nuevo'} />
              <Input label="Correo electrónico" type="email" placeholder="Ej: juan@email.com" required={tipoAlumno === 'nuevo'} />
              <Input label="Teléfono" placeholder="Ej: +51 999 999 999" required={tipoAlumno === 'nuevo'} />
              
              <div className="md:col-span-2 mt-2 pt-4 border-t border-gray-100">
                <div className="bg-blue-50 p-3 rounded-lg border border-blue-100 flex flex-col gap-1">
                  <span className="text-sm font-semibold text-blue-800">Generación de credenciales automáticas</span>
                  <p className="text-xs text-blue-600">Al guardar, se generará el código (Ej: <strong>E-2025-0143</strong>) y una contraseña temporal que el alumno deberá cambiar en su primer ingreso.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </Card>

      {/* Datos de la matrícula (Común para ambos) */}
      <Card title="Condiciones de la Matrícula">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Select 
            label="Ciclo Académico" 
            options={[
              { value: '2025-II', label: '2025-II (Actual)' },
              { value: '2026-I', label: '2026-I (Próximo)' }
            ]}
            defaultValue="2025-II"
            required
          />
          <Input 
            label="Fecha de inscripción" 
            type="date" 
            defaultValue={new Date().toISOString().split('T')[0]}
            required
          />
          <Select 
            label="Área Objetivo (Examen UNT)" 
            options={[
              { value: 'Área A', label: 'Área A (Ciencias de la Salud)' },
              { value: 'Área B', label: 'Área B (Ciencias Básicas y Tecnológicas)' },
              { value: 'Área C', label: 'Área C (Ciencias de la Persona)' },
              { value: 'Área D', label: 'Área D (Ciencias Económicas)' }
            ]}
            value={areaObjetivo}
            onChange={(e) => setAreaObjetivo(e.target.value)}
            required
          />
        </div>
      </Card>

      {/* Plan de Estudios Dinámico */}
      <Card title="Plan de Estudios Asignado">
        <div className="mb-4">
          <p className="text-sm text-gray-600">
            Según el <strong className="text-pacifico-700">{areaObjetivo}</strong> seleccionado, los siguientes cursos corresponden al examen de admisión.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {availableCourses.map(c => (
            <label 
              key={c.id} 
              className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                selectedCourses.includes(c.id) 
                  ? 'border-pacifico-500 bg-pacifico-50/50 shadow-sm' 
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <div className="mt-0.5">
                <input 
                  type="checkbox" 
                  className="w-4 h-4 text-pacifico-600 rounded border-gray-300 focus:ring-pacifico-500" 
                  checked={selectedCourses.includes(c.id)}
                  onChange={() => toggleCourse(c.id)}
                />
              </div>
              <div className="flex flex-col">
                <span className={`text-sm font-semibold ${selectedCourses.includes(c.id) ? 'text-pacifico-900' : 'text-gray-700'}`}>
                  {c.n}
                </span>
                <span className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                  <BookOpen className="w-3 h-3" /> Módulo Obligatorio
                </span>
              </div>
            </label>
          ))}
        </div>
      </Card>

      <div className="flex justify-end gap-3">
        <Button type="button" variant="secondary" onClick={() => router.back()}>Cancelar</Button>
        <Button type="submit">Finalizar Matrícula</Button>
      </div>
    </form>
  );
}
