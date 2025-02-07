import SurveyTitle from '@/components/survey/SurveyTitle/SurveyTitle';
import TextTag from '@/components/common/tag/TextTag/TextTag';
import { motion } from 'framer-motion';
import { Button } from '@/components/common/ui/button';
import useDevicePadding from '@/hooks/useDevicePadding';

interface Step5Props {
  title: string;
  results: string[];
  handleDone: () => void;
}

const Step5: React.FC<Step5Props> = ({ title, results, handleDone }) => {
  const paddingClass = useDevicePadding();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.7, // 각 요소 사이의 딜레이
      },
    },
  };

  const titleItem = {
    hidden: { y: -20 },
    show: {
      y: 0,
      transition: {
        duration: 0.5, // 0.3초 동안 애니메이션 실행
        ease: 'easeIn', // 가속도 곡선 설정
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.3, // 0.3초 동안 애니메이션 실행
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
        <motion.div className='mb-5 pt-28' variants={titleItem}>
          <SurveyTitle title={title} />
        </motion.div>

        <motion.div className='flex flex-wrap gap-3' variants={item}>
          {results.map(result => (
            <TextTag
              key={result}
              type='secondary'
              label={`# ${result}`}
              className='rounded-2xl border-2 border-main/50 px-4 py-3 font-body'
            />
          ))}
        </motion.div>
      </motion.div>
      <motion.div className={`sticky bottom-6 ${paddingClass} bg-white px-5`}>
        <Button size={'large'} onClick={handleDone}>
          완료
        </Button>
      </motion.div>
    </>
  );
};

export default Step5;
