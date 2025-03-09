import { getInternal } from '@/apis/v2/internal';
import EditButton from '@/app/.internal/components/EditButton';
import LoginVisible from '@/components/common/LoginVisible';
import HTMLViewer from '@/components/form/html/HTMLViewer';

export default async function InternalPage() {
  const { description } = await getInternal();

  return (
    <div className="m-10 min-w-[720px]">
      <LoginVisible staff>
        <EditButton />
      </LoginVisible>
      <HTMLViewer htmlContent={description} />
    </div>
  );
}
