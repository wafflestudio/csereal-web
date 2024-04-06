import useResponsive from '@/utils/hooks/useResponsive';

export default function useResponsiveRow() {
  const { isMobile } = useResponsive();
  return isMobile ? 3 : 7;
}
