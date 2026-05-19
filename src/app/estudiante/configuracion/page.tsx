import React from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export default function Page() {
  return (<div className="flex flex-col gap-6">
    <PageHeader title="Configuración" />
    <Card title="Seguridad">
      <div className="flex flex-col gap-4 max-w-md">
        <Input label="Contraseña actual" type="password" />
        <Input label="Nueva contraseña" type="password" />
        <Input label="Confirmar nueva contraseña" type="password" />
        <Button className="self-start">Actualizar contraseña</Button>
      </div>
    </Card>
    <Card title="Preferencias de visualización">
      <div className="flex gap-3">
        <button className="px-4 py-2 rounded-lg text-sm font-semibold bg-pacifico-700 text-white cursor-pointer">☀️ Claro</button>
        <button className="px-4 py-2 rounded-lg text-sm font-semibold bg-gray-100 text-gray-400 cursor-not-allowed">🌙 Oscuro (próximamente)</button>
      </div>
    </Card>
  </div>);
}
