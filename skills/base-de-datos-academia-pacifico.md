# Academia Pacífico — Diseño de Base de Datos
> MySQL · Prisma ORM · Versión 1.0

---

## Resumen general

| # | Tabla | Descripción |
|---|---|---|
| 1 | `usuarios` | Cuentas de acceso al sistema (estudiantes y admins) |
| 2 | `estudiantes` | Datos académicos extendidos del estudiante |
| 3 | `docentes` | Registro de docentes de la institución |
| 4 | `ciclos` | Periodos académicos (ciclos) |
| 5 | `cursos` | Cursos disponibles en la academia |
| 6 | `matriculas` | Inscripción de un estudiante a un ciclo |
| 7 | `matricula_cursos` | Cursos asignados a cada matrícula |
| 8 | `horarios` | Bloques de clase por curso |
| 9 | `notas` | Evaluaciones registradas por estudiante y curso |
| 10 | `asistencia` | Registro de asistencia por sesión |
| 11 | `pagos` | Pagos realizados por los estudiantes |

---

## Diagrama de relaciones (resumen)

```
usuarios ──────────── estudiantes ──────┬── matriculas ──── matricula_cursos ──── cursos
                                        │                                            │
                                        └── notas ─────────────────────────────────┘
                                        └── asistencia ───────────────────────────┘
                                        └── pagos

docentes ──────────── cursos ──────────── horarios
ciclos ─────────────── matriculas
```

---

## Tablas detalladas

---

### 1. `usuarios`
Almacena las credenciales y rol de todos los usuarios del sistema.

| Columna | Tipo | Restricciones | Descripción |
|---|---|---|---|
| `id` | INT | PK, AUTO_INCREMENT | Identificador único |
| `nombre` | VARCHAR(100) | NOT NULL | Nombre completo |
| `email` | VARCHAR(150) | NOT NULL, UNIQUE | Correo electrónico |
| `codigo` | VARCHAR(20) | UNIQUE | Código de estudiante (solo para rol estudiante) |
| `password_hash` | VARCHAR(255) | NOT NULL | Contraseña encriptada (bcrypt) |
| `rol` | ENUM('estudiante', 'admin') | NOT NULL, DEFAULT 'estudiante' | Rol del usuario |
| `foto_url` | VARCHAR(500) | NULL | URL de la foto de perfil |
| `activo` | BOOLEAN | NOT NULL, DEFAULT true | Estado de la cuenta |
| `created_at` | DATETIME | DEFAULT NOW() | Fecha de creación |
| `updated_at` | DATETIME | DEFAULT NOW() | Última actualización |

**Índices:**
- `UNIQUE (email)`
- `UNIQUE (codigo)`
- `INDEX (rol)`

---

### 2. `estudiantes`
Datos académicos y personales extendidos del estudiante, vinculados a su cuenta de usuario.

| Columna | Tipo | Restricciones | Descripción |
|---|---|---|---|
| `id` | INT | PK, AUTO_INCREMENT | Identificador único |
| `usuario_id` | INT | NOT NULL, FK → usuarios.id | Cuenta de acceso asociada |
| `dni` | VARCHAR(15) | NOT NULL, UNIQUE | Documento de identidad |
| `telefono` | VARCHAR(20) | NULL | Teléfono de contacto |
| `carrera_objetivo` | VARCHAR(150) | NULL | Carrera a la que postula |
| `fecha_nacimiento` | DATE | NULL | Fecha de nacimiento |
| `direccion` | VARCHAR(255) | NULL | Dirección del estudiante |

**Relaciones:**
- `usuario_id` → `usuarios.id` (CASCADE DELETE)

**Índices:**
- `UNIQUE (dni)`
- `UNIQUE (usuario_id)`

---

### 3. `docentes`
Registro de los docentes de la academia.

| Columna | Tipo | Restricciones | Descripción |
|---|---|---|---|
| `id` | INT | PK, AUTO_INCREMENT | Identificador único |
| `nombre` | VARCHAR(100) | NOT NULL | Nombre completo |
| `especialidad` | VARCHAR(100) | NOT NULL | Área o materia que enseña |
| `email` | VARCHAR(150) | UNIQUE | Correo de contacto |
| `telefono` | VARCHAR(20) | NULL | Teléfono de contacto |
| `activo` | BOOLEAN | NOT NULL, DEFAULT true | Estado del docente |
| `created_at` | DATETIME | DEFAULT NOW() | Fecha de registro |

