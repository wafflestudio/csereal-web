import { useMediaQuery } from '@mui/material';

export default function useResponsive() {
  const matches = useMediaQuery('(min-width: 640px');
  return { screenType: matches ? 'desktop' : 'mobile' };
}
