import HTMLViewer from '@/components/common/HTMLViewer';
import PageLayout from '@/components/layout/PageLayout';

import { SimpleHTMLPageResponse } from '@/types/post';

export default async function History() {
  //   const resp = await fetch('TODO');
  const resp = await mockHistory();

  return (
    <PageLayout titleSize="text-2xl">
      <HTMLViewer
        htmlContent={resp.description}
        topRightContent={{ type: 'image', width: 320, height: 213, url: resp.mainImageURL }}
      />
      <div className="h-12" />
    </PageLayout>
  );
}

const mockHistory = async (): Promise<SimpleHTMLPageResponse> => ({
  description: `
[[Image:node--page/연혁.jpg|scale-width-340|left]]

서울대학교 컴퓨터공학부의 역사는 1963년 응용수학과가 설립되면서부터 시작되었다. 이후 수십 년간 컴퓨터공학 학문이 급격히 요동치며 발전해나가는 동안, 컴퓨터공학부의 모습 또한 커다란 변화를 거듭해 왔다.

1975년 3월, 자연과학대학의 계산통계학과가 신설되었다. 계산통계학과는 2년 뒤인 1977년 3월, 석사과정을 전산과학전공과 통계전공으로 분리하였다.

1978년 12월 공과대학의 전자계산학과가 신설되었다. 1979년 1월에는 전자계산기공학과로 개칭되었으며 1980년 3월에 대학원이 설치되었다. 1989년 3월 학과 명칭을 공과대학 컴퓨터공학과로 개칭하였다.

1977년, 자연과학대학 계산통계학과의 석사과정이 전산과학전공과 통계전공으로 분리된 데에 이어, 박사과정과 학사과정 또한 각각 1990년 3월, 1991년 3월, 2년에 걸쳐 두 전공으로 분리되었다.
<br>



2000년 '공과대학 컴퓨터공학과'와 '자연과학대학 전산과학전공' 통합 후 컴퓨터공학부로 개칭하였으며, 현재까지 이어져 오고 있다.
`,
  mainImageURL: 'https://picsum.photos/801',
});
