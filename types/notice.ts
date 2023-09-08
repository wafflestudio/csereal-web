export interface NoticePreview {
  id: number;
  title: string;
  isPinned: boolean;
  createdAt: string;
  hasAttachment: boolean;
  isPublic: boolean;
}

export interface NoticePreviewList {
  total: number;
  searchList: NoticePreview[];
}

export interface Notice {
  title: string;
  description: string;
  isPublic: boolean;
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
    name: string;
    url: string;
    bytes: number;
  }[];
}

export interface POSTNoticeBody {
  request: {
    title: string;
    description: string;
    isPublic: boolean;
    isPinned: boolean;
    isImportant: boolean;
    tags: string[];
  };
  attachments: File[];
}

export interface PatchNoticeBody {
  request: {
    title: string;
    description: string;
    isPublic: boolean;
    isPinned: boolean;
    isImportant: boolean;
    tags: string[];
    attachments: {
      name: string;
      url: string;
      bytes: number;
    }[];
  };
  newAttachments: File[];
}
