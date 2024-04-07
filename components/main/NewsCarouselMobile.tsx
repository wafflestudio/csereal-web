import { MainNews } from '@/types/main';

import NewsCard from './NewsCard';

export default function NewsCarouselMobile({ news }: { news: MainNews[] }) {
  return (
    <div className="no-scrollbar mr-5 flex gap-5 overflow-auto">
      {news.map((news) => (
        <NewsCard key={news.id} news={news} />
      ))}
    </div>
  );
}
