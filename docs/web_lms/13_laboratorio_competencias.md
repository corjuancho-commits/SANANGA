# Laboratorio de competencias

**Version:** 0.1
**Fecha:** 2026-05-29
**Estado:** Integracion inicial en prototipo
**Dominio:** Simulacion, evidencia practica y rubrica

---

## Proposito

El laboratorio de competencias es la fase practica del programa donde el estudiante convierte contenido y casos en una evidencia observable. No reemplaza el PCE ni la evaluacion: prepara al estudiante para ellos y documenta desempeno antes de certificar.

En el prototipo actual el laboratorio vive en dos lugares:

- Como vista propia: `Laboratorio`.
- Como estado interno del algoritmo formativo del programa.

---

## Regla de producto

Un laboratorio pertenece a un programa y a una competencia. Debe declarar:

- Estaciones de practica.
- Objetivo de cada estacion.
- Evidencia esperada.
- Rubrica de desempeno.
- Condicion de habilitacion del siguiente estado.

La plataforma debe impedir que el estudiante avance a PCE o evaluacion si el laboratorio obligatorio no esta completo.

---

## Flujo del estudiante

1. El estudiante completa evidencias conceptuales y procedimentales.
2. La ruta habilita el laboratorio.
3. El estudiante registra evidencia por estacion.
4. La plataforma actualiza el pasaporte de competencia.
5. Si el programa tiene PCE, se habilita el PCE.
6. Si el programa no tiene PCE, se habilita la evaluacion integradora.
7. El certificado queda bloqueado hasta cumplir laboratorio, PCE cuando aplique y evaluacion.

---

## Modelo de datos futuro

Tablas sugeridas:

```text
lab_scenarios
lab_stations
lab_rubrics
lab_attempts
lab_station_evidence
```

Relacion minima:

```text
program -> competency -> lab_scenario -> lab_stations
enrollment -> lab_attempt -> lab_station_evidence
```

---

## Criterios de aceptacion

- El laboratorio aparece como vista navegable.
- La ruta del programa muestra el laboratorio como estado de competencia.
- Cada estacion tiene objetivo, evidencia y rubrica.
- Completar estaciones registra evento de trazabilidad.
- PCE y evaluacion quedan bloqueados si el laboratorio requerido esta incompleto.
- El certificado exige laboratorio aprobado cuando el programa lo requiere.
