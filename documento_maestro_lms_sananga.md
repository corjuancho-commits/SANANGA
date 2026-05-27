# Documento Maestro del LMS Sananga

**Versión:** 0.1 técnica preliminar  
**Fecha:** 2026-05-27  
**Estado:** Documento rector inicial para repositorio GitHub  
**Proyecto:** Sananga — Plataforma educativa inteligente para formación, evaluación y certificación en salud  
**Alcance:** Arquitectura funcional, pedagógica, tecnológica, analítica, visual, operativa y de gobierno del LMS  

---

## 0. Declaración rectora

El LMS Sananga debe diseñarse como una plataforma educativa inteligente para salud, no como un repositorio de contenidos ni como una tienda de certificados. Su núcleo conceptual es la formación verificable: cada estudiante debe transitar una experiencia de aprendizaje estructurada, realizar actividades significativas, demostrar competencia y recibir una certificación trazable solo cuando cumpla criterios explícitos de aprobación.

Sananga parte de una oportunidad clara: existe una demanda creciente de formación continua en salud, bienestar, seguridad del paciente, normatividad sanitaria y autocuidado, pero buena parte de la oferta digital se limita a cursos asincrónicos de baja interacción, evaluaciones superficiales y certificados automáticos. La plataforma debe diferenciarse por convertir el aprendizaje en evidencia y la evidencia en certificación verificable.

Desde arquitectura de software, el LMS Sananga debe integrar cinco grandes capacidades:

1. Gestión estructurada del aprendizaje.
2. Evaluación por competencias y desempeño.
3. Inteligencia artificial gobernada por fuentes, reglas y trazabilidad.
4. Simulación conversacional estructurada mediante PCE.
5. Analítica educativa, empresarial y operativa.

La promesa técnica y pedagógica de la plataforma puede resumirse así:

> **Sananga no certifica asistencia. Sananga certifica competencia demostrada.**

---

## 1. Propósito del documento

Este documento maestro establece la arquitectura preliminar del LMS Sananga con suficiente profundidad para orientar el diseño del producto, la construcción tecnológica, la documentación en GitHub, la contratación futura de desarrolladores, la creación de cursos, el diseño de agentes de IA, la implementación de PCE educativos y la escalabilidad del negocio.

El documento debe funcionar como:

- Documento rector del proyecto tecnológico.
- Especificación inicial de producto.
- Marco de gobierno de arquitectura.
- Guía para diseño instruccional.
- Base para estructura de repositorio en GitHub.
- Referente para decisiones técnicas y pedagógicas.
- Mapa inicial para roadmap de desarrollo.

No pretende ser todavía una especificación cerrada de desarrollo. Es una arquitectura funcional de alto rigor que debe convertirse progresivamente en historias de usuario, diagramas, esquemas de datos, contratos API, prompts, rúbricas, PCE, modelos de evaluación y código.

---

## 2. Alcance del LMS

El LMS Sananga debe cubrir la cadena completa de valor educativo:

1. Captación de usuario o empresa.
2. Registro, autenticación y perfilamiento.
3. Compra, asignación o activación de cursos.
4. Acceso a rutas de aprendizaje.
5. Consumo de contenidos.
6. Interacción con tutoría humana o IA.
7. Actividades de aprendizaje.
8. Simulaciones y PCE educativos.
9. Evaluación diagnóstica, formativa, sumativa y procedimental.
10. Retroalimentación personalizada.
11. Certificación verificable.
12. Reporte individual y empresarial.
13. Analítica de desempeño.
14. Mejora continua del contenido.
15. Actualización normativa y versionamiento.

El sistema debe servir tanto para cursos normativos como para programas de bienestar, salud pública, autocuidado, enfermería, seguridad del paciente, humanización, salud mental, rutas de atención, formación empresarial y educación continua en salud.

---

## 3. Principios de diseño de la plataforma

### 3.1. Principio de formación verificable

Todo curso debe producir evidencia de aprendizaje. La evidencia puede ser un cuestionario, un caso, una simulación, una decisión tomada en un PCE, una respuesta abierta, un artefacto cognitivo, una reflexión estructurada, una tarea práctica o una combinación de estos elementos.

La plataforma debe diferenciar entre:

- Contenido consumido.
- Actividad realizada.
- Conocimiento demostrado.
- Competencia procedimental demostrada.
- Certificación emitida.

La certificación no debe depender únicamente de consumo de contenido.

### 3.2. Principio de progresión controlada

El estudiante debe avanzar por rutas de aprendizaje configurables. Algunas rutas podrán ser libres, pero los cursos críticos deben exigir prerrequisitos, desbloqueos y validaciones.

Ejemplo de progresión general:

1. Diagnóstico inicial.
2. Lección/Microlección conceptual.
3. Actividad de comprensión.
4. Caso aplicado.
5. Simulación o PCE.
6. Retroalimentación.
7. Evaluación integradora.
8. Certificación.

### 3.3. Principio de IA gobernada

La IA no debe operar como conversación libre sin límites. Cada agente debe tener:

- Propósito funcional.
- Rol explícito.
- Alcance.
- Límites.
- Fuentes autorizadas.
- Criterios de respuesta.
- Reglas de seguridad.
- Condiciones de escalamiento a humano.
- Registro de interacción.

La IA debe apoyar el aprendizaje, no sustituir la responsabilidad pedagógica, clínica, normativa o institucional de Sananga.

### 3.4. Principio de trazabilidad total

Toda acción relevante debe generar un registro. El registro debe permitir reconstruir qué ocurrió, cuándo ocurrió, quién lo hizo, en qué curso, con qué resultado y bajo qué versión de contenido.

Eventos mínimos:

- Usuario registrado.
- Curso asignado.
- Lección iniciada.
- Lección completada.
- Actividad iniciada.
- Actividad enviada.
- Evaluación presentada.
- Intento fallido.
- Intento aprobado.
- Retroalimentación generada.
- PCE iniciado.
- Estado PCE alcanzado.
- Error crítico detectado.
- Simulación cerrada.
- Certificado emitido.
- Certificado verificado.

