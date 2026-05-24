"use client";
import React from 'react';
import { toast } from 'sonner';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { Button } from '../ui/Button';

export const FormEstudiante: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => toast.success('Estudiante guardado con éxito'), 500);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 bg-white p-6 border border-gray-100 rounded-xl shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input label="Nombre Completo" placeholder="Ej. Juan Pérez" />
        <Input label="DNI" placeholder="Ej. 76543210" />
        <Input label="Correo Electrónico" type="email" placeholder="Ej. juan@pacifico.edu.pe" />
        <Input label="Teléfono" placeholder="Ej. 987654321" />
        <Input label="Carrera de Interés" placeholder="Ej. Medicina / Ingeniería" />
        <Select 
          label="Ciclo de Estudio" 
          options={[
            { value: 'CICLO_I', label: 'Ciclo I' },
            { value: 'CICLO_II', label: 'Ciclo II' },
            { value: 'CICLO_III', label: 'Ciclo III' }
          ]} 
        />
      </div>
      <div className="flex justify-end gap-3 border-t border-gray-50 pt-4 mt-2">
        <Button type="button" variant="secondary">Restaurar</Button>
        <Button type="submit" variant="primary">Guardar Estudiante</Button>
      </div>
    </form>
  );
};
