import { useRouter } from 'next/navigation';
import { MouseEventHandler, useState } from 'react';

import { errorToast } from '@/utils/toast';

export interface EditAction<T> {
  type: 'EDIT';
  onCancel: () => void;
  onDelete: () => Promise<void>;
  /** 성공한 경우가 아니면 반드시 error를 던져야함 */
  onComplete: (content: T) => Promise<void>;
}

export interface CreateAction<T> {
  type: 'CREATE';
  onCancel: () => void;
  /** 성공한 경우가 아니면 반드시 error를 던져야함 */
  onComplete: (content: T) => Promise<void>;
}

// content 자체를 매번 건네는건 무거울 것 같아 getContent 함수로 전달
export function EditActionButtons<T>({
  onCancel,
  onDelete,
  onComplete,
  getContent,
}: EditAction<T> & { getContent: () => T }) {
  const [requesting, setRequesting] = useState(false);

  return (
    <>
      <GrayButton
        title="취소"
        disabled={requesting}
        onClick={(e) => {
          e.preventDefault();
          onCancel();
        }}
      />
      <BlackButton
        title="삭제"
        disabled={requesting}
        onClick={buildDeleteHandler(requesting, setRequesting, onDelete)}
      />
      <BlackButton
        title="수정하기"
        disabled={requesting}
        onClick={buildPostHandler(requesting, setRequesting, getContent, onComplete)}
      />
    </>
  );
}

export function CreateActionButtons<T>({
  onCancel,
  onComplete,
  getContent,
}: CreateAction<T> & { getContent: () => T }) {
  const [requesting, setRequesting] = useState(false);

  return (
    <>
      <GrayButton
        title="취소"
        disabled={requesting}
        onClick={(e) => {
          e.preventDefault();
          onCancel();
        }}
      />
      <BlackButton
        title="게시하기"
        disabled={requesting}
        onClick={buildPostHandler(requesting, setRequesting, getContent, onComplete)}
      />
    </>
  );
}

const GrayButton = ({
  title,
  disabled,
  onClick,
}: {
  title: string;
  disabled: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => (
  <button
    className={`
              px-[.875rem] py-[.34rem] rounded-[.0625rem] border-neutral-200 border-[1px]
              bg-neutral-100 enabled:hover:bg-neutral-200
              font-noto text-xs font-medium leading-[1.5rem]  text-neutral-500
              ${disabled && `opacity-30`}
            `}
    disabled={disabled}
    onClick={onClick}
  >
    {title}
  </button>
);

const BlackButton = ({
  title,
  disabled,
  onClick,
}: {
  title: string;
  disabled: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => (
  <button
    className={`
              px-[.875rem] py-[.34rem] rounded-[.0625rem] 
              bg-neutral-700 enabled:hover:bg-neutral-500
              font-noto text-xs font-bold leading-[1.5rem] text-white
              ${disabled && `opacity-30`}
            `}
    disabled={disabled}
    onClick={onClick}
  >
    {title}
  </button>
);

const buildPostHandler = <T,>(
  requesting: boolean,
  setRequesting: (val: boolean) => void,
  getContent: () => T,
  onComplete: (content: T) => Promise<void>,
) => {
  const handler: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    if (requesting) return;
    try {
      setRequesting(true);
      await onComplete(getContent());
    } catch (e) {
      setRequesting(false);
      if (e instanceof Error) {
        errorToast(e.message);
        // 에러 없는 경우에는 페이지가 닫힐 것이므로 false로 설정할 필요 없음
      } else {
        throw e;
      }
    }
  };
  return handler;
};

const buildDeleteHandler = <T,>(
  requesting: boolean,
  setRequesting: (val: boolean) => void,
  onDelete: () => Promise<void>,
) => {
  const handler: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    if (requesting) return;
    try {
      setRequesting(true);
      await onDelete();
    } catch (e) {
      setRequesting(false);
      if (e instanceof Error) {
        errorToast(e.message);
        // 에러 없는 경우에는 페이지가 닫힐 것이므로 false로 설정할 필요 없음
      } else {
        throw e;
      }
    }
  };
  return handler;
};
