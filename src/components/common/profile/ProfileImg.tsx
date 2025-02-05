import { ProfileIcon } from '@/components/common/icon';
import { cn } from '@/lib/utils';
import { useLocation } from 'react-router-dom';

interface ProfileImgProps {
  classname?: string;
  imageUrl?: string;
}

const ProfileImg = ({ classname, imageUrl = '' }: ProfileImgProps) => {
  const location = useLocation();
  const isEditPage = location.pathname.includes('edit');

  return (
    <div className={cn(`relative aspect-square h-36 w-36 overflow-hidden`, classname)}>
      <div className='flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-gray4'>
        {imageUrl ? (
          <img
            loading='lazy'
            src={imageUrl}
            alt='프로필 사진'
            className='h-full w-full rounded-full object-cover'
          />
        ) : (
          // TODO 기본 이미지 경로 설정
          <div
            className={cn(
              'flex items-center justify-center rounded-full bg-sub',
              isEditPage ? 'h-36 w-36' : 'h-20 w-20'
            )}
          >
            <ProfileIcon
              className='text-sub2'
              width={isEditPage ? 70 : 40}
              height={isEditPage ? 70 : 40}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileImg;
