# Academia Pacífico — Estructura del Proyecto
> Stack: React + Tailwind CSS · Next.js (backend ligero) · MySQL

---

## Stack tecnológico

| Capa | Tecnología | Rol |
|---|---|---|
| Frontend | React + Vite o Next.js | Interfaces de usuario |
| Estilos | Tailwind CSS | Diseño visual |
| Backend | Next.js (API Routes) | Endpoints REST ligeros |
| Base de datos | MySQL | Persistencia de datos |
| ORM | Prisma | Consultas a MySQL desde Next.js |
| Autenticación | NextAuth.js o JWT simple | Manejo de sesión y roles |
| Despliegue | Vercel (frontend) + Railway o PlanetScale (MySQL) | Hosting gratuito |

> **Nota:** El foco del proyecto es la cantidad y calidad de interfaces. El backend y la base de datos son mínimos y funcionales, solo los necesarios para que las pantallas tengan datos reales o simulados.

---

## Estructura de carpetas

```
academia-pacifico/
├── prisma/
│   └── schema.prisma              # Modelos de la base de datos
├── public/
│   └── logo.svg
├── src/
│   ├── app/                       # Next.js App Router
│   │   ├── layout.tsx             # Layout raíz (fuentes, providers)
│   │   ├── page.tsx               # Redirige a /login
│   │   │
│   │   ├── login/
│   │   │   └── page.tsx           # Pantalla de inicio de sesión
│   │   │
│   │   ├── estudiante/            # Todas las interfaces del estudiante
│   │   │   ├── layout.tsx         # Layout con sidebar del estudiante
│   │   │   ├── dashboard/
│   │   │   │   └── page.tsx
│   │   │   ├── perfil/
│   │   │   │   └── page.tsx
│   │   │   ├── perfil/editar/
│   │   │   │   └── page.tsx
│   │   │   ├── horarios/
│   │   │   │   └── page.tsx
│   │   │   ├── notas/
│   │   │   │   └── page.tsx
│   │   │   ├── notas/[cursoId]/
│   │   │   │   └── page.tsx
│   │   │   ├── asistencia/
│   │   │   │   └── page.tsx
│   │   │   ├── pagos/
│   │   │   │   └── page.tsx
│   │   │   ├── pagos/[pagoId]/
│   │   │   │   └── page.tsx       # Detalle y descarga de comprobante
│   │   │   └── configuracion/
│   │   │       └── page.tsx
│   │   │
│   │   ├── admin/                 # Todas las interfaces del administrador
│   │   │   ├── layout.tsx         # Layout con sidebar del administrador
│   │   │   ├── dashboard/
│   │   │   │   └── page.tsx
│   │   │   │
│   │   │   ├── estudiantes/
│   │   │   │   ├── page.tsx       # Tabla de estudiantes
│   │   │   │   ├── nuevo/
│   │   │   │   │   └── page.tsx   # Formulario nuevo estudiante
│   │   │   │   └── [id]/
│   │   │   │       ├── page.tsx   # Ver perfil completo
│   │   │   │       └── editar/
│   │   │   │           └── page.tsx
│   │   │   │
│   │   │   ├── docentes/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── nuevo/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── [id]/
│   │   │   │       ├── page.tsx
│   │   │   │       └── editar/
│   │   │   │           └── page.tsx
│   │   │   │
│   │   │   ├── cursos/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── nuevo/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── [id]/
│   │   │   │       ├── page.tsx
│   │   │   │       └── editar/
│   │   │   │           └── page.tsx
│   │   │   │
│   │   │   ├── matriculas/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── nueva/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── [id]/
│   │   │   │       └── page.tsx
│   │   │   │
│   │   │   ├── horarios/
│   │   │   │   ├── page.tsx       # Vista semanal por curso
│   │   │   │   └── nuevo/
│   │   │   │       └── page.tsx
│   │   │   │
│   │   │   ├── notas/
│   │   │   │   ├── page.tsx       # Seleccionar curso para registrar notas
│   │   │   │   └── [cursoId]/
│   │   │   │       └── page.tsx   # Tabla de ingreso de notas
│   │   │   │
│   │   │   ├── asistencia/
│   │   │   │   ├── page.tsx       # Seleccionar curso y fecha
│   │   │   │   └── [cursoId]/
│   │   │   │       └── page.tsx   # Lista de marcación por sesión
│   │   │   │
│   │   │   ├── pagos/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── nuevo/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── [id]/
│   │   │   │       └── page.tsx
│   │   │   │
│   │   │   ├── usuarios/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── nuevo/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── [id]/
│   │   │   │       └── editar/
│   │   │   │           └── page.tsx
│   │   │   │
│   │   │   └── reportes/
│   │   │       ├── page.tsx       # Menú de reportes disponibles
│   │   │       ├── academico/
│   │   │       │   └── page.tsx
│   │   │       ├── asistencia/
│   │   │       │   └── page.tsx
│   │   │       ├── pagos/
│   │   │       │   └── page.tsx
│   │   │       └── matriculas/
│   │   │           └── page.tsx
│   │   │
│   │   └── api/                   # API Routes de Next.js (backend)
│   │       ├── auth/
│   │       │   └── route.ts
│   │       ├── estudiantes/
│   │       │   ├── route.ts       # GET lista, POST nuevo
│   │       │   └── [id]/
│   │       │       └── route.ts   # GET, PUT, DELETE por id
│   │       ├── docentes/
│   │       │   └── route.ts
│   │       ├── cursos/
│   │       │   └── route.ts
│   │       ├── matriculas/
│   │       │   └── route.ts
│   │       ├── horarios/
│   │       │   └── route.ts
│   │       ├── notas/
│   │       │   └── route.ts
│   │       ├── asistencia/
│   │       │   └── route.ts
│   │       └── pagos/
│   │           └── route.ts
│   │
│   ├── components/                # Componentes reutilizables
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Select.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Table.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Alert.tsx
│   │   │   └── Avatar.tsx
│   │   ├── layout/
│   │   │   ├── SidebarEstudiante.tsx
│   │   │   ├── SidebarAdmin.tsx
│   │   │   ├── Topbar.tsx
│   │   │   └── PageHeader.tsx
│   │   ├── dashboard/
│   │   │   ├── MetricCard.tsx
│   │   │   ├── GraficoBarras.tsx
│   │   │   └── GraficoLinea.tsx
│   │   └── forms/
│   │       ├── FormEstudiante.tsx
│   │       ├── FormDocente.tsx
│   │       ├── FormCurso.tsx
│   │       ├── FormMatricula.tsx
│   │       ├── FormPago.tsx
│   │       └── FormHorario.tsx
│   │
│   ├── lib/
│   │   ├── prisma.ts              # Cliente Prisma
│   │   └── auth.ts                # Lógica de autenticación
│   │
│   └── types/
│       └── index.ts               # Tipos TypeScript del proyecto
│
├── .env                           # Variables de entorno (DB, JWT secret)
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

---

## Base de datos MySQL (mínima y funcional)

Solo las tablas necesarias para que las interfaces tengan datos reales.

```sql
-- Usuarios del sistema (estudiantes y admins)
usuarios (id, nombre, email, password_hash, rol, foto_url, activo)

