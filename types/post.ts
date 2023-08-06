// 공통
// 유저가 포스트 작성할 때 직접 입력하는 것들
export interface Post {
  title: string;
  description: string;
  isPublic: boolean;
  isSlide: boolean;
}

// 서버에서 만드는 속성들이 포함됨
export interface PostResponse extends Post {
  readonly id: number;
  readonly createdAt: string;
  readonly modifiedAt: string;
  readonly prevId: number | null;
  readonly nextId: number | null;
}

// 학부 소개

export interface OverviewResponse {
  mainImageURL: string;
  htmlContent: string;
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
