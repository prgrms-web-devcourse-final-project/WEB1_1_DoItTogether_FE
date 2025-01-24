import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const useAccountManage = () => {
  const navigate = useNavigate();
  const { channelId } = useParams();
  const [showAlert, setShowAlert] = useState(false);

  const handleBack = () => {
    navigate(`/main/${channelId}/my-page`);
  };

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    navigate('/');
  };

  const handleLeave = () => {
    navigate(`/my-page/leave/${channelId}`);
  };

  const onConfirm = () => {
    setShowAlert(true);
  };

  const handleNotice = (iconType: string) => {
    if (iconType === 'terms') {
      window.location.href =
        'https://powerful-net-950.notion.site/180d58761b88807192e4f52d7e04e9c6?pvs=4';
    } else {
      window.location.href =
        'https://powerful-net-950.notion.site/180d58761b8880eea920dc70361ddfb8?pvs=4';
    }
  };

  return {
    showAlert,
    setShowAlert,
    handleBack,
    handleLogout,
    handleLeave,
    handleNotice,
    onConfirm,
  };
};
