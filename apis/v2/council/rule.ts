import { getRequest } from '@/apis';
import { Attachment } from '@/apis/types/attachment';

export type CouncilRules = {
  constitution: { type: string; attachments: Attachment[] };
  bylaw: { type: string; attachments: Attachment[] };
};

export const getCouncilRules = () => getRequest<CouncilRules>('/v2/council/rule', undefined);
