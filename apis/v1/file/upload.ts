'use server';

import { postRequest } from '../..';

type ImageUploadResponse = {
  errorMessage: string;
  result: {
    url: string;
    name: string;
    size: number;
  }[];
};

export const postImage = async (formData: FormData) => {
  const resp = (await postRequest('/v1/file/upload', {
    body: formData,
    jsessionID: true,
  })) as ImageUploadResponse;

  return resp;
};
