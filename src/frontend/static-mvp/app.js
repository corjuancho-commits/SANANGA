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
    competency: {
      name: "Contener un riesgo de evento adverso mediante verificacion, escalamiento y registro seguro",
      algorithm:
        "Maquina de estados adaptativa: el estudiante avanza por evidencias, desempeno procedimental y evaluacion integradora.",
      certificationRule:
        "Certifica cuando completa evidencias, aprueba el PCE obligatorio y supera la evaluacion integradora con minimo 80%.",
      states: [
        {
          id: "state-diagnostico",
          type: "diagnostic",
          title: "Encuadre y diagnostico",
          skill: "Punto de partida",
          objective: "Reconocer la competencia, los criterios de aprobacion y el proceso de certificacion.",
          adaptiveRule: "Si el estudiante inicia sin evidencias, el sistema recomienda comenzar por fundamentos."
        },
        {
          id: "state-conceptual",
          type: "learning",
          title: "Dominio conceptual",
          skill: "Comprension de seguridad",
          objective: "Diferenciar cultura justa, incidente, evento adverso y evidencia de aprendizaje.",
          lessonIds: ["l1", "l2"],
          adaptiveRule: "Si falla la evaluacion conceptual, vuelve a este estado con refuerzo."
        },
        {
          id: "state-procedimental",
          type: "learning",
          title: "Dominio procedimental",
          skill: "Aplicacion segura",
          objective: "Aplicar barreras, alertas, escalamiento y debriefing ante un riesgo.",
          lessonIds: ["l3", "l4"],
          adaptiveRule: "Si el PCE evidencia errores criticos, vuelve a practica procedimental."
        },
        {
          id: "state-pce",
          type: "pce",
          title: "PCE de contencion de riesgo",
          skill: "Juicio procedimental",
          objective: "Resolver una simulacion guiada con decisiones seguras y trazables.",
          required: true,
          adaptiveRule: "Si obtiene menos de 2 decisiones correctas, se recomienda repetir practica antes de evaluar."
        },
        {
          id: "state-evaluacion",
          type: "evaluation",
          title: "Evaluacion integradora",
          skill: "Integracion de competencia",
          objective: "Demostrar que puede explicar, decidir y justificar acciones seguras.",
          minScore: 80,
          adaptiveRule: "Si no aprueba, el sistema recomienda el estado de menor dominio."
        },
        {
          id: "state-certificacion",
          type: "certificate",
          title: "Certificacion verificable",
          skill: "Competencia demostrada",
          objective: "Emitir certificado solamente cuando las condiciones de dominio estan completas.",
          adaptiveRule: "Permanece bloqueado hasta completar evidencias, PCE y evaluacion."
        }
      ]
    },
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
    pce: {
      required: true,
      title: "Paciente con riesgo de evento adverso",
      belongsToState: "state-pce"
    },
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
  selectedCompetencyStateId: "state-diagnostico",
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

function competencyStates(course = activeCourse()) {
  return course.competency?.states || [];
}

function coursePceSteps(course = activeCourse()) {
  return course.pce?.required ? pceSteps : [];
}

function courseRequiresPce(course = activeCourse()) {
  return Boolean(course.pce?.required);
}

function pceComplete(course = activeCourse()) {
  const steps = coursePceSteps(course);
  return !courseRequiresPce(course) || (steps.length > 0 && state.pceIndex >= steps.length);
}

function pcePassed(course = activeCourse()) {
  const steps = coursePceSteps(course);
  return !courseRequiresPce(course) || (pceComplete(course) && state.pceScore >= Math.ceil(steps.length * 0.67));
}

function evaluationAvailable(course = activeCourse()) {
  return progressValue() === 100 && pcePassed(course);
}

function certificateAvailable(course = activeCourse()) {
  return state.quizPassed && progressValue() === 100 && pcePassed(course);
}

function lessonsForProcessState(processState, course = activeCourse()) {
  const ids = processState.lessonIds || [];
  return allLessons(course).filter((lesson) => ids.includes(lesson.id));
}

function isCompetencyStateComplete(processState, course = activeCourse()) {
  if (!processState) return false;
  if (processState.type === "diagnostic") return state.enrolled.includes(course.id);
  if (processState.type === "learning") {
    const lessons = lessonsForProcessState(processState, course);
    return lessons.length > 0 && lessons.every((lesson) => state.completedLessons.includes(lesson.id));
  }
  if (processState.type === "pce") return pcePassed(course);
  if (processState.type === "evaluation") return state.quizPassed;
  if (processState.type === "certificate") return Boolean(state.certificate);
  return false;
}

