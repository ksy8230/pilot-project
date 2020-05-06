### 1. 스펙 정하기

`필수 개발 스텍`

- react
- typescript

`선택한 개발 스텍`

- react
- typescript
- redux
- react-bootstrap
- styled-component

### 2. 구현사항

금융보안원 프로젝트에 해당하는 일부 페이지 구현

- 로그인 화면
- 메인 대시보드 화면

#### 세부 구현사항

- webpack과 typescript를 이용해 리액트 프로젝트 빌드하기
- 프로젝트 구성시 eslint, prettier 설정
- 파일 구조 잡기

```shell
.
└── src
    ├── components
    │   ├── Logo
    │   ├── LeftNavigation
    │   │   └── NaviItem
    │   └── Profile
    │   └── TopNavigation
    ├── layouts
    ├── pages
    │   ├── Home
    │   │   ├── Board
    │   │   ├── Panels
    │   ├── Login
    │   └── ...
    ├── types
    │
    ├── App.tsx
    ├── index.tsx
```

- - components 폴더에는 여러 페이지에서 재사용이 가능한 컴포넌트를 위치
- - pages 폴더에는 각 페이지에 해당하는 컴포넌트를 위치
- - layouts 폴더에는 각 라우터와 연결이 되는 컴포넌트를 위치
- redux-thunk 미들웨어 사용해 액션의 비동기 처리
- 로그인 후 대시보드로 이동 
- 로그인 후 localStorage에 가짜 user db 저장해 새로고침을 해도 로그인 유지
- 로그아웃 후 localStorage 정보 삭제

- 브라우저 호환 범위 결정하기 (x)
- form 요소들은 Formik을 사용 (x) => validator 쉽게 사용하기 위해

### 보완되어야할 부분
- styled-component를 사용한다면 reset.css 기능은 createGlobalStyle로 대체
- - styled-component를 사용한다면 .css 파일을 사용하지 않는 방향으로 통일하는 게 좋을까?
- login 페이지 인풋 관련 함수들 커스텀훅을 이용해 재사용 가능한 방향으로 구성
- 대시보드에 `TS7053` 관련 에러 파악하기...

### 리뷰
- 