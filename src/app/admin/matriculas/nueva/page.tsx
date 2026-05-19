import React from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card } from '@/components/ui/Card';
import { Select } from '@/components/ui/Select';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
export default function Page(){return(<div className="flex flex-col gap-6"><PageHeader title="Nueva matrícula"/>
  <Card><div className="grid grid-cols-1 md:grid-cols-2 gap-4"><Select label="Estudiante" options={[{value:1,label:'Juan Pérez'},{value:2,label:'María García'}]} placeholder="Buscar estudiante..."/><Select label="Ciclo" options={[{value:'2025-II',label:'2025-II'}]}/><Input label="Fecha de matrícula" type="date"/></div></Card>
  <Card title="Cursos a matricular"><div className="space-y-2 text-sm">{['Matemática','Física','Química','Lengua'].map(c=>(<label key={c} className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="rounded"/><span>{c}</span></label>))}<p className="text-xs text-gray-400 mt-2">0 cursos seleccionados</p></div></Card>
  <div className="flex justify-end gap-3"><Button variant="secondary">Cancelar</Button><Button>Registrar matrícula</Button></div></div>);}
