export interface ResearchGroup {
  name: string;
  description: string;
  imageURL: string;
  laboratories: string[];
}

export interface ResearchGroups {
  description: string;
  groups: ResearchGroup[];
}

export interface ResearchCenter {
  name: string;
  description: string;
  imageURL: string;
  link: string;
}

export interface ResearchLabInfo {
  name: string;
  professors: string[];
  location: string;
  tel: string;
  acronym: string;
  introductionMaterials: { pdf: string | null; youtube: string | null };
}

export interface ResearchLab extends ResearchLabInfo {
  description: string;
  websiteURL: string;
  group: string;
}
