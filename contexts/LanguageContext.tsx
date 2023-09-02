'use client';

import { usePathname, useRouter } from 'next/navigation';
import { PropsWithChildren, createContext, useContext, useState } from 'react';

interface LanguageContextProps {
  isEnglish: boolean;
  changeLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageContextProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const pathname = usePathname();

  const [isEnglish, setIsEnglish] = useState(pathname.startsWith('/en') ? true : false);

  const changeLanguage = () => {
    const newPath = isEnglish ? pathname.slice(3) : '/en' + pathname;
    setIsEnglish(!isEnglish);

    newPath ? router.push(newPath) : router.push('/');
  };

  return (
    <LanguageContext.Provider value={{ isEnglish, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage 에러');
  }
  return context;
};
