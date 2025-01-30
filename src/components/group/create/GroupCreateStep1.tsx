import Button from '@/components/common/button/Button/Button';
import InputBox from '@/components/common/input/InputBox';
import { INPUT_VALIDATION } from '@/constants/validation';
import useDevicePadding from '@/hooks/useDevicePadding';
import React, { useState } from 'react';

interface GroupCreateStep1Props {
  handleNext: () => void;
  roomName: string;
  setRoomName: (value: string) => void;
}

const GroupCreateStep1: React.FC<GroupCreateStep1Props> = ({
  handleNext,
  roomName,
  setRoomName,
}) => {
  const [error, setError] = useState<boolean>(false);

  const handleRoomNameChange = (value: string) => {
    setRoomName(value);
    if (
      value.length <= INPUT_VALIDATION.roomName.maxLength &&
      INPUT_VALIDATION.roomName.regexp.test(value)
    ) {
      setError(false);
    } else {
      setError(true);
    }
  };

  const paddingClass = useDevicePadding();

  return (
    <div className='flex h-full flex-col justify-between p-5'>
      <div>
        <InputBox
          placeholder='방 이름을 입력해주세요'
          disabled={false}
          value={roomName}
          handleChange={handleRoomNameChange}
        />
        {error && (
          <p className='mt-1 text-main font-caption'>{INPUT_VALIDATION.roomName.errorMessage}</p>
        )}
      </div>
      <div className={`sticky bottom-6 ${paddingClass}`}>
        <Button
          label='다음'
          size='large'
          variant='full'
          className='mb-0'
          handleClick={handleNext}
          disabled={!roomName.trim() || error}
        />
      </div>
    </div>
  );
};

export default GroupCreateStep1;
