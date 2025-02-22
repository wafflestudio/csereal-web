import { Attachment } from '@/apis/types/attachment';
import { EditorFile, EditorImage, isLocalFile, isLocalImage, isUploadedFile } from '@/types/form';

import { encodeFormDataFileName } from './string';

export const contentToFormData = (
  type: 'CREATE' | 'EDIT',
  content: {
    requestObject: object;
    attachments?: EditorFile[];
    image?: EditorImage;
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
      type === 'CREATE' ? 'attachments' : 'newAttachments',
      attachments.filter(isLocalFile).map((x) => x.file),
    );
  }

  if (image && isLocalImage(image)) {
    formData.append(type === 'CREATE' ? 'mainImage' : 'newMainImage', image.file);
  }

  return formData;
};

export const getAttachmentDeleteIds = (
  attachments: EditorFile[],
  prev: number[] | Attachment[] | EditorFile[],
) => {
  const uploadedAttachments = attachments.filter(isUploadedFile).map((x) => x.file);

  const isNumberArr = (arr: number[] | Attachment[] | EditorFile[]): arr is number[] =>
    arr.length === 0 || typeof arr[0] == 'number';
  const isNumberAttachmentArr = (arr: Attachment[] | EditorFile[]): arr is Attachment[] =>
    arr.length === 0 || 'id' in arr[0];

  const prevAttachmentIds = isNumberArr(prev)
    ? prev
    : isNumberAttachmentArr(prev)
      ? prev.map((x) => x.id)
      : prev.filter(isUploadedFile).map((x) => x.file.id);

  const deleteIds = prevAttachmentIds.filter(
    (id) => uploadedAttachments.find((x) => x.id === id) === undefined,
  );

  return deleteIds;
};

export const getEditorImage = (url: string | null | undefined): EditorImage =>
  url ? { type: 'UPLOADED_IMAGE', url } : null;

export function getEditorFile(attachment: Attachment): EditorFile;
export function getEditorFile(attachment: Attachment[]): EditorFile[];
export function getEditorFile(attachment: Attachment | Attachment[]): EditorFile | EditorFile[] {
  return Array.isArray(attachment)
    ? attachment.map((file) => ({ type: 'UPLOADED_FILE', file }))
    : { type: 'UPLOADED_FILE', file: attachment };
}
