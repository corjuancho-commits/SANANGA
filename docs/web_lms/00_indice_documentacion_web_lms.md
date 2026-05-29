# Documentacion web del LMS Sananga

**Version:** 0.2
**Fecha:** 2026-05-29
**Estado:** Borrador inicial para repositorio  
**Alcance:** Documentacion de la pagina web y MVP frontend del LMS Sananga  

---

## Proposito

Esta carpeta documenta la plataforma web del LMS Sananga desarrollada hasta la fecha como prototipo funcional de frontend. Su objetivo es separar la documentacion de la pagina web del documento maestro general del LMS, dejando una base clara para diseno, implementacion, revision y crecimiento tecnico.

La documentacion se enfoca en la experiencia web del LMS: navegacion, vistas, componentes, flujos funcionales, datos de demostracion, criterios de aceptacion y siguientes pasos.

---

## Documentos incluidos

1. `01_resumen_mvp_web_lms.md`  
   Resume el alcance del MVP web, las capacidades implementadas y las decisiones de producto tomadas.

2. `02_flujos_funcionales_web_lms.md`  
   Describe los flujos principales de estudiante, evaluacion, PCE, certificado y administrador.

3. `03_arquitectura_ui_web_lms.md`  
   Documenta la estructura visual, vistas, componentes y estados de interfaz.

4. `04_modelo_datos_frontend_demo.md`  
   Define las entidades de demostracion usadas por el frontend estatico y su relacion con el futuro backend.

5. `05_roadmap_web_lms.md`  
   Propone la evolucion desde prototipo web estatico hacia plataforma LMS con backend, autenticacion, base de datos e IA gobernada.

6. `06_entorno_desarrollo_local.md`  
   Documenta herramientas instaladas, ubicacion de la copia local y comandos de ejecucion.

7. `07_algoritmo_formativo_competencia.md`  
   Define el curso como proceso de competencia guiado por estados, evidencias, PCE, evaluacion y certificacion.

8. `08_identidad_roles_acceso.md`  
   Define el flujo de registro, inicio de sesion, rol activo, roles multiples y reglas de seguridad para asignacion de permisos.

9. `09_identidad_institucional_y_acceso_comercial.md`  
   Define narrativa institucional, propuesta de valor, publico objetivo y estructura comercial minimalista de la pagina de acceso.

10. `10_sintesis_fuentes_proyecto_sananga.md`
    Resume los chats y fuentes revisadas del proyecto ChatGPT SANANGA y las decisiones trasladadas al prototipo.

11. `11_linea_tiempo_vision_usuario_sananga.md`
    Mapea la evolucion de la vision del usuario sobre Sananga a partir de sus propias instrucciones en los chats del proyecto.

12. `12_arquitectura_tecnica_multi_programa.md`
    Integra la arquitectura tecnica multi-programa: stack recomendado, modelo PostgreSQL objetivo, APIs, RBAC, trazabilidad, certificacion y migracion desde el prototipo.

13. `13_laboratorio_competencias.md`
    Define el laboratorio como fase practica dentro del programa: estaciones, evidencia, rubrica y bloqueo de PCE/evaluacion hasta completar desempeno observable.

---

## Estado actual

El MVP web actual cubre:

- Inicio/dashboard del estudiante.
- Perfil basico.
- Catalogo de cursos.
- Matricula demo.
- Ruta de aprendizaje.
- Registro de avance por leccion.
- Evaluacion integradora.
- Estacion PCE educativa.
- Emision y verificacion local de certificado.
- Panel administrativo basico.
- Registro de eventos de aprendizaje.
- Pagina publica de acceso con identidad institucional, portafolio, buscador, filtros y fichas comerciales de cursos.
- Sintesis documental del proyecto Sananga para orientar marketing, producto y siguientes componentes.
- Linea de tiempo de vision del fundador para orientar cambios estrategicos del LMS.
- Arquitectura tecnica objetivo para convertir el prototipo en plataforma multi-programa con programas como configuracion, no como codigo.
- Laboratorio de competencias integrado a la ruta del programa y al bloqueo de PCE/evaluacion.

---

## Principio rector

La pagina web del LMS debe expresar desde la primera pantalla la tesis del proyecto:

> Sananga no certifica asistencia. Sananga certifica competencia demostrada.

