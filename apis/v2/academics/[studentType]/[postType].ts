'use server';

import { getRequest, postRequest, putRequest } from '@/apis';
import { StudentType } from '@/apis/types/academics';
import { Attachment } from '@/components/common/Attachments';

interface AcademicsByPostType {
  year: number;
  description: string;
  attachments: Attachment[];
}

type PostType = 'course-changes' | 'curriculum' | 'general-studies-requirements';

export const getAcademicsByPostType = async (studentType: StudentType, postType: PostType) =>
  await getRequest<AcademicsByPostType>(`/v2/academics/${studentType}/${postType}`);

export const postAcademicsByPostType = async (
  studentType: StudentType,
  postType: PostType,
  body: FormData,
) => await postRequest(`/v2/academics/${studentType}/${postType}`, { body, jsessionID: true });

export const putAcademicsByPostType = async (
  studentType: StudentType,
  postType: PostType,
  year: number,
  body: FormData,
) =>
  await putRequest(`/v2/academics/${studentType}/${postType}/${year}`, { body, jsessionID: true });
