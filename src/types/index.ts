export interface UserSession {
  id: number;
  nombre: string;
  email: string;
  rol: 'ESTUDIANTE' | 'ADMIN';
  fotoUrl?: string;
}

export interface MetricData {
  title: string;
  value: string | number;
  change?: string;
  type?: 'positive' | 'negative' | 'neutral';
  icon?: string;
}
