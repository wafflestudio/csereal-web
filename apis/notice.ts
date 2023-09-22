import { POSTNoticeBody, PatchNoticeBody } from '@/types/notice';

import { patchRequestWithCookie, postRequestWithCookie } from '.';

const noticePath = '/notice';

export const postNotice = async (body: POSTNoticeBody) => {
  const formData = new FormData();
  formData.append(
    'request',
    new Blob([JSON.stringify(body.request)], {
      type: 'application/json',
    }),
  );
  for (const attachment of body.attachments) {
    formData.append('attachments', attachment);
  }

  await postRequestWithCookie(noticePath, {
    body: formData,
  });
};

export const patchNotice = async (id: number, body: PatchNoticeBody) => {
  const formData = new FormData();

  formData.append(
    'request',
    new Blob([JSON.stringify(body.request)], {
      type: 'application/json',
    }),
  );

  for (const attachment of body.newAttachments) {
    formData.append('newAttachments', attachment);
  }

  await patchRequestWithCookie(`${noticePath}/${id}`, {
    body: formData,
  });
};