### 3.5. Principio de modularidad

El LMS debe ser modular. Cada componente debe poder evolucionar sin destruir el resto del sistema.

Módulos principales:

- Identidad y usuarios.
- Empresas y licencias.
- Cursos y rutas.
- Contenidos.
- Evaluaciones.
- PCE.
- IA.
- Certificados.
- Analítica.
- Administración.
- Pagos.
- Notificaciones.
- Soporte.

### 3.6. Principio de escalabilidad progresiva

Sananga no debe construir de entrada una plataforma compleja tipo universidad virtual completa. Debe iniciar con un producto mínimo funcional, pero diseñado con una arquitectura que no bloquee el crecimiento.

El sistema debe poder comenzar con:

- Catálogo mínimo.
- Cursos autoformativos.
- Evaluación básica.
- Certificado verificable.
- Panel administrativo simple.

Y luego crecer hacia:

- IA con RAG.
- PCE educativos.
- Simulaciones avanzadas.
- Panel empresarial.
- Analítica predictiva.
- Suscripciones.
- Internacionalización.

### 3.7. Principio de enfoque móvil

La plataforma debe diseñarse primero para celular. Muchos estudiantes potenciales serán trabajadores de salud, auxiliares, técnicos, cuidadores o personal operativo que probablemente accederán desde dispositivos móviles.

Esto exige:

- Interfaz limpia.
- Navegación simple.
- Bajo peso visual.
- Cargas rápidas.
- Botones grandes.
- Lecturas fragmentadas.
- Videos cortos.
- Actividades breves.
- Progreso visible.

### 3.8. Principio de salud segura

La plataforma debe evitar inducir acciones clínicas inseguras. En cursos con contenido clínico, la IA y los materiales deben declarar límites, roles, fuentes y criterios. La formación debe dejar claro que el aprendizaje no reemplaza protocolos institucionales, criterio profesional, supervisión, habilitación, regulación ni atención médica real.

---

## 4. Arquitectura de actores y roles

El LMS debe contemplar múltiples actores. Cada actor tiene permisos, necesidades, flujos y riesgos distintos.

### 4.1. Estudiante individual

Usuario que compra o recibe acceso a un curso. Puede ser personal de salud, trabajador empresarial, auxiliar, enfermero, cuidador, estudiante, administrativo o profesional interesado.

Necesita:

- Registro simple.
- Acceso rápido a sus cursos.
- Claridad sobre progreso.
- Retroalimentación comprensible.
- Certificado verificable.
- Soporte técnico.

Permisos:

- Ver cursos asignados.
- Consumir contenidos.
- Realizar actividades.
- Interactuar con tutor IA si está habilitado.
- Presentar evaluaciones.
- Descargar certificados propios.
- Ver su historial.

### 4.2. Administrador empresarial

Representante de una empresa cliente. Compra cupos, asigna cursos y revisa avance de trabajadores.

Necesita:

- Gestión de usuarios de su empresa.
- Asignación masiva de cursos.
- Reportes de avance.
- Reportes de certificados.
- Alertas de incumplimiento.
- Exportación de datos.

Permisos:

- Crear o invitar usuarios de su organización.
- Asignar licencias disponibles.
- Ver progreso agregado e individual de su empresa.
- Descargar reportes.
- Ver certificados emitidos para su empresa.

No debe poder:

- Editar contenidos del curso.
- Modificar calificaciones.
- Emitir certificados manualmente.
- Acceder a datos de otras empresas.

### 4.3. Diseñador instruccional

Rol interno o colaborador de Sananga encargado de construir cursos.

Necesita:

- Crear estructura de cursos.
- Definir objetivos y competencias.
- Cargar contenidos.
- Crear actividades.
- Asociar rúbricas.
- Proponer PCE.
- Versionar contenidos.

Permisos:

- Crear y editar cursos en borrador.
- Cargar recursos.
- Diseñar evaluaciones.
- Revisar analítica pedagógica.

No debe poder:

- Alterar certificados emitidos.
- Ver información financiera sensible.
- Modificar usuarios empresariales sin autorización.

### 4.4. Experto temático en salud

Profesional responsable de validar exactitud técnica, normativa y clínica.

Necesita:

- Revisar contenido.
- Comentar material.
- Aprobar o rechazar módulos.
- Validar preguntas y rúbricas.
- Autorizar publicación académica.

Permisos:

- Revisar cursos.
- Aprobar contenido.
- Emitir observaciones.
- Validar bibliografía.

### 4.5. Evaluador académico

Puede revisar actividades abiertas, proyectos, simulaciones o casos que requieran juicio humano.

Necesita:

- Bandeja de evaluaciones pendientes.
- Rúbricas visibles.
- Historial del intento.
- Recomendación de IA, si existe.
- Botón de aprobar, rechazar o solicitar corrección.

### 4.6. Administrador Sananga

Rol operativo global.

Permisos:

- Gestionar usuarios.
- Gestionar empresas.
- Gestionar cursos.
- Gestionar pagos.
- Configurar certificados.
- Ver analítica global.
- Revisar logs.
- Atender soporte.

### 4.7. Superadministrador técnico

Rol restringido para configuración crítica.

Permisos:

- Configurar parámetros de plataforma.
- Gestionar integraciones.
- Acceder a logs técnicos.
- Configurar roles.
- Gestionar entornos.
- Ejecutar mantenimiento.

### 4.8. Tutor IA

Agente no humano, limitado al acompañamiento educativo. No tiene autonomía administrativa ni clínica. Su rol debe estar mediado por herramientas y reglas.

Capacidades:

- Explicar contenido.
- Guiar repaso.
- Hacer preguntas formativas.
- Recomendar módulos.
- Sugerir refuerzo.
- Responder con base documental.

Restricciones:

- No emitir certificado.
- No cambiar notas directamente.
- No reemplazar criterio profesional.
- No responder fuera del curso si no está autorizado.
- No inventar contenido normativo.

