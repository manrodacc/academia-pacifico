import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    const identifier = (email || '').toLowerCase().replace(/\s+/g, '').trim();
    
    console.log(`[AUTH API] Intento de login recibido - Email: "${email}", Identifier procesado: "${identifier}"`);

    // Quick Demo Credentials (supports email, code, and short username)
    if (identifier.includes('admin') || identifier === 'admin@pacifico.edu.pe') {
      console.log(`[AUTH API] Login exitoso para Administrador: "${email}"`);
      return NextResponse.json({
        success: true,
        user: { id: 1, nombre: 'Admin Torres', email: 'admin@pacifico.edu.pe', rol: 'ADMIN' }
      });
    } else if (
      identifier.includes('estudiante') || 
      identifier.includes('juan') || 
      identifier.includes('alejandro') || 
      identifier.startsWith('e-')
    ) {
      console.log(`[AUTH API] Login exitoso para Estudiante: "${email}"`);
      return NextResponse.json({
        success: true,
        user: { id: 2, nombre: 'Alejandro Ramos', email: 'estudiante@pacifico.edu.pe', rol: 'ESTUDIANTE' }
      });
    }

    console.warn(`[AUTH API] Intento fallido de login con credenciales inválidas: "${email}"`);
    return NextResponse.json({ success: false, error: 'Credenciales inválidas. Usa admin/admin o estudiante/estudiante.' }, { status: 401 });
  } catch (error: any) {
    console.error('[AUTH API] Error crítico en la ruta de autenticación:', error);
    return NextResponse.json({ success: false, error: error?.message || 'Error del servidor' }, { status: 500 });
  }
}

