// 공통 - - - - - - - - - - - - - - - - - - - -

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

export interface AdjPostInfo {
  title: string;
  href: string;
}

// **아래부터는 page.ts에 정의된 순서대로 정렬**

// 학부 소개, 학부장 인사말 등 - - - - - - - - - - - - - - - - - - - -

export interface SimpleHTMLPageResponse {
  mainImageURL: string;
  htmlContent: string;
}

// 새소식 - - - - - - - - - - - - - - - - - - - -

export interface NewsPost extends Post {
  tags: string[];
  imageURL: string;
}

export interface NewsPostResponse extends NewsPost, PostResponse {}

export interface SimpleNewsPost
  extends Pick<
    NewsPostResponse,
    'id' | 'title' | 'description' | 'tags' | 'createdAt' | 'imageURL'
  > {}

export interface GETNewsPostsResponse {
  total: number;
  searchList: SimpleNewsPost[];
}

// 공지사항 - - - - - - - - - - - - - - - - - - - -

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

// 신임교수초빙 - - - - - - - - - - - - - - - - - - - -

export interface GETFacultyRecruitmentResponse {
  latestRecruitmentPostTitle: string;
  latestRecruitmentPostHref: string;
  htmlContent: string;
}
