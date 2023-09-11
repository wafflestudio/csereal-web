'use client';

import React, {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from 'react';

interface SessionContextData {
  isStaff?: boolean;
  setIsStaff: Dispatch<SetStateAction<boolean | undefined>>;
}

const SessionContext = createContext<SessionContextData>({
  isStaff: undefined,
  setIsStaff: () => {
    throw Error('session context not provided');
  },
});

export const useSessionContext = () => useContext(SessionContext);

export default function SessionContextProvider({ children }: PropsWithChildren) {
  const [isStaff, setIsStaff] = useState<boolean>();

  return (
    <SessionContext.Provider value={{ isStaff, setIsStaff }}>{children}</SessionContext.Provider>
  );
}
