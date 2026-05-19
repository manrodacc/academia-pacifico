import React from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { FileText } from 'lucide-react';
export default function Page(){return(<div className="flex flex-col gap-6">
  <PageHeader title="Detalle de pago" action={<div className="flex gap-2"><Button variant="secondary">Editar</Button><Button variant="danger">Anular</Button><Button><FileText className="w-4 h-4"/>PDF</Button></div>}/>
  <Card className="max-w-2xl"><div className="grid grid-cols-2 gap-4 text-sm">
    <div><p className="text-gray-400 text-xs">Estudiante</p><p className="font-semibold">Juan Pérez</p></div>
    <div><p className="text-gray-400 text-xs">Concepto</p><p className="font-semibold">Cuota 5</p></div>
    <div><p className="text-gray-400 text-xs">Monto</p><p className="text-xl font-bold">S/ 200.00</p></div>
    <div><p className="text-gray-400 text-xs">Estado</p><Badge variant="active">Pagado</Badge></div>
  </div></Card>
</div>);}
