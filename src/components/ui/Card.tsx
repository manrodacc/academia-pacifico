import React from 'react';

interface CardProps {
  title?: string;
  action?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ title, action, children, className = '' }) => {
  return (
    <div className={`bg-white rounded-lg border border-gray-200 p-6 flex flex-col gap-4 ${className}`}>
      {(title || action) && (
        <div className="flex items-center justify-between">
          {title && <h3 className="text-lg font-semibold text-gray-800">{title}</h3>}
          {action && <div>{action}</div>}
        </div>
      )}
      <div className="flex-1">{children}</div>
    </div>
  );
};
