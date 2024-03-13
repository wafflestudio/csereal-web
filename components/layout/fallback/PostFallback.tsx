'use client';

import { LinearProgress, ThemeProvider, createTheme } from '@mui/material';

export default function PostFallback() {
  return (
    <div className="grow bg-neutral-50">
      <ThemeProvider theme={theme}>
        <LinearProgress color="primary" />
      </ThemeProvider>
    </div>
  );
}

const theme = createTheme({ palette: { primary: { main: '#ccc' } } });
