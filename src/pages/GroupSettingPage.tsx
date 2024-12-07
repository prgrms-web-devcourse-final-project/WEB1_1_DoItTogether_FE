import SettingHeaderContainer from '@/components/common/header/Header';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputWithLabel from '@/components/common/input/InputWithLabel';
import MemberItems from '@/components/setting/groupSetting/MemberItems/MemberItems';
import InviteLinkWithLabel from '@/components/setting/groupSetting/InviteLink/InviteLinkWithLabel';
import ExitSheet from '@/components/setting/ExitSheet/ExitSheet';
import { getGroupUser } from '@/services/group/getGroupUser';
import { User } from '@/types/apis/groupApi';
import { postBanUser } from '@/services/group/postBanUser';
import { deleteGroupUser } from '@/services/group/deleteGroupUser';
import { putChangeGroupName } from '@/services/group/putChangeGroupName';
import { toast } from '@/hooks/use-toast';
import { useParams } from 'react-router-dom';
import { ArrowRightIcon } from '@/components/common/icon';
import { Button } from '@/components/common/ui/button';
import { INPUT_VALIDATION } from '@/constants/validation';

const GroupSettingPage = () => {
  const navigate = useNavigate();
  const { channelId: strChannelId } = useParams();

  const [groupName, setGroupName] = useState('');
  const [isEdited, setIsEdited] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [sheetTitle, setSheetTitle] = useState('');
  const [btnText, setBtnText] = useState('');

  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [members, setMembers] = useState<User[]>([]);

  const [selectedMember, setSelectedMember] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState<boolean>(false);

  const channelId = Number(strChannelId);

  useEffect(() => {
    const fetchGroupMembers = async () => {
      try {
        const response = await getGroupUser({ channelId });

        setGroupName(response.result.name);
        setMembers(response.result.userList);
        const current = response.result.userList.find(user => user.currentUser);
        setCurrentUser(current || null);
        setIsLoading(false);
      } catch (error) {
        console.error('멤버 조회 실패:', error);
        setIsLoading(false);
      }
    };

    fetchGroupMembers();
  }, []);

  const handleMovePreset = () => {
    navigate(`/group-setting/${channelId}/preset-setting`);
  };

  const handleGroupNameChange = (value: string) => {
    setGroupName(value);
    setIsEdited(value !== groupName);
    if (
      value.length <= INPUT_VALIDATION.roomName.maxLength &&
      INPUT_VALIDATION.roomName.regexp.test(value)
    ) {
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleDone = async () => {
    await putChangeGroupName({
      channelId: channelId,
      name: groupName,
    });

    setIsEdited(false);
    toast({
      title: '그룹 이름이 변경되었어요',
    });
  };

  const isAdmin = currentUser?.role === 'ADMIN';

  // 바텀시트 문구 체크
  const handleSheet = (member: User) => {
    setSelectedMember(member); // 선택된 멤버 저장
    const isCurrentUserSelected = member.currentUser;
    if (isAdmin && isCurrentUserSelected) {
      setBtnText('나갈래요');
      setSheetTitle(`${groupName}에서 정말 나가시겠습니까?`);
    } else if (isAdmin) {
      setBtnText('내보낼래요');
      setSheetTitle(`${member.nickName}님을 내보내시겠습니까?`);
    } else {
      setBtnText('나갈래요');
      setSheetTitle(`${groupName}에서 정말 나가시겠습니까?`);
    }
    setIsOpen(true);
  };

  // 멤버 방출 or 나가기 처리
  const handleExit = async (member: User) => {
    try {
      const isCurrentUserSelected = member.currentUser;

      if (isAdmin && !isCurrentUserSelected) {
        await postBanUser({ channelId, email: member.email });
        setMembers(prev => prev.filter(m => m.email !== member.email));
        toast({ title: '탈퇴되었습니다' });
      } else {
        await deleteGroupUser({ channelId });
        navigate('/group-select');
      }

      setIsOpen(false);
    } catch (error) {
      console.error('멤버 방출/그룹 나가기 실패:', error);
    }
  };

  // 바텀시트 닫기
  const handleClose = () => {
    setIsOpen(false);
  };

  if (isLoading) {
    return <div></div>;
  }

  return (
    <>
      <div className='fixed left-0 right-0 top-0 z-10 m-auto max-w bg-white'>
        <SettingHeaderContainer
          title='그룹 설정'
          isNeededDoneBtn={isEdited && !error}
          handleDone={handleDone}
        />
      </div>
      <div className='flex flex-col gap-8 px-5 pt-20'>
        <div className='flex flex-col gap-1'>
          <InputWithLabel
            label='공간 이름'
            value={groupName}
            disabled={!isAdmin}
            handleChange={handleGroupNameChange}
          />
          {error && (
            <p className='text-main font-caption'>{INPUT_VALIDATION.roomName.errorMessage}</p>
          )}
        </div>
        <MemberItems
          leader={isAdmin}
          members={members}
          currentUser={currentUser}
          handleClick={handleSheet}
        />
        <InviteLinkWithLabel />
        <div className='flex flex-col gap-2 pb-6'>
          <p className='text-black font-label'>프리셋 관리</p>
          <Button
            variant='group'
            size='large'
            onClick={handleMovePreset}
            className='!justify-between px-2'
          >
            <p className='text-gray1 font-body'>프리셋 수정하기</p>
            <ArrowRightIcon className='text-main' />
          </Button>
        </div>
      </div>
      <ExitSheet
        sheetTitle={sheetTitle}
        btnText={btnText}
        isOpen={isOpen}
        setOpen={setIsOpen}
        selectedMember={selectedMember}
        handleExit={handleExit}
        handleClose={handleClose}
      />
    </>
  );
};

export default GroupSettingPage;