### 4.9. Agente PCE

Agente de ejecución estructurada. A diferencia del tutor IA, no conversa libremente. Ejecuta estados, valida entradas y produce eventos.

Capacidades:

- Guiar una práctica o simulación.
- Validar secuencia.
- Bloquear avances.
- Registrar errores.
- Generar evento de desempeño.
- Cerrar la simulación.

---

## 5. Arquitectura funcional del LMS

### 5.1. Módulo de identidad y acceso

Este módulo gestiona autenticación, autorización, perfiles y seguridad de sesión.

Funcionalidades mínimas:

- Registro con correo.
- Inicio de sesión.
- Recuperación de contraseña.
- Verificación de correo.
- Gestión de perfil.
- Asignación de roles.
- Control de permisos.
- Historial de accesos.

Funcionalidades futuras:

- Inicio con Google/Microsoft.
- Doble factor de autenticación.
- SSO empresarial.
- Validación documental.
- Control de sesiones simultáneas.

Entidades principales:

- User.
- Role.
- Permission.
- Session.
- AuthProvider.
- UserProfile.

Requisitos de seguridad:

- Contraseñas cifradas con algoritmo seguro.
- Tokens con expiración.
- Separación de permisos por rol.
- Registro de accesos sospechosos.
- Bloqueo temporal ante intentos fallidos.

### 5.2. Módulo de empresas y organizaciones

Permite operar modelo B2B.

Funcionalidades:

- Crear empresa cliente.
- Gestionar sedes o áreas.
- Crear administradores empresariales.
- Asignar cupos.
- Activar licencias.
- Ver usuarios vinculados.
- Consultar avance y certificación.

Entidades:

- Organization.
- OrganizationUnit.
- OrganizationUser.
- LicensePack.
- Seat.
- EnrollmentBatch.

Reglas:

- Un usuario puede pertenecer a una o varias organizaciones.
- Una empresa solo puede ver datos de sus usuarios vinculados.
- Los cupos pueden tener fecha de vencimiento.
- Las licencias pueden ser por curso, paquete o suscripción.

### 5.3. Módulo de catálogo

Administra la vitrina de cursos.

Funcionalidades:

- Listado de cursos.
- Filtros por categoría.
- Ficha de curso.
- Precio.
- Duración.
- Competencias.
- Certificación.
- Requisitos.
- Estado de disponibilidad.

Atributos de curso visibles:

- Nombre.
- Descripción breve.
- Descripción extendida.
- Público objetivo.
- Modalidad.
- Duración estimada.
- Nivel.
- Competencias.
- Criterios de aprobación.
- Tipo de certificado.
- Vigencia, si aplica.
- Precio.
- Versión.

### 5.4. Módulo de autoría de cursos

Permite construir cursos desde el panel administrativo.

Funcionalidades:

- Crear curso.
- Crear módulos.
- Crear lecciones.
- Subir recursos.
- Definir prerrequisitos.
- Crear actividades.
- Crear evaluaciones.
- Asociar rúbricas.
- Configurar desbloqueos.
- Publicar o despublicar.
- Crear versiones.

Estados del curso:

- Borrador.
- En revisión técnica.
- En revisión pedagógica.
- Aprobado.
- Publicado.
- Archivado.
- Obsoleto.

Regla de publicación:

Ningún curso crítico en salud debe pasar a publicado sin aprobación técnica, pedagógica y administrativa.

### 5.5. Módulo de contenidos

Gestiona objetos educativos reutilizables.

Tipos de contenido:

- Video.
- Audio.
- PDF.
- Infografía.
- Imagen.
- Texto enriquecido.
- Presentación.
- Recurso externo.
- Documento normativo.
- Caso clínico.
- Checklist.
- Plantilla.
- Simulación.
- Pregunta.
- Rúbrica.

Metadatos mínimos:

- Título.
- Tipo.
- Autor.
- Fecha de creación.
- Versión.
- Curso asociado.
- Tema.
- Fuente.
- Estado de aprobación.
- Fecha de revisión.
- Vigencia.
- Palabras clave.

Control de calidad:

- Todo recurso debe tener responsable.
- Todo contenido clínico debe tener revisión profesional.
- Todo contenido normativo debe tener fuente y fecha.
- Todo contenido IA-generado debe declararse internamente y revisarse.

### 5.6. Módulo de rutas de aprendizaje

Permite definir secuencias pedagógicas.

Tipos de ruta:

- Lineal: el estudiante avanza en orden.
- Modular: puede elegir módulos.
- Condicional: el avance depende de resultados.
- Adaptativa: el sistema recomienda rutas según desempeño.
- Empresarial: cursos asignados por empresa.

Reglas de desbloqueo:

- Completar lección.
- Aprobar actividad.
- Alcanzar puntaje mínimo.
- Ver recurso obligatorio.
- Realizar simulación.
- Recibir revisión humana.
- Cumplir tiempo mínimo razonable.

### 5.7. Módulo de actividades

Las actividades son unidades de producción del estudiante.

Tipos:

- Pregunta de opción múltiple.
- Verdadero/falso.
- Relacionar columnas.
- Ordenamiento secuencial.
- Respuesta corta.
- Respuesta abierta.
- Caso aplicado.
- Reflexión estructurada.
- Checklist.
- Carga de evidencia.
- Simulación PCE.
- Debate o foro.
- Artefacto cognitivo.

Cada actividad debe tener:

- Propósito.
- Instrucción.
- Criterio de éxito.
- Tiempo estimado.
- Intentos permitidos.
- Retroalimentación.
- Peso en calificación.
- Relación con competencia.

### 5.8. Módulo de evaluaciones

Gestiona pruebas, intentos, calificaciones y aprobación.

Tipos de evaluación:

- Diagnóstica.
- Formativa.
- Sumativa.
- Procedimental.
- Integrativa.
- Revisión humana.
- Autoevaluación.
- Coevaluación, si aplica.

