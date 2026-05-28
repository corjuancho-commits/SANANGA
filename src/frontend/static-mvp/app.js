const STORAGE_KEY = "sananga-lms-state-v1";

const courses = [
  {
    id: "seguridad-paciente",
    title: "Seguridad del paciente y eventos adversos",
    category: "normativo",
    topic: "Seguridad del paciente",
    trainingType: "Curso certificable",
    price: 149000,
    currency: "COP",
    audience: "Auxiliares, enfermeria, cuidadores, personal asistencial y equipos de calidad.",
    methods: ["Microlecciones", "Casos aplicados", "PCE guiado", "Evaluacion integradora"],
    contents: ["Cultura justa", "Eventos e incidentes", "Barreras de seguridad", "Debriefing"],
    outcomes: ["Detectar riesgos", "Escalar oportunamente", "Registrar evidencia", "Demostrar competencia"],
    businessValue: "Reduce brechas de cumplimiento y entrega evidencia auditable para procesos internos.",
    includes: ["Certificado verificable", "Trazabilidad de avance", "Reporte individual", "PCE obligatorio"],
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
    topic: "Humanizacion",
    trainingType: "Curso empresarial",
    price: 129000,
    currency: "COP",
    audience: "Equipos asistenciales, administrativos y organizaciones que atienden usuarios en salud.",
    methods: ["Microaprendizaje", "Casos conversacionales", "Reflexion guiada", "Debriefing"],
    contents: ["Comunicacion empatica", "Momentos de verdad", "Trato digno", "Cierre de interacciones"],
    outcomes: ["Mejorar comunicacion", "Reconocer barreras de trato", "Aplicar debriefing", "Humanizar la atencion"],
    businessValue: "Aporta a cultura de servicio, satisfaccion del usuario y coherencia institucional.",
    includes: ["Certificado", "Casos aplicados", "Reporte empresarial", "Actividades reflexivas"],
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
    topic: "Salud mental y autocuidado",
    trainingType: "Ruta corta",
    price: 99000,
    currency: "COP",
    audience: "Trabajadores de salud, cuidadores, lideres de equipo y personal operativo.",
    methods: ["Lecciones breves", "Autoevaluacion", "Plan personal", "Recursos descargables"],
    contents: ["Carga emocional", "Senales de alerta", "Redes de apoyo", "Practicas de autocuidado"],
    outcomes: ["Reconocer riesgo", "Activar apoyo", "Crear plan de autocuidado", "Sostener habitos"],
    businessValue: "Favorece bienestar laboral y prevencion temprana de agotamiento en equipos.",
    includes: ["Certificado", "Plan individual", "Reporte simple", "Recursos practicos"],
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

const roleCatalog = {
  student: {
    label: "Estudiante individual",
    group: "Usuario externo",
    initial: "ES",
    assignableBySelf: true,
    permissions: ["learn", "evaluate", "certificate"],
    summary: "Compra o recibe acceso a cursos, realiza actividades, presenta evaluaciones y descarga certificados propios."
  },
  enterprise_admin: {
    label: "Administrador empresarial",
    group: "Organizacion",
    initial: "AE",
    assignableBySelf: false,
    permissions: ["organization_users", "license_assignment", "enterprise_reports"],
    summary: "Gestiona usuarios, cupos, asignaciones y reportes de su empresa sin modificar notas ni contenidos."
  },
  instructional_designer: {
    label: "Disenador instruccional",
    group: "Academico",
    initial: "DI",
    assignableBySelf: false,
    permissions: ["course_draft", "activities", "rubrics", "pedagogic_analytics"],
    summary: "Construye cursos, define competencias, actividades, rubricas y propuestas PCE en borrador."
  },
  health_expert: {
    label: "Experto tematico en salud",
    group: "Academico",
    initial: "ET",
    assignableBySelf: false,
    permissions: ["content_review", "clinical_validation", "bibliography_validation"],
    summary: "Valida exactitud tecnica, normativa y clinica antes de publicar contenidos."
  },
  academic_evaluator: {
    label: "Evaluador academico",
    group: "Academico",
    initial: "EA",
    assignableBySelf: false,
    permissions: ["open_attempt_review", "rubric_grading", "correction_request"],
    summary: "Revisa actividades abiertas, casos y simulaciones que requieren juicio humano."
  },
  sananga_admin: {
    label: "Administrador Sananga",
    group: "Operacion global",
    initial: "AS",
    assignableBySelf: false,
    permissions: ["global_users", "companies", "courses", "payments", "certificates", "logs", "support"],
    summary: "Gestiona la operacion global del LMS, usuarios, empresas, cursos, certificados, soporte y analitica."
  },
  technical_superadmin: {
    label: "Superadministrador tecnico",
    group: "Tecnico restringido",
    initial: "ST",
    assignableBySelf: false,
    permissions: ["platform_settings", "integrations", "technical_logs", "role_management", "maintenance"],
    summary: "Configura parametros criticos, integraciones, entornos, roles tecnicos y mantenimiento."
  }
};

const invitationCodes = {
  "EMPRESA-SANANGA": "enterprise_admin",
  "DISENO-SANANGA": "instructional_designer",
  "EXPERTO-SALUD": "health_expert",
  "EVALUADOR-SANANGA": "academic_evaluator",
  "ADMIN-SANANGA": "sananga_admin",
  "SUPER-TECNICO": "technical_superadmin"
};

const navItems = [
  { route: "acceso", label: "Acceso", initial: "AC", public: true },
  { route: "inicio", label: "Inicio", initial: "IN", permission: "authenticated" },
  { route: "catalogo", label: "Catalogo", initial: "CA", permission: "learn" },
  { route: "curso", label: "Curso", initial: "CU", permission: "learn" },
  { route: "certificados", label: "Certificados", initial: "CE", permission: "certificate" },
  { route: "admin", label: "Panel", initial: "PA", permission: "admin_surface" }
];

const defaultState = {
  session: null,
  users: [],
  activeAuthTab: "login",
  publicCourseQuery: "",
  publicCourseFilters: {
    topic: "todos",
    level: "todos",
    trainingType: "todos"
  },
  selectedPublicCourseId: "seguridad-paciente",
  profile: {
    name: "Estudiante Sananga",
    email: "estudiante@sananga.edu",
    role: "Estudiante individual"
  },
  activeRoleId: "student",
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
    if (!stored) return normalizeState(structuredClone(defaultState));
    return normalizeState({ ...structuredClone(defaultState), ...JSON.parse(stored) });
  } catch {
    return normalizeState(structuredClone(defaultState));
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function normalizeState(nextState) {
  nextState.users = Array.isArray(nextState.users) ? nextState.users : [];
  nextState.activeAuthTab = nextState.activeAuthTab || "login";
  nextState.publicCourseQuery = nextState.publicCourseQuery || "";
  nextState.publicCourseFilters = {
    ...structuredClone(defaultState.publicCourseFilters),
    ...(nextState.publicCourseFilters || {})
  };
  nextState.selectedPublicCourseId = nextState.selectedPublicCourseId || courses[0]?.id;
  nextState.activeRoleId = nextState.activeRoleId || "student";
  if (nextState.session?.userId) {
    const user = nextState.users.find((item) => item.id === nextState.session.userId);
    if (!user) {
      nextState.session = null;
    } else if (!user.assignedRoles.includes(nextState.activeRoleId)) {
      nextState.activeRoleId = user.assignedRoles[0] || "student";
    }
  }
  return nextState;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function generateId(prefix) {
  if (globalThis.crypto?.randomUUID) return `${prefix}_${globalThis.crypto.randomUUID()}`;
  return `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2)}`;
}

function makeSalt() {
  const bytes = new Uint8Array(16);
  if (globalThis.crypto?.getRandomValues) {
    globalThis.crypto.getRandomValues(bytes);
    return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
  }
  return Math.random().toString(36).slice(2);
}

async function hashSecret(secret, salt) {
  const value = `${salt}:${secret}`;
  if (globalThis.crypto?.subtle) {
    const encoded = new TextEncoder().encode(value);
    const digest = await globalThis.crypto.subtle.digest("SHA-256", encoded);
    return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
  }
  let hash = 0;
  for (let index = 0; index < value.length; index += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(index);
    hash |= 0;
  }
  return `demo-${Math.abs(hash).toString(16)}`;
}

function activeUser() {
  if (!state.session?.userId) return null;
  return state.users.find((user) => user.id === state.session.userId) || null;
}

function isAuthenticated() {
  return Boolean(activeUser());
}

function currentRoleId() {
  const user = activeUser();
  if (!user) return null;
  return user.assignedRoles.includes(state.activeRoleId) ? state.activeRoleId : user.assignedRoles[0];
}

function currentRole() {
  return roleCatalog[currentRoleId()] || null;
}

function hasPermission(permission) {
  if (permission === "authenticated") return isAuthenticated();
  const role = currentRole();
  if (!role) return false;
  if (permission === "admin_surface") {
    return role.permissions.some((item) =>
      [
        "organization_users",
        "course_draft",
        "content_review",
        "open_attempt_review",
        "global_users",
        "platform_settings"
      ].includes(item)
    );
  }
  return role.permissions.includes(permission);
}

function formatMoney(value, currency = "COP") {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency,
    maximumFractionDigits: 0
  }).format(value);
}

function uniqueCourseValues(key) {
  return Array.from(new Set(courses.map((course) => course[key]).filter(Boolean))).sort();
}

function publicCourses() {
  const query = state.publicCourseQuery.trim().toLowerCase();
  return courses.filter((course) => {
    const filters = state.publicCourseFilters;
    const text = [course.title, course.summary, course.topic, course.trainingType, course.level, course.audience]
      .join(" ")
      .toLowerCase();
    const matchesQuery = !query || text.includes(query);
    const matchesTopic = filters.topic === "todos" || course.topic === filters.topic;
    const matchesLevel = filters.level === "todos" || course.level === filters.level;
    const matchesType = filters.trainingType === "todos" || course.trainingType === filters.trainingType;
    return matchesQuery && matchesTopic && matchesLevel && matchesType;
  });
}

function canVisit(route) {
  const item = navItems.find((navItem) => navItem.route === route);
  if (!item) return true;
  if (item.public) return true;
  return hasPermission(item.permission);
}

function loginRequiredRoute(route) {
  return route !== "acceso" && !isAuthenticated();
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
  if (loginRequiredRoute(route)) {
    showToast("Inicia sesion para acceder a la plataforma.");
    route = "acceso";
  } else if (!canVisit(route)) {
    showToast("Tu rol activo no tiene permiso para esta vista.");
    route = "inicio";
  }
  $$(".view").forEach((view) => view.classList.remove("is-active"));
  $(`#view-${route}`)?.classList.add("is-active");
  $$(".nav-item").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.route === route);
  });
  const titles = {
    acceso: "Acceso",
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
  const user = activeUser();
  const role = currentRole();
  $("#sidebarStatus").innerHTML = `
    <strong>${escapeHtml(user?.name || "Visitante Sananga")}</strong>
    <span>${escapeHtml(role?.label || "Sesion no iniciada")}</span>
    <span>${isAuthenticated() ? `${competencyProgressValue()}% del proceso de competencia` : "Registrate o inicia sesion para continuar"}</span>
  `;
}

