import { Card, CardContent, CardHeader, CardTitle } from "./Card"

interface Profile {
    firstName: string
    lastName: string
    phone: string
    birthDate: string
    email: string
    photo?: string
}

interface PersonalInfoCardProps {
    profile: Profile
}

export default function PersonalInfoCard({ profile }: PersonalInfoCardProps) {
    const infoFields = [
        { label: "Nombre", value: profile.firstName },
        { label: "Apellido", value: profile.lastName },
        { label: "Teléfono", value: profile.phone },
        { label: "Fecha de Nacimiento", value: profile.birthDate },
        { label: "Gmail", value: profile.email, span: true },
    ]

    return (
        <Card className="shadow-sm">
            <CardHeader>
                <CardTitle >Información Personal</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {infoFields.map((field, index) => (
                        <div key={index} className={`space-y-1 ${field.span ? "md:col-span-2" : ""}`}>
                            <label className=" font-semibold text-[#4B5563]">{field.label}</label>
                            <p className=" text-sm font-medium text-[#4B5563]">{field.value}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-500">
                        <span className="font-semibold">Nota:</span> Para actualizar otra información, contactar con administración
                        académica
                    </p>
                </div>
            </CardContent>
        </Card>
    )
}
