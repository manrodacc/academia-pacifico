import React from 'react';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { Button } from '../ui/Button';

export const FormCurso: React.FC = () => {
  return (
    <form className="flex flex-col gap-5 bg-white p-6 border border-gray-100 rounded-xl shadow-sm">
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
        <Button variant="secondary">Restaurar</Button>
        <Button variant="primary">Crear Curso</Button>
      </div>
    </form>
  );
};
