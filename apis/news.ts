import { PATCHNewsBody, POSTNewsBody } from '@/types/news';

import { patchRequest, postRequest } from './common/client';

const newsPath = '/news';

export const postNews = async (body: POSTNewsBody) => {
  const formData = new FormData();

  formData.append(
    'request',
    new Blob([JSON.stringify(body.request)], {
      type: 'application/json',
    }),
  );

  if (body.mainImage) {
    formData.append('mainImage', body.mainImage);
  }

  for (const attachment of body.attachments) {
    formData.append('attachments', attachment);
  }

  await postRequest(newsPath, {
    body: formData,
  });
};

export const patchNews = async (id: number, body: PATCHNewsBody) => {
  const formData = new FormData();

  formData.append(
    'request',
    new Blob([JSON.stringify(body.request)], {
      type: 'application/json',
    }),
  );

  if (body.mainImage) {
    formData.append('newMainImage', body.mainImage);
  }

  for (const attachment of body.newAttachments) {
    formData.append('newAttachments', attachment);
  }

  await patchRequest(`${newsPath}/${id}`, {
    body: formData,
  });
};
