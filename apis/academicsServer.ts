// TODO: 서버에서 제공되면 파일 삭제

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
