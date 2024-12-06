'use server';

import { getRequest, postRequest, putRequest } from '@/apis';
import { Attachment } from '@/components/common/Attachments';
import { StudentType } from '@/types/academics';

export interface AcademicsByPostType {
  year: number;
  description: string;
  attachments: Attachment[];
}

export type PostType = 'course-changes' | 'curriculum' | 'general-studies-requirements';

export const getAcademicsByPostType = (studentType: StudentType, postType: PostType) =>
  getRequest<AcademicsByPostType>(`/v1/academics/${studentType}/${postType}`);

export const postAcademicsByPostType = (
  studentType: StudentType,
  postType: PostType,
  body: FormData,
) => postRequest(`/v1/academics/${studentType}/${postType}`, { body, jsessionID: true });

export const putAcademicsByPostType = (
  studentType: StudentType,
  postType: PostType,
  body: FormData,
) => putRequest(`/v1/academics/${studentType}/${postType}`, { body, jsessionID: true });
