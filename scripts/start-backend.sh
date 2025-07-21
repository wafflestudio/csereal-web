#!/bin/bash

# 백엔드 서버를 준비하고 실행하는 스크립트

# 1. 백엔드 레포지토리 클론 (없을 경우)
if [ ! -d "csereal-server" ]; then
  echo "csereal-server 디렉토리가 없습니다. 레포지토리를 클론합니다..."
  git clone https://github.com/wafflestudio/csereal-server.git
  if [ $? -ne 0 ]; then
    echo "백엔드 레포지토리 클론에 실패했습니다."
    exit 1
  fi
fi

# 2. Docker 이미지가 존재하는지 확인
if [ -z "$(docker images -q my_server_image:1.0 2>/dev/null)" ]; then
  echo "my_server_image:1.0 이미지를 찾을 수 없어 새로 빌드합니다."
  
  # 2-1. Java 21 Docker 컨테이너를 사용하여 백엔드 서버 빌드
  echo "Java 21 Docker 컨테이너를 사용하여 백엔드 서버를 빌드합니다..."
  docker run --rm -v "$(pwd)/csereal-server":/app -w /app gradle:8.5.0-jdk21 ./gradlew clean bootJar
  if [ $? -ne 0 ]; then
    echo "백엔드 서버 빌드에 실패했습니다."
    exit 1
  fi

  # 2-2. 빌드된 JAR 파일로 백엔드 Docker 이미지 생성
  echo "빌드된 JAR 파일로 백엔드 Docker 이미지를 생성합니다..."
  docker build --build-arg PROFILE=local -t my_server_image:1.0 ./csereal-server
  if [ $? -ne 0 ]; then
    echo "백엔드 Docker 이미지 생성에 실패했습니다."
    exit 1
  fi
else
  echo "my_server_image:1.0 이미지가 이미 존재하므로 빌드를 건너뜁니다."
fi

# 3. Docker Compose로 백엔드와 DB 서비스 시작
echo "백엔드와 데이터베이스 서비스를 시작합니다..."
docker-compose -f csereal-server/docker-compose-local-full.yml up -d
if [ $? -ne 0 ]; then
  echo "백엔드 서비스 시작에 실패했습니다."
  exit 1
fi
