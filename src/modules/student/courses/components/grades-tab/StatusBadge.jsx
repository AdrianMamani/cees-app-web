import React from "react";

const StatusBadge = ({ status, grade }) => {
    const baseClasses = "whitespace-nowrap px-3 py-1 rounded-full text-sm font-medium w-[100px] flex justify-center";
    const statusStyles = {
        "Calificado": "bg-green-100 text-green-800",
        "Sin abrir": "bg-gray-100 text-gray-600",
        "Entregado": "bg-gray-100 text-gray-600",
        "Vencido": "bg-red-100 text-red-800",
        "default": "bg-gray-100 text-gray-600",
    };

    const style = statusStyles[status] || statusStyles["default"];
    const displayGrade = status === "Entregado" ? "Sin calificar" : grade;

    return (
        <span className={`${baseClasses} ${style}`}>
            {displayGrade}
        </span>
    );
};

export default StatusBadge;