"use client"

export function CourseManagementTabs({ activeTab, onTabChange }) {
    const tabs = [
        { id: "general", label: "Información General" },
        { id: "students", label: "Estudiantes" },
    ]

    return (
        <div className="border-b border-gray-200 mb-6">
            <div className="flex">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => onTabChange(tab.id)}
                        className={`flex-1 py-4 px-1 text-center font-medium text-sm transition-colors border-b-2 ${
                            activeTab === tab.id
                                ? "border-teal-500 text-teal-600"
                                : "border-transparent text-gray-500 hover:text-gray-700"
                        }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
        </div>
    )
}
