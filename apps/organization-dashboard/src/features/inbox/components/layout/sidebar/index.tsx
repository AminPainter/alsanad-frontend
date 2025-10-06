import { type FC } from 'react';
import { cn } from '@alsanad/utils/cn';
import { GoMention } from 'react-icons/go';
import { PiUserCircleDashed } from 'react-icons/pi';
import { IoStatsChartOutline } from 'react-icons/io5';

import { Avatar, AvatarFallback, AvatarImage } from '@alsanad/ui/avatar';

import { SidebarLink } from './sidebar-link';
import { SidebarHeader } from './sidebar-header';

import { useSidebar } from '../../../hooks/use-sidebar';

export const Sidebar: FC = () => {
  const { isSidebarOpen } = useSidebar();

  return (
    <div
      className={cn(
        'sticky top-0 h-full w-60 bg-gray-200 origin-left overflow-hidden transition-all px-3 py-4',
        { 'scale-x-0 w-0 invisible': !isSidebarOpen }
      )}>
      <SidebarHeader />

      {/* Quick actions */}
      <div className='space-y-2'>
        <SidebarLink
          icon={
            <Avatar className='size-5'>
              <AvatarImage src='https://github.com/shadcn.png' />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          }
          href='/inbox'
          title='your inbox'
        />

        <SidebarLink icon={<GoMention className='size-5' />} href='/' title='mentions' />

        <SidebarLink icon={<PiUserCircleDashed className='size-5' />} href='/' title='all' />

        <SidebarLink icon={<IoStatsChartOutline className='size-5' />} href='/' title='dashboard' />
      </div>
    </div>
  );
};
