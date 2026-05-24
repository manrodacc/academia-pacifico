# Academia Pacífico — Especificación de Funcionalidades
> Sistema de Gestión Académica · Versión 1.0

---

## 1. Autenticación y acceso

### 1.1 Inicio de sesión
- El sistema presenta una pantalla única de login para todos los usuarios.
- El usuario ingresa con su código de estudiante o nombre de usuario y contraseña.
- El sistema valida las credenciales y detecta el rol automáticamente.
- Según el rol, redirige al panel correspondiente:
  - **Estudiante** → Panel académico del estudiante
  - **Administrador** → Panel administrativo
- Se muestra mensaje de error claro si las credenciales son incorrectas.
- Opción de "Olvidé mi contraseña" para recuperación de acceso.

---

## 2. Panel del estudiante

### 2.1 Dashboard de inicio
- Bienvenida personalizada con nombre completo del estudiante.
- Tarjeta de próximas clases del día o semana.
- Resumen de últimas notas registradas.
- Indicador de porcentaje de asistencia del ciclo actual.
- Estado de pagos (al día / pendiente / vencido) con alerta visual si hay deuda.
- Acceso rápido a los módulos principales desde el dashboard.

### 2.2 Mi perfil
- Visualización de datos personales: nombre, DNI, correo, teléfono, carrera objetivo.
- Edición de datos de contacto (correo y teléfono).
- Cambio de foto de perfil (subida de imagen).
- Cambio de contraseña con validación (contraseña actual + nueva + confirmación).

### 2.3 Horarios
- Vista semanal del horario de clases del estudiante.
- Información por cada sesión: curso, docente, aula, día y hora.
- Indicación visual del día actual dentro del horario.

### 2.4 Notas y simulacros
- Lista de cursos matriculados en el ciclo actual.
- Por cada curso: notas de evaluaciones parciales, simulacros y promedio final.
- Indicador visual de aprobado / desaprobado por curso.
- Historial de notas de ciclos anteriores (si aplica).

### 2.5 Asistencia
- Vista del historial de asistencia por curso.
- Estado por sesión: Presente / Tardanza / Falta.
- Porcentaje total de asistencia por curso.
- Resumen general de asistencia del ciclo.

### 2.6 Pagos
- Lista de cuotas o pagos del ciclo: monto, fecha de vencimiento y estado (pagado / pendiente / vencido).
- Descarga de comprobante de pago en formato PDF por cada pago registrado.
- Resumen del total pagado y saldo pendiente.

### 2.7 Configuración
- Cambio de contraseña.
- Actualización de correo de contacto.
- Preferencias básicas de visualización (si aplica).

---

## 3. Panel del administrador

### 3.1 Dashboard estadístico
- Métricas principales en tarjetas de resumen:
  - Total de estudiantes matriculados en el ciclo activo.
  - Ingresos económicos del mes actual.
  - Porcentaje de asistencia promedio de la institución.
  - Cantidad de cursos activos.
  - Número de pagos pendientes.
  - Indicador de rendimiento académico promedio.
- Gráfico de barras: rendimiento académico por curso.
- Gráfico de línea: ingresos mensuales del año en curso.
- Lista de pagos pendientes del día.
- Registro de actividad reciente (últimas acciones en el sistema).

### 3.2 Gestión de estudiantes
- Tabla de estudiantes con búsqueda por nombre, código o DNI.
- Filtros por ciclo, estado (activo / inactivo) y carrera objetivo.
- Crear nuevo estudiante: formulario con datos personales, credenciales de acceso y ciclo de matrícula.
- Editar datos de un estudiante existente.
- Eliminar estudiante (con confirmación).
- Ver perfil completo de un estudiante: datos, notas, asistencia y pagos.

### 3.3 Gestión de docentes
- Tabla de docentes con búsqueda por nombre o especialidad.
- Crear nuevo docente: nombre, especialidad, correo y estado.
- Editar datos de un docente.
- Eliminar docente (con confirmación).
- Ver los cursos asignados a cada docente.

