# Identidad, roles y acceso

**Version:** 0.1  
**Fecha:** 2026-05-28  
**Estado:** Borrador inicial  
**Dominio:** Registro, autenticacion, autorizacion y perfiles  

---

## Principio rector

En Sananga, una persona no debe escoger libremente un rol privilegiado. La persona crea una cuenta, inicia sesion y despues opera con uno de los roles que le fueron asignados por autorizacion, invitacion, contrato, organizacion o administracion interna.

El rol activo define permisos. La identidad define a la persona.

---

## Separacion conceptual

## User

Representa a la persona.

Datos minimos:

- Nombre.
- Correo.
- Organizacion, si aplica.
- Estado de verificacion.
- Historial de accesos.

## Session

Representa una sesion iniciada.

Datos minimos:

- Usuario.
- Fecha de inicio.
- Fecha de expiracion.
- Rol activo.
- Eventos de acceso.

## Role

Representa una capacidad autorizada.

Roles humanos iniciales:

- Estudiante individual.
- Administrador empresarial.
- Disenador instruccional.
- Experto tematico en salud.
- Evaluador academico.
- Administrador Sananga.
- Superadministrador tecnico.

Roles no humanos:

- Tutor IA.
- Agente PCE.

Los roles no humanos no se seleccionan en registro; se configuran como agentes del sistema.

---

## Reglas de registro

1. Toda cuenta nueva obtiene como minimo el rol de estudiante.
2. El usuario puede solicitar un rol adicional.
3. Los roles privilegiados quedan pendientes si no existe invitacion valida.
4. Un codigo de invitacion puede asignar un rol especifico en el prototipo.
5. En produccion, la invitacion debe validarse en backend y expirar.

---

## Reglas de inicio de sesion

1. El login valida identidad, no permisos.
2. El usuario inicia sesion con correo y contrasena.
3. El sistema carga los roles asignados.
4. Si hay varios roles, el usuario elige rol activo entre los ya asignados.
5. El usuario no puede activar roles no asignados.

---

## Reglas de autorizacion

El acceso a vistas y acciones debe depender del rol activo.

Ejemplos:

- Estudiante: cursos, evaluaciones, PCE y certificados propios.
- Administrador empresarial: usuarios de su organizacion, licencias y reportes.
- Disenador instruccional: cursos en borrador, actividades y rubricas.
- Experto tematico: revision y aprobacion de contenido.
- Evaluador academico: intentos abiertos y rubricas.
- Administrador Sananga: operacion global.
- Superadministrador tecnico: parametros criticos e integraciones.

---

## Datos sensibles

El prototipo guarda una huella local de la contrasena para no almacenar texto plano. Esto no sustituye un backend seguro.

En produccion se requiere:

- Hash de contrasena con Argon2id o bcrypt.
- TLS obligatorio.
- Tokens con expiracion.
- Refresh tokens protegidos.
- Verificacion de correo.
- Doble factor para roles privilegiados.
- Bloqueo temporal por intentos fallidos.
- Auditoria de acceso.
- Separacion por organizacion.
- Politica de minimizacion de datos.

---

## Flujo implementado en el prototipo

1. Usuario crea cuenta.
2. Se asigna automaticamente rol de estudiante.
3. Si solicita rol privilegiado sin codigo, queda pendiente.
4. Si ingresa codigo de invitacion demo, se asigna el rol correspondiente.
5. Usuario inicia sesion.
6. Si tiene varios roles, selecciona un rol activo.
7. La pantalla de inicio cambia segun rol activo.
8. Las vistas protegidas requieren sesion.
9. El panel administrativo requiere permisos del rol activo.

---

## Advertencia tecnica

La version estatica es un prototipo funcional. La seguridad real debe residir en un backend con base de datos, control de acceso por servidor y auditoria persistente. Ninguna decision critica de permisos debe depender unicamente del frontend.

