import { useNavigate, useParams } from 'react-router-dom';

interface ProfileEditBtnProps {
  imageUrl?: string;
  nickname?: string;
}

const ProfileEditBtn = ({ imageUrl, nickname }: ProfileEditBtnProps) => {
  const navigate = useNavigate();
  const { channelId } = useParams();

  const handleClick = () => {
    navigate(`/main/${channelId}/my-page/edit`, {
      state: { imageUrl, nickname },
    });
  };
  return (
    <button
      className='rounded-full border-[1px] border-solid border-gray3 px-6 text-gray3 font-label'
      onClick={handleClick}
    >
      프로필 편집
    </button>
  );
};

export default ProfileEditBtn;
