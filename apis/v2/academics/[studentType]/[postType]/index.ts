'use server';

import { getRequest, postRequest } from '@/apis';
import { StudentType } from '@/apis/types/academics';
import { Attachment } from '@/apis/types/attachment';

interface AcademicsCommon {
  year: number;
  description: string;
  attachments: Attachment[];
}

export type PostType = 'course-changes' | 'curriculum' | 'general-studies-requirements';

export const getAcademicsByPostType = async (
  studentType: StudentType,
  postType: PostType,
  fetchTag: string,
) =>
  await getRequest<AcademicsCommon[]>(`/v2/academics/${studentType}/${postType}`, undefined, {
    next: { tags: [fetchTag] },
  });

export const postAcademicsByPostType = async (
  studentType: StudentType,
  postType: PostType,
  body: FormData,
) => await postRequest(`/v2/academics/${studentType}/${postType}`, { body, jsessionID: true });
