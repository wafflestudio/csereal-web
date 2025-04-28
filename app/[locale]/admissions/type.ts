import { Language } from '@/types/language';

export interface AdmissionPageProps {
  params: Promise<{ locale: Language }>;
}