Reglas configurables:

- Puntaje mínimo.
- Número de intentos.
- Tiempo límite.
- Banco aleatorio.
- Retroalimentación inmediata o diferida.
- Revisión manual obligatoria.
- Bloqueo por error crítico.

Criterios de aprobación de curso:

- Porcentaje mínimo de avance.
- Puntaje mínimo global.
- Actividades obligatorias completadas.
- Simulación crítica aprobada.
- No tener errores críticos no corregidos.
- Encuesta de cierre, si se requiere.

### 5.9. Módulo PCE educativo

El PCE educativo es una capa especializada para simulaciones, prácticas guiadas y evaluación procedimental.

Definición técnica:

Un PCE educativo es un protocolo conversacional estructurado que ejecuta una unidad de desempeño formativo mediante estados finitos, entradas controladas, reglas de avance, manejo de excepciones, trazabilidad temporal y salidas estructuradas.

Componentes del PCE:

- Identificación.
- Curso asociado.
- Competencia asociada.
- Rol ejecutor.
- Unidad de ejecución.
- Estado inicial.
- Catálogo de estados.
- Gramática de entrada por estado.
- Validaciones.
- Retroalimentaciones.
- Reglas de bloqueo.
- Errores críticos.
- Eventos de salida.
- Condición de cierre.
- Rúbrica de desempeño.

Ejemplos de uso general:

- Simulación de toma de decisiones.
- Evaluación de procedimiento.
- Ejecución guiada de checklist.
- Debriefing estructurado.
- Tutor procedural.
- Seguimiento de práctica.
- Registro de competencia.

Estructura de estado PCE:

```yaml
state_id: string
name: string
purpose: string
entry_condition: string
expected_input:
  type: string
  format: string
  allowed_values: []
validation_rules: []
on_valid:
  event: string
  next_state: string
on_invalid:
  feedback: string
  retry_policy: string
critical_errors: []
outputs:
  visible_response: string
  event_payload: object
```

Evento PCE mínimo:

```json
{
  "event_id": "uuid",
  "pce_id": "string",
  "user_id": "uuid",
  "course_id": "uuid",
  "state_id": "string",
  "event_type": "STATE_COMPLETED | INVALID_INPUT | CRITICAL_ERROR | PCE_CLOSED",
  "timestamp": "ISO-8601",
  "input_raw": "string",
  "input_normalized": {},
  "validation_result": "accepted | rejected | blocked",
  "score_delta": 0,
  "metadata": {}
}
```

### 5.10. Módulo de IA educativa

La IA debe estar organizada en agentes especializados.

Agentes mínimos:

#### Tutor académico

Acompaña el aprendizaje, explica conceptos, ofrece ejemplos y hace preguntas formativas.

#### Asistente normativo

Responde con base en documentos cargados. Debe operar con RAG y citar internamente fuentes autorizadas.

#### Evaluador asistido

Apoya evaluación de respuestas abiertas usando rúbricas. No debe tomar decisiones fuera de criterios.

#### Agente de soporte

Resuelve preguntas sobre acceso, curso, certificado, pagos y navegación.

#### Agente PCE

Ejecuta protocolos estructurados. No actúa como tutor libre.

Reglas transversales de IA:

- No inventar normas.
- No inventar datos clínicos.
- No emitir diagnósticos personalizados.
- No reemplazar atención profesional.
- Declarar incertidumbre cuando falte información.
- Remitir a fuente, docente o soporte cuando corresponda.
- Registrar interacción relevante.

### 5.11. Módulo RAG y biblioteca de conocimiento

El sistema RAG permite que la IA consulte una base documental autorizada.

Componentes:

- Ingesta documental.
- Limpieza de texto.
- Fragmentación.
- Embeddings.
- Almacenamiento vectorial.
- Recuperación semántica.
- Generación contextual.
- Registro de fuentes usadas.

Tipos de documentos:

- Normas.
- Protocolos.
- Guías técnicas.
- Manuales internos.
- Contenidos del curso.
- Preguntas frecuentes.
- Rúbricas.
- Políticas de certificación.

Metadatos por documento:

- Título.
- Fuente.
- Fecha.
- Versión.
- Vigencia.
- Tipo documental.
- Jurisdicción.
- Curso asociado.
- Nivel de confiabilidad.

### 5.12. Módulo de certificación

El certificado es un objeto verificable, no solo un PDF.

Debe contener:

- ID único.
- Nombre del estudiante.
- Documento de identidad, si se decide usarlo.
- Curso.
- Duración.
- Fecha de emisión.
- Fecha de vencimiento, si aplica.
- Competencias certificadas.
- Criterio de aprobación.
- Versión del curso.
- Firma o sello Sananga.
- QR de verificación.
- URL pública de validación.

Estados del certificado:

- Emitido.
- Vigente.
- Vencido.
- Revocado.
- Reemitido.
- En revisión.

Reglas:

- Un certificado no debe emitirse sin matrícula aprobada.
- Un certificado debe quedar vinculado a la versión del curso.
- La revocatoria debe dejar historial.
- La verificación pública no debe exponer datos sensibles innecesarios.

### 5.13. Módulo de pagos y comercio

Permite monetización B2C y B2B.

Funciones B2C:

- Página de compra.
- Carrito simple.
- Pasarela de pago.
- Confirmación automática.
- Activación del curso.
- Facturación o comprobante.

Funciones B2B:

- Cotización.
- Compra de paquete.
- Licencias por volumen.
- Órdenes empresariales.
- Gestión de cupos.
- Renovación.
- Suscripción.

Entidades:

- Product.
- PricePlan.
- Order.
- Payment.
- Invoice.
- Coupon.
- Subscription.
- LicensePack.

### 5.14. Módulo de notificaciones

Canales:

- Email.
- WhatsApp, futuro.
- Notificación interna.
- SMS, opcional.

Eventos notificables:

