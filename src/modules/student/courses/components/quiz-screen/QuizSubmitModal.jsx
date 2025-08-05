"use client"

import { IoMdSend } from "react-icons/io";
import { GrCircleQuestion } from "react-icons/gr";
export function QuizSubmitModal({ isOpen, onClose, onConfirm }) {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 shadow-xl">
                <div className="text-center">
                    {/* Question mark icon */}
                    <div className="rounded-full flex items-center justify-center mx-auto mb-6">
                        <GrCircleQuestion className="w-16 h-16 text-[#1377BD]" />
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl font-bold text-black mb-4">Enviar Evaluación</h2>

                    {/* Message */}
                    <div className="text-gray-600 mb-8">
                        <p className="text-lg mb-1 font-semibold">¿Estás seguro de enviar tus respuestas?</p>
                        <p className="text-sm">No podrás modificarlas después</p>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4 justify-center">
                        <button
                            onClick={onClose}
                            className="px-7 py-3 bg-[#D2D2D2] text-gray-500 rounded-lg hover:bg-[#BEBEBE] transition-colors"
                        >
                            Cancelar
                        </button>
                        <button
                            onClick={onConfirm}
                            className="px-7 py-3 bg-[#5CA733] text-white rounded-lg hover:bg-[#4D8A2B] transition-colors flex items-center gap-4"
                        >
                            <IoMdSend className="w-6 h-6" />
                            Enviar evaluación
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
