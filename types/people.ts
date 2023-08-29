export interface People {
  id: number;
  name: string;
  phone?: string;
  email?: string;
  imageURL: string;
}

export interface SimpleFacultyResponse extends People {
  academicRank: string;
  labId?: number;
  labName?: string;
  status?: 'ACTIVE' | 'INACTIVE' | 'VISITING';
}

export interface FacultyListResponse {
  facultyList: SimpleFacultyResponse[];
  description?: string;
}

export interface FacultyResponse extends SimpleFacultyResponse {
  isActive: boolean;
  startDate: Date;
  endDate: Date;
  office: string;
  fax?: string;
  website?: string;
  educations: string[];
  researchAreas: string[];
  careers?: string[];
}

export interface SimpleStaffResponse extends People {
  role: string;
  office: string;
}

export interface StaffListResponse {
  staffList: SimpleStaffResponse[];
}

export interface StaffReponse extends SimpleStaffResponse {
  tasks: string[];
}
