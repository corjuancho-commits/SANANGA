# Roadmap de evolucion web LMS Sananga

**Version:** 0.2
**Fecha:** 2026-05-29
**Estado:** Borrador inicial  
**Dominio:** Roadmap frontend y plataforma web  

---

## Fase actual: prototipo web estatico

Objetivo:

Convertir el documento maestro en una experiencia navegable de LMS.

Entregables:

- Interfaz web responsive.
- Vistas principales del estudiante.
- Catalogo.
- Curso activo.
- Evaluacion.
- PCE.
- Certificados.
- Admin basico.
- Estado local.
- Documentacion de la web.

---

## Fase 1: repositorio web ordenado

Objetivo:

Separar documentacion, prototipo y futuras capas de codigo.

Entregables:

- Carpeta `docs/web_lms/`.
- Carpeta `src/frontend/` o equivalente.
- Convenciones de componentes.
- README tecnico de ejecucion.
- Capturas de pantalla del MVP.
- Checklist de criterios de aceptacion.

---

## Fase 2: frontend con framework

Objetivo:

Migrar la SPA estatica a un frontend mantenible.

Opciones:

- Next.js / React.
- Vue / Nuxt.

Entregables:

- Rutas reales.
- Componentes reutilizables.
- Estado organizado.
- Tipado de datos.
- Pruebas basicas de interfaz.
- Preparacion para API backend.

---

## Fase 2.5: arquitectura multi-programa y contrato tecnico

Objetivo:

Definir el contrato tecnico antes de construir backend productivo, evitando que la plataforma quede amarrada a un solo curso o a datos hardcodeados.

Entregables:

- Documento `12_arquitectura_tecnica_multi_programa.md`.
- Modelo conceptual `Program -> Competency -> Module -> Lesson`.
- Regla de programa como configuracion, no como codigo.
- Esquema objetivo PostgreSQL.
- Contrato inicial de APIs REST.
- Modelo RBAC por usuario, programa y rol.
- Definicion de tabla de eventos append-only.
- Criterios de certificacion verificable.

---

## Fase 3: backend modular

Objetivo:

Sustituir `localStorage` por persistencia real.

Entregables:

- API de usuarios.
- API de programas.
- API de competencias.
- API de progreso.
- API de evaluaciones.
- API de PCE.
- API de sesiones presenciales cuando aplique.
- API de rotaciones IPS cuando aplique.
- API de certificados.
- API de eventos.
- Autenticacion.
- Control de roles.
- Panel administrativo para crear programas sin tocar codigo.

Tecnologias sugeridas:

- FastAPI con SQLAlchemy 2.0 y Alembic.
- PostgreSQL con JSONB y preparacion para `pgvector`.
- Redis para sesiones, colas livianas y rate limiting.
- Almacenamiento compatible con S3.

---

## Fase 4: certificacion verificable real

Objetivo:

Convertir el certificado local en credencial verificable.

Entregables:

- Codigo unico persistido.
- QR de verificacion.
- URL publica de validacion.
- Plantilla visual del certificado.
- Politica de revocacion.
- Firma o sello digital segun viabilidad legal.

---

## Fase 5: PCE con motor de estados

Objetivo:

Escalar el PCE demo a simulaciones configurables.

Entregables:

- Editor basico de escenarios.
- Estados configurables.
- Validaciones.
- Rubricas procedimentales.
- Eventos PCE.
- Debriefing estructurado.
- Reporte de desempeno.

---

## Fase 6: IA educativa gobernada

Objetivo:

Incorporar tutor IA y RAG sin perder control pedagogico.

Entregables:

- Tutor academico con rol explicito.
- Fuentes autorizadas.
- Politicas de respuesta.
- Registro de interacciones.
- Escalamiento a humano.
- Biblioteca documental.
- RAG inicial.

---

## Fase 7: panel empresarial

Objetivo:

Habilitar uso B2B.

Entregables:

- Empresas.
- Licencias.
- Asignacion masiva.
- Reportes por cohorte.
- Avance por trabajador.
- Descarga de certificados.
- Indicadores de riesgo academico.

---

## Criterios de aceptacion para avanzar

La plataforma web puede pasar de prototipo a MVP tecnico cuando:

1. El estudiante puede registrarse y autenticarse.
2. El catalogo se carga desde backend.
3. La matricula queda persistida.
4. El progreso se guarda por usuario, programa, competencia y matricula.
5. La evaluacion registra intentos.
6. El certificado se emite desde backend.
7. El codigo de certificado se verifica en una URL publica.
8. Los eventos quedan disponibles para auditoria.
9. El panel admin muestra datos reales.
10. La interfaz funciona correctamente en movil.
11. Un administrador puede crear o editar un programa desde datos, sin cambios de codigo.
12. El PCE y las evaluaciones viven dentro de la competencia correspondiente.

