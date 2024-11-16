export const replaceSpaceWithDash = (words: string) => words.replace(/\s+/g, '-');

export const replaceDashWithSpace = (words: string) => words.replace(/-/g, ' ');

// server action에서 한글 파일이 깨지는 문제가 있어 수동으로 해결
// TODO: 없어도 되게
export const decodeFormDataFileName = (formData: FormData, key: FormDataFileName) => {
  const list = formData.getAll(key);
  formData.delete(key);

  list.filter(isFile).forEach((file) => formData.append(key, file, decodeURI(file.name)));
};

// TODO: 없어도 되게
export const encodeFormDataFileName = (
  formData: FormData,
  key: FormDataFileName,
  fileList: File[],
) => {
  fileList.forEach((file) => formData.append(key, file, encodeURI(file.name)));
};

type FormDataFileName = 'attachments' | 'newAttachments' | 'pdf';

const isFile = (x: unknown): x is File => x instanceof File;