function renderNav() {
  const activeRoute = location.hash.replace("#", "") || (isAuthenticated() ? "inicio" : "acceso");
  $("#navList").innerHTML = navItems
    .filter((item) => item.public || isAuthenticated())
    .map((item) => {
      const locked = !item.public && !canVisit(item.route);
      return `
        <button class="nav-item ${activeRoute === item.route ? "is-active" : ""} ${
          locked ? "is-disabled" : ""
        }" data-route="${item.route}" type="button" ${locked ? "aria-disabled=\"true\"" : ""}>
          <span aria-hidden="true">${item.initial}</span>
          ${escapeHtml(item.label)}
        </button>
      `;
    })
    .join("");
}

function renderRoleSwitcher() {
  const user = activeUser();
  const container = $("#roleSwitcher");
  $("#logoutButton").style.display = user ? "" : "none";
  if (!user) {
    container.innerHTML = "";
    return;
  }

  container.innerHTML = `
    <label class="role-select-label">
      Rol activo
      <select id="activeRoleSelect">
        ${user.assignedRoles
          .map((roleId) => `<option value="${roleId}" ${currentRoleId() === roleId ? "selected" : ""}>${escapeHtml(roleCatalog[roleId]?.label || roleId)}</option>`)
          .join("")}
      </select>
    </label>
  `;
}

