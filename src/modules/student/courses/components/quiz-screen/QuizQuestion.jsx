"use client"

export function QuizQuestion({ question, onAnswerChange, selectedAnswer }) {
    const handleAnswerChange = (value) => {
        onAnswerChange(question.id, value)
    }

    const renderQuestionContent = () => {
        switch (question.type) {
            case "OPEN_TEXT":
                return (
                    <textarea
                        className="w-full p-4 border border-gray-300 rounded-lg resize-none h-32 focus:outline-none focus:ring-2 focus:ring-[#1377BD] focus:border-transparent"
                        placeholder="Escriba su respuesta..."
                        value={selectedAnswer || ""}
                        onChange={(e) => handleAnswerChange(e.target.value)}
                    />
                )

            case "MULTIPLE_CHOICE":
                return (
                    <div className="space-y-3">
                        {question.options.map((option, index) => (
                            <label
                                key={index}
                                className={`flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer transition-colors hover:bg-blue-50 hover:border-blue-300 ${
                                    selectedAnswer === option.value ? "bg-blue-50 border-blue-300" : ""
                                }`}
                            >
                                <input
                                    type="radio"
                                    name={`question-${question.id}`}
                                    value={option.value}
                                    checked={selectedAnswer === option.value}
                                    onChange={(e) => handleAnswerChange(e.target.value)}
                                    className="mr-3 text-[#1377BD]"
                                />
                                <span className="text-[#374159]">{option.text}</span>
                            </label>
                        ))}
                    </div>
                )

            case "MULTIPLE_CHOICE_ABCD":
                return (
                    <div className="space-y-3">
                        {question.options.map((option, index) => {
                            const letter = String.fromCharCode(65 + index) // letters A, B, C, D
                            return (
                                <label
                                    key={index}
                                    className={`flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer transition-colors hover:bg-blue-50 hover:border-blue-300 ${
                                        selectedAnswer === option.value ? "bg-blue-100 border-blue-400" : ""
                                    }`}
                                >
                                    <div
                                        className={`w-8 h-8 rounded-full border-1 flex items-center justify-center mr-3 font-bold  ${
                                            selectedAnswer === option.value
                                                ? "bg-[#438DCF] text-white border-blue-500"
                                                : "border-gray-400 text-gray-600"
                                        }`}
                                    >
                                        {letter}
                                    </div>
                                    <input
                                        type="radio"
                                        name={`question-${question.id}`}
                                        value={option.value}
                                        checked={selectedAnswer === option.value}
                                        onChange={(e) => handleAnswerChange(e.target.value)}
                                        className="sr-only"
                                    />
                                    <span className="text-[#374159]">{option.text}</span>
                                </label>
                            )
                        })}
                    </div>
                )

            case "TRUE_FALSE":
                return (
                    <div className="space-y-3">
                        {["true", "false"].map((value) => (
                            <label
                                key={value}
                                className={`flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer transition-colors hover:bg-blue-50 hover:border-blue-300 ${
                                    selectedAnswer === value ? "bg-blue-50 border-blue-300" : ""
                                }`}
                            >
                                <input
                                    type="radio"
                                    name={`question-${question.id}`}
                                    value={value}
                                    checked={selectedAnswer === value}
                                    onChange={(e) => handleAnswerChange(e.target.value)}
                                    className="sr-only"
                                />
                                <span className="text-[#374159]">{value === "true" ? "Verdadero" : "Falso"}</span>
                            </label>
                        ))}
                    </div>
                )

            default:
                return <div>Tipo de pregunta no soportado</div>
        }
    }

    return (
        <div>
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-semibold text-[#374159]">Pregunta {question.number}</h3>
                <span className="bg-blue-100 text-[#1377BD] px-3 py-1 rounded-full text-sm font-medium">
          {question.points} puntos
        </span>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">{question.text}</p>

            {renderQuestionContent()}
        </div>
    )
}
