const STORAGE_KEY = "sananga-lms-state-v1";

const courses = [
  {
    id: "seguridad-paciente",
    title: "Seguridad del paciente y eventos adversos",
    category: "normativo",
    duration: "6 horas",
    level: "Basico",
    summary:
      "Ruta introductoria para identificar riesgos, registrar evidencia y aplicar acciones seguras en entornos asistenciales.",
    tags: ["Certificable", "PCE incluido", "Evaluacion 80%"],
    modules: [
      {
        title: "Fundamentos de seguridad",
        lessons: [
          {
            id: "l1",
            title: "Cultura justa y aprendizaje institucional",
            minutes: 12,
            evidence: "Reflexion estructurada sobre barreras de seguridad.",
            body:
              "La cultura justa separa el error humano de la negligencia y permite aprender sin ocultar eventos. En Sananga, cada avance genera trazabilidad educativa."
          },
          {
            id: "l2",
            title: "Clasificacion de incidentes y eventos",
            minutes: 10,
            evidence: "Mapa rapido de clasificacion de incidentes.",
            body:
              "Un incidente no siempre causa dano, pero siempre deja una oportunidad de aprendizaje. La clasificacion ordena la respuesta y evita certificados basados solo en asistencia."
          }
        ]
      },
      {
        title: "Aplicacion procedimental",
        lessons: [
          {
            id: "l3",
            title: "Barreras, alertas y escalamiento",
            minutes: 15,
            evidence: "Decision de escalamiento ante un caso.",
            body:
              "Las barreras de seguridad deben ser visibles, auditables y proporcionales al riesgo. El escalamiento oportuno protege al paciente y al equipo."
          },
          {
            id: "l4",
            title: "Debriefing posterior al evento",
            minutes: 14,
            evidence: "Debriefing con hallazgos y acciones.",
            body:
              "El debriefing estructura una conversacion posterior al evento: que ocurrio, que factores influyeron, que se aprendio y que accion concreta se implementa."
          }
        ]
      }
    ],
    questions: [
      {
        text: "Que debe certificar Sananga segun el documento maestro?",
        options: [
          "Asistencia a videos y descarga de materiales",
          "Competencia demostrada mediante evidencia",
          "Compra individual del curso"
        ],
        answer: 1,
        feedback: "La promesa central es formacion verificable: evidencia antes de certificacion."
      },
      {
        text: "Cual evento debe quedar trazado en el LMS?",
        options: ["Leccion completada", "Color favorito del estudiante", "Tamano de pantalla"],
        answer: 0,
        feedback: "Los eventos de aprendizaje permiten reconstruir progreso, intentos y certificacion."
      },
      {
        text: "Cuando debe emitirse un certificado?",
        options: [
          "Al abrir el curso por primera vez",
          "Al cumplir criterios explicitos de aprobacion",
          "Al completar el formulario de perfil"
        ],
        answer: 1,
        feedback: "La certificacion depende de reglas de aprobacion, no de consumo pasivo."
      },
      {
        text: "Como debe operar la IA educativa?",
        options: [
          "Libre, sin limites ni fuentes",
          "Gobernada por rol, alcance, fuentes y reglas",
          "Solo como elemento decorativo"
        ],
        answer: 1,
        feedback: "La IA debe tener proposito, limites, fuentes autorizadas y trazabilidad."
      },
      {
        text: "Que caracteriza al PCE educativo?",
        options: [
          "Una simulacion con estados, decisiones y rubricas",
          "Un certificado descargable sin evaluacion",
          "Una lista comercial de cursos"
        ],
        answer: 0,
        feedback: "El PCE es una estacion de ejecucion guiada, no un chat libre."
      }
    ]
  },
  {
    id: "humanizacion",
    title: "Humanizacion de la atencion en salud",
    category: "bienestar",
    duration: "4 horas",
    level: "Intermedio",
    summary:
      "Microaprendizaje con casos para fortalecer comunicacion, empatia operativa y debriefing en equipos de salud.",
    tags: ["Casos", "Debriefing", "Empresas"],
    modules: []
  },
  {
    id: "autocuidado",
    title: "Autocuidado y salud mental para equipos",
    category: "bienestar",
    duration: "3 horas",
    level: "Basico",
    summary:
      "Ruta movil para reconocer carga emocional, activar redes de apoyo y sostener practicas de autocuidado laboral.",
    tags: ["Movil", "Bienestar", "Reporte simple"],
    modules: []
  }
];

