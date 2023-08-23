const str = `
1	서울정보시스템(주)	http://www.nsis.co.kr/homepage/index.html	1984
2	(주)나다텔	http://www.nadatel.com/	1992
3	넥슨코리아	https://company.nexon.com	1994
4	엠케이일렉트로닉스	http://www.mkelec.com/	1994
5	(주)세라시스템	https://www.serasystem.com/	1994
6	(주)블루인포시스	　	1995
7	키스톤 테크놀로지	http://www.keystone.co.kr/	1995
8	(주)아이엠디비	　	1997
9	(주)넷사랑컴퓨터	https://www.netsarang.com/ko/	1998
10	콘트로닉스	　	1998
11	엔에이치엔,네이버	https://www.nhn.com, https://www.naver.com	1999
12	코난테크놀로지	https://www.konantech.com	1999
13	지인정보기술㈜	　	1999
14	(주)위트넷	　	1999
15	(주)라오넷	　	2000
16	스몰소프트(주)	　	2000
17	(주)어헤드모바일	　	2000
18	(주)테크노니아	http://www.technonia.com/	2000
19	(주)옵투스자산운용	http://www.optus.co.kr/	2001
20	듀어텔(주)	　	2001
21	메트릭스솔루션	　	2002
22	(주)시큐러스아이엔씨	　	2002
23	엑스엘게임즈	https://www.xlgames.com	2003
24	(주)젠다소프트	http://zenda.co.kr/	2003
25	(주)네오이노	　	2004
26	아이볼타(주)	　	2006
27	(주)인디링스	　	2006
28	스피킹 맥스	https://www.speakingmax.com/	2008
29	한마리곰미디어	http://hangom.com	2008
30	CRZ 테크놀로지	https://www.crz-tech.com	2009
31	워터베어소프트	http://www.waterbear.co.kr	2010
32	두나무	https://www.dunamu.com	2012
33	센드버드	https://sendbird.com/ko	2012
34	매니코어소프트	http://manycoresoft.co.kr	2012
35	그렙	https://www.grepp.co	2013
36	베스파	https://www.vespainc.com	2013
37	로그프레소	https://logpresso.com/ko	2013
38	멋쟁이 사자처럼	https://www.likelion.net	2013
39	몰로코	https://www.moloco.com/	2013
40	이디엄	　	2013
41	다이닝코드	https://www.diningcode.com	2014
42	싱타	http://www.singta.co	2014
43	하이퍼커넥트	https://hyperconnect.com/ko/	2014
44	주식회사 댄디라이언	http://www.dandylion.co.kr/	2014
45	주식회사써로마인드	http://surromind.ai	2015
46	법무법인 비트	https://www.veatlaw.kr	2015
47	주식회사레벨소프트	http://www.rebelsoft.co.kr	2015
48	폴라리언트	http://www.polariant.io/	2015
49	스탠다임	https://www.standigm.com/main	2015
50	앵커리어	https://anchoreer.oopy.io	2015
51	스켈터랩스	https://www.skelterlabs.com	2015
52	주식회사 플링크	https://www.pagecall.com	2015
53	㈜파두	https://fadu.io	2015
54	사십이컴퍼니	　	2015
55	시큐리티플랫폼 주식회사 	https://www.securityplatform.co.kr/	2015
56	(주)매이블러	http://www.maybler.com/	2015
57	밀리의서재	https://www.millie.co.kr/	2016
58	바이올렛	https://violet.team	2016
59	에스프레스토	https://www.spresto.net	2016
60	주식회사인텔리시스	http://intellisys.co.kr	2017
61	베어로보틱스코리아	https://kr.bearrobotics.ai	2017
62	인텔리시스	http://intellisys.co.kr	2017
63	옴니아트	http://www.omniart.co.kr/	2017
64	플로바	https://flova.kr/	2017
65	주식회사 메이코더스	https://maycoders.com/	2017
66	카르타	https://www.meissa.ai/ko/	2017
67	딥트레이드	https://deeptrade.co/	2018
68	프로비트	https://www.probit.kr/ko-kr/	2018
69	크로스앵글	https://xangle.io/	2018
70	주식회사네트워크디파인즈	http://www.networkdefines.com/	2018
71	케이디에듀	　	2018
72	모아이스	http://kr.moais.co.kr/	2019
73	커미터	　	2019
74	옴니스랩스	https://www.deepblock.net/	2019
75	(주)인이지	https://www.ineeji.com/	2019
76	주식회사만든다		2020
77	스웨트	　	2020
78	에브리바이크	https://everybike.io/	2020
79	주식회사 모레	https://www.moreh.io/	2020
80	주식회사넥스트에디션	https://camfit.co.kr/	2020
81	테아트룸	https://livelystage.com/	2020
82	지로(두둠)		2020
83	미르니	https://www.mirny.io/	2020
84	에브리데이톡	https://www.everydaytalk.net/	2020
85	알파그래픽스	　	2020
86	엔트로피패러독스 주식회사	https://entropyparadox.com/about.html	2020
87	지크립토	https://www.zkrypto.com	2020
88	모이하우㈜		2020
89	(주)어크로스비	https://www.acrossb.net	2020
90	3R Innovation 	https://3rinnovation.com/	2021
91	팬세이션주식회사	https://corp.fansation.net/	2021
92	스카이링크	https://www.waveon.io/	2021
93	데이탄소프트	https://www.datansoft.com/	2021
94	네온시티주식회사	http://neoncity.co.kr/	2021
95	(주)아이겐드럭	https://www.aigendrug.com	2021
96	텅스텐에이아이	www.tungsten-ai.com	2021
97	growdle	https://www.growdle.com/	2021
98	메드키트	https://medkit.co.kr/	2021
99	(주)브랜치앤바운드	https://www.codetree.ai/landing	2021
100	블록누커	https://www.etheruko.com/	2022
101	주식회사 쿳션	　	2022
`;

