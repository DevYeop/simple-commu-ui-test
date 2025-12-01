# Vanilla Community Platform

온라인 게시판. 회원가입, 로그인, 게시글 작성/검색, 밤모드 같은 기본 기능들이 다 들어있다.

## 프로젝트 구조

```
Frontend (React)
    ↓↑
Backend (Node.js + Express)
    ↓↑
Database (JSON)
```

좀 더 자세히 보면:

```
client/              # 프론트엔드
├── src/components/  # UI 부품들
└── src/pages/       # 페이지들

server/              # 백엔드
├── routes.ts        # API 엔드포인트
├── storage.ts       # 데이터 I/O
└── index.ts         # 서버 시작

db/                  # 데이터 저장소
├── users.json
└── posts.json

shared/              # 공유 코드
└── schema.ts        # 데이터 스키마

tests/               # 자동 테스트
└── comprehensive_test.py
```

## 시작하기

```bash
npm run dev
```

`http://localhost:5000` 에서 실행된다.

## 기능

- **인증**: 회원가입, 로그인, 로그아웃
- **게시글**: 최신 게시글 5개 표시, 상세보기
- **검색**: 키워드로 게시글 검색
- **테마**: 라이트/다크 모드 전환

## API 엔드포인트

| 메서드 | 경로 | 설명 |
|--------|------|------|
| POST | `/api/signup` | 회원가입 |
| POST | `/api/login` | 로그인 |
| POST | `/api/logout` | 로그아웃 |
| GET | `/api/me` | 현재 사용자 정보 |
| GET | `/api/posts` | 게시글 목록 |
| GET | `/api/posts/:id` | 게시글 상세 |
| GET | `/api/posts/search?q=keyword` | 게시글 검색 |

## 테스트

```bash
cd tests
python comprehensive_test.py
```

Selenium으로 회원가입부터 로그아웃까지 전체 플로우를 자동 테스트한다.

## 기술 스택

**Frontend**
- React + TypeScript
- Tailwind CSS + shadcn/ui
- TanStack Query

**Backend**
- Node.js + Express
- Zod (데이터 검증)

**Testing**
- Selenium (Python)

## 주의사항

- 비밀번호가 암호화되지 않음 (학습용)
- JSON 파일 기반이라 단일 프로세스 환경에서만 동작
- 동시성 처리 미구현

## 확장할 수 있는 기능

- 게시글 작성/삭제
- 댓글 시스템
- 좋아요/팔로우
- 프로필 페이지
- 실제 DB 연동 (PostgreSQL 등)
- 배포

## 라이선스

학습용. 자유롭게 수정해서 써도 된다.
