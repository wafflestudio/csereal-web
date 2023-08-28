export interface SimpleFaculty {
  id: number;
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
  facultyList: SimpleFaculty[];
}

export interface Faculty extends SimpleFaculty {
  office: string;
  isActive: boolean;
  educations: string[];
  careers?: string[];
  researchAreas: string[];
  website?: string;
  fax?: string;
}

export interface SimpleEmiritusFaculty {
  id: number;
  name: string;
  imageURL: string;
  academicRank: string;
  email?: string;
}

export interface EmiritusFaculty extends SimpleEmiritusFaculty {
  startDate: Date;
  endDate: Date;
  researchAreas: string[];
  website?: string;
  careers?: string[];
}

export interface SimpleStaffResponse {
  id: number;
  name: string;
  imageURL: string;
  role: string;
  office: string;
  phone?: string;
  email?: string;
}

export interface StaffListResponse {
  staffList: SimpleStaffResponse[];
}

export interface StaffReponse extends SimpleStaffResponse {
  tasks: string[];
}
