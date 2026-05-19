"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Alert } from '@/components/ui/Alert';
import { Eye, EyeOff } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) { setError('Ingresa tu código y contraseña.'); return; }
    setLoading(true); setError('');
    try {
      const res = await fetch('/api/auth', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password }) });
      const data = await res.json();
      if (res.ok && data.success) {
        localStorage.setItem('pacifico_user', JSON.stringify(data.user));
        router.push(data.user.rol === 'ADMIN' ? '/admin/dashboard' : '/estudiante/dashboard');
      } else { setError(data.error || 'Usuario o contraseña incorrectos. Verifica tus datos.'); }
    } catch { setError('Error al conectar con el servidor.'); }
    finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left column - branding */}
      <div className="hidden lg:flex w-2/5 bg-gradient-to-br from-pacifico-900 via-pacifico-800 to-pacifico-700 flex-col items-center justify-center p-12 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage:'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}} />
        <div className="relative z-10 text-center">
          <div className="w-20 h-20 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center mx-auto mb-8 border border-white/20">
            <span className="text-4xl font-bold">AP</span>
          </div>
          <h2 className="text-3xl font-bold mb-3">Academia Pacífico</h2>
          <p className="text-pacifico-200 text-sm max-w-xs">Plataforma integral de gestión académica pre-universitaria</p>
        </div>
      </div>

      {/* Right column - form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-gray-50">
        <div className="w-full max-w-md">
          <div className="lg:hidden flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-pacifico-700 rounded-lg flex items-center justify-center text-white font-bold text-sm">AP</div>
            <span className="text-lg font-bold text-gray-900">Academia Pacífico</span>
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-1">Bienvenido de vuelta</h1>
          <p className="text-sm text-gray-500 mb-8">Ingresa con tus credenciales institucionales</p>

          {error && <div className="mb-4"><Alert type="error" message={error} /></div>}

          <form onSubmit={handleLogin} className="flex flex-col gap-5">
            <Input label="Código de estudiante o usuario" placeholder="Ej: E-2025-0023" value={email} onChange={e => setEmail(e.target.value)} />
            <div className="relative">
              <Input label="Contraseña" type={showPw ? 'text' : 'password'} placeholder="Ingresa tu contraseña" value={password} onChange={e => setPassword(e.target.value)} />
              <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-8 text-gray-400 hover:text-gray-600 cursor-pointer">
                {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            <div className="flex justify-end"><span className="text-sm text-pacifico-700 hover:underline cursor-pointer">¿Olvidaste tu contraseña?</span></div>
            <Button type="submit" loading={loading} className="w-full">Iniciar sesión</Button>
          </form>

          <div className="mt-8 p-4 bg-white border border-gray-200 rounded-lg text-xs text-gray-500">
            <p className="font-semibold mb-2 text-gray-700">Credenciales demo:</p>
            <p><span className="font-semibold text-pacifico-700">Admin:</span> admin@pacifico.edu.pe / admin</p>
            <p><span className="font-semibold text-pacifico-700">Estudiante:</span> estudiante@pacifico.edu.pe / estudiante</p>
          </div>
        </div>
      </div>
    </div>
  );
}
