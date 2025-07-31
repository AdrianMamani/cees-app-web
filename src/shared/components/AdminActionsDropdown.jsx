"use client"

import { useState, useRef, useEffect } from "react"
import { MoreHorizontal, Edit, BookOpen, Trash2 } from "lucide-react"


const DropdownMenu = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [position, setPosition] = useState({ top: 0, left: 0 })
    const [isReady, setIsReady] = useState(false)

    const dropdownRef = useRef(null)
    const triggerRef = useRef(null)


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target) &&
                isOpen
            ) {
                setIsOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [isOpen])


    useEffect(() => {
        if (isOpen && triggerRef.current) {
            const rect = triggerRef.current.getBoundingClientRect()
            const scrollY = window.scrollY || document.documentElement.scrollTop
            const scrollX = window.scrollX || document.documentElement.scrollLeft

            setPosition({
                top: rect.bottom + scrollY + 4,
                left: rect.left + scrollX,
            })
            setIsReady(true)
        } else {
            setIsReady(false)
        }
    }, [isOpen])

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }


    let trigger = null
    let content = null

    if (Array.isArray(children)) {
        children.forEach((child) => {
            if (child?.type?.displayName === "DropdownMenuTrigger") {
                trigger = child
            } else if (child?.type?.displayName === "DropdownMenuContent") {
                content = child
            }
        })
    }

    return (
        <>
            <div ref={dropdownRef} className="inline-block text-left">
                {trigger && (
                    <div ref={triggerRef} onClick={handleToggle}>
                        {trigger}
                    </div>
                )}
            </div>

            {content && isOpen && isReady && (
                <div
                    style={{
                        position: "fixed",
                        top: `${position.top}px`,
                        left: `${position.left}px`,
                        zIndex: 9999,
                    }}
                >
                    {content}
                </div>
            )}
        </>
    )
}


const DropdownMenuTrigger = ({ asChild, children }) => {
    if (asChild) return children
    return <button>{children}</button>
}
DropdownMenuTrigger.displayName = "DropdownMenuTrigger"


const DropdownMenuContent = ({ className = "", children }) => {
    return (
        <div
            className={`min-w-[8rem] w-48 overflow-hidden rounded-md border border-gray-200 bg-white p-1 text-gray-950 shadow-lg ${className}`}
        >
            {children}
        </div>
    )
}
DropdownMenuContent.displayName = "DropdownMenuContent"


const DropdownMenuItem = ({ className = "", onClick, children }) => {
    return (
        <div
            className={`flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm hover:bg-gray-100 transition-colors ${className}`}
            onClick={onClick}
        >
            {children}
        </div>
    )
}


const ActionsDropdown = ({ onEdit, onAssignCourse, onDelete }) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none hover:bg-gray-100 hover:text-gray-900 h-8 w-8 p-0">
                    <MoreHorizontal className="h-4 w-4" />
                </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
                <DropdownMenuItem onClick={onEdit}>
                    <Edit className="mr-2 h-4 w-4" />
                    Editar
                </DropdownMenuItem>
                <DropdownMenuItem onClick={onAssignCourse}>
                    <BookOpen className="mr-2 h-4 w-4" />
                    Asignar Curso
                </DropdownMenuItem>
                <DropdownMenuItem onClick={onDelete} className="text-red-600 focus:text-red-600">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Eliminar
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default ActionsDropdown
