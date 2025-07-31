"use client"

import { useState, useEffect } from "react"

const useCourses = () => {
    const [courses, setCourses] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                setLoading(true)
                const mockCourses = [
                    {
                        id: 1,
                        name: "Estrategias Didácticas",
                        code: "ED101",
                        description: "Curso sobre metodologías de enseñanza",
                    },
                    {
                        id: 2,
                        name: "Metodología de la Investigación",
                        code: "MI201",
                        description: "Fundamentos de investigación académica",
                    },
                    {
                        id: 3,
                        name: "Psicología Educativa",
                        code: "PE301",
                        description: "Aspectos psicológicos del aprendizaje",
                    },
                    {
                        id: 4,
                        name: "Tecnología Educativa",
                        code: "TE401",
                        description: "Uso de tecnología en la educación",
                    },
                    {
                        id: 5,
                        name: "Evaluación del Aprendizaje",
                        code: "EA501",
                        description: "Métodos de evaluación educativa",
                    },
                ]

                setTimeout(() => {
                    setCourses(mockCourses)
                    setLoading(false)
                }, 800)
            } catch (err) {
                setError(err.message)
                setLoading(false)
            }
        }

        fetchCourses()
    }, [])


    return {
        courses,
        loading,
        error,

    }
}

export default useCourses
