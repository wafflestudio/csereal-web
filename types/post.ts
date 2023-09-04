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

// 새소식 - - - - - - - - - - - - - - - - - - - -

export interface NewsPost extends Post {
  tags: string[];
  imageURL: string | null;
  isSlide: boolean;
  isImportant: boolean;
}

export interface NewsPostResponse extends Omit<NewsPost, 'attachments'>, PostResponse {}

export interface SimpleNewsPost
  extends Pick<
    NewsPostResponse,
    'id' | 'title' | 'description' | 'tags' | 'createdAt' | 'imageURL'
  > {}

export interface GETNewsPostsResponse {
  total: number;
  searchList: SimpleNewsPost[];
}

export interface POSTNewsBody {
  request: {
    title: string;
    description: string;
    isPublic: boolean;
    isSlide: boolean;
    isImportant: boolean;
    tags: string[];
  };
  mainImage: File | null;
  attachments: File[];
}

export interface PATCHNewsBody {
  request: {
    title: string;
    description: string;
    isPublic: boolean;
    isSlide: boolean;
    isImportant: boolean;
    tags: string[];
    attachments: {
      name: string;
      url: string;
      bytes: number;
    }[];
  };
  mainImage: File | null;
  newAttachments: File[];
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
    // additionalNote: string | null;
  };
  image: File | null;
  attachments: File[];
}

export interface SeminarPostResponse extends Omit<PostResponse, 'attachment'> {
  introduction: string;
  category: string;
  name: string;
  speakerUrl?: string;
  speakerTitle?: string;
  affiliation: string;
  affiliationUrl?: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  location: string;
  host: string;
  isSlide: boolean;
  imageURL: string | null;
  additionalNote?: string;
}
