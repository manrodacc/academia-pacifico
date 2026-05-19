"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Avatar } from '../ui/Avatar';
import { LayoutDashboard, User, Calendar, BarChart3, CheckSquare, CreditCard, Settings, LogOut } from 'lucide-react';

const menuItems = [
  { name: 'Dashboard', path: '/estudiante/dashboard', icon: LayoutDashboard },
  { name: 'Mi perfil', path: '/estudiante/perfil', icon: User },
  { name: 'Horarios', path: '/estudiante/horarios', icon: Calendar },
  { name: 'Notas y simulacros', path: '/estudiante/notas', icon: BarChart3 },
  { name: 'Asistencia', path: '/estudiante/asistencia', icon: CheckSquare },
  { name: 'Pagos', path: '/estudiante/pagos', icon: CreditCard },
  { name: 'Configuración', path: '/estudiante/configuracion', icon: Settings },
];

export const SidebarEstudiante: React.FC = () => {
  const pathname = usePathname();
  return (
    <aside className="w-64 bg-pacifico-900 text-white min-h-screen flex flex-col shrink-0">
      {/* User info header */}
      <div className="px-5 py-6 border-b border-pacifico-800">
        <div className="flex items-center gap-3">
          <Avatar name="Alejandro Ramos" size="md" />
          <div className="min-w-0">
            <p className="text-sm font-semibold truncate">Alejandro Ramos</p>
            <p className="text-xs text-pacifico-200">Ciclo 2025-II</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 flex flex-col gap-1">
        {menuItems.map((item) => {
          const isActive = pathname.startsWith(item.path);
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive ? 'bg-pacifico-700 text-white' : 'text-pacifico-200 hover:bg-pacifico-800 hover:text-white'}`}
            >
              <Icon className="w-5 h-5 shrink-0" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="px-3 py-4 border-t border-pacifico-800">
        <Link href="/login" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-pacifico-200 hover:bg-pacifico-800 hover:text-white transition-colors">
          <LogOut className="w-5 h-5" />
          <span>Cerrar sesión</span>
        </Link>
      </div>
    </aside>
  );
};
