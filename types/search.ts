interface NoticeSearchResult {
  total: number;
  results: {
    id: number;
    title: string;
    createdAt: string;
    partialDescription: string;
    boldStartIndex: number;
    boldEndIndex: number;
  }[];
}

interface NewsSearchResult {
  total: number;
  results: {
    id: number;
    title: string;
    date: string;
    partialDescription: string;
    boldStartIndex: number;
    boldEndIndex: number;
    tags: string[];
    imageUrl: string | null;
  }[];
}

