import MetaTags from '@/components/common/metaTags/MetaTags';
import { HeaderWithTitle, Step1, Step2, HouseWorkAddLoading } from '@/components/housework';
import useAddHouseWork from '@/hooks/useAddHouseWork';
import { STEP_TITLES } from '@/constants/addHousework';
import { useMemo } from 'react';
import ActionButton from '@/components/housework/ActionButton/ActionButton';
import useDevicePadding from '@/hooks/useDevicePadding';

const AddHouseworkPage = ({}) => {
  const {
    startDate,
    userId,
    task,
    setTask,
    isLoading,
    channelId,
    houseworkId,
    handleBackClick,
    handleNextClick,
    step,
    time,
    setTime,
    members,
    category,
    setCategory,
    setStartDate,
    isAllday,
    setIsAllday,
  } = useAddHouseWork();

  const isDisabled = useMemo(
    () => (step === 1 ? !task || !startDate : !userId),
    [step, task, startDate, userId]
  );

  const paddingClass = useDevicePadding();

  return (
    <div className={`flex h-screen flex-col gap-4 px-5 ${paddingClass}`}>
      {houseworkId ? (
        <MetaTags
          title={'두잇투게더 - 집안일 수정'}
          description={'등록한 집안일을 수정해보세요.'}
          url={`https://doit-together.vercel.app/add-housework/${channelId}/${houseworkId}`}
        />
      ) : (
        <MetaTags
          title={'두잇투게더 - 집안일 등록'}
          description={'간편하게 집안일을 등록해보세요.'}
          url={`https://doit-together.vercel.app/add-housework/${channelId}`}
        />
      )}
      {!isLoading && (
        <HeaderWithTitle title={STEP_TITLES[step as 1 | 2]} handleClick={handleBackClick} />
      )}

      {/* 집안일,날짜,시간 */}
      {step === 1 && (
        <Step1
          setTime={setTime}
          time={time}
          task={task}
          setTask={setTask}
          setCategory={setCategory}
          startDate={startDate}
          setStartDate={setStartDate}
          isAllday={isAllday}
          setIsAllday={setIsAllday}
        />
      )}

      {/* 담당자 */}
      {step === 2 &&
        (isLoading ? (
          <HouseWorkAddLoading
            member={userId}
            housework={task}
            date={startDate}
            members={members}
            category={category}
          />
        ) : (
          <Step2 />
        ))}

      <ActionButton
        step={step}
        isLoading={isLoading}
        isDisabled={isDisabled}
        handleNextClick={handleNextClick}
      />
    </div>
  );
};

export default AddHouseworkPage;
