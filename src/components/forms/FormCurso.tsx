"use client";
import React from 'react';
import { toast } from 'sonner';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { Button } from '../ui/Button';

export const FormCurso: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      toast.success('Curso guardado con éxito');
    }, 500);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 bg-white p-6 border border-gray-100 rounded-xl shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input label="Nombre del Curso" placeholder="Ej. Álgebra Avanzada" />
        <Input label="Área Académica" placeholder="Ej. Ciencias exactas" />
        <Select 
          label="Docente Asignado" 
          options={[
            { value: 1, label: 'Dr. Hugo Flores' },
            { value: 2, label: 'Dra. Martha Chávez' }
          ]} 
        />
      </div>
      <div className="flex justify-end gap-3 border-t border-gray-50 pt-4 mt-2">
        <Button type="button" variant="secondary">Restaurar</Button>
        <Button type="submit" variant="primary">Crear Curso</Button>
      </div>
    </form>
  );
};
