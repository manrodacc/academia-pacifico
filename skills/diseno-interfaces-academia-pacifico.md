# Academia Pacífico — Diseño de Interfaces
> Documento de Diseño UI/UX · Curso: Interacción Humano-Computador · Versión 1.0

---

## 1. Fundamentos de diseño y principios IHC aplicados

Este documento describe las decisiones de diseño de las 46 interfaces del sistema **Academia Pacífico**, justificadas en los principios heurísticos de Nielsen y los conceptos del factor humano estudiados en el curso.

### 1.1 Heurísticas de Nielsen aplicadas al sistema

| # | Heurística | Aplicación en Academia Pacífico |
|---|---|---|
| H1 | **Visibilidad del estado del sistema** | Barras de progreso en cargas, badges de estado en pagos/asistencia, indicador del ítem activo en el sidebar. |
| H2 | **Relación sistema–usuario** | Lenguaje en español natural ("Mis notas", "Mis pagos"), sin términos técnicos de base de datos. Las fechas se muestran como "Lunes 12 de junio" no como `2025-06-12`. |
| H3 | **Control y libertad** | Botón "Cancelar" en todos los formularios, confirmación modal antes de eliminar, posibilidad de cerrar modales con `Esc` o clic fuera. |
| H4 | **Consistencia y estándares** | Un único componente `<Button>` para todas las acciones primarias. El botón de guardar siempre está en la esquina inferior derecha. Los colores de estado son idénticos en todos los módulos. |
| H5 | **Prevención de errores** | Campos con formato de ejemplo (`placeholder`), validación en tiempo real, select pre-poblados en vez de campos de texto libre, desactivar el botón "Guardar" mientras hay errores. |
| H6 | **Reconocer antes que recordar** | El sidebar siempre visible muestra en qué sección está el usuario. Los breadcrumbs en páginas internas (ej: `Estudiantes › Juan Pérez › Editar`). |
| H7 | **Flexibilidad y eficiencia** | Búsqueda global en tablas, filtros rápidos por estado, atajos visuales en el dashboard para acciones frecuentes. |
| H8 | **Diseño minimalista** | Cada pantalla expone solo la información necesaria. El dashboard estadístico agrupa métricas en tarjetas compactas. |
| H9 | **Recuperación de errores** | Mensajes de error en lenguaje claro: "El DNI ya está registrado, revisa el número e intenta de nuevo." No solo "Error 409". |
| H10 | **Ayuda y documentación** | Tooltips en iconos sin etiqueta, texto de ayuda bajo campos complejos (`<p class="text-sm text-gray-500">`). |

### 1.2 Factor humano: Percepción y memoria

**Color y accesibilidad (daltonismo):**
- No se usa color como único indicador. Cada badge de estado combina color + ícono + texto (ej: ✅ verde + texto "Pagado", no solo verde).
- Contraste mínimo de 4.5:1 entre texto y fondo (WCAG AA).
- Se evitan combinaciones rojo-verde para estados críticos; se usa rojo-azul o rojo-amarillo.

**Memoria de trabajo:**
- Los formularios multi-paso muestran un indicador de progreso ("Paso 2 de 3").
- Al registrar notas, el nombre del estudiante y el curso permanecen visibles mientras se edita la tabla.
- No se requiere recordar datos de una pantalla a otra: los selects y autocompletados traen la información.

**Modelos mentales:**
- El layout de sidebar izquierdo + contenido derecho replica sistemas conocidos (Gmail, Google Classroom).
- Las tablas con acciones (Ver / Editar / Eliminar) siguen el patrón esperado en sistemas de gestión.
- El dashboard usa tarjetas tipo "KPI" que los administradores ya conocen de otros sistemas.

### 1.3 Organización visual (Gestalt)

- **Proximidad:** Los campos relacionados de un formulario se agrupan en secciones con encabezado (ej: "Datos personales" y "Credenciales de acceso" son bloques separados).
- **Cierre:** Cada sección se encierra en una `<Card>` con borde sutil y fondo blanco sobre `gray-50`.
- **Continuidad:** El flujo de lectura es siempre izquierda → derecha, arriba → abajo. Los botones de acción están a la derecha del formulario.

---

## 2. Sistema de diseño

### 2.1 Paleta de colores

```
Colores primarios (Institución):
  pacifico-900  →  #1E3A8A  (azul marino — sidebar, encabezados)
  pacifico-700  →  #1D4ED8  (azul institucional — botones primarios, links)
  pacifico-500  →  #3B82F6  (azul medio — hover states, íconos activos)
  pacifico-100  →  #DBEAFE  (azul claro — fondos de badge, highlights)
  pacifico-50   →  #EFF6FF  (azul muy claro — fondo sidebar activo)

Colores de acento (Logros y alertas positivas):
  oro-600       →  #D97706  (ámbar oscuro — alerta, pendiente)
  oro-400       →  #FBBF24  (ámbar — badge pendiente)
  oro-100       →  #FEF3C7  (ámbar claro — fondo badge pendiente)

Colores de estado:
  Estado Pagado / Aprobado / Presente   →  green-600  #16A34A  (ícono ✓ + texto)
  Estado Pendiente / Tardanza           →  amber-500  #F59E0B  (ícono ⚠ + texto)
  Estado Vencido / Desaprobado / Falta  →  red-600    #DC2626  (ícono ✗ + texto)
  Estado Inactivo / Anulado             →  gray-500   #6B7280  (ícono — + texto)

Superficies:
  Fondo de página    →  gray-50   #F9FAFB
  Tarjetas / panels  →  white     #FFFFFF
  Bordes             →  gray-200  #E5E7EB
  Sidebar            →  pacifico-900 (#1E3A8A) con texto blanco
```

