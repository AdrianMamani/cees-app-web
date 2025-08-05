"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronDown } from "lucide-react"

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

    const handleToggle = () => setIsOpen(!isOpen)

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
            className={`min-w-[8rem] w-64 overflow-hidden rounded-md border border-gray-200 bg-white text-gray-950 shadow-lg ${className}`}
        >
            <div className="max-h-32 overflow-y-auto p-1">{children}</div>
        </div>
    )
}
DropdownMenuContent.displayName = "DropdownMenuContent"

const DropdownMenuItem = ({ className = "", onClick, children }) => {
    return (
        <div
            className={`relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100 ${className}`}
            onClick={onClick}
        >
            {children}
        </div>
    )
}

const CoursesDropdown = ({ coursesCount = 0, courses = [] }) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className="inline-flex items-center justify-between rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none border border-gray-300 hover:bg-gray-100 hover:text-gray-900 min-w-[120px] bg-white px-3 py-2 text-sm">
                    <span className="text-gray-600">{coursesCount} cursos</span>
                    <ChevronDown className="h-4 w-4 text-gray-400" />
                </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
                {courses.length > 0 ? (
                    courses.map((course, index) => (
                        <DropdownMenuItem key={index} className="text-gray-700">
                            {course}
                        </DropdownMenuItem>
                    ))
                ) : (
                    <DropdownMenuItem className="text-gray-500 italic">
                        No hay cursos asignados
                    </DropdownMenuItem>
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default CoursesDropdown
