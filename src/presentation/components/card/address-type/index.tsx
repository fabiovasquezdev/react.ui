import React from "react";
import { Switch, Tag } from "antd";
import { EAddressType, TAddressType } from "@/domain/enum/address-type";

type RouteLocationCardProps = {
    type: EAddressType;
    address: string;
    isBase: boolean;
}

const AddressType: React.FC<RouteLocationCardProps> = ({
    type,
    address,
    isBase = false,
}) => {
    const isOrigin = type === EAddressType.ORIGIN;
    const tagColor = isOrigin ? "bg-secondary" : "bg-orange-500";
    const borderColor = isOrigin ? "border-secondary" : "border-orange-500";
    const label = TAddressType[type];

    return (
        <div className={`${type === EAddressType.ORIGIN && "mb-3"} border rounded-xl p-3 ${borderColor}`}>
            <div className="flex items-center justify-between mb-1">
                <Tag
                    className={`rounded-3xl ${tagColor} -mt-2 w-min border-none`}
                >
                    <span className="text-white">{label}</span>
                </Tag>
                <div className="text-xs flex items-center gap-1 text-gray-600">
                    Base <Switch checked={isBase} disabled className="ml-1" />
                </div>
            </div>
            <p className="text-xs text-gray-600 leading-snug">{address}</p>
        </div>
    );
};

export default AddressType;
