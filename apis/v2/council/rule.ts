import { getRequest, putRequest } from '@/apis';
import { Attachment } from '@/apis/types/attachment';

export type CouncilRules = {
  constitution: { type: string; attachments: Attachment[] };
  bylaw: { type: string; attachments: Attachment[] };
};

export const getCouncilRules = () => getRequest<CouncilRules>('/v2/council/rule', undefined);

export const putCouncilRules = (body: FormData) =>
  putRequest<CouncilRules>('/v2/council/rule', { body, jsessionID: true });
