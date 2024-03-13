// 공통 - - - - - - - - - - - - - - - - - - - -

// 유저가 포스트 작성할 때 직접 입력하는 것들
export interface Post {
  title: string;
  // html 내용
  description: string;
  isPrivate: boolean;
  attachments: FormData;
}

// 서버에서 만드는 속성들이 포함됨
export interface PostResponse extends Omit<Post, 'attachments'> {
  readonly id: number;
  readonly createdAt: string;
  readonly modifiedAt: string;
  readonly prevId: number | null;
  readonly prevTitle: string | null;
  readonly nextId: number | null;
  readonly nextTitle: string | null;
  readonly attachments: {
    name: string;
    url: string;
    bytes: number;
  }[];
}

export interface PostSearchQueryParams {
  pageNum?: string;
  keyword?: string;
  tag?: string[] | string;
}

// **아래부터는 page.ts에 정의된 순서대로 정렬**

// 학부 소개, 학부장 인사말 등 - - - - - - - - - - - - - - - - - - - -

export interface SimpleHTMLPageResponse {
  mainImageURL: string;
  description: string;
}

// 신임교수초빙 - - - - - - - - - - - - - - - - - - - -

export interface GETFacultyRecruitmentResponse {
  latestRecruitmentPostTitle: string;
  latestRecruitmentPostHref: string;
  description: string;
}
