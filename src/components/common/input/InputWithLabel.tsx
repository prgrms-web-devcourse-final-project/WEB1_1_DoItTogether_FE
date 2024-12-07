import InputBox from '@/components/common/input/InputBox';
import React from 'react';

interface InputWithLabelProps {
  label: string;
  value?: string;
  placeholder?: string;
  disabled: boolean;
  handleChange?: (value: string) => void;
}

const InputWithLabel: React.FC<InputWithLabelProps> = ({
  label,
  value,
  placeholder,
  disabled,
  handleChange,
}) => {
  return (
    <div className='flex flex-col'>
      <p className='pb-4 text-black font-label'>{label}</p>
      <InputBox
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        handleChange={handleChange}
      />
    </div>
  );
};

export default InputWithLabel;
