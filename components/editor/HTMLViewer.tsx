/* eslint-disable @next/next/no-img-element */

import Autolinker from 'autolinker';
import DOMPurify from 'isomorphic-dompurify';
import Image from 'next/image';
import { CSSProperties, ReactNode } from 'react';

import './common/suneditor-contents.css';

type TopRightImage =
  | {
      type: 'image';
      url: string;
      // px 단위
      width: number;
      // px 단위
      height: number;
    }
  | {
      type: 'imageUnoptimized';
      url: string;
      width: number;
    };

interface TopRightComponent {
  type: 'component';
  content: ReactNode;
}

interface HTMLViewerProps {
  htmlContent: string;
  // 우측 상단 표시될 요소
  topRightContent?: TopRightImage | TopRightComponent;
  margin?: string;
  style?: CSSProperties;
}

export default function HTMLViewer({
  htmlContent,
  topRightContent,
  margin = '',
  style,
}: HTMLViewerProps) {
  const sanitizedHTML = DOMPurify.sanitize(htmlContent);
  const linkedHTML = Autolinker.link(sanitizedHTML);

  return (
    <div className={`flow-root ${margin} `}>
      {(topRightContent?.type === 'image' || topRightContent?.type === 'imageUnoptimized') && (
        <TopRightImageContent {...topRightContent} />
      )}
      {topRightContent?.type === 'component' && <TopRightComponent {...topRightContent} />}
      <div
        className="sun-editor-editable"
        dangerouslySetInnerHTML={{ __html: linkedHTML }}
        style={style}
      />
    </div>
  );
}

function TopRightImageContent(props: TopRightImage) {
  if (props.type === 'image') {
    const { url, width, height } = props;
    return (
      <div className="relative float-right ml-[28px] mb-[28px]" style={{ width, height }}>
        <Image src={url} alt="대표 이미지" fill className="object-contain" sizes={`${width}px`} />
      </div>
    );
  } else {
    const { url, width } = props;
    return (
      <div className="relative float-right ml-[28px] mb-[20px]">
        <img src={url} alt="대표 이미지" className="object-contain" width={width} />
      </div>
    );
  }
}

function TopRightComponent({ content }: TopRightComponent) {
  return <div className="relative float-right">{content}</div>;
}

export const htmlMock1 = `
<p class="0">■ 효율적으로 최첨단 생성 모델의 이상 행동을 탐지하는 알고리즘 개발</p>
<p>■ 인공신경망의 깊이를 압축하여 성능을 유지하면서 추론 속도를 가속화</p>
<p class="0"><a href="https://mllab.snu.ac.kr/">송현오 교수 연구진</a>이 생성 모델의 이상 행동 패턴을 사전에 파악하는 레드 팀 알고리즘 및 인공 신경망 깊이 압축 알고리즘을 개발하였다.</p>
<p class="0">레드 팀 [1]: 대화 인공지능의 공격적인 답변과 같은 이상 행동을 이끌어내는 적대적 테스트 예시들을 구성하는 레드팀 알고리즘(BRT)를 개발하였다. BRT는 베이지안 최적화를 활용하여 주어진 유저 입력 집합에서 유저 입력을 선택 및 편집하여 효율적으로 적대적 테스트 예시들을 구성한다. 대화 인공지능, 텍스트 기반 이미지 생성 모델 등 다양한 생성 모델들에 대해 적은 비용으로 기존 연구보다 더 많고, 다양한 이상 행동을 탐지하는데 성공하였다. 본 연구 결과는 최첨단 생성 모델들의 이상 행동 패턴을 사전에 파악하고, 수정하는데 활용될 수 있다.</p>
<p class="0">인공신경망 깊이 압축 [2]: 본 연구진은 인공신경망에서 불필요한 활성화 함수를 제거하고 인접한 합성곱 레이어들을 병합하여 인공신경망을 가속하는 새로운 깊이 압축 알고리즘을 제안하였다. 특히, 신경망을 최적으로 병합하는 부분 집합 선택 문제의 대리 최적화 문제를 제안하고 이를 동적 프로그래밍을 이용하여 해결하여 기존 연구보다 성능이 높고 추론 속도가 빠른 신경망을 얻어내는 데 성공하였다. 압축된 인공신경망은 정확도가 높고 빠른 추론 속도를 요구하는 환경에서 효과적으로 사용될 수 있다.</p>
<p class="0">&nbsp;해당 연구는 자연어처리 최우수 학회인 <a href="https://2023.aclweb.org/">ACL</a>과 머신러닝 최우수 학회인 <a href="https://icml.cc/">ICML</a>에 올해 7월 발표될 예정이다.</p>
<div class="hwp_editor_board_content" data-hjsonver="1.0" data-jsonlen="8464"><br />
<p class="0">[1] <a href="https://arxiv.org/abs/2305.17444"><em>"Query-Efficient Black-Box Red Teaming via Bayesian Optimization"</em></a>, Deokjae Lee, JunYeong Lee, Jung-Woo Ha, Jin-Hwa Kim, Sang-Woo Lee, Hwaran Lee, Hyun Oh Song<span>, ACL 2023</span></p>
<p class="0">[2] <a href="https://arxiv.org/abs/2301.12187"><em>"Efficient Latency-Aware CNN Depth Compression via Two-Stage Dynamic Programming"</em></a>, Jinuk Kim*, Yeonwoo Jeong*, Deokjae Lee, Hyun Oh Song, ICML 2023</p>
</div>
`;

