2022.04.18 nestjs 로 다시 시작해보기!

개요 //
+@ docker 사용해서 mysql 연결
docker container 구성
개발 환경 구분 / prod//dev
환경변수 nest 번들 config 사용 // dotenv 기능 탑재
jwtToken => passport 인증 + bcrypt 해시

user
oauth

cookie?? // 사용허실? // 사용하지 뭐~

validation 조금 더 세분화해서 나누기
id password jwtToken accessToken

promise 
entity
class constructor method super extends 

문제 //
2022.04.18 => docker 를 사용하자!
mysql docker 설치 완료
docker 로 prod/dev 환경 별 세팅도 하고 싶음 ==> 안됨
총 3개의 이미지를 구워서 3개를 컨테이너화 시켜서 쓰고 싶은디
3개는 안구워짐 => 그래서 2개를 했더니 조금 더 빌드는 성공하지만 5단계에서 안구워짐 왜??

2022.04.19 => mysql 경로 설정 문제로 한참을 헤매다...
처음 설치한 mysql 은 home brew 를 통해서 설치. 경로가 일반 /usr/local 이 아닌 /opt/.. 쪽
잘되던 접속도 안되고 mysql.sock 에러가 계속 발생.
결국 동기분들이 도와줘서 mysql@5.7 버전을 주구장창 설치하고 있던 나를 발견..
그냥 8 버전을 설치했고 그 다음부터 접속이 됨!
그래서 mysql 문제는 일단락! 그럼 이제 다시 도커랑 연결을 시켜서 도커라이징 두 개를 시켜보자!
mysql 연결을 하나 하고 nest app 도 하나 구워보자!



+??? 경로 설정 문제로 안되던 nest 명령어가 먹힘 읭???? 설마 source 로 적용 안시켰었나..
암튼 됨...ㅠㅠ

도커는 안됨... 낼 다시 이미지 3개 구울 수 있도록 해봐야곘음
안 될 이유가 하나도 없음 10개도 되야하는데
Dockerfile 이나 docker-compose.yml 다시 건드려봅시다



## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
