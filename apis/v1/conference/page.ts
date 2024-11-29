import { getRequest } from '@/apis';
import { TopConferenceList } from '@/types/research';

export const getTopConferenceList = () => getRequest<TopConferenceList>('/v1/conference/page');
