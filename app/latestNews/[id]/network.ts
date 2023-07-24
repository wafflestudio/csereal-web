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
    htmlContent: `
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
`,
    postDate: new Date(),
  };
}
