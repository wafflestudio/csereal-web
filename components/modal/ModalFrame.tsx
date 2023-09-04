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
          maxHeight: '80vh',
          borderRadius: 0,
          backgroundColor: 'transparent',
          color: '#e5e5e5', // text-neutral-700
        },
      }}
      sx={{ backdropFilter: 'blur(2px)' }}
    >
      {children}
    </Dialog>
  );
}
