import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ 
    success: true, 
    message: 'Endpoint de Horarios activo. Próximamente integrado con MySQL y Prisma ORM.',
    data: []
  });
}

export async function POST() {
  return NextResponse.json({ 
    success: true, 
    message: 'Elemento de Horarios creado con éxito.' 
  });
}
