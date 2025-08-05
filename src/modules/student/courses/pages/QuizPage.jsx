"use client"

import { useState } from "react"
import { QuizTitle } from "../components/quiz-screen/QuizTitle"
import { QuizNavbar } from "../components/quiz-screen/QuizNavbar"
import { QuizSubmitModal } from "../components/quiz-screen/QuizSubmitModal.jsx"
import { useQuizData } from "../hooks/useQuizData.js"
import {QuizCard} from "../components/quiz-screen/QuizCard.jsx";
import { IoMdSend } from "react-icons/io";

export default function QuizPage() {
    const { quiz, answers, timeRemaining, updateAnswer, submitQuiz, exitQuiz, loading } = useQuizData();
    const [showSubmitModal, setShowSubmitModal] = useState(false);

    const handleSubmitClick = () => {
        setShowSubmitModal(true);
    };

    const handleConfirmSubmit = () => {
        setShowSubmitModal(false);
        submitQuiz();
    };

    const handleCancelSubmit = () => {
        setShowSubmitModal(false);
    };

    if (loading || !quiz) {
        return <div className="text-center p-6 text-[#374159]">Cargando evaluación...</div>;
    }

    return (
        <div className="min-h-screen bg-gray-50">

            {/* Header */}
            <QuizTitle title={quiz.title} subtitle={quiz.subtitle} />

            {/* Navbar */}
            <QuizNavbar timeRemaining={timeRemaining} attempt={quiz.attempt} progress={quiz.progress} />

            <div className="max-w-7xl mx-auto p-6">
                <QuizCard questions={quiz.questions} answers={answers} onAnswerChange={updateAnswer} />

                {/* Buttons */}
                <div className="flex justify-end gap-4 mt-8">
                    <button
                        onClick={exitQuiz}
                        className="px-7 py-3 bg-[#D2D2D2] text-gray-500 rounded-lg hover:bg-[#BEBEBE] transition-colors"
                    >
                        Salir
                    </button>
                    <button
                        onClick={handleSubmitClick}
                        className="px-7 py-3 bg-[#1377BD] text-white rounded-lg hover:bg-[#12629A] transition-colors flex items-center gap-4"
                    >
                        <IoMdSend className="w-6 h-6" />
                        Enviar
                    </button>
                </div>
            </div>

            <QuizSubmitModal isOpen={showSubmitModal} onClose={handleCancelSubmit} onConfirm={handleConfirmSubmit} />
        </div>
    )
}