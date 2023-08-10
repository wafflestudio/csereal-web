export interface Post {
  title: string;
  description: string;
  isPublic: boolean;
  isSlide: boolean;
}

export interface PostResponse extends Post {
  readonly id: number;
  readonly createdAt: string;
  readonly modifiedAt: string;
  readonly prevId: number | null;
  readonly nextId: number | null;
}

export interface NoticePost extends Post {
  tags: string[];
  isPinned: boolean;
}

export interface NoticePostResponse extends NoticePost, PostResponse {}

export interface SimpleNoticePost
  extends Pick<NoticePostResponse, 'id' | 'title' | 'isPinned' | 'createdAt'> {}

export interface GETNoticePostsResponse {
  total: number;
  searchList: SimpleNoticePost[];
}

export interface AdjPostInfo {
  title: string;
  href: string;
}

export interface GETNewsPostsResponse {
  total: number;
  searchList: {
    id: number;
    title: string;
    tags: string[];
    description: string;
    createdAt: string;
    imageURL: string;
  }[];
}

export interface GETNewsPostResponse {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  modifiedAt: string;
  prevId: number | null;
  nextId: number | null;
}

export interface GETSeminarPostsResponse {
  total: number;
  seminarList: SimpleSeminarPost[];
}

export interface SimpleSeminarPost
  extends Pick<
    SeminarPostResponse,
    'id' | 'title' | 'host' | 'company' | 'date' | 'location' | 'imageURL' | 'isLast'
  > {}

export interface SeminarPostResponse extends PostResponse {
  host: string;
  company: string;
  professor: string;
  date: string;
  location: string;
  description: string;
  hostDescription: string;
  imageURL: string;
  isLast?: boolean;
}

export interface GETFacilitiesPostsResponse {
  facilitiesList: {
    name: string;
    description: string;
    location: string;
    imageURL: string;
  }[];
}
