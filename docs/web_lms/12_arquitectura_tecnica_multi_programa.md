# Arquitectura tecnica multi-programa

**Version:** 0.1
**Fecha:** 2026-05-29
**Estado:** Integracion inicial de arquitectura tecnica
**Dominio:** Backend, datos, APIs, roles, multi-programa y migracion

---

## Proposito

Este documento integra las indicaciones tecnicas del documento "SANANGA - Arquitectura tecnica multi-programa" al repositorio del LMS. Su funcion no es generar un PDF ni definir diseno visual: es convertir esas ideas en una especificacion de producto tecnico para el equipo de desarrollo.

La idea central que se adopta es:

```text
Sananga debe ser una plataforma multi-programa donde un nuevo curso, ruta empresarial o programa tecnico se configure con datos, no reescribiendo codigo.
```

---

## Decisiones adoptadas

- Adoptar el principio de **programa como configuracion**.
- Evolucionar de `courses` a `programs` como entidad principal del backend.
- Soportar multiples tipos de oferta: cursos informales, cursos empresariales, rutas de competencia, programas tecnicos y alianzas formativas.
- Usar trazabilidad append-only para eventos academicos y administrativos.
- Separar contenido pedagogico de logica de plataforma.
- Preparar arquitectura para IA gobernada y RAG sin hacerla obligatoria en el MVP.
- Preparar el modelo para sesiones presenciales, sedes, practicas, IPS y convenios si Sananga avanza hacia formacion tecnica o alianzas habilitadas.

---

## Decisiones no adoptadas literalmente

El script ReportLab recibido es util como fuente de estructura documental, pero no se integra como codigo productivo porque:

- El repositorio actual documenta el LMS en Markdown.
- Generar PDF no aporta al funcionamiento de la plataforma.
- El destino `/mnt/user-data/outputs/...` no corresponde al entorno Windows local del repositorio.
- La maquetacion visual del PDF debe vivir aparte si luego se decide crear documentos comerciales o tecnicos exportables.

Tambien se ajusta un detalle tecnico: el ejemplo `uuid_generate_v7()` debe validarse contra la extension concreta que se use en PostgreSQL. Para MVP se recomienda una de estas opciones:

- Generar UUID v7 desde la aplicacion.
- Usar `gen_random_uuid()` inicialmente y migrar a UUID v7 cuando el stack lo soporte.
- Instalar una extension validada de UUID v7 si el proveedor de base de datos lo permite.

---

## Principios no negociables

### 1. Programa como configuracion

Un programa no debe existir como condicional en codigo. Debe existir como filas en base de datos: programa, version, competencias, modulos, lecciones, evaluaciones, PCE, rubricas y reglas.

Si crear un programa nuevo exige modificar archivos JavaScript, Python o SQL manual fuera de migraciones, la arquitectura esta fallando.

### 2. Multi-programa desde el dia uno

Aunque el primer producto real sea un curso corto, el backend debe soportar multiples programas:

- Curso normativo certificable.
- Curso informal.
- Ruta empresarial.
- Programa tecnico por alianza.
- Programa tecnico propio si existe habilitacion.
- Cohorte empresarial o individual.

### 3. Trazabilidad indeleble

Cada accion relevante debe registrarse como evento:

- Registro de usuario.
- Matricula.
- Inicio de leccion.
- Evidencia completada.
- Intento de evaluacion.
- Decision PCE.
- Reserva de sesion.
- Asistencia.
- Emision, verificacion o revocacion de certificado.
- Cambio administrativo.

Los eventos deben ser append-only: no se actualizan ni se eliminan.

### 4. Logica de plataforma separada del contenido

La plataforma sabe ejecutar procesos:

- Calcular progreso.
- Abrir o bloquear estados.
- Ejecutar maquinas de estado PCE.
- Evaluar preguntas.
- Emitir certificados.
- Registrar trazabilidad.

La plataforma no debe tener en codigo el contenido clinico, normativo o academico de cada programa.

### 5. Seguridad por defecto

El prototipo actual simula seguridad. Produccion exige:

- Hash de contrasenas con Argon2id o bcrypt.
- JWT o sesion segura con expiracion.
- Refresh tokens revocables.
- MFA para roles criticos.
- RBAC por programa.
- Rate limiting en autenticacion.
- TLS obligatorio.
- Secretos fuera del repositorio.
- Logs de acciones administrativas.

### 6. IA gobernada

La IA no debe operar como caja negra. Toda interaccion debe registrar:

- Usuario.
- Programa.
- Competencia.
- Prompt o plantilla usada.
- Fuentes consultadas.
- Modelo.
- Respuesta.
- Fecha.
- Costo aproximado o tokens, si aplica.

---

## Stack tecnico recomendado

### Frontend

- Next.js + React + TypeScript.
- Rutas publicas para landing, catalogo y ficha de programa.
- Area autenticada para estudiante, empresa, docente, evaluador y administrador.
- Consumo exclusivo de APIs.

### Backend

