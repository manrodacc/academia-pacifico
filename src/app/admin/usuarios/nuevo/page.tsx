import React from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';
export default function Page(){return(<div className="flex flex-col gap-6"><PageHeader title="Crear usuario"/>
  <Card><div className="grid grid-cols-1 md:grid-cols-2 gap-4"><Input label="Nombre completo"/><Input label="Correo electrónico" type="email"/><Select label="Rol" options={[{value:'ESTUDIANTE',label:'Estudiante'},{value:'ADMIN',label:'Administrador'}]} placeholder="Seleccionar"/><Input label="Contraseña inicial" type="password"/></div></Card>
  <div className="flex justify-end gap-3"><Button variant="secondary">Cancelar</Button><Button>Guardar</Button></div></div>);}
