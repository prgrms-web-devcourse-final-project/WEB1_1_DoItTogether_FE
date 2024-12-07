const RegisterNotice = () => {
  return (
    <div className='flex flex-col gap-2'>
      <p className='text-gray !font-semibold font-caption'>1-5자리 한글 / 영문 / 숫자</p>
      <div className='flex flex-col gap-1 text-gray3'>
        <span className='font-caption'>두잇투게더는 본명 사용을 권장해요.</span>
        <span className='font-caption'>신중하게 본인을 잘 나타내는 이름을 설정해주세요.</span>
      </div>
    </div>
  );
};

export default RegisterNotice;