**Índices:**
- `INDEX (especialidad)`
- `INDEX (activo)`

---

### 4. `ciclos`
Periodos académicos de la academia (bimestres, trimestres, etc.).

| Columna | Tipo | Restricciones | Descripción |
|---|---|---|---|
| `id` | INT | PK, AUTO_INCREMENT | Identificador único |
| `nombre` | VARCHAR(50) | NOT NULL | Nombre del ciclo (ej: "Ciclo I - 2025") |
| `fecha_inicio` | DATE | NOT NULL | Inicio del ciclo |
| `fecha_fin` | DATE | NOT NULL | Fin del ciclo |
| `activo` | BOOLEAN | NOT NULL, DEFAULT false | Si es el ciclo vigente |

> Solo debe existir un ciclo con `activo = true` en cualquier momento.

**Índices:**
- `INDEX (activo)`

---

### 5. `cursos`
Cursos académicos disponibles en la institución.

| Columna | Tipo | Restricciones | Descripción |
|---|---|---|---|
| `id` | INT | PK, AUTO_INCREMENT | Identificador único |
| `nombre` | VARCHAR(100) | NOT NULL | Nombre del curso (ej: "Matemática") |
| `area` | VARCHAR(100) | NULL | Área académica (ej: "Ciencias", "Letras") |
| `descripcion` | TEXT | NULL | Descripción del curso |
| `docente_id` | INT | NULL, FK → docentes.id | Docente responsable |
| `activo` | BOOLEAN | NOT NULL, DEFAULT true | Estado del curso |

**Relaciones:**
- `docente_id` → `docentes.id` (SET NULL on DELETE)

**Índices:**
- `INDEX (docente_id)`
- `INDEX (activo)`

---

### 6. `matriculas`
Registro de la inscripción de un estudiante a un ciclo académico.

| Columna | Tipo | Restricciones | Descripción |
|---|---|---|---|
| `id` | INT | PK, AUTO_INCREMENT | Identificador único |
| `estudiante_id` | INT | NOT NULL, FK → estudiantes.id | Estudiante matriculado |
| `ciclo_id` | INT | NOT NULL, FK → ciclos.id | Ciclo de la matrícula |
| `fecha_matricula` | DATE | NOT NULL | Fecha en que se realizó la matrícula |
| `estado` | ENUM('activa', 'anulada', 'completada') | NOT NULL, DEFAULT 'activa' | Estado de la matrícula |

**Relaciones:**
- `estudiante_id` → `estudiantes.id` (RESTRICT on DELETE)
- `ciclo_id` → `ciclos.id` (RESTRICT on DELETE)

**Índices:**
- `UNIQUE (estudiante_id, ciclo_id)` — Un estudiante no puede matricularse dos veces en el mismo ciclo
- `INDEX (estado)`
- `INDEX (ciclo_id)`

---

### 7. `matricula_cursos`
Tabla pivote: qué cursos tiene asignados cada matrícula.

| Columna | Tipo | Restricciones | Descripción |
|---|---|---|---|
| `id` | INT | PK, AUTO_INCREMENT | Identificador único |
| `matricula_id` | INT | NOT NULL, FK → matriculas.id | Matrícula a la que pertenece |
| `curso_id` | INT | NOT NULL, FK → cursos.id | Curso asignado |

**Relaciones:**
- `matricula_id` → `matriculas.id` (CASCADE DELETE)
- `curso_id` → `cursos.id` (RESTRICT on DELETE)

**Índices:**
- `UNIQUE (matricula_id, curso_id)` — Sin duplicados por matrícula

---

### 8. `horarios`
Bloques de clase programados por curso.

| Columna | Tipo | Restricciones | Descripción |
|---|---|---|---|
| `id` | INT | PK, AUTO_INCREMENT | Identificador único |
| `curso_id` | INT | NOT NULL, FK → cursos.id | Curso al que pertenece |
| `ciclo_id` | INT | NOT NULL, FK → ciclos.id | Ciclo al que aplica |
| `dia` | ENUM('Lunes','Martes','Miércoles','Jueves','Viernes','Sábado') | NOT NULL | Día de la semana |
| `hora_inicio` | TIME | NOT NULL | Hora de inicio |
| `hora_fin` | TIME | NOT NULL | Hora de fin |
| `aula` | VARCHAR(30) | NULL | Nombre o número del aula |

