import { createContext } from 'react';

import type { TSidebarContext } from '../types/sidebar-types';

export const SidebarContext = createContext<TSidebarContext | null>(null);