- FastAPI + Python.
- SQLAlchemy 2.0 + Alembic.
- OpenAPI generado automaticamente.
- Servicios modulares por dominio: auth, programas, aprendizaje, evaluacion, PCE, certificados, sesiones, empresas, reportes.

### Base de datos

- PostgreSQL como fuente principal.
- JSONB para configuraciones flexibles.
- pgvector cuando se active RAG.
- Redis para cache, rate limiting y tareas ligeras.
- S3 o compatible para archivos, videos, evidencias y certificados.

### Servicios externos

- Email transaccional: Resend, SendGrid o equivalente.
- Pagos: Mercado Pago/PSE como primera opcion Colombia.
- Monitoreo: Sentry.
- Analitica: Plausible u otra herramienta respetuosa de privacidad.
- LLM: proveedor a definir cuando se active tutor IA o evaluacion asistida.

---

## Entidades principales del backend

### Identidad y acceso

- `users`
- `roles`
- `permissions`
- `user_program_roles`
- `refresh_tokens`
- `organizations`

Una persona puede tener distintos roles segun el programa. Por ejemplo: estudiante en un programa, evaluador en otro y administrador empresarial en una organizacion.

### Catalogo academico

- `programs`
- `program_versions`
- `competencies`
- `modules`
- `lessons`
- `learning_resources`

`programs` reemplaza a `courses` como entidad raiz. Un curso corto es un tipo de programa.

Tipos sugeridos:

- `CURSO_INFORMAL`
- `CURSO_NORMATIVO`
- `CURSO_EMPRESARIAL`
- `RUTA_COMPETENCIA`
- `TECNICO_LABORAL_ALIADO`
- `TECNICO_LABORAL_PROPIO`

### Matricula y progreso

- `enrollments`
- `enrollment_competency_progress`
- `lesson_progress`
- `learning_events`

El progreso se calcula por competencia, no solo por porcentaje de lecciones.

### Evaluacion y PCE

- `assessments`
- `assessment_questions`
- `assessment_attempts`
- `pce_scenarios`
- `pce_states`
- `pce_choices`
- `pce_attempts`
- `pce_attempt_decisions`

El PCE debe vivir dentro del proceso formativo de una competencia.

### Presencialidad, practica y aliados

Estas entidades no son obligatorias para el primer MVP de cursos cortos, pero deben estar previstas si Sananga avanza hacia formacion tecnica o alianzas:

- `venues`
- `presential_sessions`
- `session_enrollments`
- `ips_partners`
- `ips_convenios`
- `convenio_authorized_programs`
- `ips_rotations`
- `rotation_log_entries`

### Certificacion

- `certificates`
- `certificate_templates`
- `certificate_verifications`
- `certificate_revocations`

La certificacion se emite solo si las reglas del programa y de la competencia se cumplen.

---

## Modelo conceptual de programa

```text
Organization
  -> Program
    -> ProgramVersion
      -> Competency
        -> Module
          -> Lesson
        -> Assessment
        -> PCE Scenario
          -> PCE State
            -> PCE Choice
      -> Certificate Rule
```

Una matricula queda vinculada a una version del programa. Si el programa cambia, el estudiante no debe perder la ruta con la que inicio.

---

## Programa como configuracion: flujo administrativo

Para crear un nuevo programa, el panel administrativo debe permitir:

1. Crear programa.
2. Definir tipo, alcance, duracion, precio y certificacion.
3. Crear competencias.
4. Crear modulos y lecciones.
5. Asociar recursos.
6. Crear evaluaciones.
7. Crear escenarios PCE cuando aplique.
8. Definir reglas de certificacion.
9. Asociar sedes, sesiones o convenios si aplica.
10. Validar consistencia.
11. Publicar version.

La publicacion debe fallar si:

- No hay competencias.
- Una competencia no tiene actividades.
- Una evaluacion no tiene preguntas.
- Un PCE no tiene estado inicial o estado terminal.
- Un programa tecnico no tiene datos legales o aliado habilitado cuando aplique.

---

## API REST sugerida

### Publico

- `GET /api/v1/catalog/programs`
- `GET /api/v1/catalog/programs/{idOrCode}`
- `GET /api/v1/certificates/verify/{code}`

### Auth

- `POST /api/v1/auth/register`
- `POST /api/v1/auth/login`
- `POST /api/v1/auth/refresh`
- `POST /api/v1/auth/logout`
- `POST /api/v1/auth/forgot-password`

### Estudiante

- `GET /api/v1/me/enrollments`
- `POST /api/v1/enrollments`
- `GET /api/v1/me/enrollments/{id}/passport`
- `GET /api/v1/lessons/{id}`
- `POST /api/v1/lessons/{id}/complete-evidence`
- `POST /api/v1/assessments/{id}/attempts`
- `POST /api/v1/assessment-attempts/{id}/submit`
- `POST /api/v1/pce-scenarios/{id}/attempts`
- `POST /api/v1/pce-attempts/{id}/decisions`
- `POST /api/v1/me/enrollments/{id}/certificate`

### Presencialidad

