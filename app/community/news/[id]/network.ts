import { htmlMock1 } from '@/components/common/HTMLViewer';

interface NoticePageProps {
  title: string;
  mainImageURL: string;
  htmlContent: string;

  postDate: Date;
}

export default function latestNewsNetwork(id: number): NoticePageProps {
  return {
    title: '김선 교수 연구진이 네트워크 사이언스와 머신러닝을 결합하여 약물에 적합한 질병을 예측',
    mainImageURL: '',
    htmlContent: htmlMock1,
    postDate: new Date(),
  };
}
