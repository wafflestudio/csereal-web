import toast from 'react-hot-toast';

export const successToast = (message: string) => {
  toast.success(message, {
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  });
};

export const errorToast = (message: string) => {
  toast.error(message, {
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  });
};

export const infoToast = (message: string) => {
  toast(message, {
    icon: 'ℹ️',
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  });
};
