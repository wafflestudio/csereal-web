import useResponsive from '@/utils/hooks/useResponsive';

export default function useResponsiveRow() {
  const { screenType } = useResponsive();
  return screenType === 'desktop' ? 7 : 3;
}
