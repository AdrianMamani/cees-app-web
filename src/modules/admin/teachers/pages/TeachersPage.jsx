"use client"

import { useState } from "react"
import TeacherTable from "../components/TeacherTable"
import useTeachers from "../hooks/useTeachers"

const TeachersPage = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const { teachers, loading, error } = useTeachers()

    const handleEdit = (teacherId) => {
        // TODO: Implement logic to edit teacher
        console.log(teacherId)
    }

    const handleAssignCourse = (teacherId) => {
        // TODO: Implement logic to assign course to teacher
        console.log( teacherId)
    }

    const handleDelete = (teacherId) => {
        // TODO: Implement logic to delete teacher
        console.log( teacherId)
    }

    const handleCreateTeacher = () => {
        // TODO: Implement logic to create new teacher

    }

    const filteredTeachers = teachers.filter(
        (teacher) =>
            teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            teacher.email.toLowerCase().includes(searchTerm.toLowerCase()),
    )

    if (loading) {
        return (
            <div className="p-6 bg-gray-50 min-h-screen">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-2xl font-semibold text-teal-600 mb-6">Gestión de Profesores</h1>
                    <div className="flex justify-center items-center h-64">
                        <div className="text-gray-500">Cargando profesores...</div>
                    </div>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="p-6 bg-gray-50 min-h-screen">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-2xl font-semibold text-teal-600 mb-6">Gestión de Profesores</h1>
                    <div className="flex justify-center items-center h-64">
                        <div className="text-red-500">Error: {error}</div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <TeacherTable
            teachers={filteredTeachers}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            onEdit={handleEdit}
            onAssignCourse={handleAssignCourse}
            onDelete={handleDelete}
            onCreateTeacher={handleCreateTeacher}
        />
    )
}

export default TeachersPage