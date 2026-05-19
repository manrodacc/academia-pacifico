import React from 'react';

export const GraficoBarras: React.FC = () => {
  return (
    <div className="w-full h-64 bg-gray-50 border border-dashed border-gray-200 rounded-xl flex flex-col justify-end p-6 gap-4">
      <div className="flex-1 flex items-end justify-between gap-4">
        {[45, 60, 85, 30, 95, 75, 90].map((val, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-2 group cursor-pointer">
            <div 
              style={{ height: `${val}%` }} 
              className="w-full bg-pacifico-500 group-hover:bg-pacifico-700 rounded-md transition-all duration-300 relative shadow-sm"
            >
              <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] font-bold px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                {val}%
              </span>
            </div>
            <span className="text-xs font-semibold text-gray-400">M{i+1}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
