import React from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card } from '@/components/ui/Card';
import { Avatar } from '@/components/ui/Avatar';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Target } from 'lucide-react';
import Link from 'next/link';

export default function Page() {
  return (<div className="flex flex-col gap-6">
    <PageHeader title="Mi perfil" />
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="flex flex-col items-center text-center">
        <Avatar name="Alejandro Ramos" size="lg" />
        <button className="text-sm text-pacifico-700 hover:underline mt-2 cursor-pointer">Cambiar foto</button>
        <h2 className="text-lg font-semibold text-gray-900 mt-3">Alejandro Ramos</h2>
        <Badge>Ciclo 2025-II</Badge>
        <p className="text-sm text-gray-500 mt-1">Código: E-2025-0023</p>
        <div className="mt-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-semibold">
            <Target className="w-3.5 h-3.5" />
            Área B — Ciencias Básicas y Tecnológicas
          </span>
        </div>
      </Card>
      <Card title="Datos personales" className="lg:col-span-2">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div><p className="text-gray-400 text-xs font-semibold">DNI</p><p className="font-semibold">74521836</p></div>
          <div><p className="text-gray-400 text-xs font-semibold">Correo</p><p className="font-semibold">alejandro@gmail.com</p></div>
          <div><p className="text-gray-400 text-xs font-semibold">Teléfono</p><p className="font-semibold">+51 999 888 777</p></div>
          <div><p className="text-gray-400 text-xs font-semibold">Carrera objetivo</p><p className="font-semibold">Ingeniería de Sistemas</p></div>
          <div><p className="text-gray-400 text-xs font-semibold">Área Objetivo UNT</p><p className="font-semibold text-pacifico-700">Área B — Ciencias Básicas y Tecnológicas</p></div>
        </div>
        <div className="flex gap-3 mt-6">
          <Link href="/estudiante/perfil/editar"><Button variant="secondary">Editar mis datos</Button></Link>
          <Button variant="ghost">Cambiar contraseña</Button>
        </div>
      </Card>
    </div>
  </div>);
}
