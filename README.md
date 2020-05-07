### 0. 설치 방법
```
> npm i
> npm run dev
```

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

`기타 라이브러리`
- react-slick
- fortawesome

### 2. 구현사항 

금융보안원 프로젝트에 해당하는 일부 페이지 구현 
(레이아웃이 다른 대표 페이지 두 장 + 상태변화 구현에 필요한 페이지를 고르다보니 아래와 같이 범위를 잡게 되었습니다)

- 로그인 화면 (임시 데이터가 액션을 넘길 때 이미 등록이 되어있어 아무 값이나 넣어도 넘어갑니다)
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
    ├── data   
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
- - data 폴더에는 store와 액션, 액션타입, 리듀서, 셀렉터에 해당하는 함수들 위치

- redux-thunk 미들웨어 사용해 액션의 비동기 처리
- 로그인 후 대시보드로 이동 
- 로그인 후 localStorage에 가짜 user 저장해 새로고침을 해도 로그인 유지
- 로그아웃 후 localStorage 정보 삭제

- 브라우저 호환 범위 : chrome 81.0.4044.129
- form 요소들은 Formik을 사용 (x) => form에 관련된 이벤트 핸들러 제공

### 보완되어야할 부분
- styled-component를 사용한다면 reset.css 기능은 createGlobalStyle로 대체
- - styled-component를 사용한다면 .css 파일을 사용하지 않는 방향으로 통일하는 게 좋을까?
- login 페이지 인풋 관련 함수들 커스텀훅을 이용해 재사용 가능한 방향으로 구성 (반복되는 코드 줄여보는 방향으로)
- 대시보드에 타입선언시 `TS7053` 관련 에러 파악하기...

### 리뷰
- 타입스크립트를 공부하며 최대한 타이핑을 적용해보려고 노력했지만 애매한 타입들은 any를 추가하는 식의 코드가 많았습니다.
- 새로운 type을 만들 때는 interface 키워드를 사용하고 type 키워드는 기존에 존재하는 type들을 alias를 만들 때 사용하는 것을 권장한다고 파악하였습니다. (type의 확장성을 고려한다면 interface 키워드를 사용)
- 타입스크립트 적용이 겉핥기 수준으로만 해당 프로젝트에 적용이 된 것 같아 https://www.typescriptlang.org/docs/handbook/basic-types.html 해당 문서를 보면서 기초, 용어 개념 부분 파악에 중점을 둬야할 것 같다는 생각이 들었습니다. 

### 궁금한 부분
#### 프로세스에 대한 부분
- 프로젝트를 만들 때 런칭까지의 프로세스는 어떻게 이루어지는지 궁금합니다..!
- - ex. feature, develop, master 에서 develop에서 확인 가능한 url이 주어지는지
- - 아직 금보원에 관련한 페이지들을 모두 파악하지 못해서 전체적인 state(데이터)들의 흐름, 관리를 어떻게 생각해야할지 감을 못 잡고 있습니다. 프로젝트 개발 전 설계(파일 구조 포함)에 해당하는 부분은 기획 단계에서 정하는지 궁금합니다. (=> TI 1.0 VS 2.0 QA 진행을 한 후 조금 더 구체적으로 질문드리는 게 맞을 것 같습니다)
#### gitlab 애 있는 소스 실행하는 법
- gitlab에 있는 IMAS WEB에 있는 소스를 로컬에서 확인해보고 싶은데 개발망에서는 npm install시 `verb lock` 에러 문구가 뜨며 설치가 되지 않습니닷.. => 이전 인수인계 때 NEXUS3를 이용해서 개발망에서 제약없이 소스를 가져다 쓰신다고 하셨던 것 같은데 이 부분이 잘 이해되지 않습니다
