"use client"

import { useState, useEffect } from "react"

export function useCourseManagement() {
    const [course, setCourse] = useState(null)
    const [students, setStudents] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const mockCourse = {
            id: "course-1",
            title: "Estrategias Didácticas",
            image: "https://imgs.search.brave.com/akrwzD-Z9bZdVQS0l1dADwCqHEptFCpdYvCGbp8PWww/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIy/MzM3Mjg1Ny9lcy9m/b3RvL3ByZXNlbnRh/Y2klQzMlQjNuLWUt/aW5mb2dyYWYlQzMl/QURhLWRlLWxvcy1z/ZXJ2aWNpb3MtZGUt/YXByZW5kaXphamUt/ZW4tbCVDMyVBRG5l/YS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9Rl9Ub3RXYkNk/OEttRmxTYlNPWGdC/UTMzcUxrRVVRLV9r/ZEswWWVkRldfdz0",
            description:
                "Curso completo sobre metodologías y estrategias didácticas modernas para la educación superior. Aprende técnicas innovadoras para mejorar el proceso de enseñanza-aprendizaje.",
            professor: "José Valdez",
            price: "500",
            duration: "120",
            certification: "Sí",
        }

        const mockStudents = [
            {
                id: "student-1",
                name: "Elena Martinez Ruiz",
                email: "elena.martinez@universidad.edu",
                startDate: "14 de febrero de 2025",
                progress: 65,
            },
            {
                id: "student-2",
                name: "Carlos Rodriguez Lopez",
                email: "carlos.rodriguez@universidad.edu",
                startDate: "20 de febrero de 2025",
                progress: 45,
            },
            {
                id: "student-3",
                name: "Ana Sofia Gutierrez",
                email: "ana.gutierrez@universidad.edu",
                startDate: "25 de febrero de 2025",
                progress: 80,
            },
            {
                id: "student-4",
                name: "Miguel Angel Torres",
                email: "miguel.torres@universidad.edu",
                startDate: "1 de marzo de 2025",
                progress: 30,
            },
            {
                id: "student-5",
                name: "Isabella Fernandez",
                email: "isabella.fernandez@universidad.edu",
                startDate: "5 de marzo de 2025",
                progress: 90,
            },
            {
                id: "student-6",
                name: "Diego Alejandro Morales",
                email: "diego.morales@universidad.edu",
                startDate: "10 de marzo de 2025",
                progress: 15,
            },
            {
                id: "student-7",
                name: "Valentina Castro Silva",
                email: "valentina.castro@universidad.edu",
                startDate: "12 de marzo de 2025",
                progress: 55,
            },
            {
                id: "student-8",
                name: "Sebastian Ramirez",
                email: "sebastian.ramirez@universidad.edu",
                startDate: "15 de marzo de 2025",
                progress: 70,
            },
        ]

        setTimeout(() => {
            setCourse(mockCourse)
            setStudents(mockStudents)
            setLoading(false)
        }, 1000)
    }, [])



    return {
        course,
        students,
        loading,

    }
}
