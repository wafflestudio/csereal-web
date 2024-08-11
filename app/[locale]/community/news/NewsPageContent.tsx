import NewsRow from '@/app/[locale]/community/news/helper/NewsRow';
import LoginVisible from '@/components/common/LoginVisible';
import NoSearchResult from '@/components/common/NoSearchResult';
import Pagination from '@/components/common/Pagination';
import SearchBox from '@/components/common/search/SearchBox';
import { NEWS_TAGS } from '@/constants/tag';
import { NewsPreviewList } from '@/types/news';
import { getPath } from '@/utils/page';
import { news } from '@/utils/segmentNode';

import AdminFeatures from './helper/AdminFeatures';

const POST_LIMIT = 10;
const newsPath = getPath(news);

export default function NewsPageContent({
  data: { searchList, total },
}: {
  data: NewsPreviewList;
}) {
  return (
    <>
      <SearchBox tags={NEWS_TAGS} />

      {searchList.length > 0 ? (
        <div className="mb-8 mt-10 flex flex-col gap-5 sm:mx-10">
          {searchList.map((post) => (
            <NewsRow
              key={post.id}
              href={`${newsPath}/${post.id}`}
              title={post.title}
              description={post.description}
              tags={post.tags}
              date={new Date(post.date)}
              imageURL={post.imageURL}
            />
          ))}
        </div>
      ) : (
        <NoSearchResult />
      )}

      <Pagination totalPostsCount={total} postsCountPerPage={POST_LIMIT} />

      <LoginVisible staff>
        <AdminFeatures />
      </LoginVisible>
    </>
  );
}
