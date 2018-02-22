FROM openjdk:8u151-jre-stretch

RUN apt-get -y install curl && \
    curl -L https://s3-ap-northeast-1.amazonaws.com/dynamodb-local-tokyo/dynamodb_local_latest.tar.gz | tar xz

EXPOSE 8000

ENTRYPOINT ["java", "-Djava.library.path=./DynamoDBLocal_lib", "-jar", "DynamoDBLocal.jar", "-dbPath", "/var/tmp"]
