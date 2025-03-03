import { HouseworkForm } from '@/components/housework';
import { SelectedTime } from '@/hooks/useAddHouseWork';
import React, { lazy, Suspense, useState } from 'react';

const HouseWorkSheet = lazy(() => import('@/components/housework/HouseWorkSheet/HouseWorkSheet'));
const DueDateSheet = lazy(() => import('@/components/housework/DueDateSheet/DueDateSheet'));

interface Step1Props {
  setTime: React.Dispatch<React.SetStateAction<SelectedTime | null>>;
  time: SelectedTime | null;
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  startDate: string;
  setStartDate: React.Dispatch<React.SetStateAction<string>>;
  isAllday: boolean;
  setIsAllday: React.Dispatch<React.SetStateAction<boolean>>;
}

const Step1 = ({
  setTime,
  time,
  task,
  setTask,
  setCategory,
  startDate,
  setStartDate,
  isAllday,
  setIsAllday,
}: Step1Props) => {
  const [isHouseWorkSheetOpen, setHouseWorkSheetOpen] = useState(false);
  const [isDueDateSheetOpen, setDueDateSheetOpen] = useState(false);

  //바텀 시트 여는 함수들
  const handleHouseWorkClick = () => {
    setHouseWorkSheetOpen(true);
  };

  const handleDueDateClick = () => {
    setDueDateSheetOpen(true);
  };

  return (
    <>
      <HouseworkForm
        task={task}
        startDate={startDate}
        handleHouseWorkClick={handleHouseWorkClick}
        handleDueDateClick={handleDueDateClick}
        setTime={setTime}
        time={time}
        isAllday={isAllday}
        setIsAllday={setIsAllday}
      />

      <Suspense fallback={<></>}>
        {isHouseWorkSheetOpen && (
          <HouseWorkSheet
            isOpen={isHouseWorkSheetOpen}
            setOpen={setHouseWorkSheetOpen}
            setTask={setTask}
            setCategory={setCategory}
          />
        )}
      </Suspense>

      <Suspense fallback={<></>}>
        <DueDateSheet
          isOpen={isDueDateSheetOpen}
          setOpen={setDueDateSheetOpen}
          setStartDate={setStartDate}
        />
      </Suspense>
    </>
  );
};

export default Step1;
