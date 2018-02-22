### Use VM

1. install [Vagrant](https://www.vagrantup.com/) & [VirtualBox](http://www.oracle.com/technetwork/server-storage/virtualbox/downloads/index.html) 
1. execute the following command.
   `vagrant up dev`.
1. login VM
   
### Local For Mac

1. dynamodb
    1. install [docker for Mac](https://www.docker.com/docker-mac)
    1. execute following commands.  
       `cd docker`  
       `docker-compose up`
    1. access the following URL with web browser.  
       `http://localhost:8000/shell/`
1. sam local
    1. install [aws-sam-local](https://github.com/awslabs/aws-sam-local)
    1. exec the following command.
       `sam --version`
1. aws-cli
    1. install pip `easy_install pip`
    1. install aws-cli `pip install awscli`
    
---

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

