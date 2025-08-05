"use client"

import * as React from "react";

interface AvatarProps {
    children: React.ReactNode
    className?: string
}

export function Avatar({ children, className = "" }: AvatarProps) {
    return <div className={`relative  flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className}`}>{children}</div>
}

interface AvatarImageProps {
    src?: string
    alt?: string
    className?: string
}

export function AvatarImage({ src, alt = "", className = "" }: AvatarImageProps) {
    return (
        <img
            src={src || "/placeholder.svg"}
            alt={alt}
            className={`aspect-square h-full w-full object-cover ${className}`}
        />
    )
}

interface AvatarFallbackProps {
    children: React.ReactNode
    className?: string
}

export function AvatarFallback({ children, className = "" }: AvatarFallbackProps) {
    return (
        <div className={`flex h-full w-full items-center justify-center rounded-full bg-muted ${className}`}>
            {children}
        </div>
    )
}