function renderAuth() {
  const isLogin = state.activeAuthTab === "login";
  $("[data-auth-tab='login']").classList.toggle("is-selected", isLogin);
  $("[data-auth-tab='register']").classList.toggle("is-selected", !isLogin);
  $("#loginForm").classList.toggle("is-hidden", !isLogin);
  $("#registerForm").classList.toggle("is-hidden", isLogin);
  const user = activeUser();
  $("#authResult").innerHTML = user
    ? `<strong>Sesion activa:</strong> ${escapeHtml(user.name)} con rol ${escapeHtml(currentRole()?.label || "sin rol")}.`
    : `Los roles privilegiados requieren invitacion o quedan como solicitud pendiente. En produccion, esto debe vivir en backend con MFA y auditoria.`;
}

function renderPublicCatalog() {
  const selectConfigs = [
    { id: "publicTopicFilter", key: "topic", label: "Todos los temas" },
    { id: "publicLevelFilter", key: "level", label: "Todos los niveles" },
    { id: "publicTypeFilter", key: "trainingType", label: "Todos los tipos" }
  ];

  $("#publicCourseSearch").value = state.publicCourseQuery;
  selectConfigs.forEach((config) => {
    const select = $(`#${config.id}`);
    select.innerHTML = `
      <option value="todos">${config.label}</option>
      ${uniqueCourseValues(config.key)
        .map(
          (value) => `<option value="${escapeHtml(value)}" ${state.publicCourseFilters[config.key] === value ? "selected" : ""}>${escapeHtml(value)}</option>`
        )
        .join("")}
    `;
  });

  const visibleCourses = publicCourses();
  if (!visibleCourses.some((course) => course.id === state.selectedPublicCourseId)) {
    state.selectedPublicCourseId = visibleCourses[0]?.id || courses[0]?.id;
  }

  $("#publicCourseGrid").innerHTML = visibleCourses.length
    ? visibleCourses
        .map(
          (course) => `
          <button class="public-course-card ${
            state.selectedPublicCourseId === course.id ? "is-selected" : ""
          }" data-public-course="${course.id}" type="button">
            <span class="tag">${escapeHtml(course.topic)}</span>
            <strong>${escapeHtml(course.title)}</strong>
            <p>${escapeHtml(course.summary)}</p>
            <div class="course-card-footer">
              <span>${escapeHtml(course.duration)}</span>
              <span>${formatMoney(course.price, course.currency)}</span>
            </div>
          </button>
        `
        )
        .join("")
    : `<div class="empty-state">No encontramos cursos con esos filtros.</div>`;

  const selected = courses.find((course) => course.id === state.selectedPublicCourseId) || visibleCourses[0] || courses[0];
  $("#publicCourseDetail").innerHTML = selected
    ? `
      <div class="panel-header">
        <div>
          <p class="eyebrow">Ficha tecnica</p>
          <h3>${escapeHtml(selected.title)}</h3>
        </div>
        <span class="status-pill">${escapeHtml(selected.level)}</span>
      </div>
      <p class="muted-copy">${escapeHtml(selected.audience)}</p>
      <div class="course-detail-meta">
        <div><strong>${escapeHtml(selected.duration)}</strong><span>Duracion</span></div>
        <div><strong>${formatMoney(selected.price, selected.currency)}</strong><span>Valor individual</span></div>
        <div><strong>${escapeHtml(selected.trainingType)}</strong><span>Tipo</span></div>
      </div>
      <div class="detail-block">
        <strong>Metodos</strong>
        <div class="tag-list">${selected.methods.map((item) => `<span class="tag">${escapeHtml(item)}</span>`).join("")}</div>
      </div>
      <div class="detail-block">
        <strong>Contenidos</strong>
        <ul>${selected.contents.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </div>
      <div class="detail-block">
        <strong>Resultados esperados</strong>
        <ul>${selected.outcomes.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </div>
      <div class="feedback-box"><strong>Valor para empresas</strong><p>${escapeHtml(selected.businessValue)}</p></div>
      <div class="lesson-actions">
        <button class="primary-action" data-register-course="${selected.id}" type="button">Registrarme</button>
        <button class="secondary-action" data-payment-course="${selected.id}" type="button">Pagar curso</button>
      </div>
    `
    : `<div class="empty-state">Selecciona un curso para ver su ficha tecnica.</div>`;
}

