import React from 'react';

export const GraficoLinea: React.FC = () => {
  return (
    <div className="w-full h-64 bg-gray-50 border border-dashed border-gray-200 rounded-xl flex items-center justify-center p-6 text-gray-400 font-semibold text-sm">
      <div className="flex flex-col items-center gap-3">
        <span>📈 Gráfico de Rendimiento Histórico</span>
        <span className="text-xs font-normal text-gray-400">Promedio general acumulado por ciclo</span>
      </div>
    </div>
  );
};
