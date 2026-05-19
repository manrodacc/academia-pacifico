import React from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card } from '@/components/ui/Card';
import { Avatar } from '@/components/ui/Avatar';
import { Button } from '@/components/ui/Button';
export default function Page(){return(<div className="flex flex-col gap-6"><PageHeader title="Mi perfil"/>
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
    <Card className="flex flex-col items-center text-center"><Avatar name="Admin Torres" size="lg"/><h3 className="font-semibold mt-3">Admin Torres</h3><p className="text-xs text-gray-500">Administrador General</p></Card>
    <Card title="Datos" className="lg:col-span-2"><div className="grid grid-cols-2 gap-4 text-sm"><div><p className="text-gray-400 text-xs">Correo</p><p className="font-semibold">admin@pacifico.edu.pe</p></div><div><p className="text-gray-400 text-xs">Rol</p><p className="font-semibold">Administrador</p></div></div>
      <div className="flex gap-3 mt-4"><Button variant="secondary">Editar datos</Button><Button variant="ghost">Cambiar contraseña</Button></div></Card>
  </div></div>);}
