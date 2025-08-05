"use client"


import { useState, useRef } from "react"
import { Button } from "./UploadButton"
import { Card, CardContent, CardHeader, CardTitle } from "./Card"
import { Avatar, AvatarFallback, AvatarImage } from "./Avatar"
import { FaUser } from "react-icons/fa6";
import {Upload} from "antd";

interface ProfilePhotoUploadProps {
    currentPhoto?: string
    onPhotoUpdate: (photo: string) => void
}

export default function ProfilePhotoUpload({ currentPhoto, onPhotoUpdate }: ProfilePhotoUploadProps) {
    const fileInputRef = useRef<HTMLInputElement>(null)
    const [isUploading, setIsUploading] = useState(false)

    const handleUploadClick = () => {
        fileInputRef.current?.click()
    }

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (!file) return

        // Validate file type
        if (!file.type.match(/^image\/(jpeg|jpg|png|gif)$/)) {
            alert("Por favor selecciona un archivo JPG, PNG o GIF")
            return
        }

        // Validate file size (5MB)
        if (file.size > 5 * 1024 * 1024) {
            alert("El archivo debe ser menor a 5MB")
            return
        }

        setIsUploading(true)

        try {
            // Create a preview URL
            const photoUrl = URL.createObjectURL(file)
            onPhotoUpdate(photoUrl)
        } catch (error) {
            console.error("Error uploading photo:", error)
            alert("Error al subir la foto")
        } finally {
            setIsUploading(false)
        }
    }

    return (
        <Card className="shadow-sm">
            <CardHeader>
                <CardTitle className={'text-2xl text-[#4B5563]'}>Foto de Perfil</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center gap-6">
                <div className="ml-4 px-3">
                    <Avatar className="w-20 h-20 bg-blue-100 ">
                        {currentPhoto ? (
                            <AvatarImage src={currentPhoto || "/placeholder.svg"} alt="Foto de perfil" />
                        ) : (
                            <AvatarFallback className="bg-blue-100">
                                <FaUser className="w-10 h-10 text-[#1377BD]" />
                            </AvatarFallback>
                        )}
                    </Avatar>
                </div>


                <div className="flex flex-col gap-2 ml-5 mt-4">
                    <Button onClick={handleUploadClick} disabled={isUploading}>
                        <Upload className="w-4 h-4 mr-2" />
                        {isUploading ? "Subiendo..." : "Subir foto"}
                    </Button>
                    <p className="text-sm text-gray-500">JPG, PNG o GIF. Máximo 5MB.</p>
                </div>

                <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/jpeg,image/jpg,image/png,image/gif"
                    onChange={handleFileChange}
                    className="hidden"
                />
            </CardContent>
        </Card>
    )
}
