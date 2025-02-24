import { Attachment } from './attachment';

export interface Minute {
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
  prevId: number;
  prevTitle: string;
  nextId: number;
  nextTitle: string;
}
