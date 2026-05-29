# Algoritmo formativo de competencia

**Version:** 0.1  
**Fecha:** 2026-05-27  
**Estado:** Borrador inicial  
**Dominio:** Modelo pedagogico y logica de producto  

---

## Idea central

Cada curso de Sananga debe comportarse como un proceso formativo de competencia. El estudiante no simplemente entra, consume contenido, presenta una evaluacion aislada y descarga un certificado. Entra a una ruta guiada por estados donde cada actividad tiene funcion pedagogica dentro de la adquisicion de una competencia.

El curso debe responder tres preguntas:

1. Que competencia se esta formando.
2. Que evidencias demuestran avance.
3. Que criterios habilitan la certificacion.

---

## Maquina de estados adaptativa

El modelo se parece a una maquina de estados finitos, pero no debe ser completamente deterministico. El avance depende de condiciones observables del estudiante:

- Evidencias completadas.
- Resultado de evaluaciones.
- Desempeno en PCE.
- Errores criticos.
- Necesidad de refuerzo.
- Dominio conceptual.
- Dominio procedimental.

La plataforma puede recomendar caminos distintos sin perder una estructura base comun.

---

## Estados minimos de un curso por competencia

Un curso certificable deberia contener, como minimo:

1. Diagnostico o encuadre.
2. Formacion conceptual.
3. Aplicacion procedimental.
4. Simulacion PCE, si la competencia lo requiere.
5. Evaluacion integradora.
6. Certificacion.

No todos los cursos requieren PCE, pero si existe, debe vivir dentro del curso y dentro de un estado especifico de adquisicion de competencia.

---

## Evaluacion dentro del curso

La evaluacion no debe estar fuera del curso como una accion independiente. Debe pertenecer a un estado del algoritmo formativo y declarar:

- Competencia evaluada.
- Evidencias previas requeridas.
- Puntaje minimo.
- Rubrica o criterios.
- Acciones de refuerzo si no se aprueba.

---

## PCE dentro del curso

El PCE debe pertenecer a un proceso especifico. Por ejemplo:

```text
Curso: Seguridad del paciente
Competencia: Contener un riesgo de evento adverso mediante verificacion, escalamiento y registro seguro.
Estado: Aplicacion procedimental
PCE: Paciente con riesgo de evento adverso
```

El PCE no reemplaza al curso, sino que valida una fase concreta del desarrollo de la competencia.

En la arquitectura productiva, cada PCE debe guardarse como datos configurables:

- `pce_scenarios`: caso o simulacion asociada a una competencia.
- `pce_states`: estados del caso.
- `pce_choices`: decisiones posibles y transiciones.
- `pce_attempts`: intentos del estudiante.
- `pce_attempt_decisions`: decisiones tomadas en cada intento.

Esto permite que un nuevo programa tenga sus propios PCE sin modificar el codigo de la plataforma.

---

## Criterios de certificacion

El certificado se habilita solamente si el estudiante cumple las condiciones del algoritmo:

- Ruta formativa completada.
- Evidencias minimas registradas.
- Evaluacion integradora aprobada.
- PCE aprobado cuando sea obligatorio.
- Eventos trazables disponibles.

---

## Implicacion para la interfaz

La vista principal del curso debe mostrar:

- Nombre de la competencia.
- Estado actual recomendado.
- Mapa de estados.
- Dominio conceptual.
- Dominio procedimental.
- Dominio integrador.
- Actividad activa.
- Bloqueos y desbloqueos.
- Proxima accion sugerida.

La evaluacion, el PCE y el certificado deben ser estados internos del curso, no destinos sueltos sin contexto.