function isCompetencyStateAvailable(processState, course = activeCourse()) {
  const states = competencyStates(course);
  const index = states.findIndex((item) => item.id === processState.id);
  if (index <= 0) return true;
  return states.slice(0, index).every((item) => isCompetencyStateComplete(item, course));
}

function currentCompetencyState(course = activeCourse()) {
  const states = competencyStates(course);
  return states.find((item) => isCompetencyStateAvailable(item, course) && !isCompetencyStateComplete(item, course)) || states.at(-1);
}

function competencyProgressValue(course = activeCourse()) {
  const states = competencyStates(course);
  if (!states.length) return progressValue();
  const complete = states.filter((item) => isCompetencyStateComplete(item, course)).length;
  return Math.round((complete / states.length) * 100);
}

function competencySignals(course = activeCourse()) {
  const conceptualState = competencyStates(course).find((item) => item.id === "state-conceptual");
  const proceduralState = competencyStates(course).find((item) => item.id === "state-procedimental");
  const conceptualLessons = conceptualState ? lessonsForProcessState(conceptualState, course) : [];
  const proceduralLessons = proceduralState ? lessonsForProcessState(proceduralState, course) : [];
  const conceptual =
    conceptualLessons.length === 0
      ? 0
      : Math.round(
          (conceptualLessons.filter((lesson) => state.completedLessons.includes(lesson.id)).length /
            conceptualLessons.length) *
            100
        );
  const procedural =
    proceduralLessons.length === 0
      ? 0
      : Math.round(
          (proceduralLessons.filter((lesson) => state.completedLessons.includes(lesson.id)).length /
            proceduralLessons.length) *
            100
        );
  const pce = courseRequiresPce(course) ? Math.round((state.pceScore / Math.max(coursePceSteps(course).length, 1)) * 100) : 100;
  const integrative = state.quizScore === null ? 0 : state.quizScore;

  return [
    { label: "Conceptual", value: conceptual, detail: "lecciones y evidencias" },
    { label: "Procedimental", value: Math.round((procedural + pce) / 2), detail: "practica y PCE" },
    { label: "Integrador", value: integrative, detail: "evaluacion final" }
  ];
}

