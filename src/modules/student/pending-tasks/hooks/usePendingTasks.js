const usePendingTasks = () => {
  return [
    {
      id: 1,
      title: 'Tarea práctica #01',
      course: 'Estrategias Didácticas',
      description: 'Elabora una propuesta didáctica para abordar el aprendizaje colaborativo en estudiantes de primaria. Debe incluir objetivos, metodología y recursos educativos.',
      dueDate: '25 de julio, 2025'
    },
    {
      id: 2,
      title: 'Tarea práctica #02',
      course: 'Evaluación Educativa',
      description: 'Diseña una rúbrica de evaluación para medir competencias comunicativas en el nivel secundario. Incluye criterios, niveles de logro y una actividad evaluativa.',
      dueDate: '25 de julio, 2025'
    },
    {
      id: 3,
      title: 'Tarea práctica #03',
      course: 'Psicología del Aprendizaje',
      description: 'Realiza un análisis comparativo entre el conductismo y el constructivismo en el proceso de enseñanza-aprendizaje. Presenta ejemplos prácticos de aplicación.',
      dueDate: '25 de julio, 2025'
    }
  ];
};

export default usePendingTasks;
