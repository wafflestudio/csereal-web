import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default async function GreetingsPage() {
  return (
    // TODO: 이전 PR 적용 필요 (marginBottom)
    <PageLayout titleType="big">
      <p className="text-sm font-normal leading-[1.625rem] mb-9">
        컴퓨터공학을 전공함으로써 벤처기업을 창업할 수 있을 뿐 아니라 시스템엔지니어, 보안전문가,
        소프트웨어개발자, 데이터베이스관리자 등 많은 IT 전문 분야로의 진출이 가능하다. 또한
        컴퓨터공학은 바이오, 전자전기, 로봇, 기계, 의료 등 이공계 영역뿐만 아니라 정치, 경제, 사회,
        문화의 다양한 분야와 결합되어 미래 지식정보사회에 대한 새로운 가능성을 제시하고 있고 새로운
        학문적 과제가 지속적으로 생산되기 때문에 많은 전문연구인력이 필요하다.
        <br />
        <br />
        서울대학교 컴퓨터공학부의 경우 학부 졸업생 절반 이상이 대학원에 진학하고 있다. 대학원에
        진학하면 여러 전공분야 중 하나를 선택하여 보다 깊이 있는 지식의 습득과 연구과정을 거치게
        되며 그 이후로는 국내외 관련 산업계, 학계에 주로 진출하고 있고, 새로운 아이디어로 벤처기업을
        창업하기도 한다.
      </p>
      <h3 className="text-base font-bold leading-[1.625rem] mb-[0.8rem]">졸업생 진로 현황</h3>
      <h3 className="text-base font-bold leading-[1.625rem] mb-[0.8rem]">졸업생 창업 기업</h3>
    </PageLayout>
  );
}
