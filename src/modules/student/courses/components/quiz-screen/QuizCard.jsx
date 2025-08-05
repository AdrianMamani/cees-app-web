"use client"

import { QuizQuestion } from "./QuizQuestion"

export function QuizCard({ questions, answers, onAnswerChange }) {
    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-10">
            {questions.map((question, index) => (
                <div key={question.id} className={index > 0 ? "mt-8 pt-8 border-t border-gray-200" : ""}>
                    <QuizQuestion question={question} selectedAnswer={answers[question.id]} onAnswerChange={onAnswerChange} />
                </div>
            ))}
        </div>
    )
}
