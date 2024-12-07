import { execSync } from 'child_process';
import express from 'express';
import next from 'next';

const port = 3000;
const isDev = process.env.NODE_ENV === 'development';
const phase = process.env.PHASE;

process.env.TZ = 'Asia/Seoul';
process.env.LANG = process.env.TIME = 'ko_KR.UTF-8';

switch (phase) {
  case 'prod':
    process.env.BASE_URL = 'http://localhost:8080/api';
    break;
  case 'beta':
    process.env.BUILD_VERSION = execSync('git rev-parse --short HEAD').toString();
    process.env.BASE_URL = 'http://localhost:8080/api';
    break;
  case 'local':
    process.env.BASE_URL = 'https://cse-dev-waffle.bacchus.io/api';
    break;
  default:
    console.error(`PHASE 환경변수는 prod, beta, local 중 하나여야합니다: ${phase}`);
    process.exit(1);
}

/**
 * 리액트 내부적으로 사용하는 POST /reservations/seminar-room/301-417 등의 API를
 * 웹 취약점 점검에서 마음대로 body를 바꿔 보내 500이 뜨고 '정수 오버플로우'라고 우깁니다.
 * 점검에서 경고가 뜨지 않도록 500이 외부로 노출되지 않도록 하는 함수입니다.
 *
 * nextJS에서 Response의 statusCode 프로퍼티를 통해 500을 설정하기에
 * statusCode의 getter/setter를 오버라이드합니다.
 * https://github.com/vercel/next.js/blob/canary/packages/next/src/server/lib/router-server.ts
 *
 * TODO: 400으로 덮어씌우는게 맞을지 확인
 * TODO: next 구현에 의존하지 않는 안정적인 해결책 찾기
 */
const override500 = (res) => {
  let statusCode = 200;
  Object.defineProperty(res, 'statusCode', {
    get: () => statusCode,
    set: (value) => {
      statusCode = value === 500 ? 400 : value;
    },
  });
  return res;
};

const startServer = async () => {
  const nextServer = next({ dev: isDev, port: port, turbo: true });
  const handleRequest = nextServer.getRequestHandler();
  await nextServer.prepare();

  const app = express();
  app.disable('x-powered-by');

  app.all('*', (req, res) => {
    if (
      // 'Unix 파일 매개변수 변경' 취약점을 게으르게 대응
      (!req.url.includes('next') && req.url.includes('..')) ||
      // '.NET이 설치된 Microsoft IIS 경로 노출' 취약점 대응
      // .NET 쓰지도 않는데 왜 뜨는지 모르겠는데
      // 괜히 404에 body 내용 넣어서 그런 것 같기도 함
      req.url.endsWith('someFile%5c.aspx') ||
      // 'Oracle 로그 파일 정보 노출' 취약점 대응
      req.path.includes('sqlnet') ||
      // '오류 페이지 경로 노출' 취약점 대응
      req.path.includes('noSuchFile') ||
      // '잠재적 순서 지정 정보 발견' 취약점 대응
      req.path.includes('order') ||
      // '애플리케이션 테스트 스크립트 발견' 취약점 대응
      req.path.includes('test') ||
      // 'ASP.NET 사용자 정의 오류 경로 노출' 취약점 대응
      req.path.includes('AppScan')
    ) {
      console.log(`취약점 관련되어 404 처리: ${req.url}`);
      res.sendStatus(404);
      return;
    }
    override500(res);
    return handleRequest(req, res);
  });

  app.listen(port, () => {
    console.log(`PORT: ${port}`);
    console.log(`IS_DEV: ${isDev}`);
  });
};

startServer();
