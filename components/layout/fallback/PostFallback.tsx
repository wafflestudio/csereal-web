'use client';

import { createTheme,LinearProgress, ThemeProvider } from '@mui/material';

export default function PostFallback() {
  return (
    <div className="bg-neutral-50">
      <ThemeProvider theme={theme}>
        <LinearProgress color="primary" />
      </ThemeProvider>
    </div>
  );
}

const theme = createTheme({ palette: { primary: { main: '#ccc' } } });
