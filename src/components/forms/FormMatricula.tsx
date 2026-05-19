import React from 'react';
import { Select } from '../ui/Select';
import { Button } from '../ui/Button';

export const FormMatricula: React.FC = () => {
  return (
    <form className="flex flex-col gap-5 bg-white p-6 border border-gray-100 rounded-xl shadow-sm">
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
        <Button variant="secondary">Cancelar</Button>
        <Button variant="primary">Matricular Estudiante</Button>
      </div>
    </form>
  );
};
