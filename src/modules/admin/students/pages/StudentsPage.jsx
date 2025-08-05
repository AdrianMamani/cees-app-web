"use client"

import { useState } from "react"
import StudentTable from "../components/StudentTable"
import useStudents from "../hooks/useStudents"

const StudentsPage = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const { students, loading, error } = useStudents()

    const handleEdit = (studentId) => {
        // TODO: Implement logic to edit student
        console.log(studentId)
    }

    const handleAssignCourse = (studentId) => {
        // TODO: Implement logic to assign course to student
        console.log(studentId)
    }

    const handleDelete = (studentId) => {
        // TODO: Implement logic to delete student
        console.log(studentId)
    }

    const handleCreateStudent = () => {
        // TODO: Implement logic to create new student
    }

    const filteredStudents = students.filter(
        (student) =>
            student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            student.email.toLowerCase().includes(searchTerm.toLowerCase()),
    )

    if (loading) {
        return (
            <div className="p-6 bg-gray-50 min-h-screen">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-2xl font-semibold text-teal-600 mb-6">Gestión de Alumnos</h1>
                    <div className="flex justify-center items-center h-64">
                        <div className="text-gray-500">Cargando estudiantes...</div>
                    </div>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="p-6 bg-gray-50 min-h-screen">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-2xl font-semibold text-teal-600 mb-6">Gestión de Alumnos</h1>
                    <div className="flex justify-center items-center h-64">
                        <div className="text-red-500">Error: {error}</div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <StudentTable
            students={filteredStudents}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            onEdit={handleEdit}
            onAssignCourse={handleAssignCourse}
            onDelete={handleDelete}
            onCreateStudent={handleCreateStudent}
        />
    )
}

export default StudentsPage