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

// 공지사항

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

// 새소식

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

// 신임교수초빙

export interface GETFacultyRecruitmentResponse {
  latestRecruitmentPostTitle: string;
  latestRecruitmentPostHref: string;
  htmlContent: string;
}
