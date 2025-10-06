import { type FC } from 'react';
import { createFileRoute } from '@tanstack/react-router';

import { OpenSidebarButton, Sidebar } from '@/features/inbox/public';
import { ConversationCard } from '@/features/conversation/public';
import { SidebarProvider } from '@/shared/sidebar/public';

const InboxPage: FC = () => {
  return (
    <SidebarProvider>
      <div className='relative h-full flex'>
        <Sidebar />

        <div className='grid grid-cols-[15rem_1fr]'>
          <div className='border-r border border-t-0 border-l-0'>
            <div className='h-18 flex items-center justify-between py-3 px-4 border border-b border-l-0 border-r-0 border-t-0'>
              <h3 className='font-medium text-xl'>VIP Inbox</h3>

              <OpenSidebarButton />
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
    </SidebarProvider>
  );
};

export const Route = createFileRoute('/(app)/_layout/inbox/')({
  component: InboxPage,
});
