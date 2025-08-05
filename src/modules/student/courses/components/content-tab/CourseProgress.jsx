"use client";

import { ProgressCircle } from "./ProgressCircle";

export function CourseProgress({ percentage, completedModules, totalModules }) {
    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Progreso del Curso</h3>

            <div className="flex flex-col ">
                <div className="flex flex-col items-center">
                    <ProgressCircle percentage={percentage}/>
                </div>
                <div className="mt-5">
                    <div className="text-sm text-gray-600 flex justify-between ">
                        Módulos completados {" "}
                        <span className="font-semibold">
                            {completedModules}/{totalModules}
                        </span>
                    </div>
                </div>
            </div>

        </div>
    );
}