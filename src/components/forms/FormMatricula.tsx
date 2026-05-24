"use client";
import React from 'react';
import { toast } from 'sonner';
import { Select } from '../ui/Select';
import { Button } from '../ui/Button';

export const FormMatricula: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => toast.success('Matrícula registrada con éxito'), 500);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 bg-white p-6 border border-gray-100 rounded-xl shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Select 
          label="Estudiante" 
          options={[
            { value: 1, label: 'Juan Pérez' },
            { value: 2, label: 'María Solís' }
          ]} 
        />
        <Select 
          label="Ciclo Académico" 
          options={[
            { value: 'CICLO_I', label: 'Ciclo I' },
            { value: 'CICLO_II', label: 'Ciclo II' }
          ]} 
        />
      </div>
      <div className="flex justify-end gap-3 border-t border-gray-50 pt-4 mt-2">
        <Button type="button" variant="secondary">Cancelar</Button>
        <Button type="submit" variant="primary">Matricular Estudiante</Button>
      </div>
    </form>
  );
};