const pceSteps = [
  {
    state: "Ingreso",
    title: "Paciente con riesgo de evento adverso",
    situation:
      "Durante el cambio de turno, recibes un paciente adulto con alergia registrada a un medicamento. La hoja de administracion tiene una orden que podria generar riesgo.",
    prompt: "Selecciona la primera accion segura.",
    choices: [
      {
        label: "Administrar y reportar despues",
        ok: false,
        feedback:
          "Accion insegura. La administracion no debe ocurrir antes de verificar la orden y activar barreras."
      },
      {
        label: "Detener, verificar y escalar",
        ok: true,
        feedback:
          "Correcto. Detener la accion, verificar informacion critica y escalar protege al paciente."
      },
      {
        label: "Preguntar solo al acompanante",
        ok: false,
        feedback:
          "La informacion del acompanante puede ayudar, pero no reemplaza la verificacion institucional."
      }
    ]
  },
  {
    state: "Verificacion",
    title: "Confirmacion de barreras",
    situation:
      "La historia confirma la alergia. El medico de turno solicita registrar el hallazgo y bloquear administracion hasta ajustar la orden.",
    prompt: "Que evidencia debe quedar registrada?",
    choices: [
      {
        label: "Hora, riesgo detectado, accion y responsable",
        ok: true,
        feedback:
          "Correcto. La trazabilidad permite reconstruir que ocurrio, cuando, quien actuo y bajo que criterio."
      },
      {
        label: "Solo una nota informal",
        ok: false,
        feedback: "Insuficiente. El evento requiere registro estructurado y verificable."
      },
      {
        label: "Nada, porque no hubo dano",
        ok: false,
        feedback: "Un casi evento tambien debe registrar aprendizaje y barreras activadas."
      }
    ]
  },
  {
    state: "Debriefing",
    title: "Cierre educativo",
    situation:
      "El riesgo fue contenido. El equipo realiza un debriefing de 8 minutos para identificar factores y accion de mejora.",
    prompt: "Selecciona el cierre mas completo.",
    choices: [
      {
        label: "Culpar a quien hizo la orden",
        ok: false,
        feedback: "La cultura justa busca aprendizaje y mejora de sistema, no culpa automatica."
      },
      {
        label: "Identificar factor, aprendizaje y accion",
        ok: true,
        feedback:
          "Correcto. El debriefing debe traducirse en accion concreta y seguimiento."
      },
      {
        label: "Cerrar sin aprendizaje porque no hubo dano",
        ok: false,
        feedback: "El aprendizaje ocurre tambien cuando una barrera evita el dano."
      }
    ]
  }
];

const defaultState = {
  profile: {
    name: "Estudiante Sananga",
    email: "estudiante@sananga.edu",
    role: "Estudiante individual"
  },
  activeCourseId: "seguridad-paciente",
  enrolled: ["seguridad-paciente"],
  completedLessons: [],
  selectedLessonId: "l1",
  quizScore: null,
  quizPassed: false,
  certificate: null,
  pceIndex: 0,
  pceScore: 0,
  events: [
    {
      type: "sistema",
      detail: "Demo Sananga inicializada con trazabilidad minima.",
      at: new Date().toISOString()
    }
  ]
};

let state = loadState();
let activeFilter = "todos";
let toastTimer = null;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function loadState() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return structuredClone(defaultState);
    return { ...structuredClone(defaultState), ...JSON.parse(stored) };
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function activeCourse() {
  return courses.find((course) => course.id === state.activeCourseId) || courses[0];
}

function allLessons(course = activeCourse()) {
  return course.modules.flatMap((module) => module.lessons);
}

