import Image from 'next/image';
import Link from 'next/link';

import { getMockContact } from '@/apis/contact';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default async function ContactPage() {
  const { mainImage, address, location, staffUrl, fax, time, emailList } = await getMockContact();
  return (
    <PageLayout titleType="big" titleMargin="mb-9">
      <div className="flow-root break-all font-noto text-neutral-700">
        <div className="relative float-right w-60 h-[360px] ml-5">
          <Image
            src={mainImage}
            alt="대표 이미지"
            priority
            fill
            className="object-cover"
            sizes="240px"
          />
        </div>
        <div className="mb-10">
          <h3 className="font-bold text-base leading-8">서울대학교 공과대학 컴퓨터공학부</h3>
          <p className="font-normal text-sm leading-[26px]">{address}</p>
        </div>
        <div className="mb-10 w-[528px]">
          <h3 className="font-bold text-base leading-8 pb-1 border-b-[1px] border-b-neutral-200">
            학부 행정실
          </h3>
          <div className="font-normal text-sm leading-[26px] pt-1">
            <p>위치 : {location}</p>
            <p>
              전화 :
              <Link href={staffUrl} className="text-link hover:underline ml-1">
                행정직원
              </Link>
              에 문의
            </p>
            <p>팩스 : {fax}</p>
            <p>근무 시간 : {time}</p>
          </div>
        </div>
        <div className="mb-10 w-[528px]">
          <h3 className="font-bold text-base leading-8 pb-1 border-b-[1px] border-b-neutral-200">
            이메일
          </h3>
          <div className="pt-1">
            {emailList.map((email, i) => (
              <div className="flex flex-row font-normal text-sm leading-[26px]" key={i}>
                <p>{email.name}:</p>
                <Link href={`mailto:${email.email}`} className="text-link hover:underline ml-1">
                  {email.email}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
