import { MainNews } from '@/apis/types/main';
import { CARD_WIDTH_TAILWIND } from '@/app/[locale]/components/constants';
import Image from '@/components/common/Image';
import { Link } from '@/i18n/routing';
import { useDayjs } from '@/utils/hooks/useDayjs';

export default function NewsCard({ news }: { news: MainNews }) {
  const formatDate = useDayjs();
  return (
    <Link
      href={`/community/news/${news.id}`}
      className={`flex h-[19rem] shrink-0 flex-col bg-neutral-50 shadow-[0_0_31.9px_0_rgba(0,0,0,0.07)] ${CARD_WIDTH_TAILWIND}`}
    >
      <div className="relative h-[6.25rem] w-full">
        <Image src={encodeURI(news.imageURL)} fill alt="" className="object-cover" sizes="220w" />
      </div>

      <div className="px-[0.87rem] pt-[0.88rem]">
        <h3 className="line-clamp-2 text-[0.9375rem] font-semibold text-neutral-900">
          {news.title}
        </h3>
        <time className="mt-3 block text-sm font-normal text-neutral-500">
          {formatDate ? formatDate({ date: news.createdAt, format: 'simple' }) : ''}
        </time>
        <p className="mt-3 line-clamp-4 text-sm font-normal leading-[150%] text-neutral-500">
          {news.description}
        </p>
      </div>
    </Link>
  );
}
