import type { FC } from 'react';
import { createFileRoute, Link, Outlet, type LinkProps } from '@tanstack/react-router';
import { Avatar, AvatarFallback, AvatarImage } from '@alsanad/ui/avatar';
import { FaInbox, FaPaperPlane, FaChartBar, FaUserGroup, FaBookOpen } from 'react-icons/fa6';
import { type IconType } from 'react-icons';
import { cn } from '@alsanad/utils/cn';

const navLinks = [
  {
    icon: FaInbox,
    href: '/inbox',
  },
  {
    icon: FaPaperPlane,
    href: '/',
  },
  {
    icon: FaUserGroup,
    href: '/',
  },
  {
    icon: FaBookOpen,
    href: '/',
  },
  {
    icon: FaChartBar,
    href: '/',
  },
] satisfies Array<{ icon: IconType; href: LinkProps['to'] }>;

const DashboardLayout: FC = () => {
  return (
    <div className='grid grid-cols-[4rem_1fr] h-dvh'>
      <nav className='bg-gray-100 flex flex-col'>
        <Link to='/'>
          <figure className='p-2 flex items-center justify-center'>logo</figure>
        </Link>

        <ul className='mt-6 mb-auto'>
          {navLinks.map((navLink, idx) => (
            <li key={idx}>
              <Link to={navLink.href}>
                {({ isActive }) => (
                  <div
                    className={cn(
                      'flex items-center justify-center h-16 hover:bg-gray-200 transition-colors',
                      { 'bg-white': isActive }
                    )}>
                    <navLink.icon
                      className={cn('size-5', { 'text-blue-500 bg-white': isActive })}
                    />
                  </div>
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className='p-2'>
          <Avatar>
            <AvatarImage src='https://github.com/shadcn.png' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export const Route = createFileRoute('/(app)/_layout')({
  component: DashboardLayout,
});