- Registro exitoso.
- Curso asignado.
- Pago confirmado.
- Recordatorio de avance.
- Evaluación pendiente.
- Certificado emitido.
- Certificado próximo a vencer.
- Nueva retroalimentación.
- Soporte respondido.

### 5.15. Módulo de soporte

Debe permitir resolver problemas de acceso, pago, certificado y navegación.

Funciones:

- Centro de ayuda.
- Preguntas frecuentes.
- Ticket de soporte.
- Chat de soporte.
- Historial de solicitudes.
- Clasificación de incidencias.

Categorías:

- Acceso.
- Pago.
- Certificado.
- Curso.
- Evaluación.
- Error técnico.
- Empresa.

### 5.16. Panel administrativo

Centro operativo interno.

Debe incluir:

- Dashboard global.
- Usuarios.
- Empresas.
- Cursos.
- Contenidos.
- Evaluaciones.
- PCE.
- Certificados.
- Pagos.
- Soporte.
- Reportes.
- Configuración.

### 5.17. Panel empresarial

Centro de control para clientes corporativos.

Debe incluir:

- Resumen de trabajadores inscritos.
- Avance por curso.
- Aprobados.
- No aprobados.
- Pendientes.
- Certificados emitidos.
- Descarga de reportes.
- Asignación de cupos.
- Alertas.

---

## 6. Arquitectura pedagógica

### 6.1. Enfoque andragógico

La plataforma debe reconocer que muchos estudiantes serán adultos con experiencia laboral. Por tanto, el aprendizaje debe ser relevante, aplicado, flexible y conectado con problemas reales.

Principios:

- El adulto aprende mejor cuando percibe utilidad inmediata.
- La experiencia previa debe activarse y reorganizarse.
- El aprendizaje debe resolver problemas concretos.
- La autonomía debe equilibrarse con guía estructurada.
- La evaluación debe ser justa, clara y aplicable.

### 6.2. Constructivismo aplicado

El estudiante no debe limitarse a recibir información. Debe construir comprensión a partir de casos, decisiones, errores, correcciones y producción de artefactos.

Estrategias:

- Preguntas de activación.
- Casos contextualizados.
- Mapas o esquemas.
- Simulaciones.
- Reflexión guiada.
- Debriefing.
- Reconstrucción del error.

### 6.3. Microaprendizaje

Los contenidos deben fragmentarse en unidades breves, especialmente para usuarios móviles.

Unidad recomendada:

- 3 a 8 minutos para video.
- 300 a 700 palabras para lectura breve.
- 1 actividad corta por lección.
- 1 cierre formativo por microtema.

### 6.4. Aprendizaje basado en casos

Cada curso en salud debe incluir casos representativos. Los casos permiten integrar conocimiento, decisión y contexto.

Cada caso debe tener:

- Situación inicial.
- Rol del estudiante.
- Datos disponibles.
- Decisión requerida.
- Consecuencia.
- Retroalimentación.
- Referente normativo o técnico.

### 6.5. Evaluación por competencias

Las competencias deben formularse como capacidades observables.

Estructura recomendada:

- Verbo observable.
- Objeto de desempeño.
- Condición.
- Criterio de calidad.

Ejemplo abstracto:

> Identifica signos de alarma en una situación simulada, siguiendo criterios del protocolo institucional y seleccionando la conducta inicial segura.

### 6.6. Artefactos cognitivos

El sistema debe permitir que algunos cursos soliciten producciones del estudiante:

- Checklist diligenciado.
- Plan de acción.
- Mapa de ruta.
- Resumen normativo.
- Análisis de caso.
- Registro de procedimiento.
- Reflexión de debriefing.

Estos artefactos hacen visible el razonamiento y pueden alimentar evaluación humana o IA.

### 6.7. Debriefing estructurado

Después de simulaciones, el LMS debe guiar reflexión:

- Qué hice.
- Qué omití.
- Qué criterio usé.
- Qué error cometí.
- Qué haría diferente.
- Qué debo repasar.

---

## 7. Arquitectura visual, UX y diseño web

### 7.1. Principios UX

La experiencia debe ser:

- Clara.
- Secuencial.
- Ligera.
- Móvil.
- Accesible.
- Visualmente confiable.
- Académicamente sobria.
- Emocionalmente humana.

### 7.2. Arquitectura de información

Navegación estudiante:

1. Inicio.
2. Mis cursos.
3. Curso actual.
4. Módulo.
5. Lección.
6. Actividad.
7. Evaluación.
8. Certificados.
9. Perfil.
10. Soporte.

Navegación administrador:

1. Dashboard.
2. Usuarios.
3. Empresas.
4. Cursos.
5. Contenidos.
6. Evaluaciones.
7. PCE.
8. Certificados.
9. Reportes.
10. Configuración.

### 7.3. Componentes visuales

Componentes mínimos:

- Tarjeta de curso.
- Barra de progreso.
- Línea de ruta.
- Botón de continuar.
- Tarjeta de actividad.
- Alerta de bloqueo.
- Resultado de evaluación.
- Panel de retroalimentación.
- Chat tutor.
- Interfaz PCE.
- Certificado.
- Dashboard.

### 7.4. Interfaz PCE

Debe ser visualmente distinta al chat tutor.

El tutor IA puede sentirse conversacional. El PCE debe sentirse como una estación de ejecución guiada.

Elementos visibles:

- Estado actual.
- Situación.
- Acción solicitada.
- Campo de respuesta.
- Restricción de formato.
- Progreso de la simulación.
- Alertas.
- Retroalimentación.

### 7.5. Accesibilidad

Requisitos:

- Contraste suficiente.
- Tamaño de fuente legible.
- Navegación por teclado.
- Subtítulos en videos.
- Textos alternativos en imágenes.
- Evitar dependencia exclusiva del color.
- Lenguaje claro.

### 7.6. Identidad visual

La identidad visual debe comunicar salud, confianza, conocimiento, tecnología y humanidad.

Recomendaciones:

