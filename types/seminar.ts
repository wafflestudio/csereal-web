export interface SeminarPreviewList {
  total: number;
  searchList: SeminarPreview[];
}

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

export interface Seminar {
  affiliation: string | null;
  affiliationURL: string | null;
  attachments: {
    id: number;
    name: string;
    url: string;
    bytes: number;
  }[];
  createdAt: string;
  description: string | null;
  endDate: string | null;
  host: string | null;
  id: number;
  imageURL: string | null;
  introduction: string | null;
  isImportant: boolean;
  isPrivate: boolean;
  location: string;
  modifiedAt: string;
  name: string | null;
  nextId: number | null;
  nextTitle: string | null;
  prevId: number | null;
  prevTitle: string | null;
  speakerTitle: string | null;
  speakerURL: string | null;
  startDate: string;
  title: string;
  titleForMain: string;
}

export interface POSTSeminarBody {
  request: {
    title: string | null;
    titleForMain: string | null;
    description: string | null;
    introduction: string | null;
    name: string | null;
    speakerURL: string | null;
    speakerTitle: string | null;
    affiliation: string | null;
    affiliationURL: string | null;
    startDate: string;
    endDate: string | null;
    location: string;
    host: string | null;
    isPrivate: boolean;
    isImportant: boolean;
  };

  image: File | null;
  attachments: File[];
}

export interface PATCHSeminarBody {
  request: {
    title: string | null;
    titleForMain: string | null;
    description: string | null;
    introduction: string | null;
    name: string | null;
    speakerURL: string | null;
    speakerTitle: string | null;
    affiliation: string | null;
    affiliationURL: string | null;
    startDate: string;
    endDate: string | null;
    location: string;
    host: string | null;
    isPrivate: boolean;
    isImportant: boolean;

    deleteIds: number[];
  };

  newAttachments: File[];
  image: File | null;
}
