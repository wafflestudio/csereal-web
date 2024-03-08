import { PATCHSeminarBody, POSTSeminarBody } from '@/types/seminar';

import { patchRequest, postRequest } from './common/client';

const seminarPath = '/seminar';

export const postSeminar = async (body: POSTSeminarBody) => {
  const formData = new FormData();

  formData.append(
    'request',
    new Blob([JSON.stringify(body.request)], {
      type: 'application/json',
    }),
  );

  if (body.image) {
    formData.append('mainImage', body.image);
  }

  for (const attachment of body.attachments) {
    formData.append('attachments', attachment);
  }

  await postRequest(seminarPath, { body: formData });
};

export const editSeminar = async (id: number, body: PATCHSeminarBody) => {
  const formData = new FormData();

  formData.append(
    'request',
    new Blob([JSON.stringify(body.request)], {
      type: 'application/json',
    }),
  );

  if (body.image) {
    formData.append('newMainImage', body.image);
  }

  for (const attachment of body.newAttachments) {
    formData.append('newAttachments', attachment);
  }

  await patchRequest(`${seminarPath}/${id}`, { body: formData });
};
