import React from 'react'
import { useNavigate } from 'react-router-dom';

const courses = [
    {
        id: 1,
        title: 'Curso de React',
        description: 'Aprende los fundamentos de React.js',
        img_url: 'https://imgs.search.brave.com/Kt2zoYJrGJma_wiVYVD8g8g7Zd4UUOPvwzIDGr9EKmY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vZGwxazJkZWUw/L2ltYWdlL3VwbG9h/ZC93XzI1MCxoXzE1/MCxmX3dlYnAvdjE3/MjA0Njk2MjAvY291/cnNlcy9hbmd1bGFy/LWZoL2Jhbm5lci9h/bmd1bGFyLWZoLmpw/Zw',
        teacher: 'Juan Pérez',
        startDate: '2023-09-01',
    },
    {
        id: 2,
        title: 'Curso de Node.js',
        description: 'Desarrolla aplicaciones con Node.js',
        img_url: 'https://imgs.search.brave.com/Kt2zoYJrGJma_wiVYVD8g8g7Zd4UUOPvwzIDGr9EKmY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vZGwxazJkZWUw/L2ltYWdlL3VwbG9h/ZC93XzI1MCxoXzE1/MCxmX3dlYnAvdjE3/MjA0Njk2MjAvY291/cnNlcy9hbmd1bGFy/LWZoL2Jhbm5lci9h/bmd1bGFyLWZoLmpw/Zw',
        teacher: 'Ana Gómez',
        startDate: '2023-10-01',
    },
    {
        id: 3,
        title: 'Curso de Python',
        description: 'Introducción a la programación con Python',
        img_url: 'https://imgs.search.brave.com/Kt2zoYJrGJma_wiVYVD8g8g7Zd4UUOPvwzIDGr9EKmY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vZGwxazJkZWUw/L2ltYWdlL3VwbG9h/ZC93XzI1MCxoXzE1/MCxmX3dlYnAvdjE3/MjA0Njk2MjAvY291/cnNlcy9hbmd1bGFy/LWZoL2Jhbm5lci9h/bmd1bGFyLWZoLmpw/Zw',
        teacher: 'Carlos López',
        startDate: '2023-11-01',
    },
    {
        id: 4,
        title: 'Curso de Java',
        description: 'Aprende a programar en Java desde cero',
        img_url: 'https://imgs.search.brave.com/Kt2zoYJrGJma_wiVYVD8g8g7Zd4UUOPvwzIDGr9EKmY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vZGwxazJkZWUw/L2ltYWdlL3VwbG9h/ZC93XzI1MCxoXzE1/MCxmX3dlYnAvdjE3/MjA0Njk2MjAvY291/cnNlcy9hbmd1bGFy/LWZoL2Jhbm5lci9h/bmd1bGFyLWZoLmpw/Zw',
        teacher: 'María Fernández',
        startDate: '2023-12-01',
    },
    {
        id: 5,
        title: 'Curso de Diseño Web',
        description: 'Crea sitios web atractivos y funcionales',
        img_url: 'https://imgs.search.brave.com/Kt2zoYJrGJma_wiVYVD8g8g7Zd4UUOPvwzIDGr9EKmY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vZGwxazJkZWUw/L2ltYWdlL3VwbG9h/ZC93XzI1MCxoXzE1/MCxmX3dlYnAvdjE3/MjA0Njk2MjAvY291/cnNlcy9hbmd1bGFy/LWZoL2Jhbm5lci9h/bmd1bGFyLWZoLmpw/Zw',
        teacher: 'Luis Martínez',
        startDate: '2024-01-01',
    },
    {
        id: 6,
        title: 'Curso de Inteligencia Artificial',
        description: 'Explora el mundo de la IA y el aprendizaje automático',
        img_url: 'https://imgs.search.brave.com/Kt2zoYJrGJma_wiVYVD8g8g7Zd4UUOPvwzIDGr9EKmY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vZGwxazJkZWUw/L2ltYWdlL3VwbG9h/ZC93XzI1MCxoXzE1/MCxmX3dlYnAvdjE3/MjA0Njk2MjAvY291/cnNlcy9hbmd1bGFy/LWZoL2Jhbm5lci9h/bmd1bGFyLWZoLmpw/Zw',
        teacher: 'Sofía Rodríguez',
        startDate: '2024-02-01',
    },

]

const CoursesPage = () => {

    const navigate = useNavigate();

    return (
        <main className='h-screen w-full '>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
                {courses.length > 0 && 
                    courses.map((course) => (
                        <div key={course.id} className="rounded-lg shadow-xl " onClick={() => navigate(`/courses/detail`)}>
                            <img src={course.img_url} alt={course.title} className=" w-full h-48 object-cover rounded-t-lg " />
                            <div className='p-4'>
                                <h2 className="text-xl font-bold">{course.title}</h2>
                                {/* <p className="text-gray-600">{course.description}</p> */}
                                <p className="text-gray-500">Profesor: {course.teacher}</p>
                                <p className="text-gray-500">Fecha de inicio: {course.startDate}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </main>
    )
}

export default CoursesPage