**Relaciones:**
- `curso_id` → `cursos.id` (CASCADE DELETE)
- `ciclo_id` → `ciclos.id` (RESTRICT on DELETE)

**Índices:**
- `INDEX (curso_id, ciclo_id)`
- `INDEX (dia)`

> Para validar conflictos de horario (mismo docente u aula a la misma hora), se realiza la verificación a nivel de aplicación al crear o editar un bloque.

---

### 9. `notas`
Notas de evaluaciones de cada estudiante por curso.

| Columna | Tipo | Restricciones | Descripción |
|---|---|---|---|
| `id` | INT | PK, AUTO_INCREMENT | Identificador único |
| `estudiante_id` | INT | NOT NULL, FK → estudiantes.id | Estudiante evaluado |
| `curso_id` | INT | NOT NULL, FK → cursos.id | Curso evaluado |
| `ciclo_id` | INT | NOT NULL, FK → ciclos.id | Ciclo al que pertenece |
| `tipo` | ENUM('parcial', 'simulacro', 'final') | NOT NULL | Tipo de evaluación |
| `descripcion` | VARCHAR(100) | NULL | Descripción de la evaluación (ej: "Parcial 1") |
| `valor` | DECIMAL(5,2) | NOT NULL | Nota obtenida (ej: 14.50) |
| `fecha` | DATE | NOT NULL | Fecha de la evaluación |

**Relaciones:**
- `estudiante_id` → `estudiantes.id` (RESTRICT on DELETE)
- `curso_id` → `cursos.id` (RESTRICT on DELETE)
- `ciclo_id` → `ciclos.id` (RESTRICT on DELETE)

**Índices:**
- `INDEX (estudiante_id, curso_id, ciclo_id)`
- `INDEX (tipo)`

> El promedio por curso se calcula en tiempo real desde la aplicación usando las notas registradas.

---

### 10. `asistencia`
Registro de la asistencia de cada estudiante por sesión de clase.

| Columna | Tipo | Restricciones | Descripción |
|---|---|---|---|
| `id` | INT | PK, AUTO_INCREMENT | Identificador único |
| `estudiante_id` | INT | NOT NULL, FK → estudiantes.id | Estudiante |
| `curso_id` | INT | NOT NULL, FK → cursos.id | Curso de la sesión |
| `ciclo_id` | INT | NOT NULL, FK → ciclos.id | Ciclo al que pertenece |
| `fecha` | DATE | NOT NULL | Fecha de la sesión |
| `estado` | ENUM('Presente', 'Tardanza', 'Falta') | NOT NULL | Estado de asistencia |

**Relaciones:**
- `estudiante_id` → `estudiantes.id` (RESTRICT on DELETE)
- `curso_id` → `cursos.id` (RESTRICT on DELETE)
- `ciclo_id` → `ciclos.id` (RESTRICT on DELETE)

**Índices:**
- `UNIQUE (estudiante_id, curso_id, fecha)` — Un registro por estudiante, curso y día
- `INDEX (fecha)`
- `INDEX (estado)`

---

### 11. `pagos`
Registro de pagos realizados por los estudiantes.

| Columna | Tipo | Restricciones | Descripción |
|---|---|---|---|
| `id` | INT | PK, AUTO_INCREMENT | Identificador único |
| `estudiante_id` | INT | NOT NULL, FK → estudiantes.id | Estudiante que paga |
| `concepto` | VARCHAR(150) | NOT NULL | Descripción del pago (ej: "Mensualidad - Marzo") |
| `monto` | DECIMAL(10,2) | NOT NULL | Monto del pago |
| `fecha_vencimiento` | DATE | NULL | Fecha límite para pagar |
| `fecha_pago` | DATE | NULL | Fecha en que se efectuó el pago |
| `estado` | ENUM('pagado', 'pendiente', 'vencido') | NOT NULL, DEFAULT 'pendiente' | Estado del pago |
| `metodo_pago` | ENUM('efectivo', 'transferencia', 'yape', 'plin', 'otro') | NULL | Método utilizado |
| `numero_comprobante` | VARCHAR(50) | NULL, UNIQUE | Número de comprobante generado |
| `created_at` | DATETIME | DEFAULT NOW() | Fecha de registro en el sistema |

