import { readFileSync } from 'fs';

import { ResearchLab } from '@/types/research';

import { simpleResearchLabs } from './objects';

export const researchLabs: ResearchLab[] = [
  {
    ...simpleResearchLabs[0],
    description: readFileSync('data/htmls/lab0Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://datalab.snu.ac.kr/',
    group: '데이터베이스 및 빅데이터',
  },
  {
    ...simpleResearchLabs[1],
    description: readFileSync('data/htmls/lab1Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://dbs.snu.ac.kr/',
    group: '데이터베이스 및 빅데이터',
  },
  {
    ...simpleResearchLabs[2],
    description: readFileSync('data/htmls/lab2Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://mllab.snu.ac.kr/',
    group: '인공지능',
  },
  {
    ...simpleResearchLabs[3],
    description: readFileSync('data/htmls/lab3Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://bi.snu.ac.kr/',
    group: '인공지능',
  },
  {
    ...simpleResearchLabs[4],
    description: readFileSync('data/htmls/lab4Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://dcslab.snu.ac.kr/',
    group: '시스템 소프트웨어 및 분산시스템',
  },
  {
    ...simpleResearchLabs[5],
    description: readFileSync('data/htmls/lab5Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'https://jhugestar.github.io/',
    group: '인공지능',
  },
  {
    ...simpleResearchLabs[6],
    description: readFileSync('data/htmls/lab6Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'https://bda.snu.ac.kr/',
    group: '데이터베이스 및 빅데이터',
  },
  {
    ...simpleResearchLabs[7],
    description: readFileSync('data/htmls/lab7Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://biohealth.snu.ac.kr/',
    group: '인공지능',
  },
  {
    ...simpleResearchLabs[8],
    description: readFileSync('data/htmls/lab8Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://sf.snu.ac.kr/',
    group: '프로그래밍 시스템 및 SW공학',
  },
  {
    ...simpleResearchLabs[9],
    description: readFileSync('data/htmls/lab9Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://spl.snu.ac.kr/',
    group: '시스템 소프트웨어 및 분산시스템',
  },
  {
    ...simpleResearchLabs[10],
    description: readFileSync('data/htmls/lab10Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://vision.snu.ac.kr/',
    group: '인공지능',
  },
  {
    ...simpleResearchLabs[11],
    description: readFileSync('data/htmls/lab11Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://csl.snu.ac.kr/',
    group: '시스템 소프트웨어 및 분산시스템',
  },
  {
    ...simpleResearchLabs[12],
    description: readFileSync('data/htmls/lab12Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://rubis.snu.ac.kr/',
    group: '컴퓨터구조 및 임베디드',
  },
  {
    ...simpleResearchLabs[13],
    description: readFileSync('data/htmls/lab13Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://arc.snu.ac.kr/',
    group: '컴퓨터구조 및 임베디드',
  },
  {
    ...simpleResearchLabs[14],
    description: readFileSync('data/htmls/lab14Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'https://yongsoosong.github.io/',
    group: '네트워크',
  },
  {
    ...simpleResearchLabs[15],
    description: readFileSync('data/htmls/lab15Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'https://quiqcl.snu.ac.kr/',
    group: '컴퓨터구조 및 임베디드',
  },
  {
    ...simpleResearchLabs[16],
    description: readFileSync('data/htmls/lab16Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'https://seungwonh.github.io/ldi.html',
    group: '인공지능',
  },
  {
    ...simpleResearchLabs[17],
    description: readFileSync('data/htmls/lab17Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://mrl.snu.ac.kr/',
    group: '그래픽스 및 사람 중심 컴퓨팅',
  },
  {
    ...simpleResearchLabs[18],
    description: readFileSync('data/htmls/lab18Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://mccl.snu.ac.kr/',
    group: '네트워크',
  },
  {
    ...simpleResearchLabs[19],
    description: readFileSync('data/htmls/lab19Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'https://hcs.snu.ac.kr/',
    group: '그래픽스 및 사람 중심 컴퓨팅',
  },
  {
    ...simpleResearchLabs[20],
    description: readFileSync('data/htmls/lab20Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://mmlab.snu.ac.kr/',
    group: '네트워크',
  },
  {
    ...simpleResearchLabs[21],
    description: readFileSync('data/htmls/lab21Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://davinci.snu.ac.kr/',
    group: '컴퓨터구조 및 임베디드',
  },
  {
    ...simpleResearchLabs[22],
    description: readFileSync('data/htmls/lab22Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://ids.snu.ac.kr/',
    group: '데이터베이스 및 빅데이터',
  },
  {
    ...simpleResearchLabs[23],
    description: readFileSync('data/htmls/lab23Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://imo.snu.ac.kr/',
    group: '그래픽스 및 사람 중심 컴퓨팅',
  },
  {
    ...simpleResearchLabs[24],
    description: readFileSync('data/htmls/lab24Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://aces.snu.ac.kr/',
    group: '시스템 소프트웨어 및 분산시스템',
  },
  {
    ...simpleResearchLabs[25],
    description: readFileSync('data/htmls/lab25Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://soar.snu.ac.kr/',
    group: '이론 및 금융공학',
  },
  {
    ...simpleResearchLabs[26],
    description: readFileSync('data/htmls/lab26Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://cglab.snu.ac.kr/',
    group: '그래픽스 및 사람 중심 컴퓨팅',
  },
  {
    ...simpleResearchLabs[27],
    description: readFileSync('data/htmls/lab27Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://csap.snu.ac.kr/',
    group: '시스템 소프트웨어 및 분산시스템',
  },
  {
    ...simpleResearchLabs[28],
    description: readFileSync('data/htmls/lab28Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://theory.snu.ac.kr/',
    group: '이론 및 금융공학',
  },
  {
    ...simpleResearchLabs[29],
    description: readFileSync('data/htmls/lab29Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://cmalab.snu.ac.kr/',
    group: '컴퓨터구조 및 임베디드 시스템',
  },
  {
    ...simpleResearchLabs[30],
    description: readFileSync('data/htmls/lab30Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://iris.snu.ac.kr/',
    group: '컴퓨터구조 및 임베디드 시스템',
  },
  {
    ...simpleResearchLabs[31],
    description: readFileSync('data/htmls/lab31Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://ropas.snu.ac.kr/',
    group: '프로그래밍 시스템 및 SW공학',
  },
  {
    ...simpleResearchLabs[32],
    description: readFileSync('data/htmls/lab32Description.txt', { encoding: 'utf-8' }),
    websiteURL: 'http://hcil.snu.ac.kr/',
    group: '그래픽스 및 사람 중심 컴퓨팅',
  },
];
