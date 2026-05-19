import React from 'react';
import { SidebarAdmin } from '@/components/layout/SidebarAdmin';
import { Topbar } from '@/components/layout/Topbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <SidebarAdmin />
      <div className="flex-1 flex flex-col min-w-0">
        <Topbar userName="Admin Torres" rol="Administrador" />
        <main className="flex-1 p-6 bg-gray-50 overflow-auto"><div className="max-w-7xl mx-auto">{children}</div></main>
      </div>
    </div>
  );
}