> **Justificación IHC:** Los colores siempre van acompañados de íconos y texto, garantizando accesibilidad para personas con visión reducida al color. El alto contraste entre el sidebar oscuro y el contenido claro delimita claramente las zonas funcionales.

### 2.2 Tipografía

```
Familia principal:  "Plus Jakarta Sans" (Google Fonts)
  — Sans-serif moderno, alta legibilidad en pantalla.
  — Disponible en variable font (400, 500, 600, 700).

Jerarquía tipográfica:
  Título de página (H1)    →  24px / font-bold   / gray-900
  Título de sección (H2)   →  18px / font-semibold / gray-800
  Subtítulo / Label (H3)   →  14px / font-semibold / gray-700
  Cuerpo / tabla           →  14px / font-normal  / gray-700
  Texto secundario         →  13px / font-normal  / gray-500
  Texto de ayuda / hint    →  12px / font-normal  / gray-400
  Badge / estado           →  12px / font-medium  / (color según estado)

Tamaño mínimo: 12px (≥10px requerido por curso).
```

> **Justificación IHC:** "Plus Jakarta Sans" tiene una altura de x alta que mejora la legibilidad. El tamaño mínimo de 12px supera el umbral de 10px indicado en las heurísticas del curso.

### 2.3 Espaciado y grilla

```
Unidad base: 4px (escala Tailwind)

Espaciado entre secciones:  32px (gap-8)
Espaciado interno de card:  24px (p-6)
Espaciado entre campos:     16px (gap-4)
Espaciado entre ítems tabla: 12px (py-3)

Grilla de contenido:
  Sidebar:       256px fijo (w-64)
  Área de contenido: flex-1 con max-w-7xl centrado
  Padding lateral del contenido: 24px (px-6)
```

### 2.4 Componentes UI

#### `<Button>` — 4 variantes

```
Primario    bg-pacifico-700  text-white    hover:bg-pacifico-800
            → "Guardar", "Registrar", "Crear nuevo"

Secundario  bg-white  border border-gray-300  text-gray-700  hover:bg-gray-50
            → "Cancelar", "Volver", "Ver detalle"

Peligro     bg-red-600  text-white  hover:bg-red-700
            → "Eliminar" (solo dentro de modal de confirmación)

Ghost       text-pacifico-700  hover:bg-pacifico-50  (sin borde)
            → Acciones dentro de tablas: "Ver", "Editar"
```

#### `<Badge>` — Estados estandarizados

```
Pagado / Presente / Aprobado / Activo
  →  bg-green-100  text-green-700  + ícono CheckCircle

Pendiente / Tardanza
  →  bg-amber-100  text-amber-700  + ícono Clock

Vencido / Falta / Desaprobado / Inactivo
  →  bg-red-100  text-red-700  + ícono XCircle

Anulado
  →  bg-gray-100  text-gray-600  + ícono MinusCircle
```

> **Justificación IHC:** Color + ícono + texto garantizan que el estado sea reconocible incluso sin percibir el color (H5 prevención, accesibilidad para daltonismo).

#### `<Modal>` — Confirmación de eliminación

```
Estructura:
  Overlay semitransparente (bg-black/40)
  Card centrada 480px de ancho
  Ícono de advertencia (ámbar)
  Título: "¿Eliminar este [elemento]?"
  Descripción: "Esta acción no se puede deshacer."
  Botones: [Cancelar (secundario)] [Eliminar (peligro)]
```

#### `<Alert>` — Feedback de acciones

```
Éxito   →  bg-green-50  border-l-4 border-green-500  + ícono ✓
Error   →  bg-red-50    border-l-4 border-red-500    + ícono ✗
Info    →  bg-blue-50   border-l-4 border-blue-500   + ícono ℹ
Alerta  →  bg-amber-50  border-l-4 border-amber-500  + ícono ⚠

Posición: toast en esquina superior derecha, auto-cierre en 4s.
```

---

## 3. Layout base del sistema

### 3.1 Estructura general (ambos paneles)

```
┌─────────────────────────────────────────────────────────┐
│  TOPBAR  (altura: 64px, bg-white, border-b gray-200)    │
│  [☰ Logo Academia Pacífico]        [Avatar + Nombre ▾]  │
├──────────────┬──────────────────────────────────────────┤
│              │                                          │
│   SIDEBAR    │         ÁREA DE CONTENIDO               │
│   (256px)    │         (flex-1, bg-gray-50)            │
│   bg-        │                                          │
│   pacifico   │  ┌─────────────────────────────────┐   │
│   -900       │  │  PageHeader                     │   │
│              │  │  Título                [Acción]  │   │
│  Ítem activo │  ├─────────────────────────────────┤   │
│  bg-pacifico │  │                                 │   │
│  -700        │  │  Contenido de la pantalla       │   │
│              │  │                                 │   │
│  Ítem normal │  └─────────────────────────────────┘   │
│  text-       │                                          │
│  pacifico    │                                          │
│  -200        │                                          │
└──────────────┴──────────────────────────────────────────┘
```

### 3.2 Sidebar del estudiante

```
Secciones en orden:
  ───────────────────────
  [Avatar + Nombre + Ciclo]
  ───────────────────────
  🏠  Dashboard
  👤  Mi perfil
  📅  Horarios
  📊  Notas y simulacros
  ✅  Asistencia
  💳  Pagos
  ⚙️  Configuración
  ───────────────────────
  🚪  Cerrar sesión
```

