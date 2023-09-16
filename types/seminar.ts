export interface SeminarPreview {
  id: number;
  title: string;
  description: string;
  name: string;
  affiliation: string;
  startDate: string;
  location: string;
  imageURL: string | null;
  isYearLast: boolean;
}

export interface SeminarList {
  total: number;
  searchList: SeminarPreview[];
}

export interface Seminar {
  title: string;
  description: string;
  isPublic: boolean;

  introduction: string;
  category: string;
  name: string;
  speakerUrl: string | null;
  speakerTitle: string | null;
  affiliation: string;
  affiliationUrl: string | null;
  startDate: string;
  endDate: string;
  location: string;
  host: string;
  isImportant: boolean;
  imageURL: string | null;

  id: number;
  createdAt: string;
  modifiedAt: string;
  prevId: number | null;
  prevTitle: string | null;
  nextId: number | null;
  nextTitle: string | null;
  attachments: {
    id: number;
    name: string;
    url: string;
    bytes: number;
  }[];
}

export interface POSTSeminarBody {
  request: {
    title: string;
    titleForMain: string | null;
    description: string;
    introduction: string;
    name: string;
    speakerURL: string | null;
    speakerTitle: string | null;
    affiliation: string;
    affiliationURL: string | null;
    startDate: string | null;
    endDate: string | null;
    location: string;
    host: string | null;
    isPublic: boolean;
    isImportant: boolean;
  };
  image: File | null;
  attachments: File[];
}

export interface PATCHSeminarBody {
  request: {
    title: string;
    titleForMain: string | null;
    description: string;
    introduction: string;
    name: string;
    speakerURL: string | null;
    speakerTitle: string | null;
    affiliation: string;
    affiliationURL: string | null;
    startDate: string | null;
    endDate: string | null;
    location: string;
    host: string | null;
    isPublic: boolean;
    isImportant: boolean;

    deleteIds: number[];
  };
  newAttachments: File[];
  image: File | null;
}
