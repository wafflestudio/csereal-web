export interface NoticePost {
  title: string;
  description: string;
  tags: string[];
  isPublic: boolean;
  isSlide: boolean;
  isPinned: boolean;
}

export interface NoticePostFull extends NoticePost {
  readonly id: number;
  readonly createdAt: string;
  readonly modifiedAt: string;
}

export interface NoticePostSimple
  extends Pick<NoticePostFull, 'id' | 'title' | 'isPinned' | 'createdAt'> {}