function progressValue() {
  const lessons = allLessons();
  if (!lessons.length) return 0;
  return Math.round((state.completedLessons.length / lessons.length) * 100);
}

function addEvent(type, detail) {
  state.events.unshift({ type, detail, at: new Date().toISOString() });
  state.events = state.events.slice(0, 40);
  saveState();
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

function setView(route) {
  $$(".view").forEach((view) => view.classList.remove("is-active"));
  $(`#view-${route}`)?.classList.add("is-active");
  $$(".nav-item").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.route === route);
  });
  const titles = {
    inicio: "Inicio",
    catalogo: "Catalogo",
    curso: "Curso activo",
    evaluacion: "Evaluacion",
    pce: "PCE educativo",
    certificados: "Certificados",
    admin: "Administracion"
  };
  $("#viewTitle").textContent = titles[route] || "Sananga";
  history.replaceState(null, "", `#${route}`);
  renderAll();
}

function renderSidebar() {
  $("#sidebarStatus").innerHTML = `
    <strong>${escapeHtml(state.profile.name)}</strong>
    <span>${escapeHtml(state.profile.role)}</span>
    <span>${progressValue()}% de evidencia del curso activo</span>
  `;
}

function renderMetrics() {
  const lessons = allLessons();
  const certificateState = state.certificate ? "Emitido" : state.quizPassed ? "Listo" : "Bloqueado";
  const metrics = [
    { value: state.enrolled.length, label: "curso matriculado" },
    { value: `${progressValue()}%`, label: "avance de lecciones" },
    { value: state.quizScore === null ? "0%" : `${state.quizScore}%`, label: "resultado evaluacion" },
    { value: certificateState, label: "estado certificado" }
  ];

  $("#studentMetrics").innerHTML = metrics
    .map(
      (metric) => `
      <article class="metric-card">
        <strong>${escapeHtml(metric.value)}</strong>
        <span>${escapeHtml(metric.label)}</span>
      </article>
    `
    )
    .join("");
}

function renderEvents() {
  const items = state.events.slice(0, 5);
  $("#recentEvents").innerHTML = items.length
    ? items
        .map(
          (event) => `
        <article class="event-item">
          <time>${formatDate(event.at)}</time>
          <span><strong>${escapeHtml(event.type)}</strong><br>${escapeHtml(event.detail)}</span>
        </article>
      `
        )
        .join("")
    : `<div class="empty-state">Aun no hay eventos registrados.</div>`;
}

function renderProfileForm() {
  $("#profileName").value = state.profile.name;
  $("#profileEmail").value = state.profile.email;
  $("#profileRole").value = state.profile.role;
}

function renderCatalog() {
  const list = courses.filter((course) => activeFilter === "todos" || course.category === activeFilter);
  $("#catalogGrid").innerHTML = list
    .map((course) => {
      const enrolled = state.enrolled.includes(course.id);
      return `
      <article class="course-card">
        <div class="tag-list">
          <span class="tag">${escapeHtml(course.level)}</span>
          <span class="tag info">${escapeHtml(course.duration)}</span>
        </div>
        <div>
          <h3>${escapeHtml(course.title)}</h3>
          <p>${escapeHtml(course.summary)}</p>
        </div>
        <div class="tag-list">
          ${course.tags.map((tag) => `<span class="tag warn">${escapeHtml(tag)}</span>`).join("")}
        </div>
        <button class="${enrolled ? "secondary-action" : "primary-action"}" data-enroll="${course.id}" type="button">
          ${enrolled ? "Continuar" : "Matricular"}
        </button>
      </article>
    `;
    })
    .join("");
}

