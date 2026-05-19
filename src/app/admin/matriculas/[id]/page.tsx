import React from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
export default function Page(){return(<div className="flex flex-col gap-6"><PageHeader title="Detalle de matrícula" action={<div className="flex gap-2"><Button variant="secondary">Editar</Button><Button variant="danger">Anular</Button></div>}/>
  <Card><div className="grid grid-cols-2 gap-4 text-sm"><div><p className="text-gray-400 text-xs">Estudiante</p><p className="font-semibold">Juan Pérez</p></div><div><p className="text-gray-400 text-xs">Ciclo</p><p className="font-semibold">2025-II</p></div><div><p className="text-gray-400 text-xs">Estado</p><Badge variant="active">Activa</Badge></div></div></Card></div>);}
