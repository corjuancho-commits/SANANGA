# Modelo de datos frontend demo

**Version:** 0.2
**Fecha:** 2026-05-29
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
- Evidencias de laboratorio.
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
programs
program_versions
competencies
modules
lessons
```

Nota de arquitectura:

En el prototipo se mantiene el nombre `Course` porque la interfaz actual habla de cursos. En el backend productivo, la entidad equivalente debe ser `Program`. Esto permite que una misma plataforma soporte cursos informales, cursos empresariales, microcredenciales y programas tecnicos laborales sin cambiar codigo.

El nombre comercial puede seguir mostrandose como "curso" cuando sea conveniente para el usuario final, pero el modelo interno debe tratarlo como programa formativo configurable.

---

## Entidad Module

Agrupa lecciones.

Campos:

- `title`
- `lessons`

Futura tabla sugerida:

```text
modules
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
pce_attempt_decisions
```

---

## Entidad LabModule

Representa un modulo estructural del laboratorio como subecosistema independiente del campus.

Campos:

- `id`
- `title`
- `layer`
- `objective`
- `components`
- `output`

---

## Entidad LabStation

Representa una estacion de practica asociada a un laboratorio, programa y competencia. En el prototipo actual se muestran modulos estructurales; las estaciones especificas se configuraran despues desde el panel academico.

Campos futuros:

- `id`
- `labModuleId`
- `title`
- `objective`
- `evidence`
- `rubric`

Futuras tablas sugeridas:

```text
lab_scenarios
lab_modules
lab_stations
lab_rubrics
lab_attempts
lab_station_evidence
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
2. Migrar `Course` a `Program`, no a una tabla aislada de cursos.
3. Versionar programas, evaluaciones y escenarios PCE.
4. Separar certificado emitido de plantilla de certificado.
5. Asociar intentos de evaluacion a usuario, matricula, programa, competencia y version.
6. Asociar PCE a competencia, escenario, estado, decision y rubrica.
7. Usar PostgreSQL como base principal, con JSONB para configuraciones flexibles.
8. Evaluar `pgvector` cuando se incorpore RAG.
9. Crear una tabla `enrollment_competency_progress` para materializar el pasaporte de competencias.
10. Tratar cada programa como configuracion editable desde panel administrativo, no como codigo nuevo.

---

## Mapeo hacia arquitectura multi-programa

| Prototipo frontend | Backend productivo sugerido | Comentario |
| --- | --- | --- |
| `Profile` | `users`, `roles`, `user_program_roles` | Una persona puede tener varios roles segun programa o contexto. |
| `Course` | `programs`, `program_versions` | Curso visible al usuario; programa en la arquitectura. |
| `Module` | `competencies`, `modules` | La competencia contiene modulos y reglas de avance. |
| `Lesson` | `lessons`, `lesson_progress` | La leccion debe registrar evidencia y avance por matricula. |
| `Question` | `assessments`, `assessment_questions`, `assessment_attempts` | Evaluaciones versionadas por competencia. |
| `LabModule` | `lab_modules`, `lab_scenarios` | Arquitectura modular del laboratorio como subecosistema. |
| `LabStation` | `lab_stations`, `lab_attempts`, `lab_station_evidence` | Estaciones especificas del laboratorio dentro de la competencia. |
| `PceStep` | `pce_scenarios`, `pce_states`, `pce_choices`, `pce_attempts` | El PCE vive dentro de la competencia. |
| `Certificate` | `certificates`, `certificate_verifications` | Certificado verificable con codigo publico y estado de revocacion. |
| `Event` | `learning_events` | Tabla append-only para auditoria academica. |

Este mapeo queda desarrollado en `12_arquitectura_tecnica_multi_programa.md`.

