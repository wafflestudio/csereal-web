import { ReactNode } from 'react';

import PageLayout from '@/components/layout/PageLayout';

export default function NewsCreate() {
  return (
    <PageLayout title="새소식 쓰기" titleType="small">
      <form className="flex flex-col">
        <Fieldset title="제목" mb="mb-6">
          ㅁ
        </Fieldset>
        <Fieldset title="내용" mb="mb-6">
          ㅁ
        </Fieldset>
        <Fieldset title="대표 이미지" mb="mb-6">
          ㅁ
        </Fieldset>
        <Fieldset title="첨부파일" mb="mb-6">
          ㅁ
        </Fieldset>
        <Fieldset title="태그" mb="mb-6">
          ㅁ
        </Fieldset>
        <Fieldset title="게시 설정" mb="mb-6">
          ㅁ
        </Fieldset>
      </form>
    </PageLayout>
  );
}

interface FieldsetProps {
  title: string;
  mb: 'mb-6' | 'mb-9';
  children: ReactNode;
}

const Fieldset = ({ title, mb, children }: FieldsetProps) => {
  return (
    <fieldset className={`flex flex-col ${mb}`}>
      <label className="font-yoon text-sm font-medium tracking-wide">{title}</label>
      {children}
    </fieldset>
  );
};