function renderMetrics() {
  const course = activeCourse();
  const certificateState = state.certificate ? "Emitido" : certificateAvailable(course) ? "Listo" : "Bloqueado";
  const current = currentCompetencyState(course);
  const metrics = [
    { value: isAuthenticated() ? state.enrolled.length : 0, label: "curso matriculado" },
    { value: `${competencyProgressValue(course)}%`, label: "dominio de competencia" },
    { value: isAuthenticated() ? current?.title || "Sin estado" : "Inicia sesion", label: "estado sugerido" },
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

function renderRoleHome() {
  const user = activeUser();
  const role = currentRole();
  const panel = $("#roleHomePanel");
  if (!user || !role) {
    panel.innerHTML = `
      <div class="panel-header">
        <div>
          <p class="eyebrow">Acceso requerido</p>
          <h3>Inicia sesion para ver tu inicio</h3>
        </div>
      </div>
      <p class="muted-copy">El inicio cambia segun el rol activo asignado a la persona.</p>
      <button class="primary-action" data-route="acceso" type="button">Ir a acceso</button>
    `;
    return;
  }

  const pending = user.pendingRoleRequests || [];
  const roleCards = {
    student: [
      ["Cursos activos", state.enrolled.length],
      ["Competencia actual", `${competencyProgressValue()}%`],
      ["Certificados", state.certificate ? 1 : 0]
    ],
    enterprise_admin: [
      ["Usuarios empresa", 24],
      ["Licencias disponibles", 18],
      ["Alertas de avance", 3]
    ],
    instructional_designer: [
      ["Cursos en borrador", 4],
      ["Rubricas por cerrar", 7],
      ["PCE propuestos", 2]
    ],
    health_expert: [
      ["Modulos por revisar", 5],
      ["Observaciones abiertas", 9],
      ["Publicaciones listas", 1]
    ],
    academic_evaluator: [
      ["Intentos pendientes", 12],
      ["Rubricas activas", 3],
      ["Correcciones solicitadas", 4]
    ],
    sananga_admin: [
      ["Usuarios totales", 128],
      ["Empresas activas", 6],
      ["Tickets soporte", 11]
    ],
    technical_superadmin: [
      ["Integraciones", 5],
      ["Logs criticos", 0],
      ["Entornos", 3]
    ]
  };

  panel.innerHTML = `
    <div class="panel-header">
      <div>
        <p class="eyebrow">${escapeHtml(role.group)}</p>
        <h3>${escapeHtml(role.label)}</h3>
      </div>
      <span class="status-pill">${escapeHtml(role.initial)}</span>
    </div>
    <p class="muted-copy">${escapeHtml(role.summary)}</p>
    <div class="role-dashboard-grid">
      ${(roleCards[currentRoleId()] || [])
        .map(
          ([label, value]) => `
          <article class="role-dashboard-card">
            <strong>${escapeHtml(value)}</strong>
            <span>${escapeHtml(label)}</span>
          </article>
        `
        )
        .join("")}
    </div>
    <div class="permissions-box">
      <strong>Permisos activos</strong>
      <div class="tag-list">
        ${role.permissions.map((permission) => `<span class="tag">${escapeHtml(permission)}</span>`).join("")}
      </div>
    </div>
    ${
      pending.length
        ? `<div class="feedback-box"><strong>Roles solicitados pendientes</strong><p>${pending.map((roleId) => roleCatalog[roleId]?.label || roleId).join(", ")}</p></div>`
        : ""
    }
  `;
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
  renderNav();
  renderAuth();
  renderPublicCatalog();
  renderRoleSwitcher();
  renderSidebar();
  renderMetrics();
  renderEvents();
  renderRoleHome();
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

function syncProfileFromUser(user) {
  const role = roleCatalog[currentRoleId()] || roleCatalog[user.assignedRoles[0]] || roleCatalog.student;
  state.profile = {
    name: user.name,
    email: user.email,
    role: role.label
  };
}

async function registerUser(event) {
  event.preventDefault();
  const name = $("#registerName").value.trim();
  const email = $("#registerEmail").value.trim().toLowerCase();
  const password = $("#registerPassword").value;
  const confirm = $("#registerPasswordConfirm").value;
  const intent = $("#registerIntent").value;
  const inviteCode = $("#registerInviteCode").value.trim().toUpperCase();
  const organization = $("#registerOrganization").value.trim();

  if (state.users.some((user) => user.email === email)) {
    showToast("Ya existe una cuenta con este correo.");
    return;
  }

  if (password !== confirm) {
    showToast("Las contrasenas no coinciden.");
    return;
  }

  if (password.length < 8) {
    showToast("La contrasena debe tener minimo 8 caracteres.");
    return;
  }

  const assignedRoles = ["student"];
  const pendingRoleRequests = [];
  const invitedRole = invitationCodes[inviteCode];

  if (invitedRole) {
    assignedRoles.push(invitedRole);
  } else if (intent !== "student") {
    pendingRoleRequests.push(intent);
  }

  const salt = makeSalt();
  const passwordHash = await hashSecret(password, salt);
  const user = {
    id: generateId("usr"),
    name,
    email,
    organization,
    assignedRoles: Array.from(new Set(assignedRoles)),
    pendingRoleRequests,
    salt,
    passwordHash,
    emailVerified: false,
    createdAt: new Date().toISOString(),
    lastLoginAt: new Date().toISOString()
  };

  state.users.push(user);
  state.session = {
    userId: user.id,
    startedAt: new Date().toISOString(),
    expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 8).toISOString()
  };
  state.activeRoleId = invitedRole || "student";
  syncProfileFromUser(user);
  addEvent(
    "usuario_registrado",
    invitedRole
      ? `Cuenta creada para ${email}; rol asignado por invitacion: ${roleCatalog[invitedRole].label}.`
      : pendingRoleRequests.length
        ? `Cuenta creada para ${email}; rol solicitado pendiente: ${roleCatalog[intent].label}.`
        : `Cuenta creada para ${email} como estudiante.`
  );
  saveState();
  event.currentTarget.reset();
  showToast("Cuenta creada. Sesion iniciada.");
  setView("inicio");
}

async function loginUser(event) {
  event.preventDefault();
  const email = $("#loginEmail").value.trim().toLowerCase();
  const password = $("#loginPassword").value;
  const user = state.users.find((item) => item.email === email);

  if (!user) {
    addEvent("login_fallido", `Intento de acceso con correo no registrado: ${email}.`);
    saveState();
    showToast("No existe una cuenta con ese correo.");
    return;
  }

  const passwordHash = await hashSecret(password, user.salt);
  if (passwordHash !== user.passwordHash) {
    user.failedAttempts = (user.failedAttempts || 0) + 1;
    addEvent("login_fallido", `Contrasena incorrecta para ${email}. Intentos: ${user.failedAttempts}.`);
    saveState();
    showToast(user.failedAttempts >= 3 ? "Demasiados intentos. En produccion se bloquearia temporalmente." : "Contrasena incorrecta.");
    return;
  }

  user.failedAttempts = 0;
  user.lastLoginAt = new Date().toISOString();
  state.session = {
    userId: user.id,
    startedAt: new Date().toISOString(),
    expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 8).toISOString()
  };
  state.activeRoleId = user.assignedRoles.includes(state.activeRoleId) ? state.activeRoleId : user.assignedRoles[0];
  syncProfileFromUser(user);
  addEvent("login_exitoso", `Sesion iniciada para ${email} con rol ${currentRole()?.label}.`);
  saveState();
  event.currentTarget.reset();
  showToast("Sesion iniciada.");
  setView("inicio");
}

function logoutUser() {
  const user = activeUser();
  state.session = null;
  addEvent("logout", `Sesion cerrada${user ? ` para ${user.email}` : ""}.`);
  saveState();
  showToast("Sesion cerrada.");
  setView("acceso");
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
  const identity = {
    session: state.session,
    users: state.users,
    activeRoleId: state.activeRoleId,
    activeAuthTab: state.activeAuthTab,
    profile: state.profile
  };
  state = { ...structuredClone(defaultState), ...identity };
  saveState();
  showToast("Progreso demo reiniciado; identidad conservada.");
  setView(isAuthenticated() ? "inicio" : "acceso");
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

    const publicCourseButton = event.target.closest("[data-public-course]");
    if (publicCourseButton) {
      state.selectedPublicCourseId = publicCourseButton.dataset.publicCourse;
      saveState();
      renderPublicCatalog();
      return;
    }

    const registerCourseButton = event.target.closest("[data-register-course]");
    if (registerCourseButton) {
      state.selectedPublicCourseId = registerCourseButton.dataset.registerCourse;
      state.activeAuthTab = "register";
      saveState();
      renderAuth();
      $("#registerIntent").value = "student";
      $("#registerEmail").focus();
      showToast("Crea tu cuenta para matricularte en el curso seleccionado.");
      return;
    }

    const paymentButton = event.target.closest("[data-payment-course]");
    if (paymentButton) {
      state.selectedPublicCourseId = paymentButton.dataset.paymentCourse;
      state.activeAuthTab = "register";
      saveState();
      renderAuth();
      showToast("El pago se activara despues del registro. En produccion se conectara a pasarela.");
      return;
    }

    const scrollButton = event.target.closest("[data-scroll-target]");
    if (scrollButton) {
      $(`#${scrollButton.dataset.scrollTarget}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
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

  $$("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      $$("[data-filter]").forEach((item) => item.classList.toggle("is-selected", item === button));
      renderCatalog();
    });
  });

  $("#publicCourseSearch").addEventListener("input", (event) => {
    state.publicCourseQuery = event.target.value;
    saveState();
    renderPublicCatalog();
  });

  [
    ["publicTopicFilter", "topic"],
    ["publicLevelFilter", "level"],
    ["publicTypeFilter", "trainingType"]
  ].forEach(([id, key]) => {
    $(`#${id}`).addEventListener("change", (event) => {
      state.publicCourseFilters[key] = event.target.value;
      saveState();
      renderPublicCatalog();
    });
  });

  $$("[data-auth-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeAuthTab = button.dataset.authTab;
      saveState();
      renderAuth();
    });
  });

  $("#registerForm").addEventListener("submit", registerUser);
  $("#loginForm").addEventListener("submit", loginUser);
  $("#logoutButton").addEventListener("click", logoutUser);

  document.addEventListener("change", (event) => {
    if (event.target.id !== "activeRoleSelect") return;
    const user = activeUser();
    if (!user || !user.assignedRoles.includes(event.target.value)) {
      showToast("Rol no asignado a esta persona.");
      renderRoleSwitcher();
      return;
    }
    state.activeRoleId = event.target.value;
    syncProfileFromUser(user);
    addEvent("rol_activo_cambiado", `Rol activo: ${currentRole()?.label}.`);
    saveState();
    showToast("Rol activo actualizado.");
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