for (const line of str.split('\n')) {
  const arr = line.split(/\s+/);
  if (arr.length === 4) console.log(`{name: "${arr[1]}", url: "${arr[2]}", year: ${arr[3]}},`);
  else console.log(`{name: "${arr[1]}", year: ${arr[2]}},`);
}

export const careerStatRows = ['삼성', 'LG', '기타 대기업', '중소기업', '진학', '기타'];
export const careerStatCols = ['학부', '석사', '박사'];

export const careerStat = {
  2021: [
    [0, 5, 6],
    [2, 1, 0],
    [6, 4, 1],
    [22, 16, 8],
    [16, 8, 1],
    [16, 20, 2],
  ],
  2020: [
    [4, 5, 3],
    [3, 2, 0],
    [8, 9, 2],
    [3, 14, 2],
    [14, 4, 2],
    [30, 24, 17],
  ],
  2019: [
    [4, 6, 4],
    [5, 1, 0],
    [5, 7, 3],
    [9, 13, 2],
    [25, 7, 1],
    [22, 22, 13],
  ],
  2018: [
    [1, 8, 6],
    [2, 5, 0],
    [7, 10, 2],
    [3, 8, 2],
    [17, 8, 2],
    [25, 18, 6],
  ],
  2017: [
    [3, 6, 5],
    [0, 2, 0],
    [3, 7, 2],
    [12, 12, 5],
    [30, 5, 1],
    [20, 16, 8],
  ],
  2016: [
    [4, 10, 12],
    [0, 3, 1],
    [6, 6, 0],
    [4, 2, 2],
    [24, 3, 1],
    [18, 12, 3],
  ],
  2015: [
    [3, 5, 5],
    [0, 6, 0],
    [3, 10, 1],
    [5, 4, 2],
    [29, 7, 1],
    [14, 16, 5],
  ],
  2014: [
    [1, 4, 8],
    [2, 1, 0],
    [2, 1, 0],
    [6, 5, 1],
    [23, 3, 3],
    [11, 15, 10],
  ],
  2013: [
    [5, 9, 11],
    [1, 2, 2],
    [9, 6, 1],
    [2, 6, 2],
    [12, 6, 0],
    [12, 18, 15],
  ],
  2012: [
    [1, 4, 8],
    [3, 5, 1],
    [8, 11, 3],
    [8, 8, 2],
    [20, 5, 1],
    [17, 16, 15],
  ],
  2011: [
    [3, 3, 10],
    [1, 13, 1],
    [8, 6, 0],
    [5, 5, 4],
    [18, 5, 1],
    [14, 26, 13],
  ],
};

