// 백엔드에서 확정한 모델이 뭔지 알아야 함
export interface Post {
  title: string;
  id: number;
  pin: boolean;
  tags: string[];
  date: string;
}
