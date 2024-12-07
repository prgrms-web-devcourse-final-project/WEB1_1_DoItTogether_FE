import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/common/ui/dropdown-menu';
import { BinIcon, DotsIcon, PencilIcon } from '@/components/common/icon';

export interface ControlDropdownProps {
  id: number;
  /** 수정 클릭 이벤트 */
  handleEdit: () => void;
  /** 삭제 클릭 이벤트 */
  handleDelete: (id: number) => void;
}

const ControlDropdown = ({ id, handleEdit, handleDelete }: ControlDropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <DotsIcon className='text-gray2' />
      </DropdownMenuTrigger>
      <DropdownMenuContent className='flex -translate-x-10 flex-col rounded-2xl'>
        <DropdownMenuItem
          className='flex items-center justify-between px-5 py-2 font-label'
          onSelect={handleEdit}
        >
          <span className='border-gray-300 border'>
            <PencilIcon />
          </span>
          수정
        </DropdownMenuItem>
        <DropdownMenuItem
          className='flex items-center justify-between px-5 py-2 font-label'
          onSelect={() => handleDelete(id)}
        >
          <span className='border-gray-300 border'>
            <BinIcon />
          </span>
          삭제
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ControlDropdown;
