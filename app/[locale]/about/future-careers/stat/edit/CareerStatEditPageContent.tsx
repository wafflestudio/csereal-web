'use client';

import { putCareerStatAction } from '@/actions/about';
import { FutureCareers } from '@/apis/types/about';
import { CareerStat } from '@/apis/v2/about/future-careers/stats';
import { COMPANY_MAP, companyList } from '@/apis/v2/about/future-careers/types';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { errorToStr } from '@/utils/error';
import { handleServerAction } from '@/utils/serverActionError';
import { errorToast, successToast } from '@/utils/toast';

import CareerStatEditor from '../../components/CareerStatEditor';

export default function CareerStatEditPageContent({
  data,
}: {
  data: FutureCareers['stat'][number];
}) {
  const careerStat = {
    year: data.year,
    statList: companyList.map((company) => {
      return {
        career: company,
        bachelor: data.bachelor.find((x) => x.name === COMPANY_MAP[company])?.count ?? 0,
        master: data.master.find((x) => x.name === COMPANY_MAP[company])?.count ?? 0,
        doctor: data.doctor.find((x) => x.name === COMPANY_MAP[company])?.count ?? 0,
      };
    }),
  };

  const onSubmit = async (content: CareerStat) => {
    try {
      handleServerAction(await putCareerStatAction(content));
      successToast('졸업생 진로 현황을 수정했습니다.');
    } catch (e) {
      errorToast(errorToStr(e));
    }
  };

  return (
    <PageLayout title={`${data.year}년 졸업생 진로 현황 편집`} titleType="big" hideNavbar>
      <CareerStatEditor defaultValues={careerStat} onSubmit={onSubmit} />
    </PageLayout>
  );
}
