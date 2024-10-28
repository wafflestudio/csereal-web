'use client';

import { useTranslations } from 'next-intl';
import { useReducer, useState } from 'react';

import {
  deleteCareerCompanyAction,
  postCareerCompanyAction,
  putCareerCompanyAction,
} from '@/actions/about';
import { BlackButton, DeleteButton, GrayButton, OrangeButton } from '@/components/common/Buttons';
import LoginVisible from '@/components/common/LoginVisible';
import { buildPostHandler, EditAction } from '@/components/editor/common/ActionButtons';
import BasicTextInput from '@/components/editor/common/BasicTextInput';
import AlertModal from '@/components/modal/AlertModal';
import { FutureCareers } from '@/types/about';
import { errorToStr } from '@/utils/error';
import { validateCareerCompanyForm } from '@/utils/formValidation';
import useEditorContent from '@/utils/hooks/useEditorContent';
import useModal from '@/utils/hooks/useModal';
import { isNumber } from '@/utils/number';
import { handleServerAction } from '@/utils/serverActionError';
import { errorToast, successToast } from '@/utils/toast';

export default function CareerCompanies({ companies }: { companies: FutureCareers['companies'] }) {
  const t = useTranslations('Content');

  const [showCreateForm, toggleCreateForm] = useReducer((x) => !x, false);

  const handleCreate = async (content: CareerCompanyEditorContent) => {
    try {
      validateCareerCompanyForm(content);
      handleServerAction(await postCareerCompanyAction(content));
      toggleCreateForm();
      successToast('졸업생 창업 기업을 추가했습니다.');
    } catch (e) {
      errorToast(errorToStr(e));
    }
  };

  return (
    <div className="mt-11 sm:max-w-fit">
      <div className="mb-3 flex items-center justify-between gap-2">
        <h3 className="text-base font-bold">{t('졸업생 창업 기업')}</h3>
        {/* UI가 과하게 깨지는 관계로 모바일 버전에서는 편집 X */}
        <div className="hidden sm:block">
          <LoginVisible staff>
            <OrangeButton title="기업 추가" onClick={toggleCreateForm} disabled={showCreateForm} />
          </LoginVisible>
        </div>
      </div>
      <div className="border-y border-neutral-200 text-sm font-normal">
        <CompanyTableHeader />
        {showCreateForm && (
          <CareerCompanyEditor
            actions={{ type: 'EDIT', onCancel: toggleCreateForm, onSubmit: handleCreate }}
          />
        )}
        <ol>
          {companies.map((company, index) => (
            <CompanyTableRow key={company.id} index={index + 1} company={company} />
          ))}
        </ol>
      </div>
    </div>
  );
}

const TABLE_COLUMN_SIZE = ['sm:w-[3rem]', 'sm:w-[12.5rem]', 'sm:w-80', 'sm:w-20', 'sm:w-32'];

function CompanyTableHeader() {
  const t = useTranslations('Content');

  return (
    <div className="hidden h-10 items-center gap-3 whitespace-nowrap border-b border-neutral-200 sm:flex sm:px-3">
      <p className={TABLE_COLUMN_SIZE[0]}>{t('연번')}</p>
      <p className={`${TABLE_COLUMN_SIZE[1]} pl-2`}>{t('창업 기업명')}</p>
      <p className={`${TABLE_COLUMN_SIZE[2]} pl-2`}>{t('홈페이지')}</p>
      <p className={`${TABLE_COLUMN_SIZE[3]} pl-2`}>{t('창업연도')}</p>
      {/* 표 본문과 UI 정렬을 맞추기 위함 */}
      <LoginVisible staff>
        <p className={`hidden shrink-0 sm:block ${TABLE_COLUMN_SIZE[4]}`} />
      </LoginVisible>
    </div>
  );
}

interface CompanyTableRowProps {
  index: number;
  company: FutureCareers['companies'][number];
}

function CompanyTableRow({ index, company }: CompanyTableRowProps) {
  const [edit, toggleEdit] = useReducer((x) => !x, false);

  const handleSubmit = async (content: CareerCompanyEditorContent) => {
    try {
      validateCareerCompanyForm(content);
      handleServerAction(await putCareerCompanyAction(company.id, { id: company.id, ...content }));
      toggleEdit();
      successToast('졸업생 창업 기업을 수정했습니다.');
    } catch (e) {
      errorToast(errorToStr(e));
    }
  };

  return edit ? (
    <CareerCompanyEditor
      index={index}
      company={company}
      actions={{ type: 'EDIT', onSubmit: handleSubmit, onCancel: toggleEdit }}
    />
  ) : (
    <CareerCompanyViewer index={index} company={company} toggleEdit={toggleEdit} />
  );
}

