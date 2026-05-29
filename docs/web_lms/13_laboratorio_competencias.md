# Laboratorio de competencias

**Version:** 0.2
**Fecha:** 2026-05-29
**Estado:** Arquitectura de laboratorio como subecosistema
**Dominio:** Simulacion, evidencia practica y rubrica

---

## Proposito

El laboratorio de competencias es un subecosistema de Sananga. Puede funcionar conectado al campus personal del estudiante, pero no debe depender de que la persona entre primero al campus. Desde el dominio principal, el usuario debe poder elegir entre entrar al campus o entrar directamente al laboratorio.

El laboratorio no reemplaza el PCE ni la evaluacion: prepara, registra y audita desempeno observable antes de certificar.

En el prototipo actual el laboratorio vive en tres lugares:

- Como entrada directa desde el ecosistema inicial.
- Como vista propia: `Laboratorio`.
- Como estado interno del algoritmo formativo del programa.

---

## Regla de arquitectura

El ecosistema Sananga debe separar tres capas:

- **Portal/ecosistema**: entrada publica al dominio principal.
- **Campus**: tablero personal, programas matriculados, progreso, certificados y trazabilidad del usuario.
- **Laboratorio**: infraestructura modular de practica, simulacion, evidencias, rubricas y analitica.

El laboratorio puede verse publicamente como arquitectura. Para operar modulos, registrar evidencia o afectar el pasaporte de competencia, exige credenciales.

---

## Regla de producto

Un laboratorio pertenece a un programa y a una competencia. Debe declarar:

- Modulos del laboratorio.
- Objetivo de cada modulo.
- Componentes internos.
- Salida esperada.
- Relacion con evidencias y rubricas.
- Condicion de habilitacion del siguiente estado.

La plataforma debe impedir que el estudiante avance a PCE o evaluacion si el laboratorio obligatorio no esta completo.

---

## Flujo de acceso directo

1. El usuario entra al dominio principal de Sananga.
2. Elige `Laboratorio`.
3. Ve la arquitectura y los modulos del laboratorio sin pasar por el campus.
4. Si quiere operar el laboratorio, inicia sesion.
5. Al autenticarse, vuelve directamente al laboratorio.
6. El laboratorio recupera contexto de usuario, matricula, programa y competencia.
7. Las evidencias registradas actualizan el pasaporte de competencia del campus.

---

## Flujo desde campus

1. El estudiante entra al campus.
2. Selecciona un programa o ruta de competencia.
3. La ruta muestra el laboratorio como estado interno.
4. El estudiante abre el laboratorio desde la ruta.
5. El laboratorio conserva contexto de programa y usuario.
6. Al completar modulos, se habilita PCE o evaluacion.
7. El certificado queda bloqueado hasta cumplir laboratorio, PCE cuando aplique y evaluacion.

---

## Modulos del laboratorio

El prototipo ya no muestra un ejemplo clinico dentro del laboratorio. Muestra la infraestructura modular:

1. Orquestacion del laboratorio.
2. Contexto academico.
3. Constructor de estaciones.
4. Motor de simulacion.
5. Banco de evidencias.
6. Rubricas y desempeno.
7. Debriefing y refuerzo.
8. Analitica operativa.

Estos modulos son la base para que despues se configuren laboratorios especificos por programa sin hardcodear casos en la interfaz.

---

## Modelo de datos futuro

Tablas sugeridas:

```text
lab_scenarios
lab_modules
lab_stations
lab_rubrics
lab_attempts
lab_station_evidence
```

Relacion minima:

```text
program -> competency -> lab_scenario -> lab_modules -> lab_stations
enrollment -> lab_attempt -> lab_station_evidence
```

---

## Criterios de aceptacion

- El laboratorio aparece como vista navegable y entrada directa desde el ecosistema.
- La ruta del programa muestra el laboratorio como estado de competencia.
- Los modulos del laboratorio se ven sin credenciales como arquitectura.
- Operar modulos exige credenciales.
- Completar modulos registra evento de trazabilidad.
- PCE y evaluacion quedan bloqueados si el laboratorio requerido esta incompleto.
- El certificado exige laboratorio aprobado cuando el programa lo requiere.
