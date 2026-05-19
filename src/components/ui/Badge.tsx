import React from 'react';
import { CheckCircle, Clock, XCircle, MinusCircle } from 'lucide-react';

interface BadgeProps {
  variant?: 'active' | 'pending' | 'danger' | 'inactive';
  children: React.ReactNode;
}

const icons = {
  active: CheckCircle,
  pending: Clock,
  danger: XCircle,
  inactive: MinusCircle,
};

const styles: Record<string, string> = {
  active: 'bg-green-100 text-green-700',
  pending: 'bg-amber-100 text-amber-700',
  danger: 'bg-red-100 text-red-700',
  inactive: 'bg-gray-100 text-gray-600',
};

export const Badge: React.FC<BadgeProps> = ({ variant = 'active', children }) => {
  const Icon = icons[variant];
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${styles[variant]}`}>
      <Icon className="w-3.5 h-3.5" />
      {children}
    </span>
  );
};
