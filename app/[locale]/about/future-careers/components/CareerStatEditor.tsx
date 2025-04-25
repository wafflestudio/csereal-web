import { FormProvider, useForm, useFormContext, useWatch } from 'react-hook-form';

import { CareerStat } from '@/apis/v2/about/future-careers/stats';
import { COMPANY_MAP, companyList, degreeList } from '@/apis/v2/about/future-careers/types';
import Fieldset from '@/components/form/Fieldset';
import Form from '@/components/form/Form';
import { futureCareers } from '@/constants/segmentNode';
import { useRouter } from '@/i18n/routing';
import { getPath } from '@/utils/page';

interface Props {
  defaultValues?: CareerStat;
  onSubmit: (formData: CareerStat) => Promise<void>;
}

const DEGREE_MAP = { bachelor: '학부', master: '석사', doctor: '박사' } as const;

const careerPath = getPath(futureCareers);

const DEFAULT_STATS: CareerStat = {
  year: new Date().getFullYear() + 1,
  statList: companyList.map((company) => ({ career: company, bachelor: 0, master: 0, doctor: 0 })),
};

export default function CareerStatEditor({ onSubmit, defaultValues }: Props) {
  const formMethods = useForm<CareerStat>({ defaultValues: defaultValues ?? DEFAULT_STATS });
  const { handleSubmit } = formMethods;

  const router = useRouter();
  const onCancel = () => router.push(careerPath);

  return (
    <FormProvider {...formMethods}>
      <Form>
        <Fieldset title="연도" mb="mb-6" titleMb="mb-2">
          <Form.Text name="year" maxWidth="w-[55px]" />
        </Fieldset>

        <div className="border-y-[1px] border-y-neutral-300 text-xs font-normal sm:w-[432px]">
          <TableHeader />
          <TableBody />
        </div>
        <Form.Action onCancel={onCancel} onSubmit={handleSubmit(onSubmit)} />
      </Form>
    </FormProvider>
  );
}

function TableHeader() {
  return (
    <div className="flex h-9 flex-1 border-b border-b-neutral-300 bg-neutral-100">
      <div className="w-[6.25rem]" />
      {degreeList.map((degree) => (
        <div key={degree} className="flex flex-1 items-center justify-center">
          <p className="text-sm">{DEGREE_MAP[degree]}</p>
        </div>
      ))}
    </div>
  );
}

function TableBody() {
  const { control } = useFormContext<CareerStat>();
  const statList = useWatch({ name: 'statList', control });

  return statList.map((stat, idx) => {
    return (
      <div key={idx} className={`flex flex-1 flex-row border-b border-neutral-200 last:border-0`}>
        <div className="flex w-[6.25rem] items-center justify-center bg-neutral-100 text-sm">
          {COMPANY_MAP[stat.career]}
        </div>
        {degreeList.map((degree) => (
          <div key={degree} className="flex flex-1 items-center justify-center py-1.5 text-md">
            <Form.Text name={`statList.${idx}.${degree}`} maxWidth="max-w-[80px]" textCenter />
          </div>
        ))}
      </div>
    );
  });
}
