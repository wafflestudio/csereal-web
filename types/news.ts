export interface NewsPreview {
  id: number;
  title: string;
  description: string;
  tags: string[];
  createdAt: string;
  isPrivate: boolean;
  imageURL: string | null;
}

export interface NewsPreviewList {
  total: number;
  searchList: NewsPreview[];
}

export interface News {
  title: string;
  description: string;
  isPrivate: boolean;
  tags: string[];
  imageURL: string | null;
  isSlide: boolean;
  isImportant: boolean;

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

export interface POSTNewsBody {
  request: {
    title: string;
    titleForMain: string | null;
    description: string;
    isPrivate: boolean;
    isSlide: boolean;
    isImportant: boolean;
    tags: string[];
  };
  mainImage: File | null;
  attachments: File[];
}

export interface PATCHNewsBody {
  request: {
    title: string;
    titleForMain: string | null;
    description: string;
    isPrivate: boolean;
    isSlide: boolean;
    isImportant: boolean;
    tags: string[];
    deleteIds: number[];
  };
  mainImage: File | null;
  newAttachments: File[];
}
