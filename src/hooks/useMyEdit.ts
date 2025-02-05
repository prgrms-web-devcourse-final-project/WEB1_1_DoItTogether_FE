import { useCallback, useMemo, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { patchMyInfo } from '@/services/user/patchMyInfo';
import { toast } from '@/hooks/use-toast';
import { INPUT_VALIDATION } from '@/constants/validation';

export const useMyEdit = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { channelId } = useParams();

  const nicknameRegex = useMemo(() => INPUT_VALIDATION.nickname.regexp, []);
  const maxLength = useMemo(() => INPUT_VALIDATION.nickname.maxLength, []);

  const imageUrl = location.state?.imageUrl;
  const nickName = location.state?.nickname;

  const [username, setUserName] = useState<string>(nickName);
  const [isEdited, setIsEdited] = useState(false);
  const [error, setError] = useState<boolean>(false);

  const validateUsername = useCallback(
    (value: string) => {
      return value.length <= maxLength && nicknameRegex.test(value);
    },
    [maxLength, nicknameRegex]
  );

  const handleBack = useCallback(() => {
    navigate(`/main/${channelId}/my-page`);
  }, [navigate, channelId]);

  const handleChange = useCallback(
    (value: string) => {
      setUserName(value);
      setIsEdited(true);
      setError(!validateUsername(value));
    },
    [validateUsername]
  );

  const handleDone = useCallback(async () => {
    try {
      await patchMyInfo({ nickName: username });
      navigate(`/main/${channelId}/my-page`);
      toast({
        title: '프로필이 변경되었어요',
      });
    } catch (error) {
      console.error('프로필 수정 실패:', error);
    }
  }, [username, navigate, channelId]);

  return {
    imageUrl,
    username,
    isEdited,
    error,
    handleBack,
    handleChange,
    handleDone,
  };
};
