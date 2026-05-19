"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Avatar } from '../ui/Avatar';
import { LayoutDashboard, Users, GraduationCap, BookOpen, ClipboardList, CalendarDays, FileText, CheckSquare, CreditCard, UserCog, BarChart3, LogOut } from 'lucide-react';

const sections = [
  {
    items: [{ name: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard }],
  },
  {
    label: 'ACADÉMICO',
    items: [
      { name: 'Estudiantes', path: '/admin/estudiantes', icon: Users },
      { name: 'Docentes', path: '/admin/docentes', icon: GraduationCap },
      { name: 'Cursos', path: '/admin/cursos', icon: BookOpen },
      { name: 'Matrículas', path: '/admin/matriculas', icon: ClipboardList },
      { name: 'Horarios', path: '/admin/horarios', icon: CalendarDays },
    ],
  },
  {
    label: 'REGISTRO',
    items: [
      { name: 'Notas', path: '/admin/notas', icon: FileText },
      { name: 'Asistencia', path: '/admin/asistencia', icon: CheckSquare },
    ],
  },
  {
    label: 'FINANZAS',
    items: [{ name: 'Pagos', path: '/admin/pagos', icon: CreditCard }],
  },
  {
    label: 'SISTEMA',
    items: [
      { name: 'Usuarios y roles', path: '/admin/usuarios', icon: UserCog },
      { name: 'Reportes', path: '/admin/reportes', icon: BarChart3 },
    ],
  },
];

export const SidebarAdmin: React.FC = () => {
  const pathname = usePathname();
  return (
    <aside className="w-64 bg-pacifico-900 text-white min-h-screen flex flex-col shrink-0">
      {/* Logo header */}
      <div className="px-5 py-5 border-b border-pacifico-800">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-pacifico-700 rounded-lg flex items-center justify-center text-white font-bold text-sm">AP</div>
          <div>
            <p className="text-sm font-bold">Academia Pacífico</p>
            <p className="text-xs text-pacifico-200">Admin</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-3 overflow-y-auto flex flex-col gap-0.5">
        {sections.map((section, si) => (
          <div key={si} className={si > 0 ? 'mt-4' : ''}>
            {section.label && (
              <p className="px-3 pb-2 text-[11px] font-semibold text-pacifico-500 uppercase tracking-wider">{section.label}</p>
            )}
            {section.items.map((item) => {
              const isActive = pathname.startsWith(item.path);
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive ? 'bg-pacifico-700 text-white' : 'text-pacifico-200 hover:bg-pacifico-800 hover:text-white'}`}
                >
                  <Icon className="w-5 h-5 shrink-0" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
        ))}
      </nav>

      {/* Admin footer */}
      <div className="px-3 py-4 border-t border-pacifico-800">
        <div className="flex items-center gap-3 px-3 pb-3">
          <Avatar name="Admin Torres" size="sm" />
          <div className="min-w-0">
            <p className="text-xs font-semibold truncate">Admin Torres</p>
            <p className="text-[11px] text-pacifico-300">Administrador</p>
          </div>
        </div>
        <Link href="/login" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-pacifico-200 hover:bg-pacifico-800 hover:text-white transition-colors">
          <LogOut className="w-5 h-5" />
          <span>Cerrar sesión</span>
        </Link>
      </div>
    </aside>
  );
};
