# csereal-web

https://cse.snu.ac.kr

서울대학교 컴퓨터공학부 홈페이지의 프론트엔드 레포입니다.

## 주요 사용 기술

- Next.js 14 App router
- tailwind
- express
- typescript

## 컨벤션

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
