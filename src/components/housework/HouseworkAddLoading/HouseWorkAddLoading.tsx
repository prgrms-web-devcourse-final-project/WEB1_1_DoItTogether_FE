import TextTag from '@/components/common/tag/TextTag/TextTag';
import { User } from '@/types/apis/groupApi';
import LottieIcon from '@/components/common/lottie/LottieIcon';
import { motion } from 'framer-motion';

interface HouseWorkAddLoadingProps {
  date: string;
  housework: string;
  member: number | null;
  members: User[];
  category: string;
}

const HouseWorkAddLoading: React.FC<HouseWorkAddLoadingProps> = ({
  date,
  housework,
  member,
  members,
  category,
}) => {
  const findNameByMember = members.find(mem => mem.userId === member)?.nickName;
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.7,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 0 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeIn',
      },
    },
  };

  return (
    <motion.div
      className={`flex h-screen w-full max-w flex-col gap-4`}
      variants={container}
      initial='hidden'
      animate='show'
    >
      <motion.div variants={item} className='flex flex-col gap-4'>
        <p className='mt-16 text-main font-title'>{date}에</p>
        <div className='flex flex-wrap items-center gap-2'>
          <TextTag
            type='darkfill'
            label={housework}
            category={category}
            className='flex items-center gap-x-2 font-label'
          />
          <p className='text-main font-head'>를</p>
        </div>
        <div className='flex flex-wrap items-center gap-2'>
          <TextTag
            type='darkfill'
            label={findNameByMember ?? ''}
            findNameByMember={findNameByMember}
            className='flex items-center gap-x-2 font-label'
          />
          <p className='text-main font-head'>님이 담당하도록 추가했어요!</p>
        </div>
      </motion.div>
      <div className='flex flex-1 items-center justify-center'>
        <motion.div variants={item} className='h-96 w-full'>
          <LottieIcon />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HouseWorkAddLoading;
