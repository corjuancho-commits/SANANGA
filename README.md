# SANANGA

## Entrada local unificada

Para evitar duplicados, la entrada recomendada en este equipo es:

`C:\Users\User\Documents\SANANGA\index.html`

Tambien puedes abrir el lanzador versionado del repositorio:

`C:\Users\User\Documents\SANANGA\repo\index.html`

Ambos redirigen al aplicativo canonico:

`C:\Users\User\Documents\SANANGA\repo\src\frontend\static-mvp\index.html`

Rutas principales: `#acceso` para el ecosistema publico, `#inicio` para el campus y `#laboratorio` para el laboratorio de competencias.

Sananga es un proyecto de educación en salud orientado a crear programas, certificaciones y una plataforma LMS inteligente con IA, evaluación por competencias, simulaciones PCE y analítica educativa para formar talento humano en salud con evidencia real de aprendizaje y desempeño.

Sananga es una iniciativa colombiana que busca revolucionar la formación en salud y bienestar para trabajadores, empresas y profesionales del sector. El proyecto nació como una respuesta a la necesidad de tener programas de capacitación que no se limiten a entregar un certificado rápido, sino que garanticen la adquisición real de competencias y la mejora del desempeño. Para lograrlo, Sananga combina educación informal, tecnología educativa de última generación, inteligencia artificial y un enfoque centrado en la seguridad del paciente.

Filosofía y normativa

Sananga se acoge al marco de la educación no formal establecido en Colombia. Según los lineamientos de la Ley 115 de 1994 y el Decreto 1075 de 2015, la educación informal consiste en cursos o talleres cortos, de duración menor a 160 horas, que no conducen a un título ocupacional y únicamente otorgan constancias de asistencia. Esto permite ofrecer programas de actualización y complementación sin necesidad de autorización por parte de la Secretaría de Educación, siempre y cuando la publicidad indique claramente que se trata de educación informal. Con base en este marco, Sananga desarrolla cursos que cumplen la normativa sanitaria vigente (Resolución 3100 de 2019, Resolución 4568 de 2014, Decreto 1033 de 2014 y Ley 1971 de 2019, entre otras) y garantiza que el personal de salud se capacite de manera continua.

Objetivos del proyecto

Los principales objetivos del proyecto SANANGA son:

Garantizar competencias reales: diseñar e implementar cursos que certifiquen la capacidad del estudiante para actuar adecuadamente en situaciones críticas, y no solo su asistencia a un video.
Adoptar tecnologías emergentes: integrar inteligencia artificial, motores de simulación y analítica para mejorar la experiencia de aprendizaje y reducir tareas administrativas.
Crear un ecosistema escalable: disponer de una plataforma que permita incorporar nuevos cursos, servicios y modelos de negocio sin rehacer la arquitectura cada vez.
Promover la seguridad y el bienestar: asegurar que los profesionales de la salud, empresas y organizaciones cuenten con capacitación actualizada que contribuya a prácticas seguras y humanizadas.
Resumen funcional de la plataforma LMS

El núcleo del proyecto es un sistema de gestión del aprendizaje (LMS) inteligente, diseñado para ofrecer experiencias formativas completas, evaluaciones basadas en competencias y certificaciones verificables. Las características principales incluyen:

Aprendizaje modular y adaptativo
Los cursos se organizan en módulos y unidades didácticas cortas (micro‑learning) que se adaptan al ritmo del estudiante.
Se pueden establecer rutas de aprendizaje y prerrequisitos, de manera que solo se avance cuando el estudiante comprenda la lección anterior.
Inteligencia artificial y RAG
Un agente tutor basado en modelos de lenguaje responde preguntas, genera ejemplos y orienta el estudio, pero está gobernado por reglas explícitas y solo utiliza fuentes autorizadas.
El motor de retrieval‑augmented generation (RAG) recupera fragmentos de los protocolos, guías y legislación sanitaria para sustentar cada respuesta y reducir las alucinaciones.
Protocolos conversacionales estructurados (PCE)
Inspirado en el concepto de Protocolo Conversacional Estructurado, el LMS incorpora simulaciones guiadas por estados: cada práctica se modela como una secuencia de pasos que el estudiante debe completar en orden, con validaciones y retroalimentación inmediata.
Esta tecnología permite evaluar procedimientos clínicos, atención de emergencias o rutas administrativas, registrando cada interacción con sello de tiempo y generando evidencia auditable.
Evaluación integral y certificación verificable
Se combinan cuestionarios, ejercicios prácticos y simulaciones para evaluar tanto el conocimiento como la aplicación en contextos reales.
La certificación se emite únicamente cuando el estudiante supera criterios definidos; incluye un código QR y firma digital que permite a terceros verificar la autenticidad del documento.
Paneles y analítica
Un panel administrativo centraliza la creación de cursos, la subida de recursos y la gestión de usuarios.
El panel empresarial permite a las organizaciones asignar cursos a sus trabajadores, monitorear el progreso y descargar reportes.
La capa analítica transforma los eventos del sistema en métricas de aprendizaje y desempeño para tomar decisiones basadas en datos.
Estructura del repositorio

Este repositorio está organizado en varias carpetas y archivos para facilitar el mantenimiento y el trabajo en equipo:

Ruta	Propósito
docs/	Documentación funcional, técnica y pedagógica del proyecto. Incluye el documento maestro del LMS (00_documento_maestro_lms.md), lineamientos metodológicos y requisitos normativos.
src/	Código fuente de la plataforma, dividido en frontend, backend, servicios de IA, API de certificados y scripts de automatización.
pce/	Implementaciones de Protocolos Conversacionales Estructurados específicos para cada curso o simulación.
content/	Recursos educativos (PDF, infografías, guiones de video, bases de datos normativas) y plantillas de rúbricas.
tests/	Pruebas unitarias y de integración para asegurar la fiabilidad del sistema.
examples/	Prototipos y casos de uso para probar los componentes del LMS antes de su integración final.

Puedes consultar el documento maestro del LMS en la carpeta docs/ para un desglose detallado de la arquitectura, modelos de datos, políticas de evaluación y roadmap.

Contribución

Este proyecto está en fase inicial. Si deseas contribuir, ten en cuenta lo siguiente:

Revisa el documento maestro y las guías de estilo antes de proponer cambios. La plataforma se diseñó para cumplir con normativa de educación informal y requisitos sanitarios específicos, por lo que cualquier modificación debe respetar este marco.
Abre una rama desde main y realiza tus cambios en archivos específicos. No subas datos sensibles ni código con credenciales.
Asegúrate de incluir pruebas y documentación actualizada con tus contribuciones. La calidad y la trazabilidad son prioridades en Sananga.
Describe tu contribución en un Pull Request detallando el objetivo, el alcance y cualquier decisión arquitectónica que hayas tomado.
Licencia

Este proyecto se publicará bajo una licencia abierta (por definir) que permita el uso, modificación y distribución del software, siempre y cuando se conserve la autoría y se cumplan las normativas aplicables. La intención es fomentar la colaboración y la innovación en la educación sanitaria.

Contacto

Para más información, sugerencias o alianzas, puedes contactar al equipo a través de las vías oficiales que se habilitarán una vez el repositorio esté público. Sananga busca construir una comunidad comprometida con la formación de calidad y la seguridad del paciente.