### 3.3 Sidebar del administrador

```
Secciones en orden:
  ──────────────────────
  [Logo + "Admin"]
  ──────────────────────
  📊  Dashboard

  ACADÉMICO
  👥  Estudiantes
  🧑‍🏫  Docentes
  📚  Cursos
  📋  Matrículas
  🗓️  Horarios

  REGISTRO
  📝  Notas
  ✅  Asistencia

  FINANZAS
  💳  Pagos

  SISTEMA
  👤  Usuarios y roles
  📈  Reportes
  ──────────────────────
  [Avatar admin]
  🚪  Cerrar sesión
```

> **Justificación IHC:** Las secciones agrupadas por categoría (Gestalt — proximidad) reducen la carga cognitiva. El ítem activo resaltado cumple H1 (visibilidad del estado) y H6 (reconocer sin recordar).

---

## 4. Diseño de pantallas — Panel Estudiante

### Pantalla 1: Login (`/login`)

**Objetivo:** Autenticar al usuario e identificar su rol automáticamente.

```
Layout: Pantalla dividida verticalmente en 2 columnas (desktop):
  Columna izquierda (40%): imagen institucional / ilustración + logo
  Columna derecha (60%): formulario de acceso

Formulario:
  Logo Academia Pacífico (centrado)
  H1: "Bienvenido de vuelta"
  Subtexto: "Ingresa con tus credenciales institucionales"

  [Label] Código de estudiante o usuario
  [Input type="text" placeholder="Ej: E-2025-0023"]

  [Label] Contraseña
  [Input type="password" + toggle mostrar/ocultar]

  [Link] ¿Olvidaste tu contraseña?

  [Button primario full-width] Iniciar sesión

  Alert de error (si credenciales incorrectas):
  "Usuario o contraseña incorrectos. Verifica tus datos."
```

**Decisiones de diseño:**
- Placeholder con ejemplo de formato → H5 prevención de errores.
- Botón de mostrar/ocultar contraseña → H3 control y libertad.
- Mensaje de error descriptivo → H9 recuperación de errores.
- Sin CAPTCHA ni pasos extra → H8 diseño minimalista.

---

### Pantalla 2: Dashboard del estudiante (`/estudiante/dashboard`)

**Objetivo:** Vista rápida del estado académico y financiero del ciclo actual.

```
PageHeader: "¡Hola, [Nombre]! 👋"
Subtexto: "Ciclo 2025-II · [fecha actual]"

Fila 1 — Tarjetas de resumen (4 en grilla 2x2 en mobile, 4x1 en desktop):
  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐
  │ 📅 Próxima   │ │ 📊 Promedio  │ │ ✅ Asistencia│ │ 💳 Pagos     │
  │    clase     │ │    general   │ │    del ciclo │ │    al día    │
  │ Matemática   │ │   14.8 / 20  │ │    92%       │ │ Badge: OK    │
  │ 08:00 - Aula │ │ Badge:Aprob. │ │ Badge: Bien  │ │ o Badge:⚠   │
  └──────────────┘ └──────────────┘ └──────────────┘ └──────────────┘

Fila 2 — Sección "Mis cursos esta semana":
  Vista de lista con: nombre del curso, docente, día/hora, aula
  (máximo 5 ítems, link "Ver horario completo →")

Fila 3 — Sección "Últimas notas":
  Tabla compacta: Curso | Evaluación | Nota | Estado
  (máximo 4 filas, link "Ver todas mis notas →")

Si hay pagos pendientes/vencidos:
  Alert prominente (ámbar/rojo) en la parte superior:
  "⚠ Tienes 1 pago vencido. Acércate a caja para regularizar."
```

**Decisiones de diseño:**
- Alert de deuda en posición prominente → H1 visibilidad del estado.
- Accesos directos a cada módulo → H7 eficiencia de uso.
- Datos clave visibles sin navegar → H6 reconocer antes que recordar.

---

### Pantalla 3: Mi perfil (`/estudiante/perfil`)

**Objetivo:** Ver los datos personales del estudiante.

```
Layout: 2 columnas
  Columna izquierda (30%):
    Card centrada:
      [Avatar grande 96px — foto o iniciales]
      [Button ghost] "Cambiar foto"
      Nombre completo (H2)
      Badge: "Ciclo 2025-II"
      Código: E-2025-0023

  Columna derecha (70%):
    Card "Datos personales":
      DNI:              [valor]
      Correo:           [valor]
      Teléfono:         [valor]
      Carrera objetivo: [valor]

    [Button secundario] "Editar mis datos"
    [Button ghost]      "Cambiar contraseña"
```

---

### Pantalla 4: Editar perfil (`/estudiante/perfil/editar`)

**Objetivo:** Actualizar datos editables.

```
Breadcrumb: Mi perfil › Editar

Card "Editar información de contacto":
  Nota informativa: "Solo puedes editar tu correo y teléfono."

  [Label] Correo electrónico
  [Input type="email" value="correo@actual.com"]
  [Texto ayuda] "Recibirás notificaciones en este correo."

  [Label] Teléfono
  [Input type="tel" value="+51 999 999 999"]

  Separador

  [Label] Foto de perfil
  [Área de drag & drop o click para subir imagen]
  Restricción: JPG o PNG, máx. 2MB

  Separador

Card "Cambiar contraseña":
  [Label] Contraseña actual
  [Input type="password"]

  [Label] Nueva contraseña
  [Input type="password"]
  [Indicador de fortaleza: Débil / Media / Fuerte]

  [Label] Confirmar nueva contraseña
  [Input type="password"]
  [Texto error si no coinciden: "Las contraseñas no coinciden"]

Botones (alineados a la derecha):
  [Cancelar (secundario)]   [Guardar cambios (primario)]
```

