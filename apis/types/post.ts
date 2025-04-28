export interface PostSearchQueryParams {
  pageNum?: string;
  keyword?: string;
  tag?: string[] | string;
}

export interface GETFacultyRecruitmentResponse {
  title: string;
  description: string;
  mainImageUrl: string | null;
}
