"use client";

import { useState, useEffect } from "react";

export function useCourseData() {
    const [modules, setModules] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // simulate data
        const mockData = [
            {
                id: "module-1",
                title: "MÓDULO 1: Fundamentos de la Didáctica Universitaria",
                progress: 100,
                status: "Completado",
                items: [
                    {
                        id: "item-1",
                        title: "Tema 1 presentación",
                        type: "presentation",
                        isCompleted: true,
                    },
                    {
                        id: "item-2",
                        title: "Sistema de evaluación",
                        type: "evaluation",
                    },
                    {
                        id: "item-3",
                        title: "Modulo 1: Quiz W2",
                        type: "quiz",
                        dueDate: "06/06/2025",
                    },
                    {
                        id: "item-4",
                        title: "Modulo 1: Tarea práctica",
                        type: "task",
                        dueDate: "12/06/2025 23:59",
                    },
                    {
                        id: "folder-1",
                        title: "Guías - tutoriales",
                        type: "folder",
                        children: [
                            {
                                id: "item-5",
                                title: "Tutorial del curso",
                                type: "task",
                            },
                        ],
                    },
                ],
            },
            {
                id: "module-2",
                title: "MÓDULO 2:  Diseño de Estrategias Didácticas Efectivas",
                progress: 68,
                status: "En Progreso",
                items: [
                    {
                        id: "item-1",
                        title: "Tema 1 presentación",
                        type: "presentation",
                        isCompleted: true,
                    },
                    {
                        id: "item-2",
                        title: "Sistema de evaluación",
                        type: "evaluation",
                    },
                    {
                        id: "item-3",
                        title: "Modulo 1: Quiz W2",
                        type: "quiz",
                        dueDate: "06/06/2025",
                    },
                    {
                        id: "item-4",
                        title: "Modulo 1: Tarea práctica",
                        type: "task",
                        dueDate: "12/06/2025 23:59",
                    },
                    {
                        id: "folder-1",
                        title: "Guías - tutoriales",
                        type: "folder",
                        children: [
                            {
                                id: "item-5",
                                title: "Tutorial del curso",
                                type: "task",
                            },
                        ],
                    },
                ],
            },
            {
                id: "module-3",
                title: "MÓDULO 3: Tecnologías y Herramientas para la Enseñanza Universitaria",
                progress: 0,
                status: "No Iniciado",
                items: [
                    {
                        id: "item-1",
                        title: "Tema 1 presentación",
                        type: "presentation",
                        isCompleted: true,
                    },
                    {
                        id: "item-2",
                        title: "Sistema de evaluación",
                        type: "evaluation",
                    },
                    {
                        id: "item-3",
                        title: "Modulo 1: Quiz W2",
                        type: "quiz",
                        dueDate: "06/06/2025",
                    },
                    {
                        id: "item-4",
                        title: "Modulo 1: Tarea práctica",
                        type: "task",
                        dueDate: "12/06/2025 23:59",
                    },
                    {
                        id: "folder-1",
                        title: "Guías - tutoriales",
                        type: "folder",
                        children: [
                            {
                                id: "item-5",
                                title: "Tutorial del curso",
                                type: "task",
                            },
                        ],
                    },
                ],
            },
        ];

        setTimeout(() => {
            setModules(mockData);
            setLoading(false);
        });
    }, []);

    const courseProgress = {
        percentage: 65,
        completedModules: 1,
        totalModules: 3,
    };

    return {
        modules,
        loading,
        courseProgress,
    };
}