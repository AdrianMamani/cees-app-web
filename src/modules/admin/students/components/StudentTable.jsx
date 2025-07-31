"use client"

import { Search, UserPlus } from "lucide-react"
import CoursesDropdown from "../../../../shared/components/CoursesDropdown"
import ActionsDropdown from "../../../../shared/components/AdminActionsDropdown"

const StudentTable = ({
                          students,
                          searchTerm,
                          onSearchChange,
                          onEdit,
                          onAssignCourse,
                          onDelete,
                          onCreateStudent
                      }) => {
    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-2xl font-semibold text-teal-600 mb-6">Gestión de Alumnos</h1>

                <div className="flex justify-between items-center mb-6">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Buscar estudiantes..."
                            value={searchTerm}
                            onChange={(e) => onSearchChange(e.target.value)}
                            className="flex h-10 w-80 rounded-md border border-gray-300 bg-white px-3 py-2 pl-10 text-sm placeholder:text-gray-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                        />
                    </div>
                    <button
                        onClick={onCreateStudent}
                        className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none h-10 py-2 px-4 bg-[#1377BD] hover:bg-[#12629A] text-white"
                    >
                        <UserPlus className="w-4 h-4 mr-2" />
                        Crear Nuevo Alumno
                    </button>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                    <div className="hidden md:block overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="text-left py-4 px-6 font-bold text-[#374159]">Nombre</th>
                                <th className="text-left py-4 px-6 font-bold text-[#374159]">Email</th>
                                <th className="text-left py-4 px-6 font-bold text-[#374159]">Cursos Asignados</th>
                                <th className="text-left py-4 px-6 font-bold text-[#374159]">Acciones</th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                            {students.map((student, index) => (
                                <tr key={student.id}
                                    className={index !== students.length - 1 ? "border-b" : ""}>
                                    <td className="py-4 px-6 text-[#374159]">{student.name}</td>
                                    <td className="py-4 px-6 text-[#374159]">{student.email}</td>
                                    <td className="py-4 px-6">
                                        <CoursesDropdown coursesCount={student.coursesCount} courses={student.courses}/>
                                    </td>
                                    <td className="py-4 px-6">
                                        <ActionsDropdown
                                            onEdit={() => onEdit(student.id)}
                                            onAssignCourse={() => onAssignCourse(student.id)}
                                            onDelete={() => onDelete(student.id)}
                                        />
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentTable