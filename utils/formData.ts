import {
  isLocalFile,
  isLocalImage,
  isUploadedFile,
  PostEditorFile,
  PostEditorImage,
} from '@/components/editor/PostEditorTypes';

import { encodeFormDataFileName } from './string';

export const contentToFormData = (
  type: 'CREATE' | 'EDIT',
  content: {
    requestObject: object;
    attachments?: PostEditorFile[];
    image?: PostEditorImage;
  },
  mainImage?: boolean, // 같은 기능인데 이미지 속성명이 달라서 구분하기 위해 일단 변수 도입. 백엔드에 속성명 통일 요청함
) => {
  const { requestObject, attachments, image } = content;
  const formData = new FormData();

  formData.append(
    'request',
    new Blob([JSON.stringify(requestObject)], {
      type: 'application/json',
    }),
  );

  if (attachments) {
    encodeFormDataFileName(
      formData,
      'newAttachments',
      attachments.filter(isLocalFile).map((x) => x.file),
    );
  }

  if (image && isLocalImage(image)) {
    if (mainImage) {
      formData.append(type === 'CREATE' ? 'mainImage' : 'newMainImage', image.file);
    } else {
      formData.append(type === 'CREATE' ? 'image' : 'newImage', image.file);
    }
  }

  return formData;
};

export const getAttachmentDeleteIds = (
  attachments: PostEditorFile[],
  prevAttachmentIds: number[],
) => {
  const uploadedAttachments = attachments.filter(isUploadedFile).map((x) => x.file);

  const deleteIds = prevAttachmentIds.filter(
    (id) => uploadedAttachments.find((x) => x.id === id) === undefined,
  );

  return deleteIds;
};