**Relaciones:**
- `estudiante_id` → `estudiantes.id` (RESTRICT on DELETE)

**Índices:**
- `INDEX (estudiante_id)`
- `INDEX (estado)`
- `INDEX (fecha_vencimiento)`

---

## Schema Prisma (`schema.prisma`)

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

model Usuario {
  id            Int        @id @default(autoincrement())
  nombre        String     @db.VarChar(100)
  email         String     @unique @db.VarChar(150)
  codigo        String?    @unique @db.VarChar(20)
  passwordHash  String     @db.VarChar(255)
  rol           Rol        @default(estudiante)
  fotoUrl       String?    @db.VarChar(500)
  activo        Boolean    @default(true)
  createdAt     DateTime   @default(now())
  updatedAt     DateTime   @updatedAt
  estudiante    Estudiante?

  @@map("usuarios")
}

enum Rol {
  estudiante
  admin
}

model Estudiante {
  id               Int        @id @default(autoincrement())
  usuarioId        Int        @unique
  dni              String     @unique @db.VarChar(15)
  telefono         String?    @db.VarChar(20)
  carreraObjetivo  String?    @db.VarChar(150)
  fechaNacimiento  DateTime?  @db.Date
  direccion        String?    @db.VarChar(255)
  usuario          Usuario    @relation(fields: [usuarioId], references: [id], onDelete: Cascade)
  matriculas       Matricula[]
  notas            Nota[]
  asistencias      Asistencia[]
  pagos            Pago[]

  @@map("estudiantes")
}

model Docente {
  id           Int      @id @default(autoincrement())
  nombre       String   @db.VarChar(100)
  especialidad String   @db.VarChar(100)
  email        String?  @unique @db.VarChar(150)
  telefono     String?  @db.VarChar(20)
  activo       Boolean  @default(true)
  createdAt    DateTime @default(now())
  cursos       Curso[]

  @@map("docentes")
}

model Ciclo {
  id          Int        @id @default(autoincrement())
  nombre      String     @db.VarChar(50)
  fechaInicio DateTime   @db.Date
  fechaFin    DateTime   @db.Date
  activo      Boolean    @default(false)
  matriculas  Matricula[]
  horarios    Horario[]
  notas       Nota[]
  asistencias Asistencia[]

  @@map("ciclos")
}

model Curso {
  id               Int               @id @default(autoincrement())
  nombre           String            @db.VarChar(100)
  area             String?           @db.VarChar(100)
  descripcion      String?           @db.Text
  docenteId        Int?
  activo           Boolean           @default(true)
  docente          Docente?          @relation(fields: [docenteId], references: [id], onDelete: SetNull)
  matriculaCursos  MatriculaCurso[]
  horarios         Horario[]
  notas            Nota[]
  asistencias      Asistencia[]

  @@map("cursos")
}

model Matricula {
  id             Int              @id @default(autoincrement())
  estudianteId   Int
  cicloId        Int
  fechaMatricula DateTime         @db.Date
  estado         EstadoMatricula  @default(activa)
  estudiante     Estudiante       @relation(fields: [estudianteId], references: [id])
  ciclo          Ciclo            @relation(fields: [cicloId], references: [id])
  cursos         MatriculaCurso[]

  @@unique([estudianteId, cicloId])
  @@map("matriculas")
}

enum EstadoMatricula {
  activa
  anulada
  completada
}

model MatriculaCurso {
  id          Int       @id @default(autoincrement())
  matriculaId Int
  cursoId     Int
  matricula   Matricula @relation(fields: [matriculaId], references: [id], onDelete: Cascade)
  curso       Curso     @relation(fields: [cursoId], references: [id])

  @@unique([matriculaId, cursoId])
  @@map("matricula_cursos")
}

model Horario {
  id         Int      @id @default(autoincrement())
  cursoId    Int
  cicloId    Int
  dia        DiaSemana
  horaInicio DateTime @db.Time
  horaFin    DateTime @db.Time
  aula       String?  @db.VarChar(30)
  curso      Curso    @relation(fields: [cursoId], references: [id], onDelete: Cascade)
  ciclo      Ciclo    @relation(fields: [cicloId], references: [id])

  @@map("horarios")
}

