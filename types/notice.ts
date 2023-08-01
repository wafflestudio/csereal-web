// 백엔드에서 확정한 모델이 뭔지 알아야 함
export interface NoticePostSimple {
  readonly id: number;
  title: string;
  createdAt: string;
  isPinned: boolean;
}

export interface NoticePostFull extends NoticePostSimple {
  description: string;
  tags: string[]; // number[]로 수정 필요
  modifiedAt: string;
  isPublic: boolean;
  isSlide: boolean;
}
