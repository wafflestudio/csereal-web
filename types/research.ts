export interface ResearchGroup {
  id: number;
  name: string;
  description: string;
  mainImageURL: string | null;
  labs: { id: number; name: string }[];
}

export interface ResearchCenter {
  id: number;
  name: string;
  description: string;
  imageURL: string | null;
  websiteURL: string;
}

export interface SimpleResearchLab {
  id: number;
  name: string;
  professors: { id: number; name: string }[];
  location: string | null;
  tel: string | null;
  acronym: string;
  pdf: { url: string } | null;
  youtube: string | null;
}

export interface ResearchLab extends SimpleResearchLab {
  description: string;
  websiteURL: string | null;
  group: string;
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
