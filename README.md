### VM を使ってローカル環境構築

1. [Vagrant](https://www.vagrantup.com/) & [VirtualBox](http://www.oracle.com/technetwork/server-storage/virtualbox/downloads/index.html) をインストールする
1. 以下のコマンドを実行する
   `vagrant up dev`
1. VM に SSH 接続する
    * IP address: 192.168.55.10
    * port 22
    * user: dev
    * password: dev
   
### Macでローカル環境構築

1. dynamodb
    1. [docker for Mac](https://www.docker.com/docker-mac) をインストールする
    1. 以下のコマンドを実行する   
```
$ git clone https://github.com/honpya/demo-aws-sam-dynamodb-local.git
$ cd demo-aws-sam-dynamodb-local/docker
$ docker-compose -d up
```
2. sam local
    1. [aws-sam-local](https://github.com/awslabs/aws-sam-local) をインストールする
3. aws-cli
    1. pip をインストールする
       `easy_install pip`
    1. aws-cli をインストールする
       `pip install awscli`
    
---

## DyanmoDB Sample


```sh
$ aws configure

AWS Access Key ID [None]: aaa
AWS Secret Access Key [None]: bbb
Default region name [None]: us-east-1
Default output format [None]:

$ aws dynamodb list-tables --endpoint=http://localhost:8000

{
    "TableNames": []
}

$ aws dynamodb create-table \
    --table-name MusicCollection \
    --attribute-definitions AttributeName=Artist,AttributeType=S AttributeName=SongTitle,AttributeType=S \
    --key-schema AttributeName=Artist,KeyType=HASH AttributeName=SongTitle,KeyType=RANGE \
    --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5 \
    --endpoint=http://localhost:8000
    
$ aws dynamodb list-tables --endpoint=http://localhost:8000

{
    "TableNames": [
        "MusicCollection"
    ]
}

$ cd /workspace/src/dynamodb/
$ ./set-endpoint.sh
$ sam local invoke -e event-list.json ConnectDynamodb --docker-network docker_SamDynamodb
```

## SAM API Sample

※ VM上で 動かす場合は host を `0.0.0.0` で起動しないとホストOSのブラウザからアクセスできない

```sh
$ cd /home/dev/demo-aws-sam-dynamodb-local/src/api
$ sam local start-api --host 0.0.0.0 --docker-network docker_SamDynamodb
```




