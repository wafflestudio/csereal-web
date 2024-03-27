'use server';

import { postRequest } from '.';

export const postImage = async (formData: FormData) => {
  const resp = (await postRequest('/file/upload', {
    body: formData,
    jsessionID: true,
  })) as ImageUploadResponse;

  return resp;
};

type ImageUploadResponse = {
  errorMessage: string;
  result: {
    url: string;
    name: string;
    size: number;
  }[];
};
