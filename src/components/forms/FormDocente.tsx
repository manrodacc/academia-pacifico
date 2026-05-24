"use client";
import React from 'react';
import { toast } from 'sonner';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';

export const FormDocente: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => toast.success('Docente guardado con éxito'), 500);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 bg-white p-6 border border-gray-100 rounded-xl shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input label="Nombre Completo" placeholder="Ej. Dra. Martha Chávez" />
        <Input label="Especialidad / Área" placeholder="Ej. Física y Matemáticas" />
        <Input label="Correo Institucional" type="email" placeholder="Ej. mchavez@pacifico.edu.pe" />
      </div>
      <div className="flex justify-end gap-3 border-t border-gray-50 pt-4 mt-2">
        <Button type="button" variant="secondary">Restaurar</Button>
        <Button type="submit" variant="primary">Guardar Docente</Button>
      </div>
    </form>
  );
};
