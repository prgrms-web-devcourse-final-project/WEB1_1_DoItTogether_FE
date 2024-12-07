import React from 'react';
import { Dispatch, SetStateAction } from 'react';
import BottomSheet from '@/components/common/bottomSheet/BottomSheet';
import ManagerItems from '@/components/housework/ManagerSelectSheet/ManagerItem/ManagerItems';
import Button from '@/components/common/button/Button/Button';
// import AiChoice from '@/components/housework/AiChoice/AiChoice';
import { User } from '@/types/apis/groupApi';
// import { RefreshIcon } from '@/components/common/icon';

interface ManagerSelectSheetProps {
  /**바텀시트 오픈 여부 */
  isOpen: boolean;
  /**isOpen 바꾸는 set함수 */
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  /**선택 완료 후 처리하는 함수 */
  handleDoneClick: () => void;
  setSelectedValue: Dispatch<SetStateAction<number | null>>;
  selectedValue: number | null;
  members: User[];
}

const ManagerSelectSheet: React.FC<ManagerSelectSheetProps> = ({
  isOpen,
  setIsOpen,
  selectedValue,
  handleDoneClick,
  setSelectedValue,
  members,
}) => {
  // const [isAiCardOpen, setIsAiCardOpen] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);
  // const [tags, setTags] = useState<string[]>([]);

  // const handleClick = () => {
  //   setIsAiCardOpen(true);
  //   // todo
  //   // ai 할당 api 부르기
  //   setTimeout(() => {
  //     setTags(['규칙적으로 청소', '나 자신을 위해', '청소 각오는 만땅!', '화장실 청소 좋아!']);
  //     setIsLoading(false);
  //   }, 1500);
  // };

  return (
    <BottomSheet isOpen={isOpen} setOpen={setIsOpen} title='담당자 고르기'>
      <div className='flex flex-col'>
        {/* {isAiCardOpen && <AiChoice isLoading={isLoading} tags={tags} />} */}
        <ManagerItems
          //isAiCardOpen={isAiCardOpen}
          setSelectedValue={setSelectedValue}
          selectedValue={selectedValue}
          members={members}
        />
        <div className='flex gap-3 px-5 pb-6'>
          {/* <Button
            label={isAiCardOpen ? <RefreshIcon /> : 'AI 픽'}
            variant='secondary'
            size='small'
            handleClick={handleClick}
          /> */}
          <Button label='확인' variant='full' size='small' handleClick={handleDoneClick} />
        </div>
      </div>
    </BottomSheet>
  );
};

export default ManagerSelectSheet;
