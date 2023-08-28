import { Dialog } from '@mui/material';

interface CustomDialogProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function CustomDialog({ isOpen, onClose, children }: CustomDialogProps) {
  return (
    <Dialog open={isOpen} onClose={onClose} PaperProps={{ sx: { maxWidth: '100%' } }}>
      {children}
    </Dialog>
  );
}