function CareerCompanyViewer({
  index,
  company,
  toggleEdit,
}: CompanyTableRowProps & { toggleEdit: () => void }) {
  const { id, name, url, year } = company;

  const handleDelete = async () => {
    try {
      handleServerAction(await deleteCareerCompanyAction(id));
      successToast('졸업생 창업 기업을 삭제했습니다.');
    } catch (e) {
      errorToast(errorToStr(e));
    }
  };

  return (
    <li className="grid grid-cols-[22px,_auto,_1fr] items-center gap-x-1 px-7 py-6 odd:bg-neutral-100 sm:flex sm:h-10 sm:gap-3 sm:p-0 sm:px-3">
      <p className={`text-sm text-neutral-400 sm:pl-2 ${TABLE_COLUMN_SIZE[0]}`}>{index}</p>
      <p
        className={`text-md font-medium sm:pl-2 sm:text-sm sm:font-normal ${TABLE_COLUMN_SIZE[1]}`}
      >
        {name}
      </p>
      <a
        className={`order-last col-span-2 col-start-2 w-fit text-xs text-link hover:underline sm:order-none sm:mt-0 sm:pl-2 
          ${url && 'mt-1'} ${TABLE_COLUMN_SIZE[2]}`}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {url}
      </a>
      <p className={`pl-2 text-sm text-neutral-400 ${TABLE_COLUMN_SIZE[3]}`}>{year}</p>
      <LoginVisible staff>
        <div className={`hidden shrink-0 gap-2 sm:flex ${TABLE_COLUMN_SIZE[4]}`}>
          <GrayButton title="편집" onClick={toggleEdit} />
          <DeleteButton onDelete={handleDelete} />
        </div>
      </LoginVisible>
    </li>
  );
}

export interface CareerCompanyEditorContent {
  name: string;
  url?: string;
  year: number;
}

const DEFAULT_COMPANY = { name: '', url: '', year: 0 };

function CareerCompanyEditor({
  index,
  company,
  actions,
}: Partial<CompanyTableRowProps> & {
  actions: EditAction<CareerCompanyEditorContent>;
}) {
  const { content, setContentByKey } = useEditorContent(company ?? DEFAULT_COMPANY);
  const { openModal } = useModal();
  const [requesting, setRequesting] = useState(false);

  const handleCancel = () => {
    if (content.name || content.url || content.year)
      openModal(<AlertModal message="편집중인 내용이 사라집니다." onConfirm={actions.onCancel} />);
    else {
      actions.onCancel();
    }
  };

  return (
    <li className="grid grid-cols-[22px,_auto,_1fr] items-center gap-x-1 px-7 py-6 odd:bg-neutral-100 sm:flex sm:h-10 sm:gap-3 sm:p-0 sm:px-3">
      <p className={`text-sm text-neutral-400 sm:pl-2 ${TABLE_COLUMN_SIZE[0]}`}>{index}</p>
      <div className={`text-md font-medium sm:text-sm sm:font-normal ${TABLE_COLUMN_SIZE[1]}`}>
        <BasicTextInput value={content.name} onChange={setContentByKey('name')} maxWidth="w-full" />
      </div>
      <div className={`text-md font-medium sm:text-sm sm:font-normal ${TABLE_COLUMN_SIZE[2]}`}>
        <BasicTextInput
          value={content.url ?? ''}
          onChange={setContentByKey('url')}
          maxWidth="w-full"
        />
      </div>
      <div className={`text-md font-medium sm:text-sm sm:font-normal ${TABLE_COLUMN_SIZE[3]}`}>
        <BasicTextInput
          value={content.year.toString()}
          onChange={(text) => isNumber(text) && setContentByKey('year')(Number(text))}
          maxWidth="w-full"
        />
      </div>
      <LoginVisible staff>
        <div className={`hidden shrink-0 gap-2 sm:flex ${TABLE_COLUMN_SIZE[4]}`}>
          <GrayButton title="취소" onClick={handleCancel} />
          <BlackButton
            title="저장"
            disabled={requesting}
            onClick={buildPostHandler(requesting, setRequesting, () => content, actions.onSubmit)}
          />
        </div>
      </LoginVisible>
    </li>
  );
}