enum DiaSemana {
  Lunes
  Martes
  Miercoles
  Jueves
  Viernes
  Sabado
}

model Nota {
  id           Int        @id @default(autoincrement())
  estudianteId Int
  cursoId      Int
  cicloId      Int
  tipo         TipoNota
  descripcion  String?    @db.VarChar(100)
  valor        Decimal    @db.Decimal(5, 2)
  fecha        DateTime   @db.Date
  estudiante   Estudiante @relation(fields: [estudianteId], references: [id])
  curso        Curso      @relation(fields: [cursoId], references: [id])
  ciclo        Ciclo      @relation(fields: [cicloId], references: [id])

  @@map("notas")
}

enum TipoNota {
  parcial
  simulacro
  final
}

model Asistencia {
  id           Int              @id @default(autoincrement())
  estudianteId Int
  cursoId      Int
  cicloId      Int
  fecha        DateTime         @db.Date
  estado       EstadoAsistencia
  estudiante   Estudiante       @relation(fields: [estudianteId], references: [id])
  curso        Curso            @relation(fields: [cursoId], references: [id])
  ciclo        Ciclo            @relation(fields: [cicloId], references: [id])

  @@unique([estudianteId, cursoId, fecha])
  @@map("asistencia")
}

enum EstadoAsistencia {
  Presente
  Tardanza
  Falta
}

model Pago {
  id                 Int          @id @default(autoincrement())
  estudianteId       Int
  concepto           String       @db.VarChar(150)
  monto              Decimal      @db.Decimal(10, 2)
  fechaVencimiento   DateTime?    @db.Date
  fechaPago          DateTime?    @db.Date
  estado             EstadoPago   @default(pendiente)
  metodoPago         MetodoPago?
  numeroComprobante  String?      @unique @db.VarChar(50)
  createdAt          DateTime     @default(now())
  estudiante         Estudiante   @relation(fields: [estudianteId], references: [id])

  @@map("pagos")
}

enum EstadoPago {
  pagado
  pendiente
  vencido
}

enum MetodoPago {
  efectivo
  transferencia
  yape
  plin
  otro
}
```

---

## SQL de creación de tablas

```sql
CREATE TABLE usuarios (
  id            INT AUTO_INCREMENT PRIMARY KEY,
  nombre        VARCHAR(100) NOT NULL,
  email         VARCHAR(150) NOT NULL UNIQUE,
  codigo        VARCHAR(20) UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  rol           ENUM('estudiante', 'admin') NOT NULL DEFAULT 'estudiante',
  foto_url      VARCHAR(500),
  activo        BOOLEAN NOT NULL DEFAULT TRUE,
  created_at    DATETIME DEFAULT NOW(),
  updated_at    DATETIME DEFAULT NOW() ON UPDATE NOW(),
  INDEX idx_rol (rol)
);

CREATE TABLE estudiantes (
  id               INT AUTO_INCREMENT PRIMARY KEY,
  usuario_id       INT NOT NULL UNIQUE,
  dni              VARCHAR(15) NOT NULL UNIQUE,
  telefono         VARCHAR(20),
  carrera_objetivo VARCHAR(150),
  fecha_nacimiento DATE,
  direccion        VARCHAR(255),
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
);

CREATE TABLE docentes (
  id           INT AUTO_INCREMENT PRIMARY KEY,
  nombre       VARCHAR(100) NOT NULL,
  especialidad VARCHAR(100) NOT NULL,
  email        VARCHAR(150) UNIQUE,
  telefono     VARCHAR(20),
  activo       BOOLEAN NOT NULL DEFAULT TRUE,
  created_at   DATETIME DEFAULT NOW(),
  INDEX idx_especialidad (especialidad)
);

CREATE TABLE ciclos (
  id           INT AUTO_INCREMENT PRIMARY KEY,
  nombre       VARCHAR(50) NOT NULL,
  fecha_inicio DATE NOT NULL,
  fecha_fin    DATE NOT NULL,
  activo       BOOLEAN NOT NULL DEFAULT FALSE,
  INDEX idx_activo (activo)
);