- `GET /api/v1/sessions`
- `POST /api/v1/sessions/{id}/reserve`
- `POST /api/v1/sessions/{id}/check-in`
- `POST /api/v1/sessions/{id}/rubrics/{userId}`

### Administracion

- `POST /api/v1/admin/programs`
- `PUT /api/v1/admin/programs/{id}`
- `POST /api/v1/admin/programs/{id}/publish`
- `GET /api/v1/admin/programs/{id}/validate-for-publish`
- `POST /api/v1/admin/programs/{id}/competencies`
- `POST /api/v1/admin/competencies/{id}/modules`
- `POST /api/v1/admin/modules/{id}/lessons`
- `POST /api/v1/admin/competencies/{id}/assessments`
- `POST /api/v1/admin/competencies/{id}/pce-scenarios`
- `POST /api/v1/admin/venues`
- `POST /api/v1/admin/presential-sessions`
- `POST /api/v1/admin/ips-partners`
- `POST /api/v1/admin/ips-convenios`

---

## Roles sugeridos

- `STUDENT`
- `COMPANY_ADMIN`
- `INSTRUCTIONAL_DESIGNER`
- `HEALTH_EXPERT`
- `ACADEMIC_EVALUATOR`
- `INSTRUCTOR`
- `ACADEMIC_DIRECTOR`
- `OPERATIONS`
- `IPS_SUPERVISOR`
- `SANANGA_ADMIN`
- `SUPER_ADMIN`

El rol debe evaluarse por contexto:

```text
usuario + programa + organizacion + permiso
```

---

## Migracion desde el prototipo actual

### Paso 1: congelar entidades actuales

El prototipo actual tiene:

- `courses`
- `modules`
- `lessons`
- `questions`
- `competency.states`
- `pceSteps`
- `roleCatalog`
- `events`

Estas entidades deben mapearse a `programs`, `competencies`, `modules`, `lessons`, `assessments`, `pce_*`, `roles` y `learning_events`.

### Paso 2: crear seeders

El contenido del prototipo debe convertirse en archivos semilla para poblar PostgreSQL. Esto permite preservar el trabajo actual.

### Paso 3: reemplazar localStorage

El frontend debe dejar de depender de `localStorage` para progreso academico. Puede mantenerlo temporalmente solo para preferencias de UI.

### Paso 4: activar certificados verificables reales

El certificado local debe migrar a:

- Codigo unico persistido.
- URL publica de verificacion.
- QR.
- PDF almacenado.
- Estado: emitido, revocado o expirado.

### Paso 5: construir panel administrativo

Sin panel administrativo, el principio de programa como configuracion no se cumple. El panel debe permitir crear programas, competencias, lecciones, evaluaciones y PCE.

---

## Roadmap tecnico ajustado

### Fase A: MVP backend de cursos certificables

- Auth real.
- Catalogo desde PostgreSQL.
- Matricula.
- Progreso por competencia.
- Evaluaciones.
- PCE configurable.
- Certificados verificables.

### Fase B: panel administrativo academico

- Constructor de programas.
- Constructor de competencias.
- Editor de lecciones.
- Editor de evaluaciones.
- Editor PCE.
- Versionado y publicacion.

### Fase C: empresas y cohortes

- Empresas.
- Licencias.
- Asignacion masiva.
- Reportes.
- Cohortes por empresa.

### Fase D: presencialidad y alianzas

- Sedes.
- Sesiones.
- Docentes.
- Asistencia.
- Rubricas.
- Convenios.
- Rotaciones.

### Fase E: IA gobernada

- Fuentes autorizadas.
- RAG.
- Tutor IA.
- Evaluacion asistida.
- Registro de interacciones.

### Fase F: formacion tecnica

Solo aplica si existe:

- Habilitacion propia.
- Alianza con entidad habilitada.
- Modelo juridico y academico validado.
- Reglas claras sobre certificacion y alcance.

---

## Preguntas abiertas

1. ¿Sananga construira primero cursos normativos cortos o una ruta tecnica aliada?
2. ¿Que entidad emitira certificados cuando haya formacion tecnica?
3. ¿Cuales son los limites legales entre curso informal, certificacion de competencia y formacion tecnica?
4. ¿El primer programa multi-programa sera "Atencion a victimas de violencia con agentes quimicos"?
5. ¿Que datos del estudiante son obligatorios para certificados verificables?
6. ¿La IA evaluara respuestas abiertas en MVP o solo dara tutorias?
7. ¿Se prioriza panel administrativo completo o seeders tecnicos para cargar programas al inicio?

---

## Criterios de aceptacion de arquitectura

La arquitectura multi-programa se considera lista para implementacion cuando:

1. Existe modelo PostgreSQL para programas, competencias, evaluaciones, PCE y certificados.
2. Existe RBAC por programa.
3. Existe API documentada en OpenAPI.
4. Existe estrategia de migracion desde datos del prototipo.
5. El panel administrativo puede crear un programa sin tocar codigo.
6. Los certificados se verifican publicamente.
7. Las interacciones academicas quedan registradas en eventos.
8. La arquitectura no impide cursos individuales, rutas empresariales ni formacion tecnica futura.
