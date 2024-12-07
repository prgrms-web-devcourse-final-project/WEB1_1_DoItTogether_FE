import AlertDialogProps from '@/components/common/alert/AlertDialogProps';
import Header from '@/components/common/header/Header';
import AccountMenuItem from '@/components/my/AccountMenuItem/AccountMenuItem';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const AccountManagePage = () => {
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

  return (
    <div>
      <Header title='계정 관리' isNeededDoneBtn={false} handleBack={handleBack} />
      <AccountMenuItem label='카카오톡' state='연결됨' />
      <AlertDialogProps
        title='로그아웃 하시겠습니까?'
        trigger={<AccountMenuItem label='로그아웃' iconType='로그아웃' handleClick={onConfirm} />}
        onConfirm={handleLogout}
        open={showAlert}
        onOpenChange={setShowAlert}
      />
      <AccountMenuItem label='탈퇴하기' iconType='탈퇴' handleClick={handleLeave} />
    </div>
  );
};

export default AccountManagePage;
