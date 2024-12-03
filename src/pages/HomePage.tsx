import React, { useEffect, useState } from 'react';
import HomeHeader from '@/components/home/HomeHeader/HomeHeader';
import WeeklyDateAndTab from '@/components/home/WeeklyDateAndTab';
import HouseworkList from '@/components/home/HouseworkList/HouseworkList';
import GroupSelectSheet from '@/components/home/GroupSelectSheet/GroupSelectSheet';
import useHomePageStore from '@/store/useHomePageStore';
import getWeekText from '@/utils/getWeekText';
import { useParams } from 'react-router-dom';
import { getMyGroup } from '@/services/group/getMyGroup';
import { getGroupUser } from '@/services/group/getGroupUser';
import { PAGE_SIZE } from '@/constants/common';
import { getHouseworks } from '@/services/housework/getHouseworks';
import { deleteHousework } from '@/services/housework/deleteHouswork';
import { useQuery } from '@tanstack/react-query';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import { changeHouseworkStatus } from '@/services/housework/changeHouseworkStatus';
import { NoHouseWorkIcon } from '@/components/common/icon';

const HomePage: React.FC = () => {
  // const [activeTab, setActiveTab] = useState<string>('전체');
  const {
    setWeekText,
    setCurrentGroup,
    setGroups,
    activeDate,
    homePageNumber,
    activeTab,
    setActiveTab,
  } = useHomePageStore();
  const { channelId } = useParams();
  const [chargers, setChargers] = useState<{ name: string }[]>([{ name: '전체' }]);
  const { data: houseworks, refetch } = useQuery({
    queryKey: ['houseworks', channelId, activeDate],
    queryFn: async () => await fetchHouseworks(activeDate),
  });
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMyGroups = async () => {
      const getMyGroupResult = await getMyGroup();
      const myGroups = getMyGroupResult.result.channelList;
      setGroups(myGroups);
      if (channelId) {
        const currentGroup = myGroups.find(group => group.channelId === Number(channelId));
        setCurrentGroup(currentGroup!);
      }
    };

    setWeekText(getWeekText(new Date()));
    fetchMyGroups();
  }, []);

  useEffect(() => {
    const fetchGroupUsers = async () => {
      if (!channelId) return;
      const newChannelId = Number(channelId);
      const getGroupUsersResult = await getGroupUser({ channelId: newChannelId });
      const newChargers = [
        { name: '전체' },
        ...Array.from(new Set(getGroupUsersResult.result.userList.map(user => user.nickName))).map(
          charger => ({ name: charger })
        ),
      ];
      setChargers(newChargers);
    };

    fetchGroupUsers();
  }, [channelId]);

  const fetchHouseworks = async (date: string) => {
    const newChannelId = Number(channelId);
    const getHouseworksResult = await getHouseworks({
      channelId: newChannelId,
      targetDate: date,
      pageNumber: homePageNumber,
      pageSize: PAGE_SIZE,
    });
    return getHouseworksResult.result.responses;
  };

  const handleAction = async (houseworkId: number) => {
    // 해당 id에 해당하는 집안일 완료 처리
    console.log(houseworkId);
    const newChannelId = Number(channelId);
    try {
      await changeHouseworkStatus({
        channelId: newChannelId,
        houseworkId,
      });
      refetch();
    } catch (error) {
      toast({ title: '본인만 변경할 수 있어요!' });
    }
  };

  const handleEdit = (houseworkId: number) => {
    navigate(`/add-housework/edit/${channelId}/${houseworkId}/step1`);
  };

  const handleDelete = async (houseworkId: number) => {
    const newChannelId = Number(channelId);
    await deleteHousework({ channelId: newChannelId, houseworkId });
    toast({ title: '집안일이 삭제되었습니다!' });
    refetch();
  };

  return (
    <div>
      <HomeHeader />
      <WeeklyDateAndTab
        activeTab={activeTab}
        handleSetActiveTab={setActiveTab}
        chargers={chargers}
      />
      {!houseworks ||
      houseworks.filter(item => item.assignee === activeTab || activeTab === '전체').length ===
        0 ? (
        <div className='flex h-[calc(100vh-280px)] flex-1 flex-col items-center justify-center gap-4 whitespace-pre-line text-center text-gray2'>
          <NoHouseWorkIcon />
          <p className='text-gray2 font-subhead'>
            {'현재 집안일 목록이 없어요\n새로운 목록을 만들어보세요'}
          </p>
        </div>
      ) : (
        <HouseworkList
          items={houseworks.filter(item => item.assignee === activeTab || activeTab === '전체')}
          handleAction={handleAction}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      )}
      <GroupSelectSheet />
    </div>
  );
};

export default HomePage;
