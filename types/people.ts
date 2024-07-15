export const FACULTY_STATUS = ['ACTIVE', 'INACTIVE', 'VISITING'] as const;
export type FacultyStatus = (typeof FACULTY_STATUS)[number];

export const facultyStatusToKo = (status: FacultyStatus) => {
  switch (status) {
    case 'ACTIVE':
      return '교수';
    case 'VISITING':
      return '객원 교수';
    case 'INACTIVE':
      return '역대 교수';
  }
};

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
export interface SimpleEmiritusFaculty {
  id: number;
  name: string;
  imageURL: string;
  academicRank: string;
  email?: string;
}

export interface EmiritusFaculty extends SimpleEmiritusFaculty {
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
