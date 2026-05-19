import React from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';

export default function Page() {
  return (<div className="flex flex-col gap-6">
    <Breadcrumb items={[{label:'Estudiantes',href:'/admin/estudiantes'},{label:'Juan Pérez',href:'/admin/estudiantes/E-0023'},{label:'Editar'}]}/>
    <PageHeader title="Editar estudiante"/>
    <Card title="Datos personales"><div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Input label="Nombre completo" defaultValue="Juan Pérez"/>
      <Input label="DNI" defaultValue="74521836"/>
      <Input label="Correo" defaultValue="juan@email.com"/>
      <Input label="Teléfono" defaultValue="+51 999 111 222"/>
      <Select label="Carrera" defaultValue="medicina" options={[{value:'medicina',label:'Medicina'},{value:'derecho',label:'Derecho'}]}/>
    </div></Card>
    <div className="flex justify-end gap-3"><Button variant="secondary">Cancelar</Button><Button>Guardar cambios</Button></div>
  </div>);
}
