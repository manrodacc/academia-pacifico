import React from 'react';
import { CheckCircle, XCircle, Info, AlertTriangle } from 'lucide-react';

interface AlertProps {
  type?: 'success' | 'error' | 'info' | 'warning';
  message: string;
}

const config = {
  success: { icon: CheckCircle, border: 'border-green-500', bg: 'bg-green-50', text: 'text-green-800' },
  error: { icon: XCircle, border: 'border-red-500', bg: 'bg-red-50', text: 'text-red-800' },
  info: { icon: Info, border: 'border-blue-500', bg: 'bg-blue-50', text: 'text-blue-800' },
  warning: { icon: AlertTriangle, border: 'border-amber-500', bg: 'bg-amber-50', text: 'text-amber-800' },
};

export const Alert: React.FC<AlertProps> = ({ type = 'info', message }) => {
  const c = config[type];
  const Icon = c.icon;
  return (
    <div className={`w-full px-4 py-3 rounded-lg border-l-4 ${c.border} ${c.bg} ${c.text} flex items-center gap-3 text-sm font-medium`}>
      <Icon className="w-5 h-5 shrink-0" />
      <span>{message}</span>
    </div>
  );
};
