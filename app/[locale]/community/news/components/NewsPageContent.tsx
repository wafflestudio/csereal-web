import NewsRow from '@/app/[locale]/community/news/components/NewsRow';
import LoginVisible from '@/components/common/LoginVisible';
import NoSearchResult from '@/components/common/NoSearchResult';
import Pagination from '@/components/common/Pagination';
import SearchBox from '@/components/common/search/SearchBox';
import { news } from '@/constants/segmentNode';
import { NEWS_TAGS } from '@/constants/tag';
import { Link } from '@/i18n/routing';
import { NewsPreviewList } from '@/apis/types/news';
import { getPath } from '@/utils/page';

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

function AdminFeatures() {
  return (
    <div className="mt-[40px] flex justify-end">
      <Link href={`${newsPath}/create`}>
        <button
          type="button"
          className="ml-4 h-[2.1875rem] rounded-[0.0625rem] bg-neutral-800 px-3 text-md font-semibold leading-loose tracking-wider text-white enabled:hover:bg-neutral-500 disabled:opacity-30"
        >
          새 게시글
        </button>
      </Link>
    </div>
  );
}
