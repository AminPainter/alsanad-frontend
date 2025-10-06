import { createContext } from 'react';

import type { TSidebarContext } from '../types/inbox-types';

export const SidebarContext = createContext<TSidebarContext | null>(null);
