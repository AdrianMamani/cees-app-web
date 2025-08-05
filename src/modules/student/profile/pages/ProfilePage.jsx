import { useProfile } from "../hooks/useProfile.jsx"
import ProfilePhotoUpload from "../components/ProfilePhotoUpload.js"
import PersonalInfoCard from "../components/PersonalInfoCard.js"

export default function ProfilePage() {
    const { profile, updateProfile } = useProfile()

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-6">
            <div className=" mx-auto space-y-6">

                {/* Header */}
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-teal-600 mb-6">Perfil</h1>
                </div>


                {/* Profile Photo Section */}
                <ProfilePhotoUpload currentPhoto={profile.photo} onPhotoUpdate={(photo) => updateProfile({ photo })} />

                {/* Personal Information Section */}
                <PersonalInfoCard profile={profile} />
            </div>
        </div>
    )
}
