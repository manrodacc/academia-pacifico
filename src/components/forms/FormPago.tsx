import React from 'react';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { Button } from '../ui/Button';

export const FormPago: React.FC = () => {
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
        <Input label="Concepto de Pago" placeholder="Ej. Cuota 1 de Pensión" />
        <Input label="Monto (S/.)" type="number" placeholder="Ej. 350.00" />
        <Select 
          label="Método de Pago" 
          options={[
            { value: 'EFECTIVO', label: 'Efectivo' },
            { value: 'TRANSFERENCIA', label: 'Transferencia' },
            { value: 'TARJETA', label: 'Tarjeta de Crédito / Débito' }
          ]} 
        />
      </div>
      <div className="flex justify-end gap-3 border-t border-gray-50 pt-4 mt-2">
        <Button variant="secondary">Cancelar</Button>
        <Button variant="primary">Registrar Pago</Button>
      </div>
    </form>
  );
};
