interface AccountInfoProps {
  nickname: string;
  account: string;
}

const AccountInfo = ({ nickname, account }: AccountInfoProps) => {
  return (
    <div className='flex flex-col justify-between'>
      <div className='font-body'>{nickname}</div>
      <div className='text-gray4 font-label'>{account}</div>
    </div>
  );
};

export default AccountInfo;
