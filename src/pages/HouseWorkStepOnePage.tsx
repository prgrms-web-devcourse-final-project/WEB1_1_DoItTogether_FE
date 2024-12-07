import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '@/components/common/button/Button/Button';
import OpenSheetBtn from '@/components/common/button/OpenSheetBtn/OpenSheetBtn';
import OpenSheetBtnWithLabel from '@/components/common/button/OpenSheetBtn/OpenSheetBtnWithLabel';
import HeaderWithTitle from '@/components/housework/HeaderWithTitle/HeaderWithTitle';
import HouseWorkSheet from '@/components/housework/HouseWorkSheet/HouseWorkSheet';
import DueDateSheet from '@/components/housework/DueDateSheet/DueDateSheet';
import TimeControl from '@/components/housework/TimeControl/TimeControl';
import useAddHouseWorkStore from '@/store/useAddHouseWorkStore';
import { useParams } from 'react-router-dom';
import { DateIcon, EtcIcon } from '@/components/common/icon';
import convertTimeToObject from '@/utils/convertTimeToObject';

export interface SelectedTime {
  hour: string;
  minute: string;
  ampm: 'AM' | 'PM';
}

const HouseWorkStepOnePage = () => {
  const navigate = useNavigate();
  const {
    task,
    setCategory,
    startDate,
    startTime,
    setStartTime,
    reset,
    setTask,
    setStartDate,
    setIsAllday,
    setUserId,
  } = useAddHouseWorkStore();
  const [isHouseWorkSheetOpen, setHouseWorkSheetOpen] = useState(false);
  const [isDueDateSheetOpen, setDueDateSheetOpen] = useState(false);
  const [time, setTime] = useState<SelectedTime | null>(startTime);
  const { channelId: strChannelId, houseworkId: strHouseworkId } = useParams();

  const channelId = Number(strChannelId);
  const houseworkId = Number(strHouseworkId);

  const location = useLocation();
  const targetHousework = location.state;

  useEffect(() => {
    if (targetHousework) {
      setTask(targetHousework.task);

      const date = new Date(targetHousework.startDate);
      const formattedDate = `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;

      setStartDate(formattedDate);
      setCategory(targetHousework.category);
      setUserId(targetHousework.userId);
      setIsAllday(targetHousework.isAllDay);
      if (!targetHousework.isAllDay && targetHousework.startTime) {
        const result = convertTimeToObject(targetHousework.startTime);
        setStartTime(result);
      }
    }
  }, []);

  const handleBackClick = () => {
    navigate(`/main/${channelId}`);
    reset();
  };
  const handleHouseWorkClick = () => {
    setHouseWorkSheetOpen(true);
  };
  const handleDueDateClick = () => {
    setDueDateSheetOpen(true);
  };

  const handleNextClick = () => {
    setStartTime(time);

    if (houseworkId) navigate(`/add-housework/edit/${channelId}/${houseworkId}/step2`);
    else navigate(`/add-housework/${channelId}/step2`);
  };

  const handleTimeChange = (newTime: SelectedTime | null) => {
    setTime(newTime);
  };

  return (
    <div className={`flex h-screen flex-col gap-4 px-5 pb-6`}>
      <HeaderWithTitle title={`새로운 집안일을\n추가해보세요`} handleClick={handleBackClick} />
      <section className='flex flex-1 flex-col gap-4' aria-label='집안일 추가 컨텐츠'>
        {task ? (
          <OpenSheetBtnWithLabel
            selected={task}
            handleClick={handleHouseWorkClick}
            icon={<EtcIcon />}
          />
        ) : (
          <OpenSheetBtn
            text='어떤 집안일인가요?'
            handleClick={handleHouseWorkClick}
            type='housework'
            icon={<EtcIcon fillOneClass='fill-gray2' fillTwoClass='fill-gray3' />}
          />
        )}
        {startDate ? (
          <OpenSheetBtnWithLabel
            selected={startDate}
            handleClick={handleDueDateClick}
            icon={<DateIcon className='text-main' />}
          />
        ) : (
          <OpenSheetBtn
            text='언제 해야 하나요?'
            handleClick={handleDueDateClick}
            type='housework'
            icon={<DateIcon className='text-gray3' />}
          />
        )}
        <TimeControl onTimeChange={handleTimeChange} />
      </section>
      <Button
        variant='full'
        size='large'
        label='다음'
        handleClick={handleNextClick}
        disabled={!task || !startDate}
      />

      <HouseWorkSheet isOpen={isHouseWorkSheetOpen} setOpen={setHouseWorkSheetOpen} />
      <DueDateSheet isOpen={isDueDateSheetOpen} setOpen={setDueDateSheetOpen} />
    </div>
  );
};

export default HouseWorkStepOnePage;
