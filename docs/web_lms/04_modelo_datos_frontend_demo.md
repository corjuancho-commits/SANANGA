# Modelo de datos frontend demo

**Version:** 0.1  
**Fecha:** 2026-05-27  
**Estado:** Borrador inicial  
**Dominio:** Datos de demostracion frontend  

---

## Proposito

Este documento describe el modelo de datos usado por el prototipo web estatico del LMS Sananga. No reemplaza el modelo definitivo de base de datos, pero ayuda a mapear las entidades minimas que luego deberan persistirse en backend.

---

## Persistencia actual

El prototipo usa `localStorage` para mantener estado en el navegador.

Clave sugerida:

```text
sananga-lms-state-v1
```

Esta persistencia permite simular:

- Perfil de usuario.
- Curso activo.
- Cursos matriculados.
- Lecciones completadas.
- Resultado de evaluacion.
- Certificado emitido.
- Avance PCE.
- Eventos de auditoria.

---

## Entidad Profile

Representa al usuario local de la demo.

Campos:

- `name`: nombre del usuario.
- `email`: correo.
- `role`: rol seleccionado.

Futura tabla sugerida:

```text
users
```

---

## Entidad Course

Representa un curso visible en catalogo.

Campos:

- `id`
- `title`
- `category`
- `duration`
- `level`
- `summary`
- `tags`
- `modules`
- `questions`

Futuras tablas sugeridas:

```text
courses
course_versions
course_modules
lessons
```

---

## Entidad Module

Agrupa lecciones.

Campos:

- `title`
- `lessons`

Futura tabla sugerida:

```text
course_modules
```

---

## Entidad Lesson

Representa una microleccion.

Campos:

- `id`
- `title`
- `minutes`
- `evidence`
- `body`

Futuras tablas sugeridas:

```text
lessons
learning_evidence_requirements
```

---

## Entidad Question

Representa una pregunta evaluativa.

Campos:

- `text`
- `options`
- `answer`
- `feedback`

Futuras tablas sugeridas:

```text
assessments
assessment_questions
assessment_attempts
```

---

## Entidad Certificate

Representa el certificado emitido localmente.

Campos:

- `code`
- `issuedAt`
- `courseId`
- `student`
- `score`

Futuras tablas sugeridas:

```text
certificates
certificate_verifications
```

---

## Entidad PceStep

Representa un estado de simulacion PCE.

Campos:

- `state`
- `title`
- `situation`
- `prompt`
- `choices`

Cada choice contiene:

- `label`
- `ok`
- `feedback`

Futuras tablas sugeridas:

```text
pce_scenarios
pce_states
pce_choices
pce_attempts
pce_events
```

---

## Entidad Event

Registra trazabilidad minima.

Campos:

- `type`
- `detail`
- `at`

Eventos usados en la demo:

- `sistema`
- `perfil_actualizado`
- `matricula`
- `leccion_completada`
- `evaluacion_aprobada`
- `evaluacion_no_aprobada`
- `pce_estado_aprobado`
- `pce_alerta`
- `pce_reiniciado`
- `certificado_emitido`
- `certificado_verificado`
- `verificacion_fallida`
- `reporte_generado`

Futura tabla sugerida:

```text
learning_events
```

---

## Reglas de migracion a backend

1. Mantener eventos como fuente de auditoria.
2. Versionar cursos y evaluaciones.
3. Separar certificado emitido de plantilla de certificado.
4. Asociar intentos de evaluacion a usuario, curso y version.
5. Asociar PCE a escenario, estado y rubrica.
6. Usar PostgreSQL como base principal.
7. Evaluar `pgvector` cuando se incorpore RAG.

