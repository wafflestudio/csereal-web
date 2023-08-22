export interface Guide {
  description: string;
}

export interface Course {
  name: string;
  description: string;
  grade: number;
  courseType: number; // 전필: 1, 전선: 2, 교양: 3
  credit: number;
  code: string;
}
