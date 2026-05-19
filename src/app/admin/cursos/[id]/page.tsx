import React from 'react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Card } from '@/components/ui/Card';
export default function Page(){return(<div className="flex flex-col gap-6"><PageHeader title="Matemática Preuniv." subtitle="Detalle del curso"/><Card title="Información"><div className="grid grid-cols-2 gap-4 text-sm"><div><p className="text-gray-400 text-xs">Área</p><p className="font-semibold">Ciencias</p></div><div><p className="text-gray-400 text-xs">Docente</p><p className="font-semibold">Dr. García</p></div><div><p className="text-gray-400 text-xs">Estudiantes matriculados</p><p className="font-semibold">48</p></div></div></Card></div>);}