---

### Pantalla 5: Horarios (`/estudiante/horarios`)

**Objetivo:** Ver el horario semanal del estudiante.

```
PageHeader: "Mi horario — Ciclo 2025-II"

Vista: Grilla semanal (Lunes a Sábado × franjas horarias)

Estructura de la grilla:
        │ Lunes  │ Martes │ Miérc. │ Jueves │ Viernes│ Sábado │
  ──────┼────────┼────────┼────────┼────────┼────────┼────────┤
  07:00 │        │        │        │        │        │        │
  08:00 │ [Mate] │        │ [Mate] │        │ [Mate] │        │
  09:00 │        │ [Fís.] │        │ [Fís.] │        │        │
  ...

Cada bloque de clase muestra:
  Nombre del curso (bold)
  Docente (texto small)
  Aula (texto small, gray)
  Color de fondo diferenciado por área (Ciencias / Letras / etc.)

El día actual se destaca con borde pacifico-700.

En mobile: vista de lista por día (acordeón colapsable).
```

> **Justificación IHC:** Vista de lista en mobile reduce el scroll horizontal (responsividad). El día actual resaltado cumple H1.

---

### Pantalla 6: Notas — lista de cursos (`/estudiante/notas`)

**Objetivo:** Ver el promedio por curso del ciclo actual.

```
PageHeader: "Mis notas — Ciclo 2025-II"

Card por cada curso matriculado:
  ┌─────────────────────────────────────────────────┐
  │  📚 Matemática Preuniversitaria                 │
  │  Docente: Prof. García                          │
  │                                                 │
  │  Promedio:  [15.4 / 20]   [Badge: Aprobado ✓]  │
  │                                                 │
  │  Barra de progreso visual: ██████████░░ 77%     │
  │                                                 │
  │                          [Ver detalle →]        │
  └─────────────────────────────────────────────────┘
  (repetido para cada curso)
```

---

### Pantalla 7: Notas — detalle de curso (`/estudiante/notas/[cursoId]`)

**Objetivo:** Ver todas las evaluaciones de un curso.

```
Breadcrumb: Mis notas › Matemática Preuniversitaria

Card con tabla:
  Evaluación          │ Fecha       │ Nota  │ Estado
  ────────────────────┼─────────────┼───────┼──────────
  Examen Parcial 1    │ 15 mar 2025 │ 14    │ Aprobado
  Simulacro 1         │ 22 mar 2025 │ 16    │ Aprobado
  Examen Parcial 2    │ 05 abr 2025 │ 13    │ Aprobado
  Simulacro 2         │ 12 abr 2025 │ 15    │ Aprobado
  Examen Final        │ 30 abr 2025 │ 18    │ Aprobado
  ────────────────────┼─────────────┼───────┼──────────
  PROMEDIO FINAL      │             │ 15.2  │ ✓ Aprobado

Historial de ciclos anteriores (acordeón colapsable):
  [▶ Ver notas de ciclos anteriores]
```

---

### Pantalla 8: Asistencia (`/estudiante/asistencia`)

**Objetivo:** Ver el historial de asistencia por curso.

```
PageHeader: "Mi asistencia — Ciclo 2025-II"

Selector de curso (tab o select):
  [Matemática] [Física] [Química] [Lengua] ...

Por curso seleccionado:
  Indicador circular grande:
    "92% de asistencia"
    Subtexto: "44 de 48 sesiones asistidas"

  Tabla de sesiones:
    Fecha       │ Sesión │ Estado
    ────────────┼────────┼───────────────
    Lun 03 mar  │   1    │ ✅ Presente
    Mié 05 mar  │   2    │ ✅ Presente
    Lun 10 mar  │   3    │ ⏰ Tardanza
    Mié 12 mar  │   4    │ ❌ Falta
    ...

  Resumen al pie:
    Presente: 40   Tardanzas: 4   Faltas: 4
```

---

### Pantalla 9: Pagos (`/estudiante/pagos`)

**Objetivo:** Ver el estado de todas las cuotas del ciclo.

```
PageHeader: "Mis pagos — Ciclo 2025-II"

Resumen superior:
  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐
  │ Total pagado │ │ Pendiente    │ │ Próximo pago │
  │   S/ 1,200   │ │   S/ 400     │ │ 15 jun 2025  │
  └──────────────┘ └──────────────┘ └──────────────┘

Tabla de cuotas:
  Concepto        │ Vencimiento  │ Monto    │ Estado      │ Acción
  ────────────────┼──────────────┼──────────┼─────────────┼──────────
  Matrícula       │ 05 feb 2025  │ S/ 200   │ ✅ Pagado   │ [PDF]
  Cuota 1         │ 15 feb 2025  │ S/ 200   │ ✅ Pagado   │ [PDF]
  Cuota 2         │ 15 mar 2025  │ S/ 200   │ ✅ Pagado   │ [PDF]
  Cuota 3         │ 15 abr 2025  │ S/ 200   │ ✅ Pagado   │ [PDF]
  Cuota 4         │ 15 may 2025  │ S/ 200   │ ✅ Pagado   │ [PDF]
  Cuota 5         │ 15 jun 2025  │ S/ 200   │ ⚠ Pendiente │  —
  Cuota 6         │ 15 jul 2025  │ S/ 200   │ — Futuro   │  —

Si hay pago vencido → Alert rojo al tope:
  "❌ Tienes pagos vencidos. Acércate a caja para regularizar."
```

