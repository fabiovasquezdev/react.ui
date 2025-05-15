import React from 'react';
import { Switch, Typography } from 'antd';

const { Title, Text } = Typography;

interface SwitchSelectorProps {
    title: string;
    value?: boolean;
    onChange?: (value: boolean) => void;
    labels?: {
        true: string;
        false: string;
    };
}

const SwitchSelector: React.FC<SwitchSelectorProps> = ({
    title,
    value,
    onChange,
    labels = { true: 'Sim', false: 'Não' }
}) => {
    return (
        <div>
            <Title level={5}>{title}</Title>
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                    <Text>{labels.true}</Text>
                    <Switch checked={value} onChange={onChange} />
                </div>
                <div className="flex items-center gap-1">
                    <Text>{labels.false}</Text>
                    <Switch checked={!value} onChange={(val) => onChange?.(!val)} />
                </div>
            </div>
        </div>
    );
};

export default SwitchSelector; 