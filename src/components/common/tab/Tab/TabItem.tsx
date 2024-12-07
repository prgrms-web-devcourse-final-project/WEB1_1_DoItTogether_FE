import { TabsTrigger } from '@/components/common/ui/tabs';

interface TabItemProps {
  /** 멤버 이름 */
  name: string;
  value: string;
}

const TabItem: React.FC<TabItemProps> = ({ name, value }) => {
  return (
    <TabsTrigger
      value={value}
      className='rounded-none border-b-[3px] border-transparent px-8 py-3 text-gray2 font-label data-[state=active]:border-b-[3px] data-[state=active]:border-main data-[state=active]:shadow-none'
    >
      {name}
    </TabsTrigger>
  );
};

export default TabItem;
