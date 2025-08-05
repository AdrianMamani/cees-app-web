"use client"

import { useState } from "react"

export function useProfile() {
    const [profile, setProfile] = useState({
        firstName: "Ana",
        lastName: "García López",
        phone: "51958534351",
        birthDate: "10/06/1994",
        email: "ana.garcia@ejemplo.edu",
        photo: null,
    })

    const updateProfile = (updates) => {
        setProfile((prev) => ({ ...prev, ...updates }))
    }

    return {
        profile,
        updateProfile,
    }
}
