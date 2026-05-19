import React from 'react';
import { SidebarEstudiante } from '@/components/layout/SidebarEstudiante';
import { Topbar } from '@/components/layout/Topbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <SidebarEstudiante />
      <div className="flex-1 flex flex-col min-w-0">
        <Topbar userName="Alejandro Ramos" rol="Estudiante" />
        <main className="flex-1 p-6 bg-gray-50 overflow-auto"><div className="max-w-7xl mx-auto">{children}</div></main>
      </div>
    </div>
  );
}
