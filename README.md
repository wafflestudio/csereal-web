# csereal-web

https://cse.snu.ac.kr

서울대학교 컴퓨터공학부 홈페이지의 프론트엔드 레포입니다.

## Getting started

최상위에 `.env.local` 파일을 추가합니다. 시리얼 구글 계정으로 https://developers.kakao.com 에 로그인해 JavaScript 키를 env에 추가합니다.

```
NEXT_PUBLIC_KAKAO_MAP_API_KEY=...
```

`npm install`로 패키지를 설치하고 husky를 초기화합니다.

```
npm install
```

마지막으로 원하는 `npm` 명령어를 실행합니다.

```
npm run dev
```

## 주요 사용 기술

- Next.js 14 App router
- tailwind
- express
- typescript

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

- 현재 별도의 테스트용 브랜치를 관리하고 있지 않으므로 `main`에서 바로 브랜치를 만듭니다.
- 이후 PR 리뷰 후 approve가 되면 `main`으로 **squash merge**합니다.
- 브랜치명은 `{타입}/{브랜치명}` 으로 작성합니다.
  - 타입: feat, fix, chore, style, refactor
- PR 제목은 [gitmoji](https://gitmoji.dev/)를 활용해 작성합니다.

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

- @yeolyi
- @Limchansol
