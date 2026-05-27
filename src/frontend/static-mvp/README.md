# Sananga LMS static MVP

Prototipo web inicial del LMS Sananga. Esta version convierte el documento maestro en una experiencia navegable de frontend para validar flujos de estudiante, evaluacion, PCE, certificado verificable y administracion basica.

## Ejecutar localmente

Desde esta carpeta:

```powershell
npm run dev
```

Luego abrir:

```text
http://localhost:5173
```

Tambien puede abrirse directamente `index.html`, pero el servidor local facilita pruebas y futuras integraciones.

## Archivos principales

- `index.html`: estructura de vistas.
- `styles.css`: sistema visual responsive.
- `app.js`: estado local, navegacion y flujos funcionales.
- `assets/sananga-hero.png`: imagen principal de la plataforma.
- `server.mjs`: servidor local sin dependencias externas.

## Estado actual

Incluye:

- Dashboard de estudiante.
- Perfil local.
- Catalogo y matricula demo.
- Ruta de aprendizaje.
- Registro de evidencia por leccion.
- Evaluacion con aprobacion minima del 80%.
- Estacion PCE guiada.
- Certificado verificable local.
- Panel administrativo y auditoria de eventos.

## Siguiente paso tecnico

Cuando el prototipo sea estable, migrar a una aplicacion modular con componentes reutilizables, preferiblemente en `src/frontend/app/`, manteniendo esta carpeta como referencia funcional.

