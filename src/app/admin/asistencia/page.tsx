import React from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card } from '@/components/ui/Card';
import { Select } from '@/components/ui/Select';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
export default function Page(){return(<div className="flex flex-col gap-6"><PageHeader title="Registro de asistencia"/>
  <Card><div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <Select label="Curso" options={[{value:1,label:'Matemática'},{value:2,label:'Física'}]} placeholder="Seleccionar curso"/>
    <Input label="Fecha de sesión" type="date"/>
    <div className="flex items-end"><Button>Cargar lista</Button></div>
  </div></Card></div>);}
