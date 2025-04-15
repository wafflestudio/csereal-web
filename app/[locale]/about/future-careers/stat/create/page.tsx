'use client';

import { postCareerStatAction } from '@/actions/about';
import { CareerStat } from '@/apis/v2/about/future-careers/stats';
import CareerStatEditor from '@/app/[locale]/about/future-careers/components/CareerStatEditor';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { handleServerResponse } from '@/utils/serverActionError';

export default function CareerStatCreatePage() {
  const onSubmit = async (formData: CareerStat) => {
    const resp = await postCareerStatAction(formData);
    handleServerResponse(resp, { successMessage: '졸업생 진로 현황을 추가했습니다.' });
  };

  return (
    <PageLayout title="졸업생 진로 현황 추가" titleType="big" hideNavbar>
      <CareerStatEditor onSubmit={onSubmit} />
    </PageLayout>
  );
}
