export interface Post {
  title: string;
  description: string;
  isPublic: boolean;
  isSlide: boolean;
}

export interface FullPost extends Post {
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

export interface FullNoticePost extends NoticePost, FullPost {}

export interface SimpleNoticePost
  extends Pick<FullNoticePost, 'id' | 'title' | 'isPinned' | 'createdAt'> {}

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
      author: string;
      company: string;
      date: string;
      location: string;
      imageURL: string;
    }[];
  }[];
}
