# csereal-web

![](https://github.com/user-attachments/assets/39a28dbf-8ce8-4c3c-9222-abdddd22b934)

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

안녕하세요👋 서울대학교 컴퓨터공학부 홈페이지의 프론트엔드 레포입니다.

- 2023.07: 🎉 CSEREAL 프로젝트 시작
- 2024.04: 🚀 [cse.snu.ac.kr](https://cse.snu.ac.kr) 도메인으로 배포
- 2024.08: 🧇 동아리 행사 '굽기'에서 기술/디자인 발표

## Getting started

### 준비

node 버전 관리를 위해 [fnm](https://github.com/Schniz/fnm)등의 도구 사용을 권장합니다. [shell-setup](https://github.com/Schniz/fnm?tab=readme-ov-file#shell-setup)까지 마쳤다면 아래 작업을 수행합니다.

```sh
git clone https://github.com/wafflestudio/csereal-web
cd csereal-web
npm install
```

### 빌드/실행

csereal-web은 총 3개의 phase로 관리됩니다.

- prod
  - https://cse.snu.ac.kr
  - main branch
  - 수동 배포
- beta
  - https://cse-dev-waffle.bacchus.io/
  - develop branch
  - PR 머지시 자동 배포
- local
  - 로컬 개발/테스트 전용

원하는 phase의 build/start npm 명령어를 실행합니다:

```sh
# local
npm run build:local
npm run start:local
# beta
npm run build:beta
npm run start:beta
# prod
npm run build:prod
npm run start:prod
```

⚠️ prod와 beta phase는 localhost에 서버가 있음을 전제로 빌드됩니다.

### 카카오 지도

[찾아오는 길](https://cse.snu.ac.kr/about/directions) 페이지에서 카카오 지도를 사용합니다. 카카오 지도가 올바르게 표시되려면 API Key를 추가해야합니다.

최상위 경로에 `.env.local` 파일을 추가합니다. 시리얼 구글 계정으로 https://developers.kakao.com 에 로그인해 JavaScript 키를 env에 추가합니다.

```sh
# .env.local
NEXT_PUBLIC_KAKAO_MAP_API_KEY=fc1e3ad82010475381daf9846e627fdd
```

## 컨벤션

### 폴더 구조

- api
  - api 요청 함수들을 정의합니다.
  - api 구조와 동일하게 파일을 위치시킵니다.
    - `/apis/v1/seminar/3` -> `/v1/seminar/[id].ts`
- actions
  - server action을 정의합니다.
- app
  - Next.js 페이지들을 정의합니다.
  - 특정 페이지에서 사용되는 컴포넌트 파일들은 `page.tsx`와 동일한 폴더에 정의합니다.
- components
  - 여러 페이지들에서 사용되는 공용 컴포넌트를 정의합니다.
- constants

### 브랜치

- `develop`에서 브랜치를 만들어 작업합니다.
- 이후 PR 리뷰 후 approve가 되면 `develop`으로 **squash merge**합니다. 머지 직후 github action에서 https://cse-dev-waffle.bacchus.io/ 로 자동 배포됩니다.
- 테스트가 완료됐다고 판단되면 `develop`에서 `main`으로 머지합니다. prod 배포는 수동으로 진행합니다.
- 브랜치명은 `{타입}/{브랜치명}` 으로 작성합니다.
  - 타입: feat, fix, chore, style, refactor
- PR 제목은 귀여운 [gitmoji](https://gitmoji.dev/)를 활용해 작성합니다.
  - 이모지 찾기 귀찮다고요? [Raycast](https://www.raycast.com/)의 [깃모지 plugin](https://www.raycast.com/ricoberger/gitmoji)을 써보세요.

### 커밋

- 커밋명은 `{타입}/{커밋명}` 으로 작성합니다.
  - 타입: feat, fix, chore, style, refactor

### 코드

- 모든 코드는 커밋 이전 husky로 검사됩니다.
- 타입 선언은 interface를 우선하고 interface를 쓸 수 없는 경우에 type을 사용합니다.

### 이슈 관리

- 프론트엔드 단독 이슈는 깃허브 이슈로 관리합니다.
- 프로젝트 단위 이슈는 시리얼 노션에서 관리합니다.

## Maintainers

- [@yeolyi](https://github.com/yeolyi)
  - [컴공 홈페이지 개발기](https://www.instagram.com/p/C6hJ8UlyVQS)
- [@Limchansol](https://github.com/limchansol)
