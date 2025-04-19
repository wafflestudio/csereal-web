'use client';

import { usePathname } from '@/i18n/routing';
import { useNavbarStore } from '@/stores/NavbarStore';

import NavbarDetail from './NavbarDetail';
import NavbarRoot from './NavbarRoot';

// 네비바 컴포넌트들은 모두 interactivity가 크므로 CSR 처리합니다.
export default function Navbar() {
  const path = usePathname();
  const setNavbarState = useNavbarStore((state) => state.setNavbarState); // ✅ 상태 변경함수 zustand에서 직접 호출

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