function adaptiveRecommendation(course = activeCourse()) {
  if (state.quizScore !== null && !state.quizPassed) {
    return "Refuerzo recomendado: vuelve al estado conceptual y procedimental antes de repetir la evaluacion.";
  }
  if (courseRequiresPce(course) && pceComplete(course) && !pcePassed(course)) {
    return "Refuerzo recomendado: repite practica procedimental antes de avanzar a evaluacion.";
  }
  const current = currentCompetencyState(course);
  return current ? `Siguiente estado sugerido: ${current.title}.` : "Competencia completa.";
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
    <span>${competencyProgressValue()}% del proceso de competencia</span>
  `;
}

function renderMetrics() {
  const course = activeCourse();
  const certificateState = state.certificate ? "Emitido" : certificateAvailable(course) ? "Listo" : "Bloqueado";
  const current = currentCompetencyState(course);
  const metrics = [
    { value: state.enrolled.length, label: "curso matriculado" },
    { value: `${competencyProgressValue(course)}%`, label: "dominio de competencia" },
    { value: current?.title || "Sin estado", label: "estado sugerido" },
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
          ${course.competency?.name ? `<p><strong>Competencia:</strong> ${escapeHtml(course.competency.name)}</p>` : ""}
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
  const states = competencyStates(course);
  const selectedState =
    states.find((item) => item.id === state.selectedCompetencyStateId) || currentCompetencyState(course) || states[0];
  $("#activeCourseName").textContent = course.title;
  $("#courseProgressLabel").textContent = `${competencyProgressValue(course)}%`;
  $("#courseProgressBar").style.width = `${competencyProgressValue(course)}%`;
  $("#competencySummary").innerHTML = `
    <p><strong>${escapeHtml(course.competency?.name || course.title)}</strong></p>
    <p>${escapeHtml(course.competency?.algorithm || "Ruta formativa pendiente de configurar.")}</p>
    <div class="signal-grid">
      ${competencySignals(course)
        .map(
          (signal) => `
          <div class="signal-card">
            <strong>${signal.value}%</strong>
            <span>${escapeHtml(signal.label)}<br>${escapeHtml(signal.detail)}</span>
          </div>
        `
        )
        .join("")}
    </div>
    <p>${escapeHtml(adaptiveRecommendation(course))}</p>
  `;

  $("#moduleList").innerHTML = states.length
    ? states
        .map((processState, index) => {
          const complete = isCompetencyStateComplete(processState, course);
          const available = isCompetencyStateAvailable(processState, course);
          const selected = selectedState?.id === processState.id;
          const status = complete ? "Completo" : available ? "Activo" : "Bloqueado";
          return `
          <button class="state-item ${complete ? "is-complete" : ""} ${selected ? "is-selected" : ""} ${
            available ? "" : "is-locked"
          }" data-process-state="${processState.id}" type="button">
            <div class="state-title-row">
              <strong>${index + 1}. ${escapeHtml(processState.title)}</strong>
              <span class="status-pill">${status}</span>
            </div>
            <p>${escapeHtml(processState.skill)}</p>
          </button>
        `;
        })
        .join("")
    : `<div class="empty-state">Este curso aun no tiene algoritmo formativo configurado.</div>`;

  $("#lessonDetail").innerHTML = selectedState
    ? renderProcessStateDetail(selectedState, course)
    : `<div class="empty-state">Selecciona un estado del proceso formativo.</div>`;
}

function renderProcessStateDetail(processState, course) {
  const complete = isCompetencyStateComplete(processState, course);
  const available = isCompetencyStateAvailable(processState, course);
  const stateMeta = `
    <div class="state-meta">
      <span class="tag">${escapeHtml(processState.type)}</span>
      <span class="tag info">${complete ? "Completo" : available ? "Disponible" : "Bloqueado"}</span>
      ${processState.minScore ? `<span class="tag warn">Minimo ${processState.minScore}%</span>` : ""}
      ${processState.required ? `<span class="tag warn">Obligatorio</span>` : ""}
    </div>
  `;

  if (processState.type === "learning") {
    const lessons = lessonsForProcessState(processState, course);
    return `
      <div class="state-detail">
        <div>
          <p class="eyebrow">Estado formativo</p>
          <h3>${escapeHtml(processState.title)}</h3>
        </div>
        ${stateMeta}
        <p>${escapeHtml(processState.objective)}</p>
        <div class="feedback-box"><strong>Regla adaptativa</strong><p>${escapeHtml(processState.adaptiveRule)}</p></div>
        ${lessons
          .map((lesson) => {
            const lessonComplete = state.completedLessons.includes(lesson.id);
            return `
            <article class="embedded-lesson">
              <div class="state-title-row">
                <h4>${escapeHtml(lesson.title)}</h4>
                <span class="status-pill">${lessonComplete ? "Evidencia OK" : `${lesson.minutes}m`}</span>
              </div>
              <p>${escapeHtml(lesson.body)}</p>
              <div class="evidence-box">
                <strong>Evidencia requerida</strong>
                <p>${escapeHtml(lesson.evidence)}</p>
              </div>
              <button class="primary-action" data-complete-lesson="${lesson.id}" type="button">
                ${lessonComplete ? "Evidencia registrada" : "Registrar evidencia"}
              </button>
            </article>
          `;
          })
          .join("")}
      </div>
    `;
  }

  if (processState.type === "pce") {
    return `
      <div class="state-detail">
        <div>
          <p class="eyebrow">Simulacion dentro del curso</p>
          <h3>${escapeHtml(processState.title)}</h3>
        </div>
        ${stateMeta}
        <p>${escapeHtml(processState.objective)}</p>
        <div class="feedback-box"><strong>Regla adaptativa</strong><p>${escapeHtml(processState.adaptiveRule)}</p></div>
        <div class="kpi-stack">
          <div class="kpi-row"><span>Decisiones correctas</span><strong>${state.pceScore}/${coursePceSteps(course).length}</strong></div>
          <div class="kpi-row"><span>Estado PCE</span><strong>${pcePassed(course) ? "Aprobado" : pceComplete(course) ? "Refuerzo" : "Pendiente"}</strong></div>
        </div>
        <button class="primary-action" data-route="pce" type="button" ${available ? "" : "disabled"}>Abrir PCE del curso</button>
      </div>
    `;
  }

  if (processState.type === "evaluation") {
    return `
      <div class="state-detail">
        <div>
          <p class="eyebrow">Evaluacion interna del curso</p>
          <h3>${escapeHtml(processState.title)}</h3>
        </div>
        ${stateMeta}
        <p>${escapeHtml(processState.objective)}</p>
        <div class="feedback-box"><strong>Competencia evaluada</strong><p>${escapeHtml(course.competency.name)}</p></div>
        <div class="feedback-box"><strong>Condicion de apertura</strong><p>Completar evidencias y aprobar el PCE obligatorio cuando el curso lo exija.</p></div>
        <button class="primary-action" data-route="evaluacion" type="button" ${evaluationAvailable(course) ? "" : "disabled"}>
          ${evaluationAvailable(course) ? "Presentar evaluacion integradora" : "Evaluacion bloqueada"}
        </button>
      </div>
    `;
  }

  if (processState.type === "certificate") {
    return `
      <div class="state-detail">
        <div>
          <p class="eyebrow">Cierre de competencia</p>
          <h3>${escapeHtml(processState.title)}</h3>
        </div>
        ${stateMeta}
        <p>${escapeHtml(processState.objective)}</p>
        <div class="feedback-box"><strong>Regla de certificacion</strong><p>${escapeHtml(course.competency.certificationRule)}</p></div>
        <button class="primary-action" data-route="certificados" type="button" ${certificateAvailable(course) ? "" : "disabled"}>
          ${certificateAvailable(course) ? "Emitir certificado" : "Certificado bloqueado"}
        </button>
      </div>
    `;
  }

  return `
    <div class="state-detail">
      <div>
        <p class="eyebrow">Inicio del proceso</p>
        <h3>${escapeHtml(processState.title)}</h3>
      </div>
      ${stateMeta}
      <p>${escapeHtml(processState.objective)}</p>
      <div class="feedback-box"><strong>Regla adaptativa</strong><p>${escapeHtml(processState.adaptiveRule)}</p></div>
      <button class="primary-action" data-process-state="state-conceptual" type="button">Comenzar formacion conceptual</button>
    </div>
  `;
}

function renderQuiz() {
  const course = activeCourse();
  const canEvaluate = evaluationAvailable(course);
  $("#titulo-evaluacion").textContent = `Evaluacion: ${course.competency?.name || course.title}`;
  $("#quizStatus").textContent = state.quizPassed ? "Aprobada" : state.quizScore === null ? "Pendiente" : "No aprobada";
  $("#quizStatus").style.background = state.quizPassed ? "var(--brand-soft)" : "var(--warn-soft)";

  $("#quizForm").innerHTML = canEvaluate
    ? `
      <div class="feedback-box">
        <strong>Competencia evaluada</strong>
        <p>${escapeHtml(course.competency?.name || course.title)}</p>
      </div>
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
    `
    : `
      <div class="empty-state">
        Esta evaluacion pertenece al proceso formativo del curso y esta bloqueada hasta completar evidencias y PCE obligatorio.
      </div>
      <button class="secondary-action" data-route="curso" type="button">Volver al algoritmo del curso</button>
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
      ${
        canEvaluate || state.quizScore !== null
          ? state.quizScore === null
            ? "Presenta la evaluacion para recibir retroalimentacion."
            : buildQuizFeedback()
          : "El sistema aun no abre esta evaluacion porque faltan estados previos de la competencia."
      }
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
  const course = activeCourse();
  const steps = coursePceSteps(course);
  if (!steps.length) {
    $("#titulo-pce").textContent = "Curso sin PCE obligatorio";
    $("#pceStage").innerHTML = `
      <div class="empty-state">
        Este curso no tiene PCE configurado. La practica procedimental se resuelve con actividades internas de la ruta.
      </div>
    `;
    $("#pceFeedback").innerHTML = `
      <div class="feedback-box">Vuelve al curso para continuar el algoritmo formativo.</div>
      <button class="primary-action" data-route="curso" type="button">Volver al curso</button>
    `;
    return;
  }
  $("#titulo-pce").textContent = `PCE: ${course.pce.title}`;
  const step = steps[Math.min(state.pceIndex, steps.length - 1)];
  const completed = state.pceIndex >= steps.length;
  const current = completed ? steps[steps.length - 1] : step;
  const percent = Math.min(100, Math.round((state.pceIndex / steps.length) * 100));

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
          ? `<button class="primary-action" data-route="curso" type="button">Volver al algoritmo del curso</button>`
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
      <div class="kpi-row"><span>Decisiones correctas</span><strong>${state.pceScore}/${steps.length}</strong></div>
      <div class="kpi-row"><span>Estados recorridos</span><strong>${Math.min(state.pceIndex, steps.length)}</strong></div>
      <div class="kpi-row"><span>Criterio critico</span><strong>${pcePassed(course) ? "OK" : "Pendiente"}</strong></div>
    </div>
    <div class="feedback-box">
      ${
        completed
          ? "PCE finalizado. Vuelve al algoritmo del curso para continuar hacia evaluacion o refuerzo."
          : `Este PCE pertenece al estado ${escapeHtml(course.competency?.states?.find((item) => item.id === course.pce.belongsToState)?.title || "procedimental")}.`
      }
    </div>
  `;
}

function renderCertificate() {
  const canIssue = certificateAvailable();
  const card = $("#certificateCard");

  if (state.certificate) {
    card.innerHTML = `
      <div class="certificate-frame">
        <p class="eyebrow">Sananga LMS</p>
        <h3>Certificado de competencia</h3>
        <p>Se certifica que <strong>${escapeHtml(state.profile.name)}</strong> demostro competencia en:</p>
        <h4>${escapeHtml(activeCourse().competency?.name || activeCourse().title)}</h4>
        <p>Resultado de evaluacion: ${state.quizScore}%. Dominio del proceso: ${competencyProgressValue()}%.</p>
        <span class="certificate-code">${escapeHtml(state.certificate.code)}</span>
        <p>Emitido: ${formatDate(state.certificate.issuedAt)}</p>
      </div>
    `;
    $("#verifyCode").value = state.certificate.code;
  } else if (canIssue) {
    card.innerHTML = `
      <div class="empty-state">
        Cumples los criterios: evidencias completas, PCE obligatorio aprobado y evaluacion integradora aprobada. Usa el boton "Emitir si aplica" para generar el certificado verificable.
      </div>
    `;
  } else {
    card.innerHTML = `
      <div class="empty-state">
        Certificado bloqueado. Completa el algoritmo formativo del curso: evidencias, PCE obligatorio si aplica y evaluacion con minimo 80%.
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
      <div class="report-row"><span>Dominio de competencia</span><strong>${competencyProgressValue()}%</strong></div>
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
  state.selectedCompetencyStateId = competencyStates(activeCourse())[0]?.id || "state-diagnostico";
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
  if (!evaluationAvailable(course)) {
    showToast("La evaluacion aun esta bloqueada por el algoritmo formativo del curso.");
    setView("curso");
    return;
  }
  const formData = new FormData(event.currentTarget);
  let correct = 0;
  course.questions.forEach((question, index) => {
    if (Number(formData.get(`q${index}`)) === question.answer) correct += 1;
  });
  state.quizScore = Math.round((correct / course.questions.length) * 100);
  state.quizPassed = state.quizScore >= 80;
  state.selectedCompetencyStateId = state.quizPassed ? "state-certificacion" : "state-conceptual";
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
  if (!certificateAvailable()) {
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
  state.selectedCompetencyStateId = "state-certificacion";
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
  const course = activeCourse();
  const steps = coursePceSteps(course);
  const step = steps[state.pceIndex];
  if (!step) return;
  const choice = step.choices[choiceIndex];
  const note = $("#pceNote")?.value.trim();
  if (choice.ok) state.pceScore += 1;
  addEvent(
    choice.ok ? "pce_estado_aprobado" : "pce_alerta",
    `${step.state}: ${choice.label}. ${note ? `Nota: ${note}` : "Sin nota adicional."}`
  );
  state.pceIndex += 1;
  state.selectedCompetencyStateId = pceComplete(course) ? "state-evaluacion" : "state-pce";
  saveState();
  showToast(choice.feedback);
  renderAll();
}

