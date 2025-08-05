"use client"

import * as React from "react";

interface CardProps {
    children: React.ReactNode
    className?: string
}

export function Card({ children, className = "" }: CardProps) {
    return <div className={` px-5 py-2 bg-white rounded-lg shadow-sm border border-gray-200 ${className}`}>{children}</div>
}

export function CardHeader({ children, className = "" }: CardProps) {
    return <div className={`p-6 pb-4 ${className}`}>{children}</div>
}

export function CardContent({ children, className = "" }: CardProps) {
    return <div className={`p-6 pt-0 ${className}`}>{children}</div>
}

export function CardTitle({ children, className = "" }: CardProps) {
    return <h3 className={`text-xl font-bold text-gray-700 ${className}`}>{children}</h3>
}
