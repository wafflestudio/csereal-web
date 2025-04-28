import { Attachment } from './attachment';

export interface CouncilMeetingMinute {
  year: number;
  index: number;
  attachments: Attachment[];
}

export interface CouncilReport {
  id: number;
  title: string;
  description: string;
  sequence: number;
  name: string;
  createdAt: string;
  prevId: number | null;
  prevTitle: string | null;
  nextId: number | null;
  nextTitle: string | null;
  imageURL: string;
}
