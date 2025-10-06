import { type FC } from 'react';
import { createFileRoute } from '@tanstack/react-router';

import { Sidebar, SidebarProvider } from '@/features/inbox/public';
import { ConversationCard } from '@/features/conversation/public';

const InboxPage: FC = () => {
  return (
    <div className='relative h-full flex'>
      <SidebarProvider>
        <Sidebar />
      </SidebarProvider>

      <div className='grid grid-cols-[15rem_1fr]'>
        <div className='border-r border border-t-0 border-l-0'>
          <div className='h-18 flex items-center py-3 px-6 border border-b border-l-0 border-r-0 border-t-0'>
            <h3 className='font-medium text-xl'>VIP Inbox</h3>
          </div>

          <div className='divide-y'>
            <ConversationCard />
            <ConversationCard />
            <ConversationCard />
            <ConversationCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export const Route = createFileRoute('/(app)/_layout/inbox/')({
  component: InboxPage,
});
