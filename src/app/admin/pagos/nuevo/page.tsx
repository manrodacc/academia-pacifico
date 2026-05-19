import React from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card } from '@/components/ui/Card';
import { Select } from '@/components/ui/Select';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
export default function Page(){return(<div className="flex flex-col gap-6"><PageHeader title="Registrar pago"/>
  <Card><div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <Select label="Estudiante" options={[{value:1,label:'Juan Pérez — S/ 400 pendiente'},{value:2,label:'María García — S/ 600 pendiente'}]} placeholder="Buscar estudiante..."/>
    <Select label="Concepto" options={[{value:'matricula',label:'Matrícula'},{value:'cuota1',label:'Cuota 1'},{value:'cuota2',label:'Cuota 2'}]} placeholder="Seleccionar"/>
    <Input label="Monto" type="number" defaultValue="200"/>
    <Input label="Fecha de pago" type="date"/>
    <Select label="Método de pago" options={[{value:'efectivo',label:'Efectivo'},{value:'yape',label:'Yape'},{value:'transferencia',label:'Transferencia'},{value:'tarjeta',label:'Tarjeta'}]} placeholder="Seleccionar"/>
  </div></Card>
  <div className="flex justify-end gap-3"><Button variant="secondary">Cancelar</Button><Button>Registrar y generar comprobante</Button></div>
</div>);}