- Paleta sobria con color principal institucional.
- Colores secundarios para estados: éxito, alerta, error, información.
- Iconografía simple.
- Ilustraciones limpias.
- Evitar saturación visual.
- Evitar estética de curso barato o genérico.

---

## 8. Arquitectura de datos

### 8.1. Entidades mínimas

```text
User
Organization
OrganizationUnit
Role
Permission
Course
CourseVersion
Module
Lesson
Resource
Activity
Assessment
Question
AnswerOption
Attempt
Submission
Rubric
RubricCriterion
Enrollment
ProgressEvent
PCE
PCEState
PCEEvent
AIInteraction
Certificate
Payment
Order
Notification
SupportTicket
AuditLog
```

### 8.2. Relación general

- Un usuario puede tener muchas matrículas.
- Una matrícula pertenece a un curso y a una versión del curso.
- Un curso tiene muchas versiones.
- Una versión tiene módulos.
- Un módulo tiene lecciones.
- Una lección tiene recursos y actividades.
- Una actividad puede generar intentos.
- Un intento puede tener respuestas y calificación.
- Un PCE pertenece a una actividad o evaluación.
- Un PCE genera eventos.
- Un certificado se emite desde una matrícula aprobada.

### 8.3. Principio de versionamiento

Nunca se debe perder la versión bajo la cual un estudiante fue certificado.

Si un curso cambia, el certificado anterior debe seguir apuntando a la versión cursada.

### 8.4. Eventos de aprendizaje

La plataforma debe adoptar un modelo orientado a eventos educativos.

Evento mínimo:

```json
{
  "event_id": "uuid",
  "actor_id": "uuid",
  "actor_type": "user | system | ai_agent | admin",
  "event_type": "string",
  "entity_type": "course | lesson | activity | assessment | pce | certificate",
  "entity_id": "uuid",
  "timestamp": "ISO-8601",
  "context": {},
  "result": "success | failed | blocked | pending",
  "metadata": {}
}
```

### 8.5. Datos sensibles

La plataforma debe aplicar minimización de datos. En principio, no debe recolectar datos clínicos personales de pacientes reales. Los casos deben ser ficticios, anonimizados o construidos para enseñanza.

Datos personales de usuarios:

- Nombre.
- Correo.
- Documento, si se requiere para certificado.
- Empresa.
- Rol.
- Historial académico.

Datos que deben evitarse salvo justificación:

- Historia clínica real.
- Diagnósticos personales.
- Datos de pacientes.
- Información de salud del estudiante.
- Datos biométricos.

---

## 9. Arquitectura analítica y ciencia de datos

### 9.1. Objetivo analítico

La analítica debe convertir el uso de la plataforma en decisiones de mejora educativa, comercial y operativa.

### 9.2. Analítica del estudiante

Indicadores:

- Cursos inscritos.
- Avance.
- Tiempo de dedicación.
- Evaluaciones aprobadas.
- Intentos.
- Errores frecuentes.
- Competencias débiles.
- Certificados.

### 9.3. Analítica de curso

Indicadores:

- Tasa de inicio.
- Tasa de finalización.
- Tasa de aprobación.
- Módulos con abandono.
- Actividades con bajo desempeño.
- Preguntas con alta tasa de error.
- Tiempo promedio de finalización.
- Satisfacción.

### 9.4. Analítica PCE

Indicadores:

- Estados con mayor bloqueo.
- Errores críticos más comunes.
- Tiempo por estado.
- Secuencias incorrectas.
- Número de reintentos.
- Resultado final.
- Mejora entre intentos.

### 9.5. Analítica empresarial

Indicadores:

- Trabajadores asignados.
- Trabajadores activos.
- Finalización por área.
- Aprobación por curso.
- Certificados emitidos.
- Usuarios en riesgo.
- Brechas de competencia.

### 9.6. Analítica comercial

Indicadores:

- Conversión de landing.
- Costo de adquisición.
- Cursos vendidos.
- Ingresos por curso.
- Ingresos por empresa.
- Renovación.
- Recompra.
- Abandono de carrito.

### 9.7. Analítica de calidad educativa

Indicadores:

- Coherencia entre objetivos y evaluación.
- Satisfacción por módulo.
- Dificultad percibida.
- Comentarios cualitativos.
- Reportes de error de contenido.
- Solicitudes de soporte académico.

---

## 10. Arquitectura técnica preliminar

### 10.1. Enfoque recomendado

Para una primera versión, se recomienda un **monolito modular** o una arquitectura modular con servicios separados solo donde tenga sentido. Una arquitectura de microservicios completa sería excesiva al inicio.

El monolito modular permite:

- Menor costo.
- Menor complejidad.
- Desarrollo más rápido.
- Mejor control inicial.
- Separación interna por dominios.

A futuro, módulos como IA, certificados, analítica y pagos pueden separarse como servicios.

### 10.2. Capas técnicas

```text
Frontend Web/Mobile
        ↓
API Backend
        ↓
Dominio LMS / Evaluación / PCE / Certificación
        ↓
Base de datos relacional
        ↓
Almacenamiento de archivos + Vector store + Servicios externos
```

### 10.3. Frontend

Opciones:

- Next.js / React.
- Vue / Nuxt.
- Flutter web/móvil en fase futura.
- No-code temporal para MVP comercial.

Requisitos:

- Responsive.
- SEO para landing y catálogo.
- Accesibilidad.
- Componentización.
- Diseño escalable.

### 10.4. Backend

Opciones:

- FastAPI.
- Django.
- NestJS.
- Laravel, si se prioriza rapidez con equipo PHP.

Requisitos:

- API REST o GraphQL.
- Autenticación segura.
- Gestión de roles.
- Dominio modular.
- Jobs asíncronos.
- Integración con IA.
- Auditoría.

### 10.5. Base de datos

Recomendación inicial:

- PostgreSQL.

Razones:

- Robustez.
- Buen soporte relacional.
- JSONB para metadatos flexibles.
- Escalabilidad suficiente.
- Ecosistema amplio.

