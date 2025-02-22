import { getRequest } from '@/apis';
import { Attachment } from '@/apis/types/attachment';

type Response = {
  constitution: { type: string; attachments: Attachment[] };
  bylaw: { type: string; attachments: Attachment[] };
};

export const getCouncilRule = () => getRequest<Response>('/v2/council/rule', undefined);
