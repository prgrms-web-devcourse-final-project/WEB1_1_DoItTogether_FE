import { Badge } from '@/components/common/ui/badge';

export interface HouseworkCategoryTagProps {
  /** 집안일 카테고리 */
  category: string;
  /** 상태 */
  variant?: 'primary' | 'secondary' | 'disabled' | 'grayfill' | 'darkfill' | 'noselected';
}

const HouseworkCategoryTag: React.FC<HouseworkCategoryTagProps> = ({
  category,
  variant = 'primary',
}) => {
  return <Badge variant={variant}>{category}</Badge>;
};

export default HouseworkCategoryTag;
