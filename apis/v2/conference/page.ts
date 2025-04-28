import { getRequest } from '@/apis';
import { TopConferenceList } from '@/apis/types/research';

export const getTopConferenceList = () => getRequest<TopConferenceList>('/v2/conference/page');
