import { cn } from '@alsanad/utils/cn';
import { Link, type LinkProps } from '@tanstack/react-router';
import { type FC, type ReactElement } from 'react';

interface SidebarLinkProps {
  icon: ReactElement;
  title: string;
  badge?: ReactElement;
  href: LinkProps['to'];
}

export const SidebarLink: FC<SidebarLinkProps> = ({ icon, title, badge, href }) => {
  return (
    <Link to={href} className='block'>
      {({ isActive }) => (
        <div
          className={cn('flex items-center gap-x-4 px-2 h-8 rounded-md hover:bg-gray-50', {
            'bg-white': isActive,
          })}>
          <div>{icon}</div>

          <span className='mr-auto capitalize text-sm font-medium text-gray-600'>{title}</span>

          <div>{badge}</div>
        </div>
      )}
    </Link>
  );
};
