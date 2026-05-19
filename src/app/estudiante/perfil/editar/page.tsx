import React from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function Page() {
  return (<div className="flex flex-col gap-6">
    <Breadcrumb items={[{label:'Mi perfil',href:'/estudiante/perfil'},{label:'Editar'}]} />
    <PageHeader title="Editar información de contacto" />
    <Card title="Datos de contacto">
      <p className="text-sm text-gray-500 mb-4">Solo puedes editar tu correo y teléfono.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input label="Correo electrónico" type="email" defaultValue="alejandro@gmail.com" hint="Recibirás notificaciones en este correo." />
        <Input label="Teléfono" type="tel" defaultValue="+51 999 888 777" />
      </div>
    </Card>
    <Card title="Cambiar contraseña">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg">
        <Input label="Contraseña actual" type="password" className="md:col-span-2" />
        <Input label="Nueva contraseña" type="password" />
        <Input label="Confirmar nueva contraseña" type="password" />
      </div>
    </Card>
    <div className="flex justify-end gap-3">
      <Link href="/estudiante/perfil"><Button variant="secondary">Cancelar</Button></Link>
      <Button>Guardar cambios</Button>
    </div>
  </div>);
}
