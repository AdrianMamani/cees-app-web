"use client"

import { useState, useEffect } from "react"

const useTeachers = () => {
    const [teachers, setTeachers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchTeachers = async () => {
            try {
                setLoading(true)
                const mockTeachers = [
                    {
                        id: 1,
                        name: "Dr. Elena Martínez Ruiz",
                        email: "elena.martinez@universidad.edu",
                        coursesCount: 2,
                        courses: ["Estrategias Didácticas", "Metodología de la Investigación"],
                    },
                    {
                        id: 2,
                        name: "Prof. Carlos González López",
                        email: "carlos.gonzalez@universidad.edu",
                        coursesCount: 3,
                        courses: ["Estrategias Didácticas", "Metodología de la Investigación", "Psicología Educativa"],
                    },
                ]

                setTimeout(() => {
                    setTeachers(mockTeachers)
                    setLoading(false)
                }, 1000)
            } catch (err) {
                setError(err.message)
                setLoading(false)
            }
        }

        fetchTeachers()
    }, [])

    return {
        teachers,
        loading,
        error,
    }
}

export default useTeachers
