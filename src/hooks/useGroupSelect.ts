import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import useHomePageStore from '@/store/useHomePageStore';
import { getMyGroup } from '@/services/group/getMyGroup';
import { Group } from '@/types/apis/groupApi';

export const useGroupSelect = () => {
  const navigate = useNavigate();
  const { setCurrentGroup, groups, setGroups, setActiveTab } = useHomePageStore();
  const [isLoading, setIsLoading] = useState(true);

  const fetchGroups = useCallback(async () => {
    setIsLoading(true);
    try {
      const fetchedGroups = await getMyGroup();
      setGroups(fetchedGroups.result.channelList);
    } catch (err) {
      console.error('그룹 목록 조회 실패:', err);
    } finally {
      setIsLoading(false);
    }
  }, [setGroups]);

  useEffect(() => {
    fetchGroups();
  }, [fetchGroups]);

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

  return {
    isLoading,
    groups,
    handleMakeGroupBtnClick,
    handleInvitedBtnClick,
    handleClick,
  };
};
