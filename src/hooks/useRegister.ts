import { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getMyInfo } from '@/services/user/getMyInfo';
import { patchMyInfo } from '@/services/user/patchMyInfo';
import { INPUT_VALIDATION } from '@/constants/validation';

export const useRegister = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [profileUrl, setProfileUrl] = useState('');
  const [error, setError] = useState<boolean>(false);

  const nicknameRegex = useMemo(() => INPUT_VALIDATION.nickname.regexp, []);
  const maxLength = useMemo(() => INPUT_VALIDATION.nickname.maxLength, []);

  // 닉네임 유효성 검사
  const validateNickname = useCallback(
    (value: string) => {
      return value.length <= maxLength && nicknameRegex.test(value);
    },
    [maxLength, nicknameRegex]
  );

  const fetchUserInfo = useCallback(async () => {
    try {
      const response = await getMyInfo();
      setName(response.result.nickName);
      setProfileUrl(response.result.profileImageUrl);
      setError(!validateNickname(response.result.nickName));
    } catch (error) {
      console.error('내 정보 조회 실패:', error);
    }
  }, [validateNickname]);

  useEffect(() => {
    fetchUserInfo();
  }, [fetchUserInfo]);

  const handleSubmitButton = useCallback(async () => {
    try {
      await patchMyInfo({ nickName: name });
      navigate('/survey-intro');
    } catch (error) {
      console.error('프로필 수정 및 초기 정보 받기 실패:', error);
    }
  }, [name, navigate]);

  const handleNameChange = useCallback(
    (value: string) => {
      setName(value);
      setError(!validateNickname(value));
    },
    [validateNickname]
  );

  return {
    name,
    profileUrl,
    error,
    handleNameChange,
    handleSubmitButton,
  };
};
