"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { PageHeader } from '@/components/layout/PageHeader';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Select } from '@/components/ui/Select';
import { Avatar } from '@/components/ui/Avatar';
import { Camera } from 'lucide-react';

const CURSOS_DISPONIBLES = [
  { value: 'Matemática Preuniversitaria', label: 'Matemática Preuniversitaria' },
  { value: 'Física General', label: 'Física General' },
  { value: 'Química Orgánica e Inorgánica', label: 'Química Orgánica e Inorgánica' },
  { value: 'Álgebra Preuniversitaria', label: 'Álgebra Preuniversitaria' },
  { value: 'Geometría y Trigonometría', label: 'Geometría y Trigonometría' },
  { value: 'Biología y Anatomía', label: 'Biología y Anatomía' },
  { value: 'Aptitud Matemática', label: 'Aptitud Matemática' },
  { value: 'Aptitud Verbal', label: 'Aptitud Verbal' },
  { value: 'Historia y Geografía', label: 'Historia y Geografía' },
  { value: 'Lenguaje y Literatura', label: 'Lenguaje y Literatura' },
];

export default function Page() {
  const router = useRouter();

  const [nombre, setNombre] = React.useState('');
  const [foto, setFoto] = React.useState<string | null>(null);
  const [curso1, setCurso1] = React.useState('');
  const [curso2, setCurso2] = React.useState('');
  const [curso3, setCurso3] = React.useState('');

  const handleFotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFoto(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const getOptions = (currentValue: string) => {
    return CURSOS_DISPONIBLES.filter(opt => {
      const isSelectedElsewhere = 
        (opt.value === curso1 && currentValue !== curso1) ||
        (opt.value === curso2 && currentValue !== curso2) ||
        (opt.value === curso3 && currentValue !== curso3);
      return !isSelectedElsewhere;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Docente creado con éxito');
    setTimeout(() => {
      router.push('/admin/docentes');
    }, 1000);
  };

  return (<form onSubmit={handleSubmit} className="flex flex-col gap-6">
    <div>
      <Breadcrumb items={[{ label: 'Docentes', href: '/admin/docentes' }, { label: 'Nuevo' }]} />
      <PageHeader title="Nuevo docente"/>
    </div>
    <Card title="Datos personales y contacto">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        {/* Foto Uploader Column (1/4 space) */}
        <div className="lg:col-span-1 flex flex-col items-center justify-center p-6 border border-gray-100 bg-gray-50/50 rounded-xl gap-4">
          <div className="relative group w-32 h-32 md:w-36 md:h-36 rounded-full border-4 border-white shadow-md overflow-hidden bg-pacifico-100 flex items-center justify-center shrink-0">
            {foto ? (
              <img src={foto} alt={nombre || "Docente"} className="w-full h-full object-cover" />
            ) : (
              <span className="text-3xl md:text-4xl font-bold text-pacifico-700">
                {nombre ? nombre.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase() : "DG"}
              </span>
            )}
            
            {/* Hover Overlay */}
            <label className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity duration-200 gap-1 text-xs">
              <Camera className="w-6 h-6" />
              <span>Cambiar foto</span>
              <input 
                type="file" 
                accept="image/*" 
                className="hidden" 
                onChange={handleFotoChange} 
              />
            </label>
          </div>
          
          <div className="flex flex-col items-center text-center gap-2">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Foto del Docente</span>
            <p className="text-[11px] text-gray-400 max-w-[150px]">Recomendado: Imagen cuadrada, JPG o PNG de hasta 2MB.</p>
            <div className="flex gap-2 mt-1">
              <label className="px-3 py-1.5 text-xs font-semibold text-pacifico-700 bg-white hover:bg-pacifico-50 border border-pacifico-200 rounded-md cursor-pointer transition-all duration-150 shadow-sm">
                Subir foto
                <input 
                  type="file" 
                  accept="image/*" 
                  className="hidden" 
                  onChange={handleFotoChange} 
                />
              </label>
              {foto && (
                <button 
                  type="button" 
                  onClick={() => setFoto(null)} 
                  className="px-3 py-1.5 text-xs font-semibold text-red-700 bg-white hover:bg-red-50 border border-red-200 rounded-md cursor-pointer transition-all duration-150 shadow-sm"
                >
                  Quitar
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Inputs Column (3/4 space) */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <Input 
            label="Nombre completo" 
            value={nombre} 
            onChange={(e) => setNombre(e.target.value)} 
            placeholder="Ej: Dr. Carlos García López"
            required 
          />
          <Input label="DNI" placeholder="Ej: 10293847" hint="Debe tener exactamente 8 dígitos." required />
          <Input label="Especialidad" placeholder="Ej: Matemática, Física, Química" required />
          <Input label="Correo electrónico" type="email" placeholder="Ej: cgarcia@academia.com" required />
          <Input label="Teléfono" placeholder="Ej: +51 987 654 321" required />
          <Input label="Dirección" placeholder="Ej: Av. Los Pinos 123, Trujillo" className="md:col-span-2" />
        </div>
      </div>
    </Card>

    <Card title="Cursos a dictar (Hasta 3)">
      <div className="text-sm text-gray-500 mb-4">
        Selecciona las asignaturas que dictará el docente. Se permite asignar un máximo de 3 cursos.
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Select 
          label="Curso 1" 
          value={curso1}
          onChange={(e) => setCurso1(e.target.value)}
          options={getOptions(curso1)}
          placeholder="Seleccionar primer curso"
          required
        />
        <Select 
          label="Curso 2 (Opcional)" 
          value={curso2}
          onChange={(e) => setCurso2(e.target.value)}
          options={getOptions(curso2)}
          placeholder="Ninguno"
        />
        <Select 
          label="Curso 3 (Opcional)" 
          value={curso3}
          onChange={(e) => setCurso3(e.target.value)}
          options={getOptions(curso3)}
          placeholder="Ninguno"
        />
      </div>
    </Card>

    <div className="flex justify-end gap-3">
      <Button type="button" variant="secondary" onClick={() => router.back()}>Cancelar</Button>
      <Button type="submit">Guardar</Button>
    </div>
  </form>);
}

