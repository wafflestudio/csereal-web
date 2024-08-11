export const FACULTY_STATUS = {
  ACTIVE: '교수',
  INACTIVE: '역대 교수',
  VISITING: '객원 교수',
} as const;

export type FacultyStatus = keyof typeof FACULTY_STATUS;

// 교수진
export interface SimpleFaculty {
  id: number;
  status: FacultyStatus;
  name: string;
  imageURL: string;
  academicRank: string;
  phone?: string;
  email?: string;
  labId?: number;
  labName?: string;
}

export interface FacultyList {
  description: string;
  professors: SimpleFaculty[];
}

export interface Faculty extends SimpleFaculty {
  office: string;
  fax?: string;
  website?: string;
  educations: string[];
  researchAreas?: string[];
  careers?: string[];
}

// 역대 교수진
export interface SimpleEmeritusFaculty {
  id: number;
  name: string;
  imageURL: string;
  academicRank: string;
  email?: string;
}

export interface EmeritusFaculty extends SimpleEmeritusFaculty {
  status: FacultyStatus;
  startDate: string;
  endDate: string;
  researchAreas?: string[];
  website?: string;
  careers?: string[];
  office?: string;
  educations: string[];
}

// 행정직원
export interface SimpleStaff {
  id: number;
  name: string;
  imageURL: string | null;
  role: string;
  office: string;
  phone: string;
  email: string;
}

export interface Staff extends SimpleStaff {
  tasks: string[];
}
