import useResponsive from '@/hooks/useResponsive';

export default function useResponsiveRow() {
  const { isMobile } = useResponsive();
  return isMobile ? 3 : 7;
}