export const htmlMock2 = `
<ul>
<li>소셜 네트워크에서 활용되는 네트워크 알고리즘을 생물학적 네트워크에 적합하도록 변형</li>
<li>머신러닝 기술을 접목시켜 약물과 질병의 치료 관계를 높은 정확도로 예측</li>
<li>인공지능 신약개발 분야에 기존 약학, 병리학적 정보를 십분 활용하는 머신러닝 방법론의 가능성 제시</li>
</ul>
<p>&nbsp;</p>
<p><a href="https://bhi-kimlab.github.io/members/sun_kim.html">김선 교수</a>와 <a href="https://www.aigendrug.com/">아이겐드럭</a>의 <a href="https://ai-for-drug-discovery.notion.site/Hi-I-m-64fbeb3c84024ff085ac9e9929255e38?pvs=4">방동민</a>&nbsp;연구원이 주도한 인공지능 신약개발 분야 연구가 세계적으로 우수성을 인정받아 <a href="https://www.nature.com/articles/s41467-023-39301-y">Nature Communications</a>에 게재되었다. 김선 교수 연구진은 수십만가지의 의생물학적 데이터를 그래프 형태로 가공해 놓은 의생물학적 지식 그래프(biomedical knowledge graph) 를 활용하여 약물 재창출 (Drug repurposing, drug repositioning) 인공지능 모델인 드림워크(DREAMwalk)를 제시하였다. 이를 위하여, 기존의 소셜 네트워크 분야에서 활용되던 네트워크 알고리즘의 대표적인 줄기인 랜덤워크 (random walk) 알고리즘을 의생물학적 지식 그래프에 적합하도록 변형하였다.</p>
<p>특히 의생물학적 지식 그래프는 유전자, 질병, 약물 등의 다양한 종류의 요소들로 구성되어 있으며 이들 중 대부분이 유전자와 그들 간의 관계에 치중되어 있다는 특징이 있으며, 이를 해결하기 위해 약물 간의 관계와 질병 간의 관계 지식들을 알고리즘에 효율적으로 녹여내었다. 또한 인공지능 예측 모델을 활용하여, 앞서 학습된 네트워크 정보를 기반으로 약물과 질병 간의 치료관계를 높은 정확도로 예측하였다.</p>
<p>인공지능과 약학 분야의 융합의 산물인 본 연구는 기존에 컴퓨터 과학 분야에서 발전된 네트워크 과학 기술이 인공지능 신약개발 분야에 알맞게 변형되고, 또한 알려진 도메인의 지식을 잘 활용할 수 있도록 변형될 수 있다는 새로운 연구 패러다임의 실질적인 예를 제시하였다. 구축된 모델은 알츠하이머와 유방암에 대해 높은 신뢰도의 치료 약물을 발굴해주었으며, 이후에도 새로운 질병에 적용 가능한 약물들을 제시하도록 활용이 가능할 것으로 보인다.</p>
<p>&nbsp;</p>
<p><a href="https://www.nature.com/articles/s41467-023-39301-y"><em>"Biomedical knowledge graph learning for drug repurposing by extending guilt-by-association to multiple layers"</em></a>, Dongmin Bang, Sangsoo Lim, Sangseon Lee &amp; Sun Kim, Nature Communications 14.1 (2023): 3570</p>
`;

