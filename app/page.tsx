'use client';

import { useState } from 'react';

import Csereal from '@/components/Csereal';

export default function MainPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>모달 열기</button>
      <Csereal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}
