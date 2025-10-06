import { type FC } from 'react';
import { TbLayoutSidebarRightExpand } from 'react-icons/tb';

import { useSidebar } from '@/shared/sidebar/public';

interface OpenSidebarButtonProps {
  hideWhenSidebarIsAlreadyOpen?: boolean;
}

export const OpenSidebarButton: FC<OpenSidebarButtonProps> = ({
  hideWhenSidebarIsAlreadyOpen = true,
}) => {
  const { openSidebar, isSidebarOpen } = useSidebar();

  if (isSidebarOpen && hideWhenSidebarIsAlreadyOpen) return null;

  return (
    <button onClick={openSidebar}>
      <TbLayoutSidebarRightExpand className='size-5' />
    </button>
  );
};
