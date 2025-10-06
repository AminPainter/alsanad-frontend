import { useState, type ReactNode } from 'react';

import { SidebarContext } from '../contexts/sidebar-context';

interface SidebarProviderProps {
  children: ReactNode;
}

export const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => setIsOpen(prev => !prev);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <SidebarContext.Provider
      value={{
        isSidebarOpen: isOpen,
        toggleSidebar: toggle,
        openSidebar: open,
        closeSidebar: close,
      }}>
      {children}
    </SidebarContext.Provider>
  );
};
