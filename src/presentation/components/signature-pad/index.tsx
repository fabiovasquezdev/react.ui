import React, { useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { ButtonV } from '../custom/button';
import { AiOutlineClear } from 'react-icons/ai';

interface SignaturePadProps {
  value?: string;
  onChange?: (dataUrl: string) => void;
  placeholder?: string;
  height?: number;
}

const SignaturePad: React.FC<SignaturePadProps> = ({
  onChange,
  height = 150,
}) => {
  const sigRef = useRef<SignatureCanvas>(null);

  const handleEnd = () => {
    if (sigRef.current && onChange) {
      onChange(sigRef.current.getTrimmedCanvas().toDataURL('image/png'));
    }
  };

  const handleClear = () => {
    sigRef.current?.clear();
    onChange?.('');
  };

  return (
    <div className="bg-white rounded border p-2 flex flex-col items-center">
      <SignatureCanvas
        ref={sigRef}
        penColor="black"
        canvasProps={{
          width: 350,
          height,
          className: 'rounded bg-gray-100 border w-full',
        }}
        onEnd={handleEnd}
        backgroundColor="#f5f5f5"
      />
      <ButtonV
        onClick={handleClear}
        className="mt-2 w-12"
      ><AiOutlineClear /></ButtonV>

    </div>
  );
};

export default SignaturePad;