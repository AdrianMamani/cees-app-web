"use client"

import { useState } from "react"
import { MoreHorizontal, Edit, Trash2 } from "lucide-react"

export function StudentActionsDropdown({ student, onEdit, onRemove }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="relative">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <MoreHorizontal className="w-4 h-4 text-gray-500" />
            </button>

            {isOpen && (
                <>
                    <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
                    <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-20 min-w-[120px]">
                        <button
                            onClick={() => {
                                onEdit(student)
                                setIsOpen(false)
                            }}
                            className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                            <Edit className="w-4 h-4" />
                            Editar
                        </button>
                        <button
                            onClick={() => {
                                onRemove(student)
                                setIsOpen(false)
                            }}
                            className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-gray-50 transition-colors"
                        >
                            <Trash2 className="w-4 h-4" />
                            Eliminar
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}
