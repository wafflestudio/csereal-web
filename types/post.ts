// 공통 - - - - - - - - - - - - - - - - - - - -

// 유저가 포스트 작성할 때 직접 입력하는 것들
export interface Post {
  title: string;
  // html 내용
  description: string;
  isPublic: boolean;
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

export interface AdjPostInfo {
  title: string;
  href: string;
}

export interface PostSearchQueryParams {
  page?: number;
  keyword?: string;
  tag?: string[] | string;
}

// **아래부터는 page.ts에 정의된 순서대로 정렬**

// 학부 소개, 학부장 인사말 등 - - - - - - - - - - - - - - - - - - - -

export interface SimpleHTMLPageResponse {
  mainImageURL: string;
  description: string;
}

// 공지사항 - - - - - - - - - - - - - - - - - - - -

export interface NoticePost extends Post {
  tags: string[];
  isPinned: boolean;
  isImportant: boolean;
}

export interface NoticePostResponse extends Omit<NoticePost, 'attachments'>, PostResponse {
  author: string;
}

export interface SimpleNoticePost
  extends Pick<NoticePostResponse, 'id' | 'title' | 'isPinned' | 'createdAt'> {
  hasAttachment: boolean;
}

export interface GETNoticePostsResponse {
  total: number;
  searchList: SimpleNoticePost[];
}

export interface POSTNoticeBody {
  request: {
    title: string;
    description: string;
    isPublic: boolean;
    isSlide: boolean;
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
    isSlide: boolean;
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

// 신임교수초빙 - - - - - - - - - - - - - - - - - - - -

export interface GETFacultyRecruitmentResponse {
  latestRecruitmentPostTitle: string;
  latestRecruitmentPostHref: string;
  description: string;
}

// 세미나 - - - - - - - - - - - - - - - - - - - - - -

export interface GETSeminarPostsResponse {
  total: number;
  searchList: SimpleSeminarPost[];
}

export interface SimpleSeminarPost
  extends Pick<
    SeminarPostResponse,
    'id' | 'title' | 'name' | 'affiliation' | 'startDate' | 'location' | 'imageURL'
  > {
  isYearLast: boolean;
}

export interface POSTSeminarBody {
  request: {
    title: string;
    description: string;
    introduction: string;
    name: string;
    speakerURL: string | null;
    speakerTitle: string | null;
    affiliation: string;
    affiliationURL: string | null;
    startDate: string | null;
    startTime: string | null;
    endDate: string | null;
    endTime: string | null;
    location: string;
    host: string | null;
    isPublic: boolean;
    isImportant: boolean;
  };
  image: File | null;
  attachments: File[];
}

export interface SeminarPostResponse {
  id: number;
  title: string;
  description: string;
  isPublic: boolean;

  createdAt: string;
  modifiedAt: string;
  prevId: number | null;
  prevTitle: string | null;
  nextId: number | null;
  nextTitle: string | null;

  introduction: string;
  category: string;
  name: string;
  speakerUrl: string | null;
  speakerTitle: string | null;
  affiliation: string;
  affiliationUrl: string | null;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  location: string;
  host: string;
  isImportant: boolean;
  imageURL: string | null;
  attachments: {
    name: string;
    url: string;
    bytes: number;
  }[];
}

export interface PatchSeminarBody {
  request: {
    introduction: string;
    category: string;
    name: string;
    speakerUrl: string | null;
    speakerTitle: string | null;
    affiliation: string;
    affiliationUrl: string | null;
    startDate: string | null;
    startTime: string | null;
    endDate: string | null;
    endTime: string | null;
    location: string;
    host: string | null;
    isSlide: boolean;
    attachments: {
      name: string;
      url: string;
      bytes: number;
    }[];
  };
  newAttachments: File[];
  image: File | null;
}
