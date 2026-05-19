import React from 'react';

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: React.ReactNode;
}

export const MetricCard: React.FC<MetricCardProps> = ({ title, value, subtitle, icon }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-5 flex items-start justify-between">
      <div className="flex flex-col gap-1">
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{title}</span>
        <span className="text-2xl font-bold text-gray-900">{value}</span>
        {subtitle && <span className="text-xs text-gray-400 font-medium">{subtitle}</span>}
      </div>
      {icon && <div className="p-2.5 bg-pacifico-50 rounded-lg text-pacifico-700">{icon}</div>}
    </div>
  );
};
