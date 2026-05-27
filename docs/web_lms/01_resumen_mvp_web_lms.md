# Resumen del MVP web LMS Sananga

**Version:** 0.1  
**Fecha:** 2026-05-27  
**Estado:** Borrador inicial  
**Dominio:** Frontend web del LMS  

---

## Objetivo del MVP web

El MVP web de Sananga es una primera plataforma navegable que traduce el documento maestro del LMS en una experiencia concreta para estudiantes y administradores.

No se plantea como una landing page comercial ni como una simple vitrina de cursos. El MVP representa el nucleo pedagogico del proyecto:

- Aprendizaje estructurado.
- Evidencia por leccion.
- Evaluacion con criterio de aprobacion.
- Simulacion PCE guiada.
- Certificado verificable.
- Trazabilidad de eventos.
- Reporte administrativo basico.

---

## Alcance implementado

La plataforma web inicial incluye siete areas principales.

## 1. Inicio del estudiante

Vista de entrada con:

- Mensaje de posicionamiento institucional.
- Resumen de progreso.
- Estado de evaluacion.
- Estado de certificado.
- Acceso rapido al curso activo.
- Formulario de perfil.
- Eventos recientes.

El objetivo es que un estudiante pueda orientarse rapido y continuar su ruta en menos de tres clics.

## 2. Catalogo

Lista de cursos con:

- Nombre del curso.
- Categoria.
- Duracion.
- Nivel.
- Etiquetas academicas.
- Accion de matricula o continuidad.

El catalogo esta preparado para cursos normativos, bienestar, salud publica, humanizacion, seguridad del paciente y formacion empresarial.

## 3. Curso activo

Vista de ruta de aprendizaje con:

- Modulos.
- Lecciones.
- Minutos estimados.
- Barra de progreso.
- Evidencia requerida.
- Accion para marcar evidencia.
- Acceso a PCE.

La progresion del estudiante no depende solo de abrir contenido, sino de registrar evidencia minima.

## 4. Evaluacion

Evaluacion integradora con:

- Preguntas de seleccion multiple.
- Calculo automatico de resultado.
- Criterio de aprobacion minimo del 80%.
- Retroalimentacion segun desempeno.
- Bloqueo de certificado si no cumple criterios.

## 5. PCE educativo

Estacion de simulacion basada en estados:

- Situacion.
- Estado actual.
- Decision solicitada.
- Campo de registro breve.
- Opciones de accion.
- Retroalimentacion inmediata.
- Rubrica procedimental simple.

El PCE se diferencia del tutor conversacional porque opera como estacion guiada de desempeno.

## 6. Certificados

Vista de certificacion con:

- Emision solo si la ruta esta completa.
- Emision solo si la evaluacion esta aprobada.
- Codigo verificable.
- Formulario de verificacion.
- Registro de evento de verificacion.

## 7. Administracion

Panel basico con:

- Indicadores de cursos, lecciones, certificados y usuarios demo.
- Reporte empresarial inicial.
- Auditoria de eventos.
- Generacion de reporte simple.

---

## Decisiones de producto

El MVP privilegia:

- Claridad sobre complejidad.
- Flujo movil primero.
- Evidencia antes que certificado.
- Componentes sobrios y confiables.
- Preparacion para backend modular.
- Trazabilidad desde la primera version.

---

## Fuera de alcance en esta version

Esta version no incluye aun:

- Autenticacion real.
- Roles persistidos en servidor.
- Base de datos PostgreSQL.
- API backend.
- Pagos.
- Certificados firmados digitalmente.
- QR real.
- Tutor IA conectado a modelos.
- RAG documental.
- Panel empresarial completo.
- Multiusuario real.

Estos elementos quedan documentados como parte del roadmap tecnico.

