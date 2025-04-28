import { postRequest } from '@/apis';
import { FacultyStatus } from '@/apis/types/people';
import { WithLanguage } from '@/types/language';

export const postFaculty = (formData: FormData) =>
  postRequest('/v2/professor', { body: formData, jsessionID: true }) as Promise<
    WithLanguage<{ id: number; status: FacultyStatus }>
  >;
