import { type FC } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@alsanad/ui/avatar';
import { Badge } from '@alsanad/ui/badge';

export const ConversationCard: FC = () => {
  return (
    <div className='rounded-md cursor-pointer px-2 py-3 grid grid-cols-[min-content_1fr_min-content] gap-x-4 transition-colors hover:bg-gray-100'>
      <Avatar>
        <AvatarImage src='https://github.com/shadcn.png' />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <div className='flex flex-col justify-between gap-y-1'>
        <span className='text-sm'>Amin Painter</span>
        <span className='text-xs w-20 text-ellipsis overflow-hidden whitespace-nowrap'>
          Hi Amin. What's up?
        </span>
      </div>

      <div className='flex flex-col justify-between text-[10px] text-right'>
        <Badge className='text-[10px] rounded-sm py-0'>3min</Badge>
        <span>Now</span>
      </div>
    </div>
  );
};
