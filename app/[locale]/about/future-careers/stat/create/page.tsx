'use client';

import { postCareerStatAction } from '@/actions/about';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { errorToStr } from '@/utils/error';
import { handleServerAction_legacy } from '@/utils/serverActionError';
import { errorToast, successToast } from '@/utils/toast';
import { CareerStat } from '@/apis/v2/about/future-careers/stats';
import CareerStatEditor from '../../components/CareerStatEditor';

export default function CareerStatCreatePage() {
  const onSubmit = async (formData: CareerStat) => {
    try {
      handleServerAction_legacy(await postCareerStatAction(formData));
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
