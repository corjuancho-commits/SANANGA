# Arquitectura UI de la web LMS Sananga

**Version:** 0.1  
**Fecha:** 2026-05-27  
**Estado:** Borrador inicial  
**Dominio:** UI/UX frontend  

---

## Principio visual

La interfaz del LMS Sananga debe comunicar salud, confianza, tecnologia educativa y humanidad. La experiencia debe ser sobria, clara y orientada a accion, evitando verse como una tienda generica de cursos.

---

## Estructura general

La plataforma se organiza como una aplicacion web de una sola pagina con:

- Barra lateral de navegacion.
- Barra superior contextual.
- Area principal de vistas.
- Toast de notificaciones.
- Persistencia local de estado.

## Navegacion principal

Vistas:

1. Inicio.
2. Catalogo.
3. Curso.
4. Evaluacion.
5. PCE.
6. Certificados.
7. Admin.

---

## Vista Inicio

Componentes:

- Hero institucional con imagen de salud y aprendizaje.
- Mensaje central de formacion verificable.
- Acciones principales.
- Metricas del estudiante.
- Formulario de perfil.
- Eventos recientes.

Objetivo:

Presentar la tesis de Sananga y permitir continuidad rapida.

---

## Vista Catalogo

Componentes:

- Encabezado de seccion.
- Control segmentado de filtros.
- Tarjetas de curso.
- Etiquetas de nivel, duracion y atributos.
- Boton de matricula o continuidad.

Objetivo:

Mostrar oferta educativa sin perder la orientacion academica.

---

## Vista Curso

Componentes:

- Panel de ruta.
- Barra de progreso.
- Modulos.
- Lecciones.
- Panel de microleccion.
- Caja de evidencia requerida.
- Acciones de completar evidencia y practicar PCE.

Objetivo:

Hacer visible la progresion controlada y la diferencia entre contenido y evidencia.

---

## Vista Evaluacion

Componentes:

- Estado de evaluacion.
- Preguntas.
- Opciones.
- Boton de envio.
- Panel de resultado.
- Retroalimentacion.

Objetivo:

Evaluar competencia minima antes de permitir certificacion.

---

## Vista PCE

Componentes:

- Estado actual.
- Situacion clinico-educativa.
- Campo de registro de decision.
- Opciones de accion.
- Barra de progreso.
- Panel de rubrica.
- Retroalimentacion inmediata.

Objetivo:

Simular desempeno procedimental de forma guiada, auditable y diferenciada del chat tutor.

---

## Vista Certificados

Componentes:

- Estado de bloqueo o emision.
- Tarjeta de certificado.
- Codigo verificable.
- Formulario de verificacion.
- Resultado de validacion.

Objetivo:

Conectar certificacion con criterios explicitos de evidencia y aprobacion.

---

## Vista Admin

Componentes:

- KPIs operativos.
- Reporte empresarial inicial.
- Tabla de auditoria educativa.
- Accion de generar reporte.

Objetivo:

Permitir supervision basica del LMS y demostrar trazabilidad desde el MVP.

---

## Lineamientos responsive

La interfaz debe:

- Priorizar lectura movil.
- Mantener botones grandes.
- Evitar superposiciones de texto.
- Transformar grids en una columna en pantallas pequenas.
- Mantener progreso y estado siempre visibles.
- Usar jerarquia tipografica moderada en paneles.

---

## Estados UI principales

- Curso no matriculado.
- Curso activo.
- Leccion pendiente.
- Leccion completada.
- Evaluacion pendiente.
- Evaluacion aprobada.
- Evaluacion no aprobada.
- PCE en progreso.
- PCE finalizado.
- Certificado bloqueado.
- Certificado emitido.
- Codigo verificado.
- Codigo no encontrado.

