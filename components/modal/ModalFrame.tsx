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
      PaperProps={{ sx: { maxWidth: '100%' } }}
      sx={{ backdropFilter: 'blur(2px)' }}
    >
      {children}
    </Dialog>
  );
}
