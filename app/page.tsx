'use client';

import { useState } from 'react';

import AlertModal from '@/components/common/AlertModal';
import Csereal from '@/components/Csereal';

export default function MainPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Csereal />
      <button onClick={() => setIsOpen(true)}>모달 열기</button>
      <AlertModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        message="정말 삭제하시겠습니까?"
        confirmText="삭제"
        onConfirm={() => console.log('asf')}
      />
    </div>
  );
}
