'use client';

import { useNavbarContext } from '@/contexts/NavbarContext';
import { usePathname } from '@/i18n/routing';

import NavbarDetail from './NavbarDetail';
import NavbarRoot from './NavbarRoot';

// 네비바 컴포넌트들은 모두 interactivity가 크므로 CSR 처리합니다.
export default function Navbar() {
  const { setNavbarState } = useNavbarContext();
  const path = usePathname();

  const handleMouseLeave = () => {
    setNavbarState({ type: path === '/' ? 'expanded' : 'closed' });
  };

  return (
    <div
      className="fixed bottom-0 left-0 top-0 z-50 hidden sm:flex"
      onMouseLeave={handleMouseLeave}
    >
      <NavbarRoot />
      <NavbarDetail />
    </div>
  );
}