---

### Pantalla 10: Detalle de pago (`/estudiante/pagos/[pagoId]`)

**Objetivo:** Ver comprobante y descargar en PDF.

```
Breadcrumb: Mis pagos › Cuota 1 — Febrero 2025

Card estilo comprobante:
  [Logo Academia Pacífico]           [Número: 0045]
  ─────────────────────────────────────────────────
  Concepto:   Cuota 1 — Ciclo 2025-II
  Estudiante: Juan Carlos Pérez López
  DNI:        74521836
  Monto:      S/ 200.00
  Método:     Efectivo
  Fecha pago: 14 feb 2025
  Atendido:   Luis Torres (Caja)
  ─────────────────────────────────────────────────
  Estado: ✅ PAGADO

  [Button primario] 📄 Descargar comprobante PDF
  [Button secundario] Volver a pagos
```

---

### Pantalla 11: Configuración (`/estudiante/configuracion`)

**Objetivo:** Cambiar contraseña y preferencias básicas.

```
PageHeader: "Configuración"

Card "Seguridad":
  (igual a la sección de contraseña de Editar perfil)

Card "Preferencias de visualización":
  Tema: [☀️ Claro] [🌙 Oscuro (próximamente)]
  Idioma: Español (único disponible)
```

---

### Pantalla 12: Error / Sin acceso (`/403`, `/404`)

```
Centrado vertical y horizontal:
  Ilustración simple (ícono grande)
  404: "Página no encontrada"  — ícono: mapa con pin
  403: "Sin autorización"       — ícono: candado

  Mensaje descriptivo
  [Button primario] "Volver al inicio"
```

---

## 5. Diseño de pantallas — Panel Administrador

### Pantalla 13: Dashboard (`/admin/dashboard`)

**Objetivo:** Vista ejecutiva del estado del sistema.

```
PageHeader: "Dashboard — Ciclo 2025-II"

Fila 1 — Métricas KPI (grilla 3×2):
  ┌────────────────┐ ┌────────────────┐ ┌────────────────┐
  │ 👥 Estudiantes │ │ 💰 Ingresos    │ │ ✅ Asistencia  │
  │     142        │ │  S/ 28,400     │ │     89.3%      │
  │  matriculados  │ │    este mes    │ │   promedio     │
  └────────────────┘ └────────────────┘ └────────────────┘
  ┌────────────────┐ ┌────────────────┐ ┌────────────────┐
  │ 📚 Cursos      │ │ ⚠ Pagos        │ │ 📊 Rendimiento │
  │      8         │ │   pendientes   │ │     14.6       │
  │    activos     │ │      23        │ │   promedio gral│
  └────────────────┘ └────────────────┘ └────────────────┘

Fila 2 — Gráficos:
  Columna izquierda (60%):
    Card "Rendimiento académico por curso"
    Gráfico de barras horizontales
    [Curso vs Promedio] — barras en pacifico-500

  Columna derecha (40%):
    Card "Ingresos mensuales 2025"
    Gráfico de línea
    Eje X: meses, Eje Y: soles

Fila 3 — Tablas:
  Columna izquierda (50%):
    Card "Pagos pendientes hoy":
    Estudiante | Cuota | Monto | Vencimiento
    (lista de 5, link "Ver todos →")

  Columna derecha (50%):
    Card "Actividad reciente":
    Acción | Usuario | Hora
    (log de últimas 8 acciones)
```

---

### Pantallas 14–17: Módulo de Estudiantes

#### Lista de estudiantes (`/admin/estudiantes`)

```
PageHeader: "Estudiantes"    [+ Nuevo estudiante]

Barra de herramientas:
  [🔍 Buscar por nombre, código o DNI]
  [Filtro: Ciclo ▾] [Filtro: Estado ▾] [Filtro: Carrera ▾]

Tabla:
  Código  │ Nombre completo │ DNI       │ Carrera    │ Ciclo    │ Estado   │ Acciones
  ────────┼─────────────────┼───────────┼────────────┼──────────┼──────────┼──────────
  E-0023  │ Juan Pérez      │ 74521836  │ Medicina   │ 2025-II  │ Activo ✓ │ [Ver][✏][🗑]
  E-0024  │ María García    │ 69874512  │ Derecho    │ 2025-II  │ Activo ✓ │ [Ver][✏][🗑]
  ...

Paginación al pie: [← Anterior]  1 2 3 ...  [Siguiente →]
Total: "Mostrando 20 de 142 estudiantes"
```

#### Nuevo estudiante (`/admin/estudiantes/nuevo`)

```
PageHeader: "Nuevo estudiante"   [Breadcrumb: Estudiantes › Nuevo]

Card "Datos personales":
  [Nombre completo*] [DNI*]
  [Correo electrónico*] [Teléfono]
  [Carrera objetivo*] (Select)

Card "Matrícula":
  [Ciclo*] (Select: 2025-II, 2026-I, ...)
  [Cursos] (Checkboxes o multi-select de cursos activos)

Card "Credenciales de acceso":
  [Código de estudiante] (auto-generado, editable)
  [Contraseña inicial*]
  Nota: "El estudiante deberá cambiar su contraseña en el primer ingreso."

Botones: [Cancelar] [Guardar estudiante]
```

#### Perfil completo del estudiante (`/admin/estudiantes/[id]`)

