## 작업 요약

<!-- 작업한 내용을 2-3문장으로 요약합니다. -->
<!-- 보안 검수 관련 next-intl에서 사용하는 쿠키 제거 -->

## 상세 내용

<!-- 변경된 코드와 그 이유를 작성합니다. -->
<!-- https://github.com/wafflestudio/csereal-web/pull/234 에서 next-intl의 lax 쿠키 사용을 막기 위해 다운그레이드했었는데, 최신 버전을 확인해보니 쿠키 자체를 막는 방법이 생겼습니다. 버전 업데이트 후 해당 플래그를 추가합니다. -->

## 테스트 방법

<!-- 올바르게 작동함을 리뷰어가 확인할 수 있는 방법을 써주세요. -->
<!-- 로컬에서 빌드 후 `document.cookie = ...` 구문이 빌드 결과물에 있는지 확인합니다. -->

## 참고 문서

<!-- 참고한 문서나 코드가 리뷰에 도움된다면 여기에 추가해주세요.  -->
<!-- - https://next-intl-docs.vercel.app/docs/routing#locale-cookie 'Never use a locale prefix' 참조 -->
