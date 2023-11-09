# No.20_MiniProject
항해99 14기 20조 미니프로젝트
| 소개 : 개발자의 일상과 정보를 올리는 공간.

| 주요기술 : Express, AWS ( EC2, RDS, Mysql ) , Redis

| 담당역할 : 
Backend : 댓글 , ec2 

| Achievements : 
-	간단한 댓글 CRUD 구현
-	대댓글 기능 구현
-	배포

| TroubleShoot
- const { accesstoken, refreshtoken } = req.cookies; ThunderClient로만 했을 때 아 무 문제 없었지만, 첫 프론트의 협업에서 req.cookies 할 경우 프론트에서 cookie 로 보내야 하는데 Cookie 보안 에러가 떴습니다. 대안으로 req.headers 사용했습니다. 
- req.headers는 소문자만 받아서 해당 코드들을 수정했습니다. 
- 처음에 1개의 ec2에서 nginx를 사용해 프론트 백엔드를 배포하였지만, 계속 connection timeout 현상 발생. 구글링 결과 프리티어의 메모리 부족이었습니다. 그래서 ec2 2개를 사용해서 배포를 완료.