```
Layout: Tabs o secciones

Tab 1 — Información personal (igual al perfil del estudiante)
Tab 2 — Notas (tabla de todos los cursos y evaluaciones)
Tab 3 — Asistencia (resumen + tabla por curso)
Tab 4 — Pagos (tabla de cuotas)

Acciones en PageHeader:
  [✏ Editar] [🗑 Eliminar]
```

#### Editar estudiante (`/admin/estudiantes/[id]/editar`)

```
(Mismo formulario que "Nuevo" pero con datos pre-cargados)
Breadcrumb: Estudiantes › Juan Pérez › Editar
```

---

### Pantallas 18–21: Módulo de Docentes

#### Lista de docentes (`/admin/docentes`)

```
PageHeader: "Docentes"   [+ Nuevo docente]

Barra de búsqueda:
  [🔍 Buscar por código, nombre o especialidad]

Tabla:
  Código   │ Nombre         │ Especialidad │ Correo              │ Cursos │ Estado   │ Acciones
  ─────────┼────────────────┼──────────────┼─────────────────────┼────────┼──────────┼──────────
  DOC-001  │ Dr. García     │ Matemática   │ garcia@academia.com │   3    │ Activo ✓ │ [Ver][✏][🗑]
```

#### Nuevo docente (`/admin/docentes/nuevo`) / Editar docente (`/admin/docentes/[id]/editar`)

```
PageHeader: "Nuevo docente" o "Editar docente"

Card "Datos personales y contacto":
  Layout de 2 columnas (desktop) con área de foto a la izquierda:
    [Avatar circular de 96px]
    [Botones: Subir / Quitar] -> Permite subir archivo de imagen local con vista previa.
    Si no hay imagen, genera iniciales dinámicas a partir del "Nombre completo".
  Formulario (2 columnas):
    [Código] (Solo lectura en edición, ej: "DOC-001")
    [Nombre completo*] [DNI*]
    [Especialidad*] [Correo electrónico/Institucional*]
    [Teléfono*] [Dirección]
  Nota: El docente solo cuenta con datos personales e institucionales. No se requiere contraseña ni datos de acceso al sistema.

Card "Cursos a dictar (Hasta 3)":
  Mensaje informativo indicando el límite máximo de 3 asignaciones.
  Fila de 3 desplegables de cursos:
    [Curso 1*] [Curso 2 (Opcional)] [Curso 3 (Opcional)]
  Lógica de exclusión mutua: Los cursos seleccionados en un menú se filtran y ocultan de los otros desplegables en tiempo real para evitar duplicados.

Botones: [Cancelar (secundario)] [Guardar / Guardar cambios (primario)]
```

#### Ver perfil de docente (`/admin/docentes/[id]`)

```
Layout: 2 columnas
  Columna izquierda (30%):
    Card con:
      [Avatar de 96px con foto o iniciales]
      [Nombre del docente]
      [Badge: Activo/Inactivo]
      Lista de datos personales:
        - Código (ej: DOC-001)
        - DNI
        - Especialidad
        - Correo
        - Teléfono
        - Dirección

  Columna derecha (70%):
    Card "Cursos asignados":
      Tabla de cursos dictados:
        Curso                   │ Ciclo   │ Estudiantes
        ────────────────────────┼─────────┼──────────────
        Matemática              │ 2025-II │ 48
        Álgebra Preuniversitaria│ 2025-II │ 35
```

---

### Pantallas 22–25: Módulo de Cursos

#### Lista de cursos (`/admin/cursos`)

```
PageHeader: "Cursos"   [+ Nuevo curso]

Tabla:
  Nombre              │ Área    │ Docente       │ Estado   │ Acciones
  ────────────────────┼─────────┼───────────────┼──────────┼──────────
  Matemática Preuniv. │ Ciencias│ Dr. García    │ Activo ✓ │ [Ver][✏][🗑]
```

#### Nuevo / Editar curso

```
Card:
  [Nombre del curso*]
  [Área*] (Select: Ciencias, Letras, Comunicación, etc.)
  [Descripción] (Textarea)
  [Docente responsable*] (Select de docentes activos)
  [Estado] Toggle: Activo / Inactivo

Botones: [Cancelar] [Guardar]
```

---

### Pantallas 26–28: Módulo de Matrículas

#### Lista de matrículas (`/admin/matriculas`)

```
PageHeader: "Matrículas"   [+ Nueva matrícula]

[Filtro: Ciclo ▾] [Filtro: Estado ▾] [🔍 Buscar estudiante]

Tabla:
  Estudiante     │ Ciclo   │ Cursos │ Fecha      │ Estado   │ Acciones
  ───────────────┼─────────┼────────┼────────────┼──────────┼──────────
  Juan Pérez     │ 2025-II │   6    │ 03 feb 25  │ Activa ✓ │ [Ver][✏][Anular]
```

#### Nueva matrícula

```
Card:
  [Estudiante*] (Select con búsqueda)
  [Ciclo*] (Select)
  [Fecha de matrícula*] (Date input)

Card "Cursos a matricular":
  Lista de todos los cursos activos con checkbox
  Indicador: "X cursos seleccionados"

Botones: [Cancelar] [Registrar matrícula]
```

#### Detalle de matrícula

```
Datos de la matrícula + lista de cursos matriculados + estado
Botones: [Editar] [Anular matrícula]
```

---

### Pantallas 29–30: Módulo de Horarios

#### Vista de horarios (`/admin/horarios`)

```
PageHeader: "Horarios"   [+ Nuevo bloque]

[Filtro: Ciclo ▾] [Filtro: Curso ▾]

Vista semanal (misma grilla que el estudiante, pero con botón editar por bloque).

Cada bloque incluye botones [✏][🗑] al hacer hover.

Si hay conflicto detectado:
  Badge rojo "⚠ Conflicto" en los bloques afectados.
  Alert: "El docente García tiene clase en el mismo horario."
```

