import React, { useMemo, useState } from 'react';
import SurveyTitle from '@/components/survey/SurveyTitle/SurveyTitle';
import MenuSelect from '@/components/survey/MenuSelect/MenuSelect';
import { motion } from 'framer-motion';
import { Button } from '@/components/common/ui/button';

interface Step2Props {
  title: string;
  questions: string[];
  handleNextStep: (selectedItem?: string) => void;
}

const Step2: React.FC<Step2Props> = ({ title, questions, handleNextStep }) => {
  const [activeItem, setActiveItem] = useState('');

  const memoizedTitle = useMemo(() => title, [title]);

  const handleSelect = (content: string) => {
    if (activeItem === content) {
      setActiveItem('');
    } else {
      setActiveItem(content);
    }
  };

  const onNext = () => {
    handleNextStep(activeItem);
  };

  const container = {
    hidden: { opacity: 0, y: 0 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5, // 0.3초 동안 애니메이션 실행
        ease: 'easeIn', // 가속도 곡선 설정
      },
    },
  };

  return (
    <>
      <motion.div
        className='flex flex-1 flex-col gap-3 px-5'
        variants={container}
        initial='hidden'
        animate='show'
      >
        <div className='mb-5'>
          <SurveyTitle title={memoizedTitle} />
        </div>

        <div className='flex flex-wrap gap-3'>
          {questions.map(question => (
            <MenuSelect
              key={question}
              type='large'
              status={activeItem === question ? 'active' : 'inActive'}
              content={question}
              handleSelect={() => handleSelect(question)}
            />
          ))}
        </div>
      </motion.div>
      <motion.div className='sticky bottom-6 bg-white px-5'>
        <Button
          size={'large'}
          variant={!activeItem ? 'disabled' : 'full'}
          disabled={!activeItem}
          onClick={onNext}
        >
          다음
        </Button>
      </motion.div>
    </>
  );
};

export default Step2;
