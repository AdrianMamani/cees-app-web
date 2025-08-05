

import { Clock, RotateCcw, CheckCircle } from "lucide-react"

export function QuizNavbar({ timeRemaining, attempt, progress }) {
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60)
        const remainingSeconds = seconds % 60
        return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
    }

    return (
        <div className="bg-white border-b border-gray-200 p-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-wrap gap-6">
                    <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-red-500" />
                        <span className="text-sm text-gray-600">Tiempo restante:</span>
                        <span className="text-sm font-medium text-red-500">{formatTime(timeRemaining)}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <RotateCcw className="w-5 h-5 text-[#1377BD]" />
                        <span className="text-sm text-gray-600">Intento:</span>
                        <span className="text-sm font-medium text-[#1377BD]">
              {attempt.current} de {attempt.total}
            </span>
                    </div>

                    <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-sm text-gray-600">Progreso:</span>
                        <span className="text-sm font-medium text-green-500">
              {progress.completed} de {progress.total}
            </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
