import Dialog from '@mui/material/Dialog';

interface ModalFrameProps {
  onClose: () => void;
  children: React.ReactNode;
}

export default function ModalFrame({ onClose, children }: ModalFrameProps) {
  return (
    <Dialog
      open
      onClose={onClose}
      PaperProps={{
        sx: {
          maxWidth: '100%',
          maxHeight: '85vh',
          borderRadius: 0,
          backgroundColor: 'transparent',
          color: '#262626', // text-neutral-800
          overflowX: 'hidden',
        },
      }}
      sx={{ backdropFilter: 'blur(2px)' }}
    >
      {children}
    </Dialog>
  );
}
