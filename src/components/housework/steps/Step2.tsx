import useAddHouseWork from '@/hooks/useAddHouseWork';
import { TaskAssignmentContent } from '@/components/housework';
import { lazy, Suspense } from 'react';

const ManagerSelectSheet = lazy(
  () => import('@/components/housework/ManagerSelectSheet/ManagerSelectSheet')
);

interface Step2Props {
  task: string;
}

const Step2 = ({ task }: Step2Props) => {
  const {
    userId,
    members,
    handleManagerClick,
    isOpen,
    setIsOpen,
    setSelectedValue,
    selectedValue,
  } = useAddHouseWork();

  return (
    <>
      <TaskAssignmentContent
        userId={userId}
        members={members}
        handleManagerClick={handleManagerClick}
      />
      <Suspense fallback={<></>}>
        <ManagerSelectSheet
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setSelectedValue={setSelectedValue}
          selectedValue={selectedValue}
          members={members}
          task={task}
        />
      </Suspense>
    </>
  );
};

export default Step2;
