import express from 'express';
import next from 'next';

const PORT = 3000;
const IS_DEV = process.env.NODE_ENV !== 'production';

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
  const nextServer = next({ dev: IS_DEV, port: PORT });
  const handleRequest = nextServer.getRequestHandler();
  await nextServer.prepare();

  const server = express();

  server.all('*', (req, res) => {
    if (
      // 'Unix 파일 매개변수 변경' 취약점을 게으르게 대응
      (!req.url.includes('next') && req.url.includes('..')) ||
      // '.NET이 설치된 Microsoft IIS 경로 노출' 취약점 대응
      // .NET 쓰지도 않는데 왜 뜨는지 모르겠는데
      // 괜히 404에 body 내용 넣어서 그런 것 같기도 함
      req.url.endsWith('someFile%5c.aspx') ||
      // 'Oracle 로그 파일 정보 노출' 취약점 대응
      req.path.includes('sqlnet')
    ) {
      console.log('404 처리');
      res.sendStatus(404);
      return;
    }

    override500(res);
    return handleRequest(req, res);
  });

  server.listen(PORT, () => {
    console.log(`PORT: ${PORT}`);
    console.log(`IS_DEV: ${IS_DEV}`);
  });
};

startServer();
