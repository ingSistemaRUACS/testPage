export default [
  {
    name: 'Contabilidad Financiera',
    semester: 'I',
    year: 'I',
    prerequisites: [],
    precedence: []
  },

  {
    name: 'Introducción a la Programación',
    semester: 'I',
    year: 'I',
    prerequisites: [],
    precedence: []
  },

  {
    name: 'Inglés I',
    semester: 'I',
    year: 'I',
    prerequisites: [],
    precedence: []
  },

  {
    name: 'Filosofía',
    semester: 'I',
    year: 'I',
    prerequisites: [],
    precedence: []
  },

  {
    name: 'Matemática I',
    semester: 'I',
    year: 'I',
    prerequisites: [],
    precedence: []
  },

  {
    name: 'Redacción Técnica',
    semester: 'I',
    year: 'I',
    prerequisites: [],
    precedence: []
  },

  {
    name: 'Algebra Lineal',
    semester: 'II',
    year: 'I',
    prerequisites: [],
    precedence: []
  },

  {
    name: 'Contabilidad de Costo',
    semester: 'II',
    year: 'I',
    prerequisites: ['Contabilidad Financiera'],
    precedence: []
  },

  {
    name: 'Inglés II',
    semester: 'II',
    year: 'I',
    prerequisites: ['Inglés I'],
    precedence: []
  },

  {
    name: 'Matemática II',
    semester: 'II',
    year: 'I',
    prerequisites: ['Matemática I'],
    precedence: []
  },

  {
    name: 'Programación I',
    semester: 'II',
    year: 'I',
    prerequisites: ['Introducción a la Programación'],
    precedence: []
  },

  {
    name: 'Sociología',
    semester: 'II',
    year: 'I',
    prerequisites: [],
    precedence: []
  },

  {
    name: 'Contabilidad Gerencial',
    semester: 'III',
    year: 'II',
    prerequisites: ['Contabilidad de Costo'],
    precedence: []
  },

  {
    name: 'Cultura de Paz y Derechos Humanos',
    semester: 'III',
    year: 'II',
    prerequisites: [],
    precedence: []
  },

  {
    name: 'Estadísticas I',
    semester: 'III',
    year: 'II',
    prerequisites: [],
    precedence: ['Matemática II']
  },

  {
    name: 'Ingeniería Económica',
    semester: 'III',
    year: 'II',
    prerequisites: [],
    precedence: ['Matemática I']
  },

  {
    name: 'Matemática III',
    semester: 'III',
    year: 'II',
    prerequisites: ['Matemática II'],
    precedence: []
  },

  {
    name: 'Programación II',
    semester: 'III',
    year: 'II',
    prerequisites: ['Programación I'],
    precedence: []
  },

  {
    name: 'Base de Datos I',
    semester: 'IV',
    year: 'II',
    prerequisites: ['Programación II'],
    precedence: []
  },

  {
    name: 'Microeconomía',
    semester: 'IV',
    year: 'II',
    prerequisites: [],
    precedence: ['Matemática I']
  },

  {
    name: 'Estadísticas II',
    semester: 'IV',
    year: 'II',
    prerequisites: [],
    precedence: ['Estadísticas I']
  },

  {
    name: 'Finanzas I',
    semester: 'IV',
    year: 'II',
    prerequisites: ['Ingeniería Económica'],
    precedence: ['Contabilidad Gerencial']
  },

  {
    name: 'Física I',
    semester: 'IV',
    year: 'II',
    prerequisites: [],
    precedence: ['Matemática II']
  },

  {
    name: 'Métodos Numéricos',
    semester: 'V',
    year: 'III',
    prerequisites: [],
    precedence: ['Matemática III']
  },

  {
    name: 'Base de Datos II',
    semester: 'V',
    year: 'III',
    prerequisites: ['Base de Datos I'],
    precedence: []
  },

  {
    name: 'Macroeconomía',
    semester: 'V',
    year: 'III',
    prerequisites: ['Microeconomía'],
    precedence: []
  },

  {
    name: 'Física II',
    semester: 'V',
    year: 'III',
    prerequisites: ['Física I'],
    precedence: []
  },

  {
    name: 'Mercadotecnia',
    semester: 'V',
    year: 'III',
    prerequisites: ['Estadísticas II'],
    precedence: []
  },

  {
    name: 'Producción I',
    semester: 'V',
    year: 'III',
    prerequisites: ['Estadísticas II'],
    precedence: []
  },

  {
    name: 'Arquitectura de Máquina',
    semester: 'VI',
    year: 'III',
    prerequisites: [],
    precedence: ['Física II']
  },

  {
    name: 'Arquitectura de Máquina',
    semester: 'VI',
    year: 'III',
    prerequisites: [],
    precedence: ['Física II']
  },

  {
    name: 'Finanzas II',
    semester: 'VI',
    year: 'III',
    prerequisites: ['Finanzas I'],
    precedence: []
  },

  {
    name: 'Ingeniería de Software I',
    semester: 'VI',
    year: 'III',
    prerequisites: ['Base de Datos II'],
    precedence: []
  },

  {
    name: 'Investigación de Operaciones I',
    semester: 'VI',
    year: 'III',
    prerequisites: [],
    precedence: ['Algebra Lineal', 'Mercadotecnia']
  },

  {
    name: 'Organización I',
    semester: 'VI',
    year: 'III',
    prerequisites: ['Producción I'],
    precedence: []
  },

  {
    name: 'Producción II',
    semester: 'VI',
    year: 'III',
    prerequisites: ['Producción I'],
    precedence: []
  },

  {
    name: 'Aplicaciones Gráficas y Multimedia',
    semester: 'VII',
    year: 'IV',
    prerequisites: [],
    precedence: ['Base de Datos I']
  },

  {
    name: 'Ingeniería de Software II',
    semester: 'VII',
    year: 'IV',
    prerequisites: ['Ingeniería de Software I'],
    precedence: []
  },

  {
    name: 'Investigación de Operaciones II',
    semester: 'VII',
    year: 'IV',
    prerequisites: ['Investigación de Operaciones I'],
    precedence: []
  },

  {
    name: 'Organización II',
    semester: 'VII',
    year: 'IV',
    prerequisites: ['Organización I'],
    precedence: []
  },

  {
    name: 'Producción III',
    semester: 'VII',
    year: 'IV',
    prerequisites: ['Producción II'],
    precedence: []
  },

  {
    name: 'Sistemas Operativos',
    semester: 'VII',
    year: 'IV',
    prerequisites: [],
    precedence: ['Arquitectura de Máquina']
  },

  {
    name: 'Historia de CA y Nicaragua',
    semester: 'VIII',
    year: 'IV',
    prerequisites: [],
    precedence: []
  },

  {
    name: 'Ingeniería de Sistemas',
    semester: 'VIII',
    year: 'IV',
    prerequisites: ['Organización II'],
    precedence: ['Investigación de Operaciones II']
  },

  {
    name: 'Inteligencia Artificial',
    semester: 'VIII',
    year: 'IV',
    prerequisites: ['Ingeniería de Software II'],
    precedence: ['Aplicaciones Gráficas y Multimedia']
  },

  {
    name: 'Metodología de la Investigación',
    semester: 'VIII',
    year: 'IV',
    prerequisites: [],
    precedence: []
  },

  {
    name: 'Sistemas Operativos de Redes',
    semester: 'VIII',
    year: 'IV',
    prerequisites: ['Sistemas Operativos'],
    precedence: []
  },

  {
    name: 'Auditoría de Sistemas',
    semester: 'IX',
    year: 'V',
    prerequisites: ['Sistemas Operativos'],
    precedence: []
  },

  {
    name: 'Formulación y Evaluación de Proyectos',
    semester: 'IX',
    year: 'V',
    prerequisites: ['Ingeniería de Sistemas'],
    precedence: ['Macroeconomía']
  },

  {
    name: 'Modelación y Simulación de Sistemas',
    semester: 'IX',
    year: 'V',
    prerequisites: ['Métodos Numérico'],
    precedence: []
  },

  {
    name: 'Sistemas de Información',
    semester: 'IX',
    year: 'V',
    prerequisites: [],
    precedence: ['Inteligencia Artificial']
  },

  {
    name: 'Tecnología y Medio Ambiente',
    semester: 'IX',
    year: 'V',
    prerequisites: [],
    precedence: []
  },

  {
    name: 'Administración Informática',
    semester: 'X',
    year: 'V',
    prerequisites: ['Sistemas de Información'],
    precedence: ['Auditoria de Sistema']
  },

  {
    name: 'Administración de Proyectos',
    semester: 'X',
    year: 'V',
    prerequisites: ['Formulación y Evaluación de Proyectos'],
    precedence: []
  },

  {
    name: 'Diseño de Sistema en Internet',
    semester: 'X',
    year: 'V',
    prerequisites: [],
    precedence: []
  },

  {
    name: 'Ética Profesional',
    semester: 'X',
    year: 'V',
    prerequisites: [],
    precedence: []
  },

  {
    name: 'Sistemas de Manufactura',
    semester: 'X',
    year: 'V',
    prerequisites: [],
    precedence: ['Producción I']
  }
]