function renderCourse() {
  const course = activeCourse();
  $("#activeCourseName").textContent = course.title;
  $("#courseProgressLabel").textContent = `${progressValue()}%`;
  $("#courseProgressBar").style.width = `${progressValue()}%`;

  $("#moduleList").innerHTML = course.modules
    .map(
      (module) => `
      <section class="module-item">
        <h4>${escapeHtml(module.title)}</h4>
        ${module.lessons
          .map((lesson) => {
            const complete = state.completedLessons.includes(lesson.id);
            const selected = state.selectedLessonId === lesson.id;
            return `
            <button class="lesson-item ${complete ? "is-complete" : ""} ${selected ? "is-selected" : ""}" data-lesson="${
              lesson.id
            }" type="button">
              <span>${escapeHtml(lesson.title)}</span>
              <strong>${complete ? "OK" : `${lesson.minutes}m`}</strong>
            </button>
          `;
          })
          .join("")}
      </section>
    `
    )
    .join("");

  const lesson = allLessons(course).find((item) => item.id === state.selectedLessonId) || allLessons(course)[0];
  const complete = state.completedLessons.includes(lesson.id);
  $("#lessonDetail").innerHTML = `
    <div>
      <p class="eyebrow">Microleccion</p>
      <h3>${escapeHtml(lesson.title)}</h3>
    </div>
    <p>${escapeHtml(lesson.body)}</p>
    <div class="evidence-box">
      <strong>Evidencia requerida</strong>
      <p>${escapeHtml(lesson.evidence)}</p>
    </div>
    <div class="lesson-actions">
      <button class="primary-action" id="completeLesson" type="button">${complete ? "Leccion completada" : "Marcar evidencia"}</button>
      <button class="secondary-action" data-route="pce" type="button">Practicar en PCE</button>
    </div>
  `;
}

function renderQuiz() {
  const course = activeCourse();
  $("#quizStatus").textContent = state.quizPassed ? "Aprobada" : state.quizScore === null ? "Pendiente" : "No aprobada";
  $("#quizStatus").style.background = state.quizPassed ? "var(--brand-soft)" : "var(--warn-soft)";

  $("#quizForm").innerHTML = `
    ${course.questions
      .map(
        (question, questionIndex) => `
        <fieldset class="question-card">
          <legend>${questionIndex + 1}. ${escapeHtml(question.text)}</legend>
          ${question.options
            .map(
              (option, optionIndex) => `
              <label class="question-option">
                <input type="radio" name="q${questionIndex}" value="${optionIndex}" required />
                <span>${escapeHtml(option)}</span>
              </label>
            `
            )
            .join("")}
        </fieldset>
      `
      )
      .join("")}
    <button class="primary-action" type="submit">Enviar evaluacion</button>
  `;

  const scoreText = state.quizScore === null ? "Sin intento" : `${state.quizScore}%`;
  $("#quizFeedback").innerHTML = `
    <div class="panel-header">
      <div>
        <p class="eyebrow">Retroalimentacion</p>
        <h3>Resultado</h3>
      </div>
    </div>
    <div class="feedback-score">
      <div>
        <strong>${scoreText}</strong>
        <span>${state.quizPassed ? "Competencia demostrada" : "Meta de aprobacion: 80%"}</span>
      </div>
    </div>
    <div class="feedback-box">
      ${state.quizScore === null ? "Presenta la evaluacion para recibir retroalimentacion." : buildQuizFeedback()}
    </div>
  `;
}

function buildQuizFeedback() {
  if (state.quizPassed) {
    return "Aprobaste. Ya puedes emitir un certificado verificable si completaste la ruta de aprendizaje.";
  }
  return "Revisa las lecciones pendientes y vuelve a presentar la evaluacion. La certificacion permanece bloqueada hasta cumplir criterios.";
}