function exportReport() {
  const report = [
    "Reporte simple Sananga LMS",
    `Estudiante: ${state.profile.name}`,
    `Curso: ${activeCourse().title}`,
    `Competencia: ${activeCourse().competency?.name || activeCourse().title}`,
    `Dominio: ${competencyProgressValue()}%`,
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

    const processButton = event.target.closest("[data-process-state]");
    if (processButton) {
      const course = activeCourse();
      const selected = competencyStates(course).find((item) => item.id === processButton.dataset.processState);
      if (selected && !isCompetencyStateAvailable(selected, course)) {
        showToast("Este estado sigue bloqueado por el algoritmo formativo.");
        return;
      }
      state.selectedCompetencyStateId = processButton.dataset.processState;
      saveState();
      renderCourse();
      return;
    }

    const completeLessonButton = event.target.closest("[data-complete-lesson]");
    if (completeLessonButton) {
      const lessonId = completeLessonButton.dataset.completeLesson;
      if (!state.completedLessons.includes(lessonId)) {
        state.completedLessons.push(lessonId);
        const next = currentCompetencyState(activeCourse());
        if (next) state.selectedCompetencyStateId = next.id;
        addEvent("leccion_completada", `Evidencia marcada para ${lessonId}.`);
        saveState();
        showToast("Evidencia registrada dentro del proceso de competencia.");
        renderAll();
      } else {
        showToast("Esta evidencia ya esta registrada.");
      }
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
    state.selectedCompetencyStateId = "state-pce";
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
