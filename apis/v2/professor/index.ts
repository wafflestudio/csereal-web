import { postRequest } from '@/apis';
import { WithLanguage } from '@/types/language';
import { FacultyStatus } from '@/types/people';

export const postFaculty = (formData: FormData) =>
  postRequest('/v2/professor', { body: formData, jsessionID: true }) as Promise<
    WithLanguage<{ id: number; status: FacultyStatus }>
  >;