function renderPce() {
  const step = pceSteps[Math.min(state.pceIndex, pceSteps.length - 1)];
  const completed = state.pceIndex >= pceSteps.length;
  const current = completed ? pceSteps[pceSteps.length - 1] : step;
  const percent = Math.min(100, Math.round((state.pceIndex / pceSteps.length) * 100));

  $("#pceStage").innerHTML = `
    <div class="panel-header">
      <div>
        <p class="eyebrow">Estado ${completed ? "cerrado" : escapeHtml(current.state)}</p>
        <h3>${completed ? "Simulacion finalizada" : escapeHtml(current.title)}</h3>
      </div>
      <span class="status-pill">${percent}%</span>
    </div>
    <div class="progress-track"><span style="width:${percent}%"></span></div>
    <div class="pce-situation">${escapeHtml(current.situation)}</div>
    <label>
      Registro breve de decision
      <textarea id="pceNote" placeholder="Describe la accion, la razon y el criterio de seguridad."></textarea>
    </label>
    <h4>${completed ? "Cierre" : escapeHtml(current.prompt)}</h4>
    <div class="choice-actions">
      ${
        completed
          ? `<button class="primary-action" data-route="certificados" type="button">Ir a certificados</button>`
          : current.choices
              .map(
                (choice, index) => `
          <button class="${choice.ok ? "primary-action" : "secondary-action"}" data-pce-choice="${index}" type="button">
            ${escapeHtml(choice.label)}
          </button>
        `
              )
              .join("")
      }
    </div>
  `;

  $("#pceFeedback").innerHTML = `
    <div class="panel-header">
      <div>
        <p class="eyebrow">Rubrica procedimental</p>
        <h3>Desempeno PCE</h3>
      </div>
    </div>
    <div class="kpi-stack">
      <div class="kpi-row"><span>Decisiones correctas</span><strong>${state.pceScore}/${pceSteps.length}</strong></div>
      <div class="kpi-row"><span>Estados recorridos</span><strong>${Math.min(state.pceIndex, pceSteps.length)}</strong></div>
      <div class="kpi-row"><span>Criterio critico</span><strong>${state.pceScore >= 2 ? "OK" : "Pendiente"}</strong></div>
    </div>
    <div class="feedback-box">
      ${
        completed
          ? "PCE finalizado. El sistema deja lista la evidencia para reporte y debriefing."
          : "Selecciona una accion. El PCE evalua decisiones, no conversacion libre."
      }
    </div>
  `;
}

function renderCertificate() {
  const canIssue = state.quizPassed && progressValue() === 100;
  const card = $("#certificateCard");

  if (state.certificate) {
    card.innerHTML = `
      <div class="certificate-frame">
        <p class="eyebrow">Sananga LMS</p>
        <h3>Certificado de competencia</h3>
        <p>Se certifica que <strong>${escapeHtml(state.profile.name)}</strong> demostro competencia en:</p>
        <h4>${escapeHtml(activeCourse().title)}</h4>
        <p>Resultado de evaluacion: ${state.quizScore}%. Evidencia de lecciones: ${progressValue()}%.</p>
        <span class="certificate-code">${escapeHtml(state.certificate.code)}</span>
        <p>Emitido: ${formatDate(state.certificate.issuedAt)}</p>
      </div>
    `;
    $("#verifyCode").value = state.certificate.code;
  } else if (canIssue) {
    card.innerHTML = `
      <div class="empty-state">
        Cumples los criterios: ruta completa y evaluacion aprobada. Usa el boton "Emitir si aplica" para generar el certificado verificable.
      </div>
    `;
  } else {
    card.innerHTML = `
      <div class="empty-state">
        Certificado bloqueado. Completa todas las lecciones y aprueba la evaluacion con minimo 80%.
      </div>
    `;
  }
}

function renderAdmin() {
  const totalLessons = allLessons().length;
  $("#adminKpis").innerHTML = `
    <div class="panel-header">
      <div>
        <p class="eyebrow">MVP operativo</p>
        <h3>Indicadores</h3>
      </div>
    </div>
    <div class="kpi-stack">
      <div class="kpi-row"><span>Usuarios demo</span><strong>1</strong></div>
      <div class="kpi-row"><span>Cursos publicados</span><strong>${courses.length}</strong></div>
      <div class="kpi-row"><span>Lecciones trazadas</span><strong>${state.completedLessons.length}/${totalLessons}</strong></div>
      <div class="kpi-row"><span>Certificados emitidos</span><strong>${state.certificate ? 1 : 0}</strong></div>
    </div>
  `;

  $("#enterpriseReport").innerHTML = `
    <div class="panel-header">
      <div>
        <p class="eyebrow">Reporte empresarial</p>
        <h3>Avance y aprobacion</h3>
      </div>
    </div>
    <div class="report-list">
      <div class="report-row"><span>Empresa</span><strong>Sananga demo</strong></div>
      <div class="report-row"><span>Matriculas activas</span><strong>${state.enrolled.length}</strong></div>
      <div class="report-row"><span>Finalizacion</span><strong>${progressValue()}%</strong></div>
      <div class="report-row"><span>Aprobacion</span><strong>${state.quizPassed ? "100%" : "0%"}</strong></div>
      <div class="report-row"><span>Riesgo academico</span><strong>${state.quizPassed ? "Bajo" : "Medio"}</strong></div>
    </div>
  `;

  $("#auditTable").innerHTML = state.events
    .map(
      (event) => `
      <article class="audit-row">
        <time>${formatDate(event.at)}</time>
        <strong>${escapeHtml(event.type)}</strong>
        <span>${escapeHtml(event.detail)}</span>
      </article>
    `
    )
    .join("");
}

