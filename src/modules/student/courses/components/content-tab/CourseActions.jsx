"use client"

import { useState } from "react"
import { PiVideoCameraFill } from "react-icons/pi"
import { ImFilm } from "react-icons/im";
import { MoreVertical } from "lucide-react"
import { useNavigate } from "react-router-dom";

export function CourseActions() {
    const [showRecordings, setShowRecordings] = useState(false)
    const navigate = useNavigate();

    const handleRecordingsClick = () => {
        navigate(`/courses/detail/recordings/1`);
    }

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-[#374159] mb-4">Detalles y Acciones</h3>

            <div className="relative">
                <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50">
                    <PiVideoCameraFill className="w-8 h-8 text-[#1377BD]" />
                    <div className="flex-1">
                        <span className="text-[#374159] font-medium text-base block">Clase virtual</span>
                        <a href="" className="text-[#1377BD] text-base underline hover:text-blue-800 transition-colors">
                            Unirse a la sesión
                        </a>
                    </div>
                    <MoreVertical className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700"
                        onClick={() => setShowRecordings(!showRecordings)}
                    />
                </div>

                {showRecordings && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                        <div className="p-3 hover:bg-gray-100 cursor-pointer flex items-center gap-3"
                            onClick={handleRecordingsClick}
                        >
                            <ImFilm className="w-6 h-6 text-[#1377BD]" />
                            <span className="text-base text-[#374159]">Ver todas las grabaciones</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
