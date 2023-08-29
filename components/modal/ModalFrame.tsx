import { Dialog } from '@mui/material';

interface ModalFrameProps {
  onClose: () => void;
  children: React.ReactNode;
}

export default function ModalFrame({ onClose, children }: ModalFrameProps) {
  return (
    <Dialog open onClose={onClose} PaperProps={{ sx: { maxWidth: '100%' } }}>
      {children}
    </Dialog>
  );
}
