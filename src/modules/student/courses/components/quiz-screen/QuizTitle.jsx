
export function QuizTitle({ title, subtitle }) {
    return (
        <div className="bg-white p-6">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-[#1377BD] mb-2">{title}</h1>
                <p className="text-gray-500 font-bold">{subtitle}</p>
            </div>
        </div>
    )
}
