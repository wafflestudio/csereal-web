export interface NoticePreview {
  id: number;
  title: string;
  isPinned: boolean;
  createdAt: string;
  hasAttachment: boolean;
  isPrivate: boolean;
}

export interface NoticePreviewList {
  total: number;
  searchList: NoticePreview[];
}

export interface Notice {
  title: string;
  titleForMain: string | null;
  description: string;
  isPrivate: boolean;
  tags: string[];
  isPinned: boolean;
  isImportant: boolean;
  author: string;

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
