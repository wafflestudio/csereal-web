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
    formData.append(type === 'CREATE' ? 'mainImage' : 'newMainImage', image.file);
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
