import { Attachment } from '@/components/common/Attachments';

export interface AboutContent {
  description: string;
  imageURL: string | null;
  attachments: Attachment[];
}

export interface FutureCareers {
  description: string;
  stat: {
    year: number;
    bachelor: { name: string; count: number }[];
    master: { name: string; count: number }[];
    doctor: { name: string; count: number }[];
  }[];
  companies: {
    id: number;
    name: string;
    url?: string;
    year: number;
  }[];
}

export interface Club {
  id: number;
  name: string;
  description: string;
  imageURL: string | null;
}

export interface Facility {
  id: number;
  name: string;
  description: string;
  locations: string[];
  imageURL: string | null;
}

export interface Direction {
  id: number;
  name: string;
  description: string;
}
