export interface ResearchGroup {
  id: number;
  name: string;
  description: string;
  imageURL: string;
  labs: { id: number; name: string }[];
}

export interface ResearchGroups {
  description: string;
  groups: ResearchGroup[];
}

export interface ResearchCenter {
  id: number;
  name: string;
  description: string;
  imageURL: string;
  websiteURL: string;
}

export interface SimpleResearchLab {
  id: number;
  name: string;
  professors: { id: number; name: string }[];
  location: string;
  tel: string;
  acronym: string;
  introductionMaterials: { pdf: string | null; youtube: string | null };
}

export interface ResearchLab extends SimpleResearchLab {
  description: string;
  websiteURL: string;
  group: string;
}

export interface TopConferenceList {
  modifiedAt: string;
  author: string;
  conferenceList: {
    id: number;
    code: string;
    abbreviation: string;
    name: string;
  }[];
}
