'use server';

import { getRequest, postRequest, putRequest } from '@/apis';
import { Attachment } from '@/components/common/Attachments';
import { StudentType } from '@/types/academics';

interface AcademicsByPostType {
  year: number;
  description: string;
  attachments: Attachment[];
}

type PostType = 'course-changes' | 'curriculum' | 'general-studies-requirements';

export const getAcademicsByPostType = async (studentType: StudentType, postType: PostType) =>
  await getRequest<AcademicsByPostType>(`/v1/academics/${studentType}/${postType}`);

export const postAcademicsByPostType = async (
  studentType: StudentType,
  postType: PostType,
  body: FormData,
) => await postRequest(`/v1/academics/${studentType}/${postType}`, { body, jsessionID: true });

export const putAcademicsByPostType = async (
  studentType: StudentType,
  postType: PostType,
  body: FormData,
) => await putRequest(`/v1/academics/${studentType}/${postType}`, { body, jsessionID: true });
