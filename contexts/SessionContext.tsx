'use client';

import React, {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useCallback,
  useContext,
  useState,
} from 'react';

import { getIsStaff } from '@/apis/auth';

interface SessionContextData {
  user?: User;
  // setUser: Dispatch<SetStateAction<User | undefined>>;
  autoLogin: () => Promise<void>;
}

const SessionContext = createContext<SessionContextData>({
  user: undefined,
  // setUser: () => {
  //   throw Error('session context not provided');
  // },
  autoLogin: () => {
    throw Error('session context not provided');
  },
});

export const useSessionContext = () => useContext(SessionContext);

export interface User {
  isStaff: boolean;
}

export default function SessionContextProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<User | undefined>();

  const autoLogin = useCallback(async () => {
    console.log('자동 로그인!');
    try {
      const data = await getIsStaff();
      setUser({ isStaff: data.isStaff });
    } catch (error) {
      setUser(undefined);
      console.log(error);
      console.log('ㅡ태프 인증 실패!');
    }
  }, []);

  return <SessionContext.Provider value={{ user, autoLogin }}>{children}</SessionContext.Provider>;
}
