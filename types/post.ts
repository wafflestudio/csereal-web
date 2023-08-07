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
  searchList: {
    year: number;
    seminarList: {
      id: number;
      title: string;
      host: string;
      company: string;
      date: string;
      location: string;
      imageURL: string;
    }[];
  }[];
}

export interface SeminarPostResponse {
  id: number;
  title: string;
  host: string;
  company: string;
  professor: string;
  date: string;
  location: string;
  abstract: string;
  hostDescription: string;
  imageURL: string;
  prevId: number | null;
  nextId: number | null;
}

export interface GETFacilitiesPostsResponse {
  facilitiesList: {
    name: string;
    description: string;
    location: string;
    imageURL: string;
  }[];
}
