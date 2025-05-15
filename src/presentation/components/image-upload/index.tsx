import React, { useState, useEffect } from 'react';
import { Upload, Typography } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import type { UploadFile, UploadProps } from 'antd';
import './index.css';

const { Title } = Typography;

interface ImageUploadProps {
    title?: string;
    maxFiles?: number;
    action: string;
    initialImages?: { url: string; name?: string }[];
    onChange?: (fileList: UploadFile[]) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
    title = 'Upload de Imagens',
    maxFiles = 8,
    action,
    initialImages = [],
    onChange
}) => {
    const [fileList, setFileList] = useState<UploadFile[]>([]);

    useEffect(() => {
        if (initialImages.length > 0) {
            const initialFileList: UploadFile[] = initialImages.map((image, index) => ({
                uid: `-${index + 1}`,
                name: image.name || `image-${index + 1}`,
                status: 'done',
                url: image.url
            }));
            setFileList(initialFileList);
        }
    }, [initialImages]);

    const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
        setFileList(newFileList);
        onChange?.(newFileList);
    };

    const uploadButton = (
        <div className="w-24 h-24 flex items-center justify-center bg-gray-100 rounded">
            <UploadOutlined className="text-xl" />
        </div>
    );

    return (
        <div>
            <Title level={5}>{title}</Title>
            <Upload
                action={action}
                listType="picture-card"
                fileList={fileList}
                onChange={handleChange}
            >
                {fileList.length >= maxFiles ? null : uploadButton}
            </Upload>
        </div>
    );
};

export default ImageUpload; 