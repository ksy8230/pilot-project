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

금융보안원 프로젝트에 해당하는 페이지 구현

- 로그인 화면
- 메인 대시보드 화면

#### 세부 구현사항

- webpack과 typescript를 이용해 리액트 프로젝트 빌드하기
- 프로젝트 구성시 eslint, prettier 설정 (editorConfig는 뭐지?)
- 1차 파일 구조

```shell
.
└── src
    ├── components
    │   ├── Logo
    │   ├── Navigation
    │   │   └── NaviItem
    │   └── Profile
    ├── layouts
    └── pages
        ├── Home
        │   ├── MainPanels
        │   ├── Boards
        ├── Login
        └── ...
```

- - components 폴더에는 여러 페이지에서 재사용이 가능하 컴포넌트를 위치
- - pages 폴더에는 각 페이지에 해당하는 컴포넌트를 위치
- - layouts 폴더에는 각 라우터와 연결이 되는 컴포넌트를 위치
- form 요소들은 Formik을 사용 (이유 달기)
- thunk인지 saga인지 (이유 달기)
- 브라우저 호환 범위 결정하기
- 로그인 후 메인화면으로 이동 (이용자 권한별 구성은 어떻게 구현되는지)
