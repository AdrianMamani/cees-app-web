"use client"

import { useState, useEffect } from "react"

export function useGradesData() {
    const [grades, setGrades] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const mockGrades = [
            {
                id: "grade-1",
                activity: "Tarea 01 Teórico",
                dueDate: "01/06/2025",
                status: "Calificado",
                grade: "18/20",
            },
            {
                id: "grade-2",
                activity: "Tarea 02 Integración de Tecnología en la Enseñanza Superior",
                dueDate: "05/06/2025",
                status: "Sin abrir",
                grade: "_ /20",
            },
            {
                id: "grade-3",
                activity: "Tarea 03 Conceptos básicos",
                dueDate: "10/06/2025",
                status: "Entregado",
                grade: "_ /20",
            },
            {
                id: "grade-4",
                activity: "Tarea 04 Innovación y reflexión",
                dueDate: "10/06/2025",
                status: "Vencido",
                grade: "_ /20",
            },
        ]

        setTimeout(() => {
            setGrades(mockGrades)
            setLoading(false)
        }, 100)
    }, [])

    return {
        grades,
        loading,
    }
}
