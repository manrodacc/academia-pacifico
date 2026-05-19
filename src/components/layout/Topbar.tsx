import React from 'react';
import { Avatar } from '../ui/Avatar';

interface TopbarProps {
  userName?: string;
  rol?: string;
}

export const Topbar: React.FC<TopbarProps> = ({ userName = 'Alejandro Ramos', rol = 'Administrador' }) => {
  return (
    <header className="h-16 border-b border-gray-200 bg-white px-6 flex items-center justify-between shrink-0">
      <div className="flex items-center gap-3">
        <span className="text-sm font-bold text-pacifico-700">Academia Pacífico</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="text-right hidden sm:block">
          <p className="text-sm font-semibold text-gray-800">{userName}</p>
          <p className="text-xs text-gray-500">{rol}</p>
        </div>
        <Avatar name={userName} size="sm" />
      </div>
    </header>
  );
};
