'use client';

import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

import { NavbarContextProvider } from './NavbarContext';

export default function NavbarContextProviderWrapper({ children }: { children: ReactNode }) {
  const pathName = usePathname();
  return <NavbarContextProvider key={pathName}>{children}</NavbarContextProvider>;
}
