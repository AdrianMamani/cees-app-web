"use client"

import { useState } from "react"
import { CourseManagementTabs } from "../components/course-info/CourseManagementTabs"
import { CourseGeneralInfo } from "../components/course-info/CourseGeneralInfo"
import { StudentsTable } from "../components/course-info/StudentsTable.jsx"
import { useCourseManagement } from "../hooks/useCourseManagement"

export default function CourseManagementPage() {
    const [activeTab, setActiveTab] = useState("students")
    const { course, students, loading, addStudent, editStudent, removeStudent } = useCourseManagement()

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50">

                <div className="flex items-center justify-center h-64">
                    <div className="text-lg text-gray-600">Cargando curso...</div>
                </div>
            </div>
        )
    }

    if (!course) {
        return (
            <div className="min-h-screen bg-gray-50">

                <div className="flex items-center justify-center h-64">
                    <div className="text-lg text-red-600">Error al cargar el curso</div>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50">


            <div className="max-w-7xl mx-auto p-6">
                <h1 className="text-3xl font-bold text-teal-600 mb-6">Ver Curso</h1>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-13">
                    <h2 className="text-xl font-semibold text-[#374159] mb-4">{course.title}</h2>
                    <img
                        src={course.image || "https://imgs.search.brave.com/akrwzD-Z9bZdVQS0l1dADwCqHEptFCpdYvCGbp8PWww/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIy/MzM3Mjg1Ny9lcy9m/b3RvL3ByZXNlbnRh/Y2klQzMlQjNuLWUt/aW5mb2dyYWYlQzMl/QURhLWRlLWxvcy1z/ZXJ2aWNpb3MtZGUt/YXByZW5kaXphamUt/ZW4tbCVDMyVBRG5l/YS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9Rl9Ub3RXYkNk/OEttRmxTYlNPWGdC/UTMzcUxrRVVRLV9r/ZEswWWVkRldfdz0"}
                        alt={course.title}
                        className="w-full h-48 object-cover rounded-xl mb-6"
                        style={{ borderRadius: "12px" }}
                    />

                    <CourseManagementTabs activeTab={activeTab} onTabChange={setActiveTab} />

                    {activeTab === "general" && <CourseGeneralInfo course={course} />}

                    {activeTab === "students" && (
                        <StudentsTable
                            students={students}
                            onAddStudent={addStudent}
                            onEditStudent={editStudent}
                            onRemoveStudent={removeStudent}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}