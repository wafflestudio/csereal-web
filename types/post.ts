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

export interface NoticePostFull extends NoticePost, FullPost {}

export interface NoticePostSimple
  extends Pick<NoticePostFull, 'id' | 'title' | 'isPinned' | 'createdAt'> {}
