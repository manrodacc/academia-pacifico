import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    const identifier = (email || '').toLowerCase().trim();
    
    // Quick Demo Credentials (supports email, code, and short username)
    if (identifier === 'admin@pacifico.edu.pe' || identifier === 'admin') {
      return NextResponse.json({
        success: true,
        user: { id: 1, nombre: 'Admin Torres', email: 'admin@pacifico.edu.pe', rol: 'ADMIN' }
      });
    } else if (
      identifier === 'estudiante@pacifico.edu.pe' || 
      identifier === 'estudiante' || 
      identifier.startsWith('e-')
    ) {
      return NextResponse.json({
        success: true,
        user: { id: 2, nombre: 'Alejandro Ramos', email: 'estudiante@pacifico.edu.pe', rol: 'ESTUDIANTE' }
      });
    }

    return NextResponse.json({ success: false, error: 'Credenciales inválidas. Usa admin/admin o estudiante/estudiante.' }, { status: 401 });
  } catch {
    return NextResponse.json({ success: false, error: 'Error del servidor' }, { status: 500 });
  }
}

