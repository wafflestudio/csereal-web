import { MainNews } from '@/apis/types/main';
import NewsCard from '@/app/[locale]/components/NewsCard';

export default function NewsCarouselMobile({ news }: { news: MainNews[] }) {
  return (
    <div className="no-scrollbar mr-5 flex gap-5 overflow-auto">
      {news.map((news) => (
        <NewsCard key={news.id} news={news} />
      ))}
    </div>
  );
}