CREATE TABLE cursos (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  nombre      VARCHAR(100) NOT NULL,
  area        VARCHAR(100),
  descripcion TEXT,
  docente_id  INT,
  activo      BOOLEAN NOT NULL DEFAULT TRUE,
  FOREIGN KEY (docente_id) REFERENCES docentes(id) ON DELETE SET NULL,
  INDEX idx_docente (docente_id)
);

CREATE TABLE matriculas (
  id             INT AUTO_INCREMENT PRIMARY KEY,
  estudiante_id  INT NOT NULL,
  ciclo_id       INT NOT NULL,
  fecha_matricula DATE NOT NULL,
  estado         ENUM('activa', 'anulada', 'completada') NOT NULL DEFAULT 'activa',
  UNIQUE KEY uq_estudiante_ciclo (estudiante_id, ciclo_id),
  FOREIGN KEY (estudiante_id) REFERENCES estudiantes(id),
  FOREIGN KEY (ciclo_id) REFERENCES ciclos(id),
  INDEX idx_estado (estado)
);

CREATE TABLE matricula_cursos (
  id           INT AUTO_INCREMENT PRIMARY KEY,
  matricula_id INT NOT NULL,
  curso_id     INT NOT NULL,
  UNIQUE KEY uq_matricula_curso (matricula_id, curso_id),
  FOREIGN KEY (matricula_id) REFERENCES matriculas(id) ON DELETE CASCADE,
  FOREIGN KEY (curso_id) REFERENCES cursos(id)
);

CREATE TABLE horarios (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  curso_id    INT NOT NULL,
  ciclo_id    INT NOT NULL,
  dia         ENUM('Lunes','Martes','Miércoles','Jueves','Viernes','Sábado') NOT NULL,
  hora_inicio TIME NOT NULL,
  hora_fin    TIME NOT NULL,
  aula        VARCHAR(30),
  FOREIGN KEY (curso_id) REFERENCES cursos(id) ON DELETE CASCADE,
  FOREIGN KEY (ciclo_id) REFERENCES ciclos(id),
  INDEX idx_curso_ciclo (curso_id, ciclo_id)
);

CREATE TABLE notas (
  id            INT AUTO_INCREMENT PRIMARY KEY,
  estudiante_id INT NOT NULL,
  curso_id      INT NOT NULL,
  ciclo_id      INT NOT NULL,
  tipo          ENUM('parcial', 'simulacro', 'final') NOT NULL,
  descripcion   VARCHAR(100),
  valor         DECIMAL(5,2) NOT NULL,
  fecha         DATE NOT NULL,
  FOREIGN KEY (estudiante_id) REFERENCES estudiantes(id),
  FOREIGN KEY (curso_id) REFERENCES cursos(id),
  FOREIGN KEY (ciclo_id) REFERENCES ciclos(id),
  INDEX idx_estudiante_curso_ciclo (estudiante_id, curso_id, ciclo_id)
);

CREATE TABLE asistencia (
  id            INT AUTO_INCREMENT PRIMARY KEY,
  estudiante_id INT NOT NULL,
  curso_id      INT NOT NULL,
  ciclo_id      INT NOT NULL,
  fecha         DATE NOT NULL,
  estado        ENUM('Presente', 'Tardanza', 'Falta') NOT NULL,
  UNIQUE KEY uq_asistencia (estudiante_id, curso_id, fecha),
  FOREIGN KEY (estudiante_id) REFERENCES estudiantes(id),
  FOREIGN KEY (curso_id) REFERENCES cursos(id),
  FOREIGN KEY (ciclo_id) REFERENCES ciclos(id),
  INDEX idx_fecha (fecha)
);

CREATE TABLE pagos (
  id                  INT AUTO_INCREMENT PRIMARY KEY,
  estudiante_id       INT NOT NULL,
  concepto            VARCHAR(150) NOT NULL,
  monto               DECIMAL(10,2) NOT NULL,
  fecha_vencimiento   DATE,
  fecha_pago          DATE,
  estado              ENUM('pagado', 'pendiente', 'vencido') NOT NULL DEFAULT 'pendiente',
  metodo_pago         ENUM('efectivo', 'transferencia', 'yape', 'plin', 'otro'),
  numero_comprobante  VARCHAR(50) UNIQUE,
  created_at          DATETIME DEFAULT NOW(),
  FOREIGN KEY (estudiante_id) REFERENCES estudiantes(id),
  INDEX idx_estado (estado),
  INDEX idx_vencimiento (fecha_vencimiento)
);
```

---

## Datos de prueba (seed básico)

```sql
-- Ciclo activo
INSERT INTO ciclos VALUES (1, 'Ciclo I - 2025', '2025-03-01', '2025-06-30', TRUE);

