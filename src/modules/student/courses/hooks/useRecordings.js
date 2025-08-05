//es solo front sin back 
const useRecordings = (courseId) => {
  const recordingsByCourse = {
    1: [
      { id: 1, name: 'Grabación Clase 1', date: '01/06/2025', duration: '01:50:41', link: '#' },
      { id: 2, name: 'Grabación Clase 2', date: '02/06/2025', duration: '01:45:30', link: '#' },
      { id: 3, name: 'Grabación Clase 3', date: '03/06/2025', duration: '01:50:00', link: '#' },
      { id: 4, name: 'Grabación Clase 4', date: '04/06/2025', duration: '01:58:00', link: '#' },

    ],
    2: [
      { id: 1, name: 'Grabación Clase 1', date: '01/06/2025', duration: '01:50:41', link: '#' },
      { id: 2, name: 'Grabación Clase 2', date: '02/06/2025', duration: '01:42:10', link: '#' },
    ],
    3: [
      { id: 1, name: 'Grabación Clase 1', date: '01/06/2025', duration: '01:50:41', link: '#' },
      { id: 2, name: 'Grabación Clase 2', date: '02/06/2025', duration: '01:35:50', link: '#' },
      { id: 3, name: 'Grabación Clase 3', date: '03/06/2025', duration: '01:47:25', link: '#' },
      { id: 4, name: 'Grabación Clase 4', date: '04/06/2025', duration: '01:39:41', link: '#' },
    ],
  };

  return recordingsByCourse[parseInt(courseId)] || [];
};

export default useRecordings;
