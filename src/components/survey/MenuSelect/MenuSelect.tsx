import React from 'react';
import { Button } from '@/components/common/ui/button';

interface MenuSelectProps {
  type: 'large';
  status: 'active' | 'inActive';
  content: string;
  handleSelect: (content: string) => void;
}

const MenuSelect = ({ type, status, content, handleSelect }: MenuSelectProps) => {
  return (
    <Button
      className={`max-w ${type === 'large' && 'justify-start'} ${status === 'active' && 'bg-main text-white'} whitespace-pre-line rounded-2xl text-left`}
      size={type}
      variant={'onboarding'}
      onClick={() => handleSelect(content)}
    >
      {content}
    </Button>
  );
};

export default React.memo(MenuSelect);
