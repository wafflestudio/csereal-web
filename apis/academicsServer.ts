import { getMockDegreeRequirements } from '@/data/objects';
import {
  getMockCurriculum,
  getMockGeneralStudiesRequirements,
  getMockScholarship,
  getMockUndergraduateScholarshipList,
} from '@/data/serverObjects';

export const getDegreeRequirements = getMockDegreeRequirements;

export const getCurriculum = getMockCurriculum;

export const getGeneralStudiesRequirements = getMockGeneralStudiesRequirements;

export const getUndergraduateScholarshipList = getMockUndergraduateScholarshipList;

export const getScholarship = getMockScholarship;

// export const getDegreeRequirements = () =>
//   getRequest(`/academics/undergraduate/degree-requirements`) as Promise<DegreeRequirements[]>;

// export const getCurriculum = () =>
//    getRequest(`/academics/undergraduate/curriculum`) as Promise<Curriculum[]>;

// export const getGeneralStudiesRequirements = () =>
//   getRequest(
//     `/academics/undergraduate/general-studies-requirements`,
//   ) as Promise<GeneralStudiesRequirements>;

// export const getUndergraduateScholarshipList = () =>
//   getRequest('/academics/undergraduate/general-studies-requirements') as Promise<ScholarshipList>;

// export const getScholarship = (id: number) =>
//   getRequest('/academics/undergraduate/general-studies-requirements') as Promise<Scholarship>;
