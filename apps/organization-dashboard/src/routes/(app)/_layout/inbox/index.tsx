import { type FC } from 'react';
import { createFileRoute } from '@tanstack/react-router';

import { Sidebar, SidebarProvider } from '@/features/inbox/public';

const InboxPage: FC = () => {
  return (
    <div className='relative h-full flex'>
      <SidebarProvider>
        <Sidebar />
      </SidebarProvider>

      <div></div>
    </div>
  );
};

export const Route = createFileRoute('/(app)/_layout/inbox/')({
  component: InboxPage,
});
