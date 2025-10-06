import { type FC } from 'react';
import { TbLayoutSidebarLeftCollapse } from 'react-icons/tb';
import { FaRegPenToSquare } from 'react-icons/fa6';

import { useSidebar } from '@/features/inbox/public';

export const SidebarHeader: FC = () => {
  const { closeSidebar } = useSidebar();

  return (
    <div className='flex justify-between items-center mb-10'>
      <h3 className='font-medium text-xl'>Inbox</h3>

      <div className='flex gap-x-4 items-center'>
        <button>
          <FaRegPenToSquare />
        </button>

        <button onClick={closeSidebar}>
          <TbLayoutSidebarLeftCollapse className='size-5' />
        </button>
      </div>
    </div>
  );
};
