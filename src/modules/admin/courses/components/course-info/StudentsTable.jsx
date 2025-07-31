"use client"

import { UserPlus } from 'lucide-react'
import { StudentActionsDropdown } from "./StudentActionsDropdown"

export function StudentsTable({ students, onAddStudent, onEditStudent, onRemoveStudent }) {
    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-[#374159]">Estudiantes inscritos</h3>
                <button
                    onClick={onAddStudent}
                    className="flex items-center gap-2 px-4 py-2 bg-[#1377BD] text-white rounded-lg hover:hover:bg-[#12629A] transition-colors"
                >
                    <UserPlus className="w-4 h-4" />
                    Agregar Estudiante
                </button>
            </div>

            <div className="overflow-hidden">
                <table className="w-full">
                    <thead>
                    <tr className="border-b border-gray-200">
                        <th className="text-left py-4 px-0 font-medium text-gray-600">Estudiante</th>
                        <th className="text-left py-4 px-4 font-medium text-gray-600">Fecha de Inicio</th>
                        <th className="text-left py-4 px-4 font-medium text-gray-600">Progreso</th>
                        <th className="text-left py-4 px-4 font-medium text-gray-600 w-24">Acciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    {students.map((student) => (
                        <tr key={student.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                            <td className="py-4 px-0">
                                <div>
                                    <div className="font-medium text-[#374159]">{student.name}</div>
                                    <div className="text-sm text-gray-500">{student.email}</div>
                                </div>
                            </td>
                            <td className="py-4 px-4">
                                <div className="text-[#374159]">{student.startDate}</div>
                            </td>
                            <td className="py-4 px-4">
                                <div className="flex items-center gap-3">
                                    <div className="flex-1 bg-gray-200 rounded-full h-2 max-w-[100px]">
                                        <div
                                            className="bg-[#5CA733] h-2 rounded-full transition-all duration-300"
                                            style={{ width: `${student.progress}%` }}
                                        />
                                    </div>
                                    <span className="text-sm font-medium text-gray-700">{student.progress}%</span>
                                </div>
                            </td>
                            <td className="py-4 px-4">
                                <StudentActionsDropdown student={student} onEdit={onEditStudent} onRemove={onRemoveStudent} />
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