export const futureCompanies = [
  { name: '서울정보시스템(주)', url: 'http://www.nsis.co.kr/homepage/index.html', year: 1984 },
  { name: '(주)나다텔', url: 'http://www.nadatel.com/', year: 1992 },
  { name: '넥슨코리아', url: 'https://company.nexon.com', year: 1994 },
  { name: '엠케이일렉트로닉스', url: 'http://www.mkelec.com/', year: 1994 },
  { name: '(주)세라시스템', url: 'https://www.serasystem.com/', year: 1994 },
  { name: '(주)블루인포시스', year: 1995 },
  { name: '키스톤 테크놀로지', year: 1995, url: 'http://www.keystone.co.kr/' },
  { name: '(주)아이엠디비', year: 1997 },
  { name: '(주)넷사랑컴퓨터', url: 'https://www.netsarang.com/ko/', year: 1998 },
  { name: '콘트로닉스', year: 1998 },
  { name: '엔에이치엔', url: 'https://www.nhn.com', year: 1999 },
  { name: '네이버', url: 'https://www.naver.com', year: 1999 },
  { name: '코난테크놀로지', url: 'https://www.konantech.com', year: 1999 },
  { name: '지인정보기술㈜', year: 1999 },
  { name: '(주)위트넷', year: 1999 },
  { name: '(주)라오넷', year: 2000 },
  { name: '스몰소프트(주)', year: 2000 },
  { name: '(주)어헤드모바일', year: 2000 },
  { name: '(주)테크노니아', url: 'http://www.technonia.com/', year: 2000 },
  { name: '(주)옵투스자산운용', url: 'http://www.optus.co.kr/', year: 2001 },
  { name: '듀어텔(주)', year: 2001 },
  { name: '메트릭스솔루션', year: 2002 },
  { name: '(주)시큐러스아이엔씨', year: 2002 },
  { name: '엑스엘게임즈', url: 'https://www.xlgames.com', year: 2003 },
  { name: '(주)젠다소프트', url: 'http://zenda.co.kr/', year: 2003 },
  { name: '(주)네오이노', year: 2004 },
  { name: '아이볼타(주)', year: 2006 },
  { name: '(주)인디링스', year: 2006 },
  { name: '스피킹 맥스', url: 'https://www.speakingmax.com/', year: 2008 },
  { name: '한마리곰미디어', url: 'http://hangom.com', year: 2008 },
  { name: 'CRZ 테크놀로지', url: 'https://www.crz-tech.com', year: 2009 },
  { name: '워터베어소프트', url: 'http://www.waterbear.co.kr', year: 2010 },
  { name: '두나무', url: 'https://www.dunamu.com', year: 2012 },
  { name: '센드버드', url: 'https://sendbird.com/ko', year: 2012 },
  { name: '매니코어소프트', url: 'http://manycoresoft.co.kr', year: 2012 },
  { name: '그렙', url: 'https://www.grepp.co', year: 2013 },
  { name: '베스파', url: 'https://www.vespainc.com', year: 2013 },
  { name: '로그프레소', url: 'https://logpresso.com/ko', year: 2013 },
  { name: '멋쟁이 사자처럼', url: 'https://www.likelion.net', year: 2013 },
  { name: '몰로코', url: 'https://www.moloco.com/', year: 2013 },
  { name: '이디엄', year: 2013 },
  { name: '다이닝코드', url: 'https://www.diningcode.com', year: 2014 },
  { name: '싱타', url: 'http://www.singta.co', year: 2014 },
  { name: '하이퍼커넥트', url: 'https://hyperconnect.com/ko/', year: 2014 },
  { name: '주식회사 댄디라이언', url: 'http://www.dandylion.co.kr/', year: 2014 },
  { name: '주식회사써로마인드', url: 'http://surromind.ai', year: 2015 },
  { name: '법무법인 비트', year: 2015, url: 'https://www.veatlaw.kr' },
  { name: '주식회사레벨소프트', url: 'http://www.rebelsoft.co.kr', year: 2015 },
  { name: '폴라리언트', url: 'http://www.polariant.io/', year: 2015 },
  { name: '스탠다임', url: 'https://www.standigm.com/main', year: 2015 },
  { name: '앵커리어', url: 'https://anchoreer.oopy.io', year: 2015 },
  { name: '스켈터랩스', url: 'https://www.skelterlabs.com', year: 2015 },
  { name: '주식회사 플링크', year: 2015, url: 'https://www.pagecall.com' },
  { name: '㈜파두', url: 'https://fadu.io', year: 2015 },
  { name: '사십이컴퍼니', year: 2015 },
  { name: '시큐리티플랫폼 주식회사', url: 'https://www.securityplatform.co.kr', year: 2015 },
  { name: '(주)매이블러', url: 'http://www.maybler.com/', year: 2015 },
  { name: '밀리의서재', url: 'https://www.millie.co.kr/', year: 2016 },
  { name: '바이올렛', url: 'https://violet.team', year: 2016 },
  { name: '에스프레스토', url: 'https://www.spresto.net', year: 2016 },
  { name: '주식회사인텔리시스', url: 'http://intellisys.co.kr', year: 2017 },
  { name: '베어로보틱스코리아', url: 'https://kr.bearrobotics.ai', year: 2017 },
  { name: '인텔리시스', url: 'http://intellisys.co.kr', year: 2017 },
  { name: '옴니아트', url: 'http://www.omniart.co.kr/', year: 2017 },
  { name: '플로바', url: 'https://flova.kr/', year: 2017 },
  { name: '주식회사 메이코더스', url: 'https://maycoders.com', year: 2017 },
  { name: '카르타', url: 'https://www.meissa.ai/ko/', year: 2017 },
  { name: '딥트레이드', url: 'https://deeptrade.co/', year: 2018 },
  { name: '프로비트', url: 'https://www.probit.kr/ko-kr/', year: 2018 },
  { name: '크로스앵글', url: 'https://xangle.io/', year: 2018 },
  { name: '주식회사네트워크디파인즈', url: 'http://www.networkdefines.com/', year: 2018 },
  { name: '케이디에듀', year: 2018 },
  { name: '모아이스', url: 'http://kr.moais.co.kr/', year: 2019 },
  { name: '커미터', year: 2019 },
  { name: '옴니스랩스', url: 'https://www.deepblock.net/', year: 2019 },
  { name: '(주)인이지', url: 'https://www.ineeji.com/', year: 2019 },
  { name: '주식회사만든다', year: 2020 },
  { name: '스웨트', year: 2020 },
  { name: '에브리바이크', url: 'https://everybike.io/', year: 2020 },
  { name: '주식회사 모레', year: 2020, url: 'https://www.moreh.io/' },
  { name: '주식회사넥스트에디션', url: 'https://camfit.co.kr/', year: 2020 },
  { name: '테아트룸', url: 'https://livelystage.com/', year: 2020 },
  { name: '지로(두둠)', year: 2020 },
  { name: '미르니', url: 'https://www.mirny.io/', year: 2020 },
  { name: '에브리데이톡', url: 'https://www.everydaytalk.net/', year: 2020 },
  { name: '알파그래픽스', year: 2020 },
  { name: '엔트로피패러독스 주식회사', year: 2020, url: 'https://entropyparadox.com' },
  { name: '지크립토', url: 'https://www.zkrypto.com', year: 2020 },
  { name: '모이하우(주)', year: 2020 },
  { name: '(주)어크로스비', url: 'https://www.acrossb.net', year: 2020 },
  { name: '3R Innovation', year: 2021, url: 'https://3rinnovation.com/' },
  { name: '팬세이션주식회사', url: 'https://corp.fansation.net/', year: 2021 },
  { name: 'https://www.waveon.io/', year: 2021 },
  { name: '데이탄소프트', url: 'https://www.datansoft.com/', year: 2021 },
  { name: '네온시티주식회사', url: 'http://neoncity.co.kr/', year: 2021 },
  { name: '(주)아이겐드럭', url: 'https://www.aigendrug.com', year: 2021 },
  { name: '텅스텐에이아이', url: 'https://www.tungsten-ai.com', year: 2021 },
  { name: 'growdle', url: 'https://www.growdle.com/', year: 2021 },
  { name: '메드키트', url: 'https://medkit.co.kr/', year: 2021 },
  { name: '(주)브랜치앤바운드', url: 'https://www.codetree.ai/landing', year: 2021 },
  { name: '블록누커', url: 'https://www.etheruko.com/', year: 2022 },
  { name: '주식회사 쿳션', year: 2022 },
];
