'use client';

import { createContext, useContext } from 'react';

export type UserState = 'logout' | 'non-staff' | 'staff';

type SessionContextData = {
  state: UserState;
  logout: () => Promise<void>;
  login: () => Promise<void>;
};

export const SessionContext = createContext<SessionContextData>({
  state: 'logout',
  logout: async () => {},
  login: async () => {},
});

export const useSessionContext = () => useContext(SessionContext);