-- Datos extendidos del estudiante
estudiantes (id, usuario_id, dni, telefono, carrera_objetivo, ciclo_actual)

-- Docentes
docentes (id, nombre, especialidad, email, activo)

-- Cursos
cursos (id, nombre, area, docente_id, activo)

-- Matrículas (qué estudiante está en qué ciclo)
matriculas (id, estudiante_id, ciclo, fecha, estado)

-- Cursos por matrícula
matricula_cursos (id, matricula_id, curso_id)

-- Horarios
horarios (id, curso_id, dia, hora_inicio, hora_fin, aula)

-- Notas
notas (id, estudiante_id, curso_id, tipo, valor, fecha)

-- Asistencia
asistencia (id, estudiante_id, curso_id, fecha, estado)

-- Pagos
pagos (id, estudiante_id, concepto, monto, fecha, estado, metodo)
```

> Son 10 tablas. Simples, sin relaciones complejas. Suficientes para alimentar todas las interfaces.

---

## Conteo de interfaces (pantallas)

### Panel del estudiante — 12 pantallas

| # | Ruta | Descripción |
|---|---|---|
| 1 | `/login` | Inicio de sesión |
| 2 | `/estudiante/dashboard` | Dashboard con tarjetas de resumen |
| 3 | `/estudiante/perfil` | Ver perfil personal |
| 4 | `/estudiante/perfil/editar` | Editar foto, datos y contraseña |
| 5 | `/estudiante/horarios` | Vista semanal de clases |
| 6 | `/estudiante/notas` | Lista de cursos con promedio |
| 7 | `/estudiante/notas/[cursoId]` | Detalle de notas por curso |
| 8 | `/estudiante/asistencia` | Historial de asistencia |
| 9 | `/estudiante/pagos` | Lista de cuotas y estado |
| 10 | `/estudiante/pagos/[pagoId]` | Detalle y comprobante de pago |
| 11 | `/estudiante/configuracion` | Cambio de contraseña y preferencias |
| 12 | `404 / sin acceso` | Pantalla de error de acceso |

### Panel del administrador — 34 pantallas

| # | Ruta | Descripción |
|---|---|---|
| 13 | `/admin/dashboard` | Dashboard con métricas y gráficos |
| 14 | `/admin/estudiantes` | Tabla de estudiantes con búsqueda |
| 15 | `/admin/estudiantes/nuevo` | Formulario nuevo estudiante |
| 16 | `/admin/estudiantes/[id]` | Perfil completo del estudiante |
| 17 | `/admin/estudiantes/[id]/editar` | Editar datos del estudiante |
| 18 | `/admin/docentes` | Tabla de docentes |
| 19 | `/admin/docentes/nuevo` | Formulario nuevo docente |
| 20 | `/admin/docentes/[id]` | Ver perfil del docente |
| 21 | `/admin/docentes/[id]/editar` | Editar docente |
| 22 | `/admin/cursos` | Tabla de cursos |
| 23 | `/admin/cursos/nuevo` | Formulario nuevo curso |
| 24 | `/admin/cursos/[id]` | Ver detalle del curso |
| 25 | `/admin/cursos/[id]/editar` | Editar curso |
| 26 | `/admin/matriculas` | Tabla de matrículas |
| 27 | `/admin/matriculas/nueva` | Formulario nueva matrícula |
| 28 | `/admin/matriculas/[id]` | Ver detalle de matrícula |
| 29 | `/admin/horarios` | Vista semanal de horarios |
| 30 | `/admin/horarios/nuevo` | Formulario nuevo bloque horario |
| 31 | `/admin/notas` | Selección de curso para registrar notas |
| 32 | `/admin/notas/[cursoId]` | Tabla de ingreso de notas por curso |
| 33 | `/admin/asistencia` | Selección de curso y fecha |
| 34 | `/admin/asistencia/[cursoId]` | Marcación de asistencia por sesión |
| 35 | `/admin/pagos` | Tabla general de pagos |
| 36 | `/admin/pagos/nuevo` | Registrar nuevo pago |
| 37 | `/admin/pagos/[id]` | Detalle de pago + comprobante |
| 38 | `/admin/usuarios` | Tabla de cuentas del sistema |
| 39 | `/admin/usuarios/nuevo` | Crear nuevo usuario |
| 40 | `/admin/usuarios/[id]/editar` | Editar usuario y rol |
| 41 | `/admin/reportes` | Menú de reportes disponibles |
| 42 | `/admin/reportes/academico` | Reporte de rendimiento académico |
| 43 | `/admin/reportes/asistencia` | Reporte de asistencia |
| 44 | `/admin/reportes/pagos` | Reporte financiero |
| 45 | `/admin/reportes/matriculas` | Reporte de matrículas por ciclo |
| 46 | `/admin/perfil` | Perfil del administrador logueado |

### Total: 46 pantallas únicas

---

## Orden de desarrollo recomendado

Dado que el foco es la cantidad de interfaces, se recomienda este orden:

### Fase 1 — Base y autenticación
1. Configurar Next.js + Tailwind + Prisma + MySQL
2. Crear los modelos en `schema.prisma`
3. Insertar datos de prueba (seed)
4. Implementar login con redirección por rol
5. Crear layouts de sidebar (estudiante y admin)

### Fase 2 — Interfaces del estudiante (prioridad visual)
6. Dashboard del estudiante
7. Perfil y edición de perfil
8. Horarios
9. Notas (lista + detalle por curso)
10. Asistencia
11. Pagos (lista + detalle/comprobante)
12. Configuración

### Fase 3 — Interfaces del administrador (CRUD)
13. Dashboard admin con métricas y gráficos
14. Módulo de estudiantes (tabla + nuevo + ver + editar)
15. Módulo de docentes
16. Módulo de cursos
17. Módulo de matrículas
18. Módulo de horarios
19. Módulo de notas (registro masivo)
20. Módulo de asistencia (marcación)
21. Módulo de pagos
22. Módulo de usuarios y roles

### Fase 4 — Reportes y detalles finales
23. Pantalla de menú de reportes
24. Los 4 reportes con filtros y tabla de resultados
25. Perfil del administrador
26. Pantalla 404 y sin permisos
27. Ajustes de responsividad y consistencia visual

---

## Componentes UI reutilizables clave

Estos componentes se usan en todas las interfaces y deben construirse primero:

| Componente | Uso |
|---|---|
| `<Button>` | Primario, secundario, peligro, ghost |
| `<Input>` | Texto, contraseña, búsqueda, fecha |
| `<Select>` | Dropdowns de filtros y formularios |
| `<Table>` | Listados con paginación y búsqueda |
| `<Modal>` | Confirmaciones de eliminación y alertas |
| `<Badge>` | Estado: activo, pendiente, vencido, aprobado |
| `<Card>` | Contenedor de secciones y métricas |
| `<Alert>` | Mensajes de éxito, error e información |
| `<Avatar>` | Foto de perfil con iniciales de respaldo |
| `<PageHeader>` | Título + botón de acción por pantalla |
| `<SidebarEstudiante>` | Menú lateral del panel estudiante |
| `<SidebarAdmin>` | Menú lateral colapsable del admin |
| `<MetricCard>` | Tarjeta de indicador numérico para dashboards |

---

## Paleta de colores (Tailwind)

Agregar en `tailwind.config.ts`:

```ts
colors: {
  pacifico: {
    50:  '#EFF6FF',
    100: '#DBEAFE',
    200: '#BFDBFE',
    500: '#3B82F6',
    700: '#1D4ED8',
    900: '#1E3A8A',
  },
  oro: {
    100: '#FEF3C7',
    400: '#FBBF24',
    600: '#D97706',
  }
}
```

- **Primario:** `pacifico-700` — azul institucional
- **Acento:** `oro-400` — indicadores de logro y alertas positivas
- **Fondo:** `gray-50` — superficies de página
- **Superficies:** `white` — tarjetas y paneles
- **Texto:** `gray-900` principal, `gray-500` secundario

---

## Variables de entorno (.env)

```env
DATABASE_URL="mysql://usuario:password@localhost:3306/academia_pacifico"
JWT_SECRET="clave-secreta-del-proyecto"
NEXTAUTH_SECRET="otra-clave-secreta"
NEXTAUTH_URL="http://localhost:3000"
```
