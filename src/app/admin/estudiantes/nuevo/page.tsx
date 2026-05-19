import React from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';

export default function Page() {
  return (<div className="flex flex-col gap-6">
    <Breadcrumb items={[{label:'Estudiantes',href:'/admin/estudiantes'},{label:'Nuevo'}]}/>
    <PageHeader title="Nuevo estudiante"/>
    <Card title="Datos personales"><div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Input label="Nombre completo" placeholder="Ej: Juan Carlos Pérez"/>
      <Input label="DNI" placeholder="Ej: 74521836" hint="Debe tener exactamente 8 dígitos."/>
      <Input label="Correo electrónico" type="email" placeholder="Ej: juan@email.com"/>
      <Input label="Teléfono" placeholder="+51 999 999 999"/>
      <Select label="Carrera objetivo" options={[{value:'medicina',label:'Medicina'},{value:'derecho',label:'Derecho'},{value:'sistemas',label:'Ing. Sistemas'}]} placeholder="Seleccionar"/>
    </div></Card>
    <Card title="Matrícula"><div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Select label="Ciclo" options={[{value:'2025-II',label:'2025-II'},{value:'2026-I',label:'2026-I'}]} placeholder="Seleccionar"/>
    </div></Card>
    <Card title="Credenciales de acceso"><div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Input label="Código de estudiante" defaultValue="E-2025-0143" hint="Auto-generado, puedes editarlo."/>
      <Input label="Contraseña inicial" type="password"/>
    </div><p className="text-xs text-gray-400 mt-2">El estudiante deberá cambiar su contraseña en el primer ingreso.</p></Card>
    <div className="flex justify-end gap-3"><Button variant="secondary">Cancelar</Button><Button>Guardar estudiante</Button></div>
  </div>);
}
