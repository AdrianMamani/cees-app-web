"use client"

import { useState, useEffect } from "react"

const useStudents = () => {
    const [students, setStudents] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                setLoading(true)
                const mockStudents = [
                    {
                        id: 1,
                        name: "Elena Martínez Ruiz",
                        email: "elena.martinez@universidad.edu",
                        coursesCount: 2,
                        courses: ["Estrategias Didácticas", "Metodología de la Investigación"],
                    },
                    {
                        id: 2,
                        name: "Carlos González López",
                        email: "carlos.gonzalez@universidad.edu",
                        coursesCount: 3,
                        courses: ["Estrategias Didácticas", "Metodología de la Investigación", "Psicología Educativa"],
                    },
                ]

                setTimeout(() => {
                    setStudents(mockStudents)
                    setLoading(false)
                }, 1000)
            } catch (err) {
                setError(err.message)
                setLoading(false)
            }
        }

        fetchStudents()
    }, [])


    return {
        students,
        loading,
        error,

    }
}

export default useStudents
