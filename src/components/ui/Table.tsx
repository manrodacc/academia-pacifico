import React from 'react';

interface TableProps {
  headers: string[];
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export const Table: React.FC<TableProps> = ({ headers, children, footer }) => {
  return (
    <div className="w-full overflow-x-auto rounded-lg border border-gray-200 bg-white">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            {headers.map((h, i) => (
              <th key={i} className="px-6 py-3">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
          {children}
        </tbody>
      </table>
      {footer && (
        <div className="px-6 py-3 border-t border-gray-200 bg-gray-50 text-xs text-gray-500 font-medium">
          {footer}
        </div>
      )}
    </div>
  );
};