function formatDate(value) {
  return new Intl.DateTimeFormat("es-CO", {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(new Date(value));
}

function renderAll() {
  renderSidebar();
  renderMetrics();
  renderEvents();
  renderProfileForm();
  renderCatalog();
  renderCourse();
  renderQuiz();
  renderPce();
  renderCertificate();
  renderAdmin();
}

function enrollCourse(courseId) {
  if (!state.enrolled.includes(courseId)) {
    state.enrolled.push(courseId);
    addEvent("matricula", `Curso activado: ${courses.find((course) => course.id === courseId).title}.`);
  }
  state.activeCourseId = courseId;
  if (!allLessons().some((lesson) => lesson.id === state.selectedLessonId)) {
    state.selectedLessonId = allLessons()[0]?.id || "l1";
  }
  saveState();
  showToast("Curso activado.");
  setView("curso");
}

function submitQuiz(event) {
  event.preventDefault();
  const course = activeCourse();
  const formData = new FormData(event.currentTarget);
  let correct = 0;
  course.questions.forEach((question, index) => {
    if (Number(formData.get(`q${index}`)) === question.answer) correct += 1;
  });
  state.quizScore = Math.round((correct / course.questions.length) * 100);
  state.quizPassed = state.quizScore >= 80;
  addEvent(
    state.quizPassed ? "evaluacion_aprobada" : "evaluacion_no_aprobada",
    `Intento de evaluacion con resultado ${state.quizScore}%.`
  );
  saveState();
  showToast(state.quizPassed ? "Evaluacion aprobada." : "Evaluacion enviada. Requiere refuerzo.");
  renderAll();
}

function issueCertificate() {
  if (state.certificate) {
    showToast("El certificado ya fue emitido.");
    return;
  }
  if (!state.quizPassed || progressValue() < 100) {
    showToast("Aun no se cumplen los criterios de certificacion.");
    return;
  }
  state.certificate = {
    code: `SAN-${Date.now().toString(36).toUpperCase()}`,
    issuedAt: new Date().toISOString(),
    courseId: state.activeCourseId,
    student: state.profile.name,
    score: state.quizScore
  };
  addEvent("certificado_emitido", `Codigo verificable ${state.certificate.code}.`);
  saveState();
  showToast("Certificado verificable emitido.");
  renderAll();
}

function verifyCertificate(event) {
  event.preventDefault();
  const code = $("#verifyCode").value.trim();
  const result = $("#verifyResult");
  if (state.certificate && code.toUpperCase() === state.certificate.code) {
    result.innerHTML = `
      <strong>Certificado valido</strong>
      <p>${escapeHtml(state.certificate.student)} aprobo ${escapeHtml(activeCourse().title)} con ${state.certificate.score}%.</p>
    `;
    addEvent("certificado_verificado", `Validacion exitosa del codigo ${state.certificate.code}.`);
  } else {
    result.innerHTML = `<strong>Codigo no encontrado</strong><p>Verifica el codigo o emite primero un certificado.</p>`;
    addEvent("verificacion_fallida", `Intento con codigo ${code || "vacio"}.`);
  }
  saveState();
  renderAdmin();
}

function handlePceChoice(choiceIndex) {
  const step = pceSteps[state.pceIndex];
  if (!step) return;
  const choice = step.choices[choiceIndex];
  const note = $("#pceNote")?.value.trim();
  if (choice.ok) state.pceScore += 1;
  addEvent(
    choice.ok ? "pce_estado_aprobado" : "pce_alerta",
    `${step.state}: ${choice.label}. ${note ? `Nota: ${note}` : "Sin nota adicional."}`
  );
  state.pceIndex += 1;
  saveState();
  showToast(choice.feedback);
  renderAll();
}

function exportReport() {
  const report = [
    "Reporte simple Sananga LMS",
    `Estudiante: ${state.profile.name}`,
    `Curso: ${activeCourse().title}`,
    `Progreso: ${progressValue()}%`,
    `Evaluacion: ${state.quizScore === null ? "Sin intento" : `${state.quizScore}%`}`,
    `Certificado: ${state.certificate ? state.certificate.code : "No emitido"}`,
    `Eventos: ${state.events.length}`
  ].join("\n");

  navigator.clipboard
    ?.writeText(report)
    .then(() => showToast("Reporte copiado al portapapeles."))
    .catch(() => showToast(report));
  addEvent("reporte_generado", "Reporte simple de avance y aprobacion generado.");
  saveState();
  renderAll();
}

function resetDemo() {
  state = structuredClone(defaultState);
  saveState();
  showToast("Demo reiniciada.");
  setView("inicio");
}

function bindEvents() {
  document.addEventListener("click", (event) => {
    const routeButton = event.target.closest("[data-route]");
    if (routeButton) {
      event.preventDefault();
      setView(routeButton.dataset.route);
      return;
    }

    const enrollButton = event.target.closest("[data-enroll]");
    if (enrollButton) {
      enrollCourse(enrollButton.dataset.enroll);
      return;
    }

    const lessonButton = event.target.closest("[data-lesson]");
    if (lessonButton) {
      state.selectedLessonId = lessonButton.dataset.lesson;
      saveState();
      renderCourse();
      return;
    }

    const pceButton = event.target.closest("[data-pce-choice]");
    if (pceButton) {
      handlePceChoice(Number(pceButton.dataset.pceChoice));
    }
  });

  $$(".segmented-control button").forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      $$(".segmented-control button").forEach((item) => item.classList.toggle("is-selected", item === button));
      renderCatalog();
    });
  });

  $("#profileForm").addEventListener("submit", (event) => {
    event.preventDefault();
    state.profile = {
      name: $("#profileName").value.trim() || "Estudiante Sananga",
      email: $("#profileEmail").value.trim() || "estudiante@sananga.edu",
      role: $("#profileRole").value
    };
    addEvent("perfil_actualizado", `Perfil guardado para ${state.profile.email}.`);
    saveState();
    showToast("Perfil guardado.");
    renderAll();
  });

  $("#quizForm").addEventListener("submit", submitQuiz);
  $("#verifyForm").addEventListener("submit", verifyCertificate);
  $("#issueCertificate").addEventListener("click", issueCertificate);
  $("#exportReport").addEventListener("click", exportReport);
  $("#resetDemo").addEventListener("click", resetDemo);
  $("#restartPce").addEventListener("click", () => {
    state.pceIndex = 0;
    state.pceScore = 0;
    addEvent("pce_reiniciado", "Simulacion PCE reiniciada.");
    saveState();
    renderAll();
    showToast("PCE reiniciado.");
  });

  document.addEventListener("click", (event) => {
    if (event.target.id === "completeLesson") {
      const lessonId = state.selectedLessonId;
      if (!state.completedLessons.includes(lessonId)) {
        state.completedLessons.push(lessonId);
        addEvent("leccion_completada", `Evidencia marcada para ${lessonId}.`);
        saveState();
        showToast("Evidencia registrada.");
        renderAll();
      } else {
        showToast("Esta leccion ya esta completada.");
      }
    }
  });
}

function boot() {
  bindEvents();
  renderAll();
  const hashRoute = location.hash.replace("#", "");
  setView(hashRoute || "inicio");
}

boot();