export const htmlMock3 = `
<p><span style="font-size: small;">박사과정 대학원생 분들께,</span></p>
<div><span style="font-size: small;">안녕하세요.&nbsp;</span><span style="font-size: small;">&nbsp;</span></div>
<div><span style="font-size: small;">본교 국제협력본부의 <strong><span style="text-decoration: underline;">대학원생(박사과정 재학생 및 연구생등록 수료자)</span></strong> 대상 2023학년도 2학기 장기해외연수 지원 계획 안내 드립니다.</span></div>
<div><span style="font-size: small;">자세한 내용은 붙임1 문서로 확인하여 주시고, 지원을 희망하시면 붙임2 구비서류를 갖추어 구글폼으로 신청하시기 바랍니다.</span></div>
<div><span style="font-size: small;">&nbsp;</span></div>
<div><span style="font-size: small;">&nbsp;</span></div>
<p><span style="font-size: medium;">2023학년도 2학기 대학원생(박사과정) 장기해외연수 지원계획</span></p>
<p><span style="font-size: medium;">&nbsp; 1. 서류 접수</span></p>
<p><span style="font-size: medium;">&nbsp; &nbsp; 가. 신청서 제출:&nbsp;<span style="text-decoration: underline;"><strong>2023.7.20.(목)~7.31.(월)까지</strong></span>&nbsp; &lt;지원자 → 국제협력본부&gt;</span></p>
<p><span style="font-size: medium;">&nbsp; &nbsp; 나. 면접대상자 발표:<strong>&nbsp;</strong><span style="text-decoration: underline;"><strong>2023.8.2.(수)&nbsp;</strong></span>예정</span></p>
<p><span style="font-size: medium;">&nbsp; 2. 서류 제출 방법: <strong>구글폼(<a href="https://forms.gle/urTcfUbH32MEm7seA" rel="noopener noreferrer" target="_blank">https://forms.gle/urTcfUbH32MEm7seA</a>) 제출</strong></span></p>
<p><span style="font-size: medium;">&nbsp; 3. 선발 예정 인원: ○명</span></p>
<p><span style="font-size: medium;">&nbsp;</span></p>
<p><span style="font-size: medium;">붙임 &nbsp;1. 2023학년도 2학기 장기해외연수 지원계획 1부.</span></p>
<p><span style="font-size: medium;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;2. 장기해외연수 서식 각 1부. &nbsp;끝.</span></p>
<p><span style="font-size: medium;"><br /></span></p>
`;

export const htmlMock4 = `
<p><span>제2회 &lt;Research Fair&gt;, 우리 학부 대학원생 (석사·박사) 졸업연구논문 포스터 발표회가 2023년 6월 15일 오후 12시부터 2시까지 컴퓨터연구소 민상렬홀(서울대 138동)에서 개최되었습니다. </span></p>
<p><span>리서치 페어 (Research Fair)는 컴퓨터공학부 SNU 10-10 프로젝트 사업의 일환으로 2022년에 신설되었으며, 대학원 졸업 예정자들이 졸업연구논문을 포스터 발표하고 현장 피드백을 받을 수 있도록 기획된 행사입니다. 이번 행사는 2023년 8월 졸업예정자 34명(석사 15명, 박사 19명)의 자유로운 졸업연구논문 포스터 Q&amp;A 시간을 기본으로, 조상연 삼성전자 부사장님의 키노트 강연과 케이터링 뷔페로 알차게 구성되었습니다. 포스터 발표한 졸업 예정자에게는, 학부 교수님 10분 및 외부 심사위원 2분의 심사 결과를 반영하여 우수포스터발표상 (석사 및 박사 각 1, 2, 3등)을 시상하였습니다. </span></p>
<p><span>이 날 참가한 100여 명의 주전공생, 자유전공학부생, 다전공생들에게는 우리 학부 대학원 연구자들의 다양하고 혁신적인 연구를 살펴보고 대학원 진학의 긍정적인 의미를 찾아가는 기회가 제공되었습니다.</span></p>
<p><span><br /></span></p>
<p><img src="https://cse.snu.ac.kr/sites/default/files/styles/large/public/node--notice/3_2.jpg?itok=9SyS8ZOO" alt="" width="600" /><img src="https://cse.snu.ac.kr/sites/default/files/styles/large/public/node--notice/2_4.jpg?itok=U1Kxd9io" alt="" width="600" /><span><img src="https://cse.snu.ac.kr/sites/default/files/styles/large/public/node--notice/4.jpg?itok=sItO49Xw" alt="" width="600" /></span></p>
`;
