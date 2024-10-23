import { Attachment } from '@/components/common/Attachments';

export interface ResearchGroup {
  id: number;
  name: string;
  description: string;
  mainImageUrl: string | null;
  labs: { id: number; name: string }[];
}

export interface ResearchCenter {
  id: number;
  name: string;
  description: string;
  mainImageUrl: string | null;
  websiteURL: string;
}

export interface SimpleResearchLab {
  id: number;
  name: string;
  professors: { id: number; name: string }[];
  location: string;
  tel: string;
  acronym: string;
  pdf: Attachment | null;
  youtube: string;
}

export interface ResearchLab extends SimpleResearchLab {
  description: string;
  websiteURL: string;
  group: { id: number; name: string };
}

export interface TopConferenceList {
  modifiedAt: string;
  author: string;
  conferenceList: {
    id: number;
    abbreviation: string;
    name: string;
  }[];
}