#### Nuevo bloque horario

```
Card:
  [Curso*] (Select)
  [Docente*] (Select — filtrado según curso)
  [Aula*]
  [Día*] (Select: Lunes a Sábado)
  [Hora inicio*] [Hora fin*]

  Validación en tiempo real:
  ✓ "Horario disponible" / ⚠ "Conflicto: Aula ocupada por Física"

Botones: [Cancelar] [Guardar bloque]
```

---

### Pantallas 31–32: Módulo de Notas

#### Selección de curso (`/admin/notas`)

```
PageHeader: "Registro de notas"

[Filtro: Ciclo ▾] [Filtro: Tipo de evaluación ▾]

Grid de tarjetas de cursos:
  ┌─────────────────┐
  │ 📚 Matemática   │
  │ 48 estudiantes  │
  │ [Registrar →]   │
  └─────────────────┘
  (una card por cada curso activo)
```

#### Ingreso de notas (`/admin/notas/[cursoId]`)

```
PageHeader: "Notas — Matemática Preuniversitaria"
Breadcrumb: Notas › Matemática

Selectores:
  [Tipo de evaluación: Parcial 1 ▾]   [Fecha: ─────]

Tabla editable:
  N° │ Código  │ Nombre del estudiante    │ Nota  │ Estado
  ───┼─────────┼──────────────────────────┼───────┼──────────
   1 │ E-0023  │ Juan Pérez               │ [14 ] │ Aprobado
   2 │ E-0024  │ María García             │ [16 ] │ Aprobado
   3 │ E-0025  │ Carlos Ramos             │ [ 9 ] │ Desaprobado (rojo)
  ...

El campo de nota es un input numérico (0–20) editable inline.
El estado se calcula automáticamente al ingresar la nota.

Botones: [Cancelar] [Guardar notas]
Alert de confirmación: "¿Guardar notas de 48 estudiantes?"
```

---

### Pantallas 33–34: Módulo de Asistencia

#### Selección de sesión (`/admin/asistencia`)

```
PageHeader: "Registro de asistencia"

Card:
  [Curso*] (Select)
  [Fecha de sesión*] (Date: hoy por defecto)
  [Button primario] "Cargar lista"
```

#### Marcación de asistencia (`/admin/asistencia/[cursoId]`)

```
PageHeader: "Asistencia — Matemática · Lunes 12 jun 2025"

Barra de acciones rápidas:
  [✅ Marcar todos Presente]   [Total: P:40 T:3 F:5]

Tabla:
  N° │ Nombre           │   Presente   │   Tardanza   │   Falta
  ───┼──────────────────┼──────────────┼──────────────┼──────────
   1 │ Juan Pérez       │  ● (activo)  │      ○       │     ○
   2 │ María García     │      ○       │  ● (activo)  │     ○
   3 │ Carlos Ramos     │      ○       │      ○       │  ● (activo)
  (radio buttons por fila — solo una opción seleccionable)

Estudiantes con asistencia crítica (<75%) resaltados en rojo.

Botones: [Cancelar] [Guardar asistencia]
```

---

### Pantallas 35–37: Módulo de Pagos

#### Lista de pagos (`/admin/pagos`)

```
PageHeader: "Pagos"   [+ Registrar pago]

[🔍 Buscar por estudiante] [Filtro: Estado ▾] [Filtro: Fecha ▾]

Resumen rápido:
  Ingresos del mes: S/ 28,400  |  Pendientes: 23  |  Vencidos: 5

Tabla:
  Estudiante   │ Concepto  │ Monto    │ Fecha      │ Estado      │ Método    │ Acciones
  ─────────────┼───────────┼──────────┼────────────┼─────────────┼───────────┼──────────
  Juan Pérez   │ Cuota 5   │ S/ 200   │ 15 may 25  │ ✅ Pagado   │ Efectivo  │ [Ver][✏][PDF]
  María García │ Cuota 5   │ S/ 200   │ —          │ ⚠ Pendiente │    —      │ [Ver][✏]
```

#### Registrar nuevo pago

```
Card:
  [Estudiante*] (Select con búsqueda — muestra saldo pendiente)
  [Concepto*] (Select: Matrícula, Cuota 1–8, Otro)
  [Monto*] (Input numérico — pre-llenado según concepto)
  [Fecha de pago*] (Date: hoy por defecto)
  [Método de pago*] (Select: Efectivo, Yape, Transferencia, Tarjeta)
  [Observaciones] (Textarea, opcional)

  Vista previa del comprobante (live):
  "Se generará el comprobante N° [auto-número]"

Botones: [Cancelar] [Registrar y generar comprobante]
```

#### Detalle de pago

```
(Igual al comprobante del estudiante, pero con botones adicionales:)
[✏ Editar pago] [Anular pago] [📄 Descargar PDF]
```

---

### Pantallas 38–40: Usuarios y roles

#### Lista de usuarios (`/admin/usuarios`)

```
PageHeader: "Usuarios del sistema"   [+ Crear usuario]

Tabla:
  Nombre         │ Correo               │ Rol           │ Estado   │ Acciones
  ───────────────┼──────────────────────┼───────────────┼──────────┼──────────
  Juan Pérez     │ juan@academia.com    │ Estudiante    │ Activo   │ [✏][🗑][🔑]
  Admin Torres   │ admin@academia.com   │ Administrador │ Activo   │ [✏][🗑][🔑]

  [🔑] = Restablecer contraseña
```

