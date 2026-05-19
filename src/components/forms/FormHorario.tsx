import React from 'react';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { Button } from '../ui/Button';

export const FormHorario: React.FC = () => {
  return (
    <form className="flex flex-col gap-5 bg-white p-6 border border-gray-100 rounded-xl shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Select 
          label="Curso" 
          options={[
            { value: 1, label: 'Álgebra Avanzada' },
            { value: 2, label: 'Física I' }
          ]} 
        />
        <Select 
          label="Día de la Semana" 
          options={[
            { value: 'LUNES', label: 'Lunes' },
            { value: 'MARTES', label: 'Martes' },
            { value: 'MIERCOLES', label: 'Miércoles' },
            { value: 'JUEVES', label: 'Jueves' },
            { value: 'VIERNES', label: 'Viernes' },
            { value: 'SABADO', label: 'Sábado' }
          ]} 
        />
        <Input label="Hora de Inicio" type="time" />
        <Input label="Hora de Fin" type="time" />
        <Input label="Aula" placeholder="Ej. Aula 102" />
      </div>
      <div className="flex justify-end gap-3 border-t border-gray-50 pt-4 mt-2">
        <Button variant="secondary">Cancelar</Button>
        <Button variant="primary">Registrar Bloque</Button>
      </div>
    </form>
  );
};
