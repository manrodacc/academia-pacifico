import React from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card } from '@/components/ui/Card';
import { Select } from '@/components/ui/Select';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
export default function Page(){return(<div className="flex flex-col gap-6"><PageHeader title="Reporte de Asistencia"/>
  <Card title="Filtros"><div className="flex gap-3 flex-wrap"><Select label="Ciclo" options={[{value:'2025-II',label:'2025-II'}]}/><Input label="Desde" type="date"/><Input label="Hasta" type="date"/><div className="flex items-end"><Button>Generar reporte</Button></div></div></Card>
  <Card><div className="p-8 text-center bg-gray-50 border border-dashed border-gray-200 rounded-lg text-gray-400 text-sm">Los resultados del reporte aparecerán aquí.</div>
    <div className="flex gap-3 mt-4"><Button variant="secondary">📥 Exportar PDF</Button><Button variant="secondary">📥 Exportar Excel</Button></div></Card></div>);}
