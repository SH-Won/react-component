💻 UI Component
---
- 본 프로젝트는 특별히 디자인이 없는 다른 사이드 프로젝트에서 퍼블리싱 시간을 줄여보고자 구현 되었습니다.

- 본 프로젝트는 yarn berry 버전을 사용 했습니다

💡 프로젝트 스택
---
- React, TypeScript
- Scss
- Vite, StoryBook

🏃 실행 방법
---
1. berry version

```
yarn set version berry
```
2. yml 파일 변경

```
nodeLinker: pnp
yarnPath: .yarn/releases/yarn-3.2.0.cjs
```
3. yarn install

```
yarn
```
4. vscode sdks

```
yarn dlx @yarnpkg/sdks vscode
```
5. typescript plugin

```
yarn plugin import typescript
```
6. vscode typescript 버전 설정

```
window: Ctrl+Shift+P
mac: Command+Shift+P
typescript 버전 선택 검색후
작업 영역의 버전선택(.yarn/sdks/typescript/lib)
```
7. StroyBook 실행

```
yarn storybook
```
* build

```
yarn build
```

🚀 개발 흐름
---
1. Scss 를 이용하여 폰트의 규격, 색상을 정의
2. typescript를 이용하여 props 의 타입 정의
3. StroyBook 으로 UI 테스트
4. build 파일을 github repo 에 올려 git url 을 통해 package 를 사용 할 수 있도록 


