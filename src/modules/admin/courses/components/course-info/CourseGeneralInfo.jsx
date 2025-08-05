"use client"

export function CourseGeneralInfo({ course }) {
    return (
        <div>
            <h3 className="text-lg font-semibold text-[#4B5563] mb-6">Detalles del Curso</h3>

            <div className="mb-8">
                <h4 className="font-semibold text-[#4B5563] mb-3">Descripción</h4>
                <p className="text-gray-600 leading-relaxed">{course.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                    <h4 className="font-semibold text-[#4B5563] mb-2">Profesor Asignado</h4>
                    <p className="text-gray-600">{course.professor}</p>
                </div>

                <div>
                    <h4 className="font-semibold text-[#4B5563] mb-2">Precio (S/)</h4>
                    <p className="text-gray-600">{course.price}</p>
                </div>

                <div>
                    <h4 className="font-semibold text-[#4B5563] mb-2">Duración (horas)</h4>
                    <p className="text-gray-600">{course.duration}</p>
                </div>

                <div>
                    <h4 className="font-semibold text-[#4B5563] mb-2">Certificación</h4>
                    <p className="text-gray-600">{course.certification}</p>
                </div>
            </div>
        </div>
    )
}