### 10.6. Almacenamiento de objetos

Para videos, documentos, imágenes y certificados:

- S3 compatible.
- Google Cloud Storage.
- Azure Blob.
- Alternativa económica compatible con S3.

### 10.7. Vector store

Para RAG:

- pgvector en PostgreSQL para MVP.
- Chroma para prototipo local.
- Pinecone, Weaviate o Qdrant para escalamiento.

### 10.8. Jobs y colas

Necesarias para:

- Generar certificados.
- Enviar correos.
- Procesar documentos.
- Crear embeddings.
- Generar reportes.
- Sincronizar pagos.

Opciones:

- Celery/RQ si backend Python.
- BullMQ si backend Node.
- Servicios serverless si se usa nube.

### 10.9. Integraciones externas

Iniciales:

- Pasarela de pago.
- Email transaccional.
- Analytics web.
- Almacenamiento.
- Proveedor LLM.

Futuras:

- WhatsApp Business.
- CRM.
- Firma digital.
- SSO empresarial.
- LMS externos mediante LTI, si aplica.

---

## 11. Seguridad, privacidad y cumplimiento

### 11.1. Principios

- Minimización de datos.
- Consentimiento informado.
- Transparencia.
- Finalidad específica.
- Control de acceso.
- Registro de auditoría.
- Protección de certificados.

### 11.2. Protección de datos personales

La plataforma debe construir política de tratamiento de datos personales conforme a regulación colombiana aplicable. Debe definir:

- Responsable del tratamiento.
- Finalidades.
- Datos recolectados.
- Derechos del titular.
- Canales de atención.
- Tiempo de conservación.
- Encargados externos.

### 11.3. Control de acceso

Debe implementar RBAC desde el inicio.

Roles sugeridos:

- student.
- organization_admin.
- instructor.
- evaluator.
- content_designer.
- support.
- admin.
- superadmin.

### 11.4. Auditoría

Acciones auditables:

- Cambio de nota.
- Emisión de certificado.
- Revocatoria de certificado.
- Cambio de curso publicado.
- Cambio de usuario empresarial.
- Cambio de rol.
- Acceso administrativo.

### 11.5. Seguridad IA

Riesgos:

- Alucinación normativa.
- Recomendación clínica insegura.
- Respuesta fuera de alcance.
- Fuga de datos.
- Dependencia excesiva del estudiante.

Controles:

- RAG con fuentes autorizadas.
- Prompts con límites.
- Filtros de contenido.
- Logs de interacción.
- Revisión humana en cursos críticos.
- Declaraciones de alcance.

---

## 12. Gobierno académico y de calidad

### 12.1. Ciclo de vida de curso

1. Idea de curso.
2. Justificación de demanda.
3. Revisión normativa.
4. Diseño instruccional.
5. Producción de contenido.
6. Revisión técnica.
7. Revisión pedagógica.
8. Configuración LMS.
9. Prueba interna.
10. Piloto.
11. Publicación.
12. Monitoreo.
13. Actualización.
14. Archivo o reemplazo.

### 12.2. Comité mínimo de revisión

Para cursos críticos en salud:

- Diseñador instruccional.
- Experto temático.
- Revisor pedagógico.
- Responsable de plataforma.
- Responsable de calidad.

### 12.3. Versionamiento académico

Cada curso debe tener versión.

Ejemplo:

- v0.1 borrador.
- v0.2 revisión interna.
- v1.0 publicado.
- v1.1 corrección menor.
- v2.0 actualización normativa mayor.

### 12.4. Política de obsolescencia

Un curso debe revisarse cuando:

- Cambia una norma.
- Cambia un protocolo.
- Hay evidencia nueva relevante.
- Se detecta error técnico.
- Baja el desempeño de estudiantes.
- Hay quejas recurrentes.

---

## 13. Roadmap de implementación

### 13.1. Fase 0: Documento rector y especificación

Entregables:

- Documento maestro LMS.
- Estructura del repositorio.
- Modelo de datos conceptual.
- Plantilla de curso.
- Plantilla de PCE.
- Política de certificación.

### 13.2. Fase 1: MVP LMS básico

Funcionalidades:

- Landing.
- Registro.
- Catálogo.
- Curso básico.
- Progreso.
- Evaluación simple.
- Certificado verificable.
- Panel administrativo mínimo.

### 13.3. Fase 2: IA inicial

Funcionalidades:

- Tutor IA.
- Biblioteca documental.
- RAG básico.
- Evaluación asistida.
- Logs IA.

### 13.4. Fase 3: PCE educativo

Funcionalidades:

- Motor de estados.
- Editor básico de PCE.
- Ejecución de simulaciones.
- Eventos PCE.
- Rúbricas procedimentales.

### 13.5. Fase 4: B2B

Funcionalidades:

- Empresas.
- Licencias.
- Asignación masiva.
- Reportes empresariales.
- Certificados corporativos.

### 13.6. Fase 5: escalamiento

Funcionalidades:

- Suscripciones.
- Analítica avanzada.
- Recomendaciones adaptativas.
- Badges digitales.
- Internacionalización.
- App móvil.

---

## 14. Repositorio GitHub recomendado

Estructura inicial:

```text
sananga-lms/
├── README.md
├── docs/
│   ├── 00_documento_maestro_lms.md
│   ├── 01_arquitectura_funcional.md
│   ├── 02_arquitectura_tecnica.md
│   ├── 03_modelo_pedagogico.md
│   ├── 04_gobierno_ia.md
│   ├── 05_pce_educativo.md
│   ├── 06_modelo_datos.md
│   ├── 07_certificacion.md
│   ├── 08_ux_ui.md
│   ├── 09_analitica.md
│   └── 10_roadmap.md
├── specs/
│   ├── user_stories/
│   ├── api/
│   ├── database/
│   ├── pce/
│   └── ai_agents/
├── prompts/
│   ├── tutor_academico.md
│   ├── asistente_normativo.md
│   ├── evaluador_rubricas.md
│   └── pce_template.md
├── schemas/
│   ├── course.schema.json
│   ├── pce.schema.json
│   ├── certificate.schema.json
│   └── learning_event.schema.json
├── design/
│   ├── wireframes/
│   ├── brand/
│   └── components/
├── data/
│   ├── sample_courses/
│   ├── sample_pce/
│   └── taxonomies/
└── CHANGELOG.md
```

