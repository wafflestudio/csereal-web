'use client';

import { GrayButton } from '@/components/common/Buttons';
import { useRouter } from '@/i18n/routing';

export default function EditButton() {
  const router = useRouter();
  return <GrayButton title="편집" onClick={() => router.push('/.internal/edit')} />;
}
