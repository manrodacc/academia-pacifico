import React from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { FileText } from 'lucide-react';

export default function Page() {
  return (<div className="flex flex-col gap-6">
    <Breadcrumb items={[{label:'Mis pagos',href:'/estudiante/pagos'},{label:'Cuota 1 — Febrero 2025'}]} />
    <PageHeader title="Comprobante de pago" />
    <Card className="max-w-2xl mx-auto w-full">
      <div className="flex justify-between items-center border-b border-gray-200 pb-4">
        <div className="flex items-center gap-2"><div className="w-8 h-8 bg-pacifico-700 rounded flex items-center justify-center text-white text-xs font-bold">AP</div><span className="font-bold text-gray-900">Academia Pacífico</span></div>
        <div className="text-right"><p className="font-semibold text-gray-800">COMPROBANTE</p><p className="text-xs text-gray-400">N° 0045</p></div>
      </div>
      <div className="grid grid-cols-2 gap-4 my-6 text-sm">
        <div><p className="text-xs text-gray-400">Concepto</p><p className="font-semibold">Cuota 1 — Ciclo 2025-II</p></div>
        <div><p className="text-xs text-gray-400">Estudiante</p><p className="font-semibold">Alejandro Ramos</p></div>
        <div><p className="text-xs text-gray-400">DNI</p><p className="font-semibold">74521836</p></div>
        <div><p className="text-xs text-gray-400">Método</p><p className="font-semibold">Efectivo</p></div>
        <div><p className="text-xs text-gray-400">Fecha de pago</p><p className="font-semibold">14 feb 2025</p></div>
        <div><p className="text-xs text-gray-400">Atendido por</p><p className="font-semibold">Luis Torres (Caja)</p></div>
      </div>
      <div className="border-t border-gray-200 pt-4 flex justify-between items-center">
        <div><p className="text-sm text-gray-500">Monto pagado</p><p className="text-2xl font-bold text-gray-900">S/ 200.00</p></div>
        <Badge variant="active">PAGADO</Badge>
      </div>
      <div className="flex gap-3 mt-6 justify-end">
        <Link href="/estudiante/pagos"><Button variant="secondary">Volver a pagos</Button></Link>
        <Button><FileText className="w-4 h-4"/>Descargar PDF</Button>
      </div>
    </Card>
  </div>);
}
