interface NewsPreview {
  id: number;
  title: string;
  description: string;
  tags: string[];
  createdAt: string;
  isPrivate: boolean;
  imageURL: string | null;
  date: string;
}

export interface NewsPreviewList {
  total: number;
  searchList: NewsPreview[];
}

export interface News {
  title: string;
  titleForMain: string | null;
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

  date: string;
}