#### Crear / Editar usuario

```
Card:
  [Nombre completo*]
  [Correo electrónico*]
  [Rol*] (Select: Estudiante / Administrador)
  [Contraseña inicial*] (solo en creación)
  [Estado] Toggle: Activo / Inactivo

Botones: [Cancelar] [Guardar]
```

---

### Pantallas 41–45: Módulo de Reportes

#### Menú de reportes (`/admin/reportes`)

```
PageHeader: "Reportes"

Grid 2×2 de tarjetas de reporte:
  ┌──────────────────────┐  ┌──────────────────────┐
  │ 📊 Rendimiento       │  │ ✅ Asistencia         │
  │    Académico         │  │    por curso          │
  │ Promedios por curso  │  │ Porcentajes y sesiones│
  │ [Ver reporte →]      │  │ [Ver reporte →]       │
  └──────────────────────┘  └──────────────────────┘
  ┌──────────────────────┐  ┌──────────────────────┐
  │ 💳 Reporte de Pagos  │  │ 📋 Matrículas         │
  │ Ingresos y deudas    │  │ Estudiantes por ciclo │
  │ [Ver reporte →]      │  │ [Ver reporte →]       │
  └──────────────────────┘  └──────────────────────┘
```

#### Estructura común de todos los reportes

```
PageHeader: "Reporte de [nombre]"

Card de filtros:
  [Ciclo ▾]  [Rango de fechas: desde — hasta]  [Curso ▾ (si aplica)]
  [Button primario] "Generar reporte"

Card de resultados:
  [Tabla con datos filtrados]

  Pie de tabla:
  [Button] 📥 Exportar a PDF
  [Button] 📥 Exportar a Excel

  Totales / resumen al pie de la tabla.
```

---

### Pantalla 46: Perfil del administrador (`/admin/perfil`)

```
(Mismo diseño que el perfil del estudiante, adaptado al rol admin)
Sin los módulos académicos (notas, asistencia, horarios).
Datos: nombre, correo, rol, foto de perfil.
Acciones: Editar datos, cambiar contraseña.
```

---

## 6. Patrones de interacción transversales

### 6.1 Flujo de eliminación (H3, H5, H9)

```
1. Usuario hace clic en [🗑 Eliminar]
2. Se abre Modal de confirmación:
   "¿Eliminar a Juan Pérez?"
   "Esta acción no se puede deshacer. Se perderán todos sus datos."
   [Cancelar] [Eliminar]
3a. Si confirma → Alert de éxito: "Estudiante eliminado correctamente."
3b. Si cancela → Modal se cierra, no ocurre nada.
```

### 6.2 Validación de formularios (H5, H9)

```
- Validación en tiempo real al salir del campo (on blur).
- Mensaje bajo el campo con descripción del error:
  "El DNI debe tener exactamente 8 dígitos."
- Botón "Guardar" desactivado mientras haya campos inválidos o vacíos requeridos.
- Al enviar exitosamente → Alert verde de éxito por 4 segundos.
- Al fallar → Alert rojo con descripción del error del servidor.
```

### 6.3 Estados de carga (H1)

```
- Al cargar una tabla: skeleton loaders (rectángulos grises animados).
- Al guardar un formulario: botón muestra spinner + texto "Guardando...".
- Al generar un PDF: botón muestra "Generando PDF...".
- Nunca se bloquea toda la pantalla, solo el elemento afectado.
```

### 6.4 Responsividad (requisito IHC)

```
Desktop (≥1024px): Layout completo con sidebar expandido.
Tablet (768–1023px): Sidebar colapsable (solo íconos).
Mobile (<768px):
  - Sidebar oculto por defecto, abre como drawer lateral.
  - Tablas se convierten en tarjetas apiladas.
  - Horarios muestran vista de lista en vez de grilla.
  - Gráficos del dashboard reducen a 1 columna.
```

---

## 7. Resumen de decisiones de diseño vs. heurísticas

| Decisión de diseño | Heurística(s) | Justificación |
|---|---|---|
| Sidebar siempre visible con ítem activo resaltado | H1, H6 | El usuario sabe en qué pantalla está sin leer el título. |
| Badges con color + ícono + texto | H1, Accesibilidad | Redundancia de códigos para daltonismo. |
| Modal de confirmación para eliminar | H3, H5 | Previene pérdida accidental de datos. |
| Botón guardar desactivado con errores | H5 | No se puede enviar un formulario inválido. |
| Mensajes de error descriptivos | H9 | El usuario sabe qué falló y cómo corregirlo. |
| Breadcrumbs en páginas internas | H6 | No necesita recordar cómo llegó a la pantalla. |
| Skeleton loaders | H1 | El usuario sabe que algo está cargando. |
| Selectores en vez de campos de texto libre | H5 | Reduce errores de tipeo en datos predefinidos. |
| Tablas con búsqueda y filtros | H7 | Acelera la tarea en catálogos grandes. |
| Tamaño mínimo de letra 12px (Sans Serif) | Tipografía IHC | Cumple el umbral mínimo de legibilidad. |
| Fondo blanco con texto gris oscuro | Contraste IHC | Relación de contraste ≥4.5:1. |
| Grupos de campos en secciones con encabezado | Gestalt — proximidad | Reduce carga cognitiva al llenar formularios. |
| Botón de acción principal siempre a la derecha | Gestalt — continuidad | Sigue el patrón de lectura izquierda → derecha. |
| Vista de lista en mobile para horarios | Responsividad | Evita scroll horizontal en pantallas pequeñas. |
