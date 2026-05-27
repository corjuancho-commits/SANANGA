# Entorno de desarrollo local para la web LMS

**Version:** 0.1  
**Fecha:** 2026-05-27  
**Estado:** Borrador inicial  
**Dominio:** Herramientas y flujo de trabajo local  

---

## Herramientas instaladas

Para editar y publicar la plataforma desde este equipo se instalaron:

- Git for Windows: control de versiones y conexion con GitHub.
- Node.js LTS: ejecucion de JavaScript, servidor local y futuro frontend moderno.
- npm: gestor de paquetes incluido con Node.js.
- GitHub CLI: autenticacion y operaciones con GitHub desde terminal.

---

## Ubicacion de la copia de trabajo

La copia local del repositorio esta en:

```text
C:\Users\User\Documents\SANANGA\repo
```

El prototipo web inicial esta en:

```text
C:\Users\User\Documents\SANANGA\repo\src\frontend\static-mvp
```

---

## Ejecutar el prototipo

Desde PowerShell:

```powershell
cd C:\Users\User\Documents\SANANGA\repo\src\frontend\static-mvp
npm run dev
```

Abrir:

```text
http://localhost:5173
```

---

## Flujo de trabajo recomendado

1. Editar archivos en `src/frontend/static-mvp`.
2. Probar localmente con `npm run dev`.
3. Revisar cambios con `git status`.
4. Crear commit descriptivo.
5. Subir cambios con `git push`.

---

## Comandos utiles

```powershell
git status
git add src/frontend/static-mvp docs/web_lms
git commit -m "feat: agregar prototipo web del LMS"
git push
```

---

## Nota sobre PATH

Despues de instalar Git, Node.js y GitHub CLI, puede ser necesario reiniciar Codex, PowerShell o Windows Terminal para que los comandos `git`, `node`, `npm` y `gh` queden disponibles sin escribir la ruta completa.

