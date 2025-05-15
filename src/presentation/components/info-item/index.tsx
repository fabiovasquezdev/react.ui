import React from "react";

interface InfoItemProps {
    icon: React.ReactElement<{ className?: string }>;
    label: string;
    value: string;
    className?: string;
}

const InfoItem: React.FC<InfoItemProps> = ({ icon, label, value, className = "" }) => {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <div className="bg-gray-200 rounded-md p-1">
                {React.cloneElement(icon, {
                    className: "w-5 h-5 text-gray-600 p-1",
                })}
            </div>
            <div className="flex flex-col">
                <span className="text-xs font-medium">{label}</span>
                <span className="text-xs text-gray-400">{value}</span>
            </div>
        </div>
    );
};

export default InfoItem;