-- Usuarios
INSERT INTO usuarios (nombre, email, codigo, password_hash, rol) VALUES
('Admin Sistema', 'admin@pacifico.edu.pe', NULL, '$2b$10$HASH_ADMIN', 'admin'),
('Juan Pérez Torres', 'juan.perez@pacifico.edu.pe', 'EST-001', '$2b$10$HASH_EST1', 'estudiante'),
('María López Ruiz', 'maria.lopez@pacifico.edu.pe', 'EST-002', '$2b$10$HASH_EST2', 'estudiante');

-- Docentes
INSERT INTO docentes (nombre, especialidad, email) VALUES
('Lic. Carlos Vega', 'Matemática', 'cvega@pacifico.edu.pe'),
('Lic. Ana Flores', 'Literatura', 'aflores@pacifico.edu.pe'),
('Ing. Luis Ramos', 'Física', 'lramos@pacifico.edu.pe');

-- Cursos
INSERT INTO cursos (nombre, area, docente_id) VALUES
('Matemática', 'Ciencias', 1),
('Literatura', 'Letras', 2),
('Física', 'Ciencias', 3),
('Historia', 'Letras', NULL);
```

---

## Consultas frecuentes de referencia

```sql
-- Notas de un estudiante en el ciclo activo
SELECT c.nombre AS curso, n.tipo, n.descripcion, n.valor, n.fecha
FROM notas n
JOIN cursos c ON c.id = n.curso_id
JOIN ciclos ci ON ci.id = n.ciclo_id
WHERE n.estudiante_id = 1 AND ci.activo = TRUE
ORDER BY c.nombre, n.fecha;

-- Promedio por curso de un estudiante
SELECT c.nombre, AVG(n.valor) AS promedio
FROM notas n
JOIN cursos c ON c.id = n.curso_id
WHERE n.estudiante_id = 1 AND n.ciclo_id = 1
GROUP BY c.id, c.nombre;

-- Porcentaje de asistencia por curso
SELECT c.nombre,
  COUNT(*) AS total_sesiones,
  SUM(a.estado = 'Presente') AS presentes,
  ROUND(SUM(a.estado = 'Presente') / COUNT(*) * 100, 1) AS porcentaje
FROM asistencia a
JOIN cursos c ON c.id = a.curso_id
WHERE a.estudiante_id = 1 AND a.ciclo_id = 1
GROUP BY c.id, c.nombre;

-- Pagos pendientes del mes actual
SELECT e.id, u.nombre, p.concepto, p.monto, p.fecha_vencimiento
FROM pagos p
JOIN estudiantes e ON e.id = p.estudiante_id
JOIN usuarios u ON u.id = e.usuario_id
WHERE p.estado = 'pendiente'
  AND MONTH(p.fecha_vencimiento) = MONTH(NOW())
ORDER BY p.fecha_vencimiento;

-- Ingresos por mes del año actual
SELECT MONTH(fecha_pago) AS mes, SUM(monto) AS total
FROM pagos
WHERE estado = 'pagado' AND YEAR(fecha_pago) = YEAR(NOW())
GROUP BY MONTH(fecha_pago)
ORDER BY mes;
```

---

## Notas de implementación

| Tema | Decisión |
|---|---|
| Contraseñas | Usar `bcrypt` con salt factor 10 como mínimo |
| Promedio de notas | Calcular en la capa de aplicación (no columna calculada) |
| Comprobante PDF | Generar en el backend usando los datos de la tabla `pagos` |
| Ciclo activo | Solo uno puede tener `activo = TRUE`; validar en la app al cambiar ciclo |
| Conflictos de horario | Validar en la aplicación antes de insertar un nuevo bloque |
| Foto de perfil | Almacenar solo la URL; el archivo va en almacenamiento externo (ej. Cloudinary) |
| Número de comprobante | Generarlo automáticamente al registrar un pago (ej: `PAC-2025-00001`) |
