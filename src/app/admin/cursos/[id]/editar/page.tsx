"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { PageHeader } from '@/components/layout/PageHeader';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';

export default function Page() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Curso actualizado con éxito');
    setTimeout(() => {
      router.push('/admin/cursos/1');
    }, 1000);
  };

  return (<form onSubmit={handleSubmit} className="flex flex-col gap-6">
    <div>
      <Breadcrumb items={[
        { label: 'Cursos', href: '/admin/cursos' },
        { label: 'Matemática Preuniversitaria', href: '/admin/cursos/1' },
        { label: 'Editar' }
      ]} />
      <PageHeader title="Editar curso"/>
    </div>

    <Card title="Editar Información del Curso">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input 
          label="Código del curso" 
          defaultValue="CUR-001" 
          disabled 
          hint="El código no se puede modificar"
        />
        <Input 
          label="Nombre del curso" 
          defaultValue="Matemática Preuniversitaria" 
          placeholder="Ej: Matemática Preuniversitaria" 
          required 
        />
        
        <Select 
          label="Docente responsable" 
          options={[
            { value: 1, label: 'Dr. García' },
            { value: 2, label: 'Prof. Torres' },
            { value: 3, label: 'Prof. Quiroz' }
          ]} 
          defaultValue={1}
          required
        />

        <Select 
          label="Estado" 
          options={[
            { value: 'active', label: 'Activo' },
            { value: 'inactive', label: 'Inactivo' }
          ]} 
          defaultValue="active"
        />

        <div className="md:col-span-2 flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-700">Áreas Evaluadas (Examen UNT)</label>
          <div className="flex flex-wrap gap-3">
            <label className="flex items-center gap-2 px-3 py-2 border border-blue-200 bg-blue-50 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors">
              <input type="checkbox" className="w-4 h-4 text-pacifico-600 rounded border-gray-300 focus:ring-pacifico-500" defaultChecked />
              <span className="text-sm font-medium text-gray-700">Área A</span>
            </label>
            <label className="flex items-center gap-2 px-3 py-2 border border-indigo-200 bg-indigo-50 rounded-lg cursor-pointer hover:bg-indigo-100 transition-colors">
              <input type="checkbox" className="w-4 h-4 text-pacifico-600 rounded border-gray-300 focus:ring-pacifico-500" defaultChecked />
              <span className="text-sm font-medium text-gray-700">Área B</span>
            </label>
            <label className="flex items-center gap-2 px-3 py-2 border border-purple-200 bg-purple-50 rounded-lg cursor-pointer hover:bg-purple-100 transition-colors">
              <input type="checkbox" className="w-4 h-4 text-pacifico-600 rounded border-gray-300 focus:ring-pacifico-500" defaultChecked />
              <span className="text-sm font-medium text-gray-700">Área C</span>
            </label>
            <label className="flex items-center gap-2 px-3 py-2 border border-pink-200 bg-pink-50 rounded-lg cursor-pointer hover:bg-pink-100 transition-colors">
              <input type="checkbox" className="w-4 h-4 text-pacifico-600 rounded border-gray-300 focus:ring-pacifico-500" defaultChecked />
              <span className="text-sm font-medium text-gray-700">Área D</span>
            </label>
          </div>
          <p className="text-xs text-gray-500 mt-1">Selecciona las áreas en las que este curso será evaluado en el examen de admisión.</p>
        </div>

        <div className="md:col-span-2 flex flex-col gap-1.5 mt-2">
          <label className="text-sm font-semibold text-gray-700">Descripción del curso</label>
          <textarea 
            className="w-full px-3.5 py-2.5 bg-white border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-pacifico-500/20 focus:border-pacifico-500 transition-all duration-200 resize-none h-28"
            placeholder="Escribe una breve descripción sobre el temario, el plan de estudios y los objetivos de aprendizaje de esta asignatura..."
            defaultValue="Desarrollo completo de temas de Álgebra, Aritmética, Geometría y Trigonometría con enfoque preuniversitario para exámenes de admisión."
          />
        </div>
      </div>
    </Card>

    <div className="flex justify-end gap-3">
      <Button type="button" variant="secondary" onClick={() => router.back()}>Cancelar</Button>
      <Button type="submit">Guardar cambios</Button>
    </div>
  </form>);
}

