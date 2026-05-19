import React from 'react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';

export const FormDocente: React.FC = () => {
  return (
    <form className="flex flex-col gap-5 bg-white p-6 border border-gray-100 rounded-xl shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input label="Nombre Completo" placeholder="Ej. Dra. Martha Chávez" />
        <Input label="Especialidad / Área" placeholder="Ej. Física y Matemáticas" />
        <Input label="Correo Institucional" type="email" placeholder="Ej. mchavez@pacifico.edu.pe" />
      </div>
      <div className="flex justify-end gap-3 border-t border-gray-50 pt-4 mt-2">
        <Button variant="secondary">Restaurar</Button>
        <Button variant="primary">Guardar Docente</Button>
      </div>
    </form>
  );
};
