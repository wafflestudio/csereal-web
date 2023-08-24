export interface Overview {
  description: string;
  imageURL: string;
  attachment: {
    name: string;
    url: string;
    bytes: number;
  };
}

export interface Greetings {
  description: string;
  imageURL: string;
}

export interface History {
  description: string;
  imageURL: string;
}

export interface FutureCareers {
  description: string;
  // 타입 달라지면 수정할 때 답도 없어서 일단 단순 배열로 처리
  // 행: 삼성, LG, 기타 대기업, 중소기업, 진학, 기타
  // 열: 학부, 석사, 박사
  stat: { [year: number]: number[][] };
  companies: {
    name: string;
    url?: string;
    year: number;
  }[];
}

export interface Club {
  name: string;
  engName: string;
  description: string;
  imageURL?: string;
}

export interface Facilities {
  facilitiesList: {
    name: string;
    description: string;
    location: string;
    imageURL: string;
  }[];
}