### 3.4 Administración de cursos
- Lista de cursos registrados en el sistema.
- Crear nuevo curso: nombre, área, descripción y estado (activo / inactivo).
- Editar un curso existente.
- Eliminar curso (con confirmación).
- Asignar docente responsable a un curso.

### 3.5 Matrículas
- Tabla de matrículas por ciclo con búsqueda por estudiante.
- Registrar nueva matrícula: seleccionar estudiante, ciclo y cursos.
- Editar o anular una matrícula existente.
- Ver el detalle de cursos por matrícula.
- Filtrar matrículas por estado: activa, anulada, completada.

### 3.6 Organización de horarios
- Vista de horarios por ciclo o por curso.
- Crear nuevo bloque horario: curso, docente, aula, día y hora.
- Editar o eliminar un bloque existente.
- Validación de conflictos de horario (mismo docente o aula a la misma hora).

### 3.7 Registro de notas
- Selección de curso y tipo de evaluación (parcial, simulacro, final).
- Ingreso de nota por estudiante desde una tabla editable.
- Edición de notas ya registradas.
- Cálculo automático del promedio por curso.
- Filtro por ciclo, curso y tipo de evaluación.

### 3.8 Supervisión de asistencia
- Registro de asistencia por sesión: selección de curso, fecha y marcación por estudiante (Presente / Tardanza / Falta).
- Edición de asistencia ya registrada.
- Reporte de asistencia por curso con porcentajes individuales.
- Alerta de estudiantes con asistencia crítica (por debajo del mínimo permitido).

### 3.9 Gestión de pagos
- Tabla de pagos con búsqueda por estudiante o fecha.
- Registrar nuevo pago: estudiante, concepto, monto, fecha y método de pago.
- Editar o anular un pago registrado.
- Generar comprobante de pago en PDF.
- Filtrar por estado: pagado, pendiente, vencido.
- Vista de cuentas por cobrar del mes.

### 3.10 Usuarios y roles
- Lista de cuentas de usuario del sistema.
- Crear nueva cuenta: nombre, correo, rol (estudiante / administrador) y contraseña inicial.
- Editar datos o rol de un usuario existente.
- Desactivar o eliminar una cuenta.
- Restablecer contraseña de cualquier usuario.

### 3.11 Reportes
- Reporte de rendimiento académico: promedio de notas por curso y por ciclo, exportable en PDF o Excel.
- Reporte de asistencia: listado de asistencia por curso y rango de fechas, exportable.
- Reporte de pagos: resumen de ingresos por período, pagos pendientes y vencidos, exportable.
- Reporte de matrículas: estudiantes por ciclo y por curso, exportable.
- Filtros comunes en todos los reportes: rango de fechas, ciclo, curso.

---

## 4. Requisitos transversales

| Requisito | Descripción |
|---|---|
| Responsividad | La interfaz debe adaptarse a laptops, tablets y celulares. |
| Idioma | Toda la interfaz en español. |
| Seguridad de sesión | La sesión expira tras inactividad prolongada. |
| Confirmaciones | Toda acción de eliminación requiere confirmación explícita del usuario. |
| Feedback visual | El sistema muestra mensajes de éxito o error tras cada acción. |
| Acceso por rol | Cada usuario solo ve y accede a las funciones de su rol. |

---

## 5. Resumen de módulos por rol

### Estudiante
| Módulo | Acceso |
|---|---|
| Dashboard | Ver |
| Mi perfil | Ver y editar |
| Horarios | Ver |
| Notas y simulacros | Ver |
| Asistencia | Ver |
| Pagos | Ver y descargar comprobante |
| Configuración | Editar contraseña y correo |

### Administrador
| Módulo | Acceso |
|---|---|
| Dashboard estadístico | Ver |
| Estudiantes | CRUD completo |
| Docentes | CRUD completo |
| Cursos | CRUD completo |
| Matrículas | CRUD completo |
| Horarios | CRUD completo |
| Notas | Registrar y editar |
| Asistencia | Registrar y editar |
| Pagos | CRUD completo + comprobante PDF |
| Usuarios y roles | CRUD completo |
| Reportes | Generar y exportar |
