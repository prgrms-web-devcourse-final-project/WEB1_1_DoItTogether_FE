import Button from '@/components/common/button/Button/Button';
import HeaderWithTitle from '@/components/housework/HeaderWithTitle/HeaderWithTitle';
import ManagerSelectSheet from '@/components/housework/ManagerSelectSheet/ManagerSelectSheet';
import OpenSheetBtn from '@/components/common/button/OpenSheetBtn/OpenSheetBtn';
import OpenSheetBtnWithLabel from '@/components/common/button/OpenSheetBtn/OpenSheetBtnWithLabel';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HouseWorkAddLoading from '@/components/housework/HouseworkAddLoading/HouseWorkAddLoading';
import useAddHouseWorkStore from '@/store/useAddHouseWorkStore';
import { useParams } from 'react-router-dom';
import { getGroupUser } from '@/services/group/getGroupUser';
import { User } from '@/types/apis/groupApi';
import { postHousework } from '@/services/housework/postHousework';
import { ProfileIcon } from '@/components/common/icon';
import { putHousework } from '@/services/housework/putHousework';
import { formatDateToISO } from '@/utils/convertDate';
import { convertStartTime } from '@/utils/convertStartTime';
import useHomePageStore from '@/store/useHomePageStore';
import getWeekText from '@/utils/getWeekText';

const HouseWorkStepTwoPage = () => {
  const navigate = useNavigate();
  const { channelId: strChannelId, houseworkId } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { task, category, startDate, startTime, userId, setUserId, reset } = useAddHouseWorkStore();
  const [selectedValue, setSelectedValue] = useState(userId || null);
  const [members, setMembers] = useState<User[]>([]);
  const [isMemberLoading, setIsMemberLoading] = useState(true);
  const { setActiveDate, setActiveWeek, setActiveTab, setWeekText } = useHomePageStore();

  const channelId = Number(strChannelId);

  useEffect(() => {
    const fetchGroupMembers = async () => {
      try {
        const response = await getGroupUser({ channelId });
        setMembers(response.result.userList);
      } catch (error) {
        console.error('멤버 조회 실패:', error);
      } finally {
        setIsMemberLoading(false);
      }
    };

    fetchGroupMembers();
  }, []);

  if (isMemberLoading) {
    return <></>;
  }

  const handleBackClick = () => {
    if (houseworkId) navigate(`/add-housework/edit/${channelId}/${houseworkId}/step1`);
    else navigate(`/add-housework/${channelId}/step1`);
  };

  const handleNextClick = async () => {
    setIsLoading(true);

    const formattedDate = formatDateToISO(startDate);
    const newTime = convertStartTime(startTime);

    if (houseworkId) {
      if (userId) {
        await putHousework({
          channelId,
          houseworkId: Number(houseworkId),
          category,
          startDate: formattedDate,
          task,
          startTime: newTime,
          userId,
        });

        setTimeout(() => {
          setActiveDate(formattedDate);
          setActiveWeek(new Date(formattedDate));
          setActiveTab('전체');
          setWeekText(getWeekText(new Date(formattedDate)));
          navigate(`/main/${channelId}`);
          setTimeout(() => {
            reset();
            setIsLoading(false);
          }, 2000);
        }, 2500);
      }
    } else {
      try {
        if (userId) {
          await postHousework({
            channelId,
            category,
            startDate: formattedDate,
            task,
            startTime: newTime,
            userId,
          });

          setTimeout(() => {
            setActiveDate(formattedDate);
            setActiveWeek(new Date(formattedDate));
            setActiveTab('전체');
            setWeekText(getWeekText(new Date(formattedDate)));
            navigate(`/main/${channelId}`);
            setTimeout(() => {
              reset();
              setIsLoading(false);
            }, 2000);
          }, 2500);
        }
      } catch (error) {
        console.error('집안일 추가 실패:', error);
      }
    }
  };

  const handleManagerClick = () => {
    setIsOpen(true);
  };

  const handleDoneClick = () => {
    setIsOpen(false);
    setUserId(selectedValue);
  };

  return (
    <>
      <div className={`flex h-screen flex-col gap-6 px-5 pb-6`}>
        {isLoading ? (
          <>
            <HouseWorkAddLoading
              member={userId}
              housework={task}
              date={startDate}
              members={members}
              category={category}
            />
          </>
        ) : (
          <>
            <HeaderWithTitle title={`담당자를\n지정해보세요`} handleClick={handleBackClick} />
            <section aria-label='집안일 추가 컨텐츠' className='flex flex-1 flex-col gap-6'>
              {userId ? (
                <OpenSheetBtnWithLabel
                  selected={userId}
                  handleClick={handleManagerClick}
                  members={members}
                  icon={<ProfileIcon className='text-main' />}
                />
              ) : (
                <OpenSheetBtn
                  text='책임자는 누구인가요?'
                  handleClick={handleManagerClick}
                  type='housework'
                  icon={<ProfileIcon className='text-gray3' />}
                />
              )}
            </section>
            <Button
              label='완료'
              variant='full'
              size='large'
              handleClick={handleNextClick}
              disabled={!userId}
            />
          </>
        )}
      </div>

      <ManagerSelectSheet
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setSelectedValue={setSelectedValue}
        selectedValue={selectedValue}
        handleDoneClick={handleDoneClick}
        members={members}
      />
    </>
  );
};

export default HouseWorkStepTwoPage;
