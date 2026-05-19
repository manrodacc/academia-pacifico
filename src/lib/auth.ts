// Simple JWT/Session implementation helper for mock and real auth
import { UserSession } from '@/types';

export function getSession(): UserSession | null {
  if (typeof window === 'undefined') return null;
  const user = localStorage.getItem('pacifico_user');
  if (!user) return null;
  try {
    return JSON.parse(user) as UserSession;
  } catch {
    return null;
  }
}

export function loginSession(user: UserSession) {
  if (typeof window === 'undefined') return;
  localStorage.setItem('pacifico_user', JSON.stringify(user));
}

export function logoutSession() {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('pacifico_user');
}