### 14.1. README inicial

Debe explicar:

- Qué es Sananga LMS.
- Qué problema resuelve.
- Principios de arquitectura.
- Estado del proyecto.
- Estructura del repositorio.
- Cómo contribuir.

### 14.2. Convención documental

Todo documento debe tener:

- Título.
- Versión.
- Estado.
- Responsable.
- Fecha.
- Dependencias.
- Cambios.

---

## 15. Requisitos funcionales iniciales

### RF-001 Registro de usuario

El sistema debe permitir que un usuario cree una cuenta con datos mínimos y acepte términos de uso y tratamiento de datos.

### RF-002 Inicio de sesión

El sistema debe permitir autenticación segura mediante correo y contraseña.

### RF-003 Catálogo de cursos

El sistema debe mostrar cursos disponibles con ficha de información.

### RF-004 Matrícula

El sistema debe permitir que un usuario sea matriculado por compra individual, asignación empresarial o activación administrativa.

### RF-005 Progreso

El sistema debe registrar avance por lección, módulo y curso.

### RF-006 Evaluación

El sistema debe permitir presentar actividades evaluables con reglas de aprobación.

### RF-007 Certificación

El sistema debe emitir certificado solo cuando se cumplen criterios.

### RF-008 Verificación

El sistema debe permitir verificar un certificado por código o QR.

### RF-009 Administración de cursos

El sistema debe permitir crear y editar cursos desde panel administrativo.

### RF-010 Reportes

El sistema debe generar reportes básicos de avance y aprobación.

---

## 16. Requisitos no funcionales

### 16.1. Usabilidad

Un usuario nuevo debe poder iniciar un curso asignado en menos de tres clics desde el dashboard.

### 16.2. Rendimiento

Las páginas principales deben cargar rápidamente en conexiones móviles promedio.

### 16.3. Disponibilidad

La plataforma debe aspirar a alta disponibilidad, con respaldo y monitoreo progresivo.

### 16.4. Seguridad

Debe proteger datos personales, sesiones y certificados.

### 16.5. Mantenibilidad

El código y la documentación deben organizarse por dominios.

### 16.6. Escalabilidad

La arquitectura debe permitir agregar cursos, empresas, usuarios y agentes sin rediseño completo.

### 16.7. Auditabilidad

Toda operación crítica debe dejar log.

### 16.8. Interoperabilidad

El sistema debe diseñarse con APIs para futuras integraciones.

---

## 17. Criterios de aceptación del MVP

El MVP puede considerarse funcional si permite:

1. Registrar usuario.
2. Autenticar usuario.
3. Mostrar catálogo.
4. Matricular usuario en curso.
5. Mostrar módulos y lecciones.
6. Registrar avance.
7. Presentar evaluación.
8. Calcular aprobación.
9. Emitir certificado verificable.
10. Permitir administración básica.
11. Registrar eventos mínimos.
12. Generar reporte simple.

No es necesario que el MVP tenga IA completa desde el primer día, pero sí debe dejar preparada la arquitectura para incorporarla.

---

## 18. Riesgos de diseño inicial y mitigaciones

### Riesgo 1: construir solo una tienda de cursos

Mitigación: diseñar desde el inicio evaluación, trazabilidad y certificación verificable.

### Riesgo 2: IA sin gobierno

Mitigación: agentes con límites, RAG, logs y revisión humana.

### Riesgo 3: plataforma demasiado compleja al inicio

Mitigación: monolito modular y roadmap progresivo.

### Riesgo 4: certificados sin credibilidad

Mitigación: QR, criterios visibles, versión de curso y trazabilidad.

### Riesgo 5: contenidos obsoletos

Mitigación: versionamiento, revisión periódica y biblioteca normativa.

### Riesgo 6: baja finalización

Mitigación: microaprendizaje, UX móvil, recordatorios y rutas claras.

### Riesgo 7: dificultad para vender B2B

Mitigación: panel empresarial, reportes y promesa de cumplimiento verificable.

---

## 19. Tesis final de arquitectura

El LMS Sananga debe ser construido como un sistema modular de formación continua en salud, orientado a evidencia de competencia, con capacidad de integrar contenidos, evaluaciones, agentes de IA, simulaciones estructuradas, certificación verificable y analítica empresarial.

Su ventaja no será tener más cursos que la competencia. Su ventaja será poder demostrar que cada certificado tiene detrás una experiencia formativa trazable.

La arquitectura debe proteger tres activos estratégicos:

1. La calidad pedagógica.
2. La confianza sanitaria.
3. La escalabilidad tecnológica.

Si estos tres activos se preservan desde el diseño inicial, Sananga podrá crecer desde un MVP simple hacia una plataforma robusta de certificaciones operativas en salud, sin quedar atrapada en una arquitectura improvisada o en una oferta indiferenciada de cursos baratos.

---

## 20. Próximos documentos recomendados

A partir de este documento maestro, se recomienda crear los siguientes archivos dentro del repositorio:

1. `01_arquitectura_funcional.md`
2. `02_modelo_datos_conceptual.md`
3. `03_plantilla_maestra_curso.md`
4. `04_plantilla_pce_educativo.md`
5. `05_gobierno_ia_y_rag.md`
6. `06_politica_certificacion.md`
7. `07_ux_ui_lms.md`
8. `08_roadmap_mvp.md`
9. `09_requisitos_funcionales.md`
10. `10_backlog_inicial.md`

Este documento debe mantenerse como fuente rectora y no repetirse extensamente en los documentos derivados. Cada documento derivado debe sintetizar lo necesario y enlazar a este documento maestro.
