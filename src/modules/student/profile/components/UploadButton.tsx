"use client"
import { PiUploadSimpleBold } from "react-icons/pi";

interface ButtonProps {
    children: React.ReactNode
    onClick?: () => void
    disabled?: boolean
    className?: string
    type?: "button" | "submit" | "reset"
}

export function Button({ children, onClick, disabled = false, className = "", type = "button" }: ButtonProps) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`inline-flex items-center w-4/5 h-10 px-4 py-2 bg-[#1377BD] text-white text-sm font-semibold rounded-md hover:bg-[#145A8A]  disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
        >
            <PiUploadSimpleBold className={'w-5 h-5 '}>{children}</PiUploadSimpleBold>
            {children}
        </button>
    )
}
