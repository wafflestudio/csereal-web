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

export interface ResearchCenters {
  centers: ResearchCenter[];
}
