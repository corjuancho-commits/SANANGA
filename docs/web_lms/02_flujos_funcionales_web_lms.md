# Flujos funcionales de la web LMS Sananga

**Version:** 0.1  
**Fecha:** 2026-05-27  
**Estado:** Borrador inicial  
**Dominio:** Experiencia funcional web  

---

## Flujo 1: ingreso y perfil del estudiante

1. El usuario abre la plataforma.
2. Visualiza el dashboard de inicio.
3. Revisa su progreso, evaluacion y certificado.
4. Completa o actualiza nombre, correo y rol.
5. El sistema registra el evento `perfil_actualizado`.

## Resultado esperado

El estudiante queda identificado dentro de la demo y sus eventos posteriores quedan asociados a su perfil local.

---

## Flujo 2: exploracion del catalogo y matricula

1. El usuario ingresa a Catalogo.
2. Filtra por todos, normativo o bienestar.
3. Revisa ficha de curso.
4. Selecciona matricular o continuar.
5. El sistema activa el curso.
6. El sistema registra el evento `matricula`.

## Resultado esperado

El estudiante queda asociado a un curso activo y puede continuar la ruta de aprendizaje.

---

## Flujo 3: ruta de aprendizaje y evidencia

1. El usuario ingresa a Curso.
2. Revisa modulos y lecciones.
3. Selecciona una leccion.
4. Lee el contenido de microleccion.
5. Revisa la evidencia requerida.
6. Marca la evidencia como completada.
7. El sistema actualiza el porcentaje de progreso.
8. El sistema registra el evento `leccion_completada`.

## Regla clave

La leccion no se entiende como completada por simple visualizacion. Debe quedar una accion explicita de evidencia.

---

## Flujo 4: evaluacion integradora

1. El usuario ingresa a Evaluacion.
2. Responde las preguntas.
3. Envia el formulario.
4. El sistema calcula el porcentaje.
5. Si el resultado es igual o superior al 80%, marca aprobacion.
6. Si el resultado es inferior, mantiene el certificado bloqueado.
7. El sistema registra `evaluacion_aprobada` o `evaluacion_no_aprobada`.

## Resultado esperado

La evaluacion funciona como barrera academica antes de la certificacion.

---

## Flujo 5: PCE educativo

1. El usuario ingresa a PCE.
2. El sistema presenta un estado de simulacion.
3. El usuario escribe una nota breve de decision.
4. El usuario selecciona una accion.
5. El sistema valida si la decision es correcta.
6. El sistema entrega retroalimentacion inmediata.
7. El sistema avanza al siguiente estado.
8. Al finalizar, presenta desempeno PCE.
9. El sistema registra eventos `pce_estado_aprobado` o `pce_alerta`.

## Regla clave

El PCE no es chat libre. Es una estacion procedimental guiada por estados, decisiones y criterios.

---

## Flujo 6: emision de certificado

1. El usuario ingresa a Certificados.
2. El sistema verifica condiciones:
   - Progreso de ruta igual al 100%.
   - Evaluacion aprobada.
3. Si cumple, habilita emision.
4. El usuario emite certificado.
5. El sistema genera codigo verificable.
6. El sistema registra `certificado_emitido`.

## Resultado esperado

La certificacion queda vinculada a evidencia y evaluacion, no a asistencia.

---

## Flujo 7: verificacion de certificado

1. El usuario ingresa un codigo.
2. El sistema compara el codigo con el certificado emitido.
3. Si coincide, muestra validez, estudiante, curso y resultado.
4. Si no coincide, informa que el codigo no fue encontrado.
5. El sistema registra `certificado_verificado` o `verificacion_fallida`.

---

## Flujo 8: administracion y auditoria

1. El administrador ingresa al panel.
2. Revisa indicadores del MVP.
3. Consulta reporte empresarial.
4. Revisa eventos de auditoria.
5. Genera reporte simple.
6. El sistema registra `reporte_generado`.

## Resultado esperado

La administracion inicial permite observar avance, aprobacion, certificados y eventos minimos.

