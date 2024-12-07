import Button from '@/components/common/button/Button/Button';
import GroupSelectTitle from '@/components/groupSelect/GroupSelectTitle/GroupSelectTitle';
import OpenSheetBtn from '@/components/common/button/OpenSheetBtn/OpenSheetBtn';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useHomePageStore from '@/store/useHomePageStore';
import { getMyGroup } from '@/services/group/getMyGroup';
import { Group } from '@/types/apis/groupApi';
import { NoGroupIcon } from '@/components/common/icon';

const GroupSelectPage = () => {
  const navigate = useNavigate();
  const { setCurrentGroup, groups, setGroups, setActiveTab } = useHomePageStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMyGroup = async () => {
      try {
        const groups = await getMyGroup();
        setGroups(groups.result.channelList);
      } catch (error) {
        console.error('그룹 조회 실패:', error);
      } finally {
        setIsLoading(false); // 데이터 로드 완료
      }
    };

    fetchMyGroup();
  }, []);

  // 로딩 중일 때는 빈 화면 반환
  if (isLoading) {
    return <></>;
  }

  const handleMakeGroupBtnClick = () => {
    navigate('/group/create');
  };
  const handleInvitedBtnClick = () => {
    navigate('/group/invite-receive');
  };
  const handleClick = (group: Group) => {
    setCurrentGroup(group);
    setActiveTab('전체');
    navigate(`/main/${group.channelId}`);
  };

  return (
    <div className={`flex h-screen flex-col`}>
      <GroupSelectTitle />
      <div className='flex flex-1 flex-col px-5 py-4'>
        {groups.length > 0 ? (
          groups.map(group => (
            <OpenSheetBtn
              key={group.channelId}
              text={group.name}
              handleClick={() => handleClick(group)}
              type='groupSelect'
            />
          ))
        ) : (
          <div className='flex flex-1 flex-col items-center justify-center gap-4 whitespace-pre-line text-center text-gray3'>
            <NoGroupIcon />
            <p className='font-subhead'>{'현재 방이 없어요\n새로운 방을 만들어보세요'}</p>
          </div>
        )}
      </div>
      <div className='flex gap-x-4 px-5 py-6'>
        <Button
          label='방만들기'
          variant='full'
          size='small'
          handleClick={handleMakeGroupBtnClick}
          className={'flex-1'}
        />
        <Button
          label='초대받기'
          variant='full'
          size='small'
          handleClick={handleInvitedBtnClick}
          className={'flex-1'}
        />
      </div>
    </div>
  );
};

export default GroupSelectPage;
