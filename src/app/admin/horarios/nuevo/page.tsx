import React from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card } from '@/components/ui/Card';
import { Select } from '@/components/ui/Select';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
export default function Page(){return(<div className="flex flex-col gap-6"><PageHeader title="Nuevo bloque horario"/>
  <Card><div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <Select label="Curso" options={[{value:1,label:'Matemática'},{value:2,label:'Física'}]} placeholder="Seleccionar"/>
    <Input label="Aula"/>
    <Select label="Día" options={[{value:'LUN',label:'Lunes'},{value:'MAR',label:'Martes'},{value:'MIE',label:'Miércoles'},{value:'JUE',label:'Jueves'},{value:'VIE',label:'Viernes'},{value:'SAB',label:'Sábado'}]} placeholder="Seleccionar"/>
    <Input label="Hora inicio" type="time"/><Input label="Hora fin" type="time"/>
  </div></Card>
  <div className="flex justify-end gap-3"><Button variant="secondary">Cancelar</Button><Button>Guardar bloque</Button></div></div>);}
