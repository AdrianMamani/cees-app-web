"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

export function useQuizData() {
    const [quiz, setQuiz] = useState(null)
    const [answers, setAnswers] = useState({})
    const [timeRemaining, setTimeRemaining] = useState(930) // 15:30 in seconds
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();

    useEffect(() => {
       // mock data
        const mockQuiz = {
            id: "quiz-screen-1",
            title: "Módulo 1: Quiz W2",
            subtitle: "Estrategias Didácticas",
            attempt: { current: 1, total: 3 },
            progress: { completed: 0, total: 2 },
            questions: [
                {
                    id: "q1",
                    number: 1,
                    type: "OPEN_TEXT",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    points: 5,
                },
                {
                    id: "q2",
                    number: 2,
                    type: "MULTIPLE_CHOICE",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    points: 5,
                    options: [
                        { value: "option1", text: "Lorem ipsum dolor sit amet" },
                        { value: "option2", text: "Lorem ipsum dolor sit amet" },
                        { value: "option3", text: "Lorem ipsum dolor sit amet" },
                    ],
                },
                {
                    id: "q3",
                    number: 3,
                    type: "MULTIPLE_CHOICE_ABCD",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    points: 5,
                    options: [
                        { value: "a", text: "Lorem ipsum dolor sit amet" },
                        { value: "b", text: "Lorem ipsum dolor sit amet" },
                        { value: "c", text: "Lorem ipsum dolor sit amet" },
                        { value: "d", text: "Lorem ipsum dolor sit amet" },
                    ],
                },
                {
                    id: "q4",
                    number: 4,
                    type: "TRUE_FALSE",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    points: 5,
                },
            ],
        }

        setTimeout(() => {
            setQuiz(mockQuiz)
            setLoading(false)
        }, 1000)
    }, [])

   //TODO: logic to handle time remaining depending on quiz-screen settings
    useEffect(() => {
        if (timeRemaining > 0) {
            const timer = setTimeout(() => {
                setTimeRemaining(timeRemaining - 1)
            }, 1000)
            return () => clearTimeout(timer)
        }
    }, [timeRemaining])

    const updateAnswer = (questionId, answer) => {
        setAnswers((prev) => ({
            ...prev,
            [questionId]: answer,
        }))
    }

    const submitQuiz = () => {
      // TODO: logic to submit the quiz-screen
    }

    const exitQuiz = () => {
        navigate(-1);
    }

    return {
        quiz,
        answers,
        timeRemaining,
        loading,
        updateAnswer,
        submitQuiz,
        exitQuiz,
    }
}
