import React from 'react'
import { useGradesData } from '../../hooks/useGradesData.js';
import StatusBadge from "./StatusBadge.jsx";


export function CalificationTab() {
    const { grades } = useGradesData();

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            {/* Table */}
            <div className="hidden md:block overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                        <th className="text-left py-4 px-6 font-bold text-[#374159]">Actividades</th>
                        <th className="text-left py-4 px-6 font-bold text-[#374159]">Fecha de vencimiento</th>
                        <th className="text-left py-4 px-6 font-bold text-[#374159]">Estado</th>
                        <th className="text-left py-4 px-6 font-bold text-[#374159]">Calificación</th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                    {grades.map((grade) => (
                        <tr key={grade.id} className="hover:bg-gray-50 transition-colors">
                            <td className="py-4 px-6">
                                <div className="font-medium text-[#374159]">{grade.activity}</div>
                            </td>
                            <td className="py-4 px-6">
                                <div className="text-[#374159]">{grade.dueDate}</div>
                            </td>
                            <td className="py-4 px-6">
                                <div className="text-gray-600">{grade.status}</div>
                            </td>
                            <td className="py-4 px-6">
                                <StatusBadge status={grade.status} grade={grade.grade} />
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {/* Cards for the responsive view */}
            <div className="md:hidden divide-y divide-gray-200">
                {grades.map((grade) => (
                    <div key={grade.id} className="p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex flex-col gap-3">
                            <h4 className="font-medium text-[#374159] text-sm leading-tight">{grade.activity}</h4>
                            <StatusBadge status={grade.status} grade={grade.grade} isMobile />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CalificationTab;