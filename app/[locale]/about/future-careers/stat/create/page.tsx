'use client';

import { postCareerStatAction } from '@/actions/about';
import { CareerStat } from '@/apis/v2/about/future-careers/stats';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { errorToStr } from '@/utils/error';
import { handleServerAction } from '@/utils/serverActionError';
import { errorToast, successToast } from '@/utils/toast';

import CareerStatEditor from '../../components/CareerStatEditor';

export default function CareerStatCreatePage() {
  const onSubmit = async (formData: CareerStat) => {
    try {
      handleServerAction(await postCareerStatAction(formData));
      successToast('졸업생 진로 현황을 추가했습니다.');
    } catch (e) {
      errorToast(errorToStr(e));
    }
  };

  return (
    <PageLayout title="졸업생 진로 현황 추가" titleType="big" hideNavbar>
      <CareerStatEditor onSubmit={onSubmit} />
    </PageLayout>
  );
}
