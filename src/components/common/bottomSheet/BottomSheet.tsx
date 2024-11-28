import { Sheet } from 'react-modal-sheet';
import React from 'react';
import BottomSheetTitle from '@/components/common/bottomSheet/BottomSheetTitle/BottomSheetTitle';
import CloseBtn from '@/components/common/bottomSheet/CloseBtn/CloseBtn';

interface BottomSheetProps {
  /**바텀시트 오픈 여부 */
  isOpen: boolean;
  /**isOpen 바꾸는 set함수 */
  setOpen: (value: boolean) => void;
  /**바텀시트 태그 */
  tag?: string;
  /**바텀시트 타이틀 */
  title: string;
  /**바텀시트 close 버튼 */
  closeBtn?: boolean;
  /**바텀시트 컨텐츠 */
  children: React.ReactNode;
}

const BottomSheet: React.FC<BottomSheetProps> = ({
  isOpen,
  setOpen,
  tag,
  title,
  closeBtn = true,
  children,
}) => {
  return (
    <>
      <Sheet
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        detent='content-height'
        disableDrag={true}
      >
        <div className='relative mx-auto h-full w-full max-w'>
          <Sheet.Container>
            {closeBtn && <CloseBtn handleClick={() => setOpen(false)} />}
            <Sheet.Header>
              <BottomSheetTitle tag={tag} title={title} />
            </Sheet.Header>
            <Sheet.Content>{children}</Sheet.Content>
          </Sheet.Container>
        </div>
        <Sheet.Backdrop />
      </Sheet>
    </>
  );
};

export default BottomSheet;
