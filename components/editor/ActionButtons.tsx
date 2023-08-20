import { useRouter } from 'next/navigation';
import { useRef, MouseEventHandler } from 'react';

import { EditAction, PostEditorContent, CreateAction } from './EditorProps';

export function EditActionButtons<T>({
  onDelete,
  onComplete,
  getContent,
}: EditAction<T> & { getContent: () => T }) {
  const requesting = useRef(false);
  const router = useRouter();
  const cancel = () => {
    // 정말 취소하시겠습니까? 같은 창을 띄워야할 때는 대비해 router로 처리
    router.back();
  };
  return (
    <>
      <GrayButton title="취소" onClick={cancel} />
      <BlackButton
        title="삭제"
        onClick={async (e) => {
          e.preventDefault();
          if (requesting.current) return;
          try {
            requesting.current = true;
            await onDelete();
            router.back();
          } catch (e) {
            console.error(e);
          } finally {
            requesting.current = false;
          }
        }}
      />
      <BlackButton
        title="수정하기"
        onClick={async (e) => {
          e.preventDefault();
          if (requesting.current) return;
          try {
            requesting.current = true;
            await onComplete(getContent());
            router.back();
          } catch (e) {
            console.error(e);
          } finally {
            requesting.current = false;
          }
        }}
      />
    </>
  );
}

export function CreateActionButtons<T>({
  onComplete,
  getContent,
}: CreateAction<T> & { getContent: () => T }) {
  const requesting = useRef(false);
  const router = useRouter();
  const cancel = () => {
    // 정말 취소하시겠습니까? 같은 창을 띄워야할 때는 대비해 router로 처리
    router.back();
  };
  return (
    <>
      <GrayButton title="취소" onClick={cancel} />
      <BlackButton
        title="게시하기"
        onClick={(e) => {
          e.preventDefault();
          if (requesting.current) return;
          try {
            requesting.current = true;
            onComplete(getContent());
          } catch (e) {
            console.error(e);
          } finally {
            requesting.current = false;
          }
        }}
      />
    </>
  );
}

const GrayButton = ({
  title,
  onClick,
}: {
  title: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => (
  <button
    className={`
              px-[.875rem] py-[.1875rem] rounded-[.0625rem] border-neutral-200 border-[1px]
              bg-neutral-100 hover:bg-neutral-200
              font-noto text-xs font-medium leading-8 text-neutral-500
            `}
    onClick={onClick}
  >
    {title}
  </button>
);

const BlackButton = ({
  title,
  onClick,
}: {
  title: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => (
  <button
    className={`
              px-[.875rem] py-[.1875rem] rounded-[.0625rem] 
              bg-neutral-700 hover:bg-neutral-500
              font-noto text-xs font-medium leading-8 text-white
            `}
    onClick={onClick}
  >
    {title}
  </button>
);
