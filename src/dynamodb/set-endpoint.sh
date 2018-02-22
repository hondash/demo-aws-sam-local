#!/bin/bash

set -euo pipefail

endpoint=$(docker inspect --format '{{ .NetworkSettings.Networks.docker_SamDynamodb.Gateway }}' docker_dynamodb_1)
echo "Gateway is $endpoint"
if [ "$endpoint" = "" ] || [ "$endpoint" = "<no value>" ]; then
  echo "endpoint が取得できませんでした"
  exit 1
fi
sed -e "s/http:\/\/[0-9]*\.[0-9]*\.[0-9]*\.[0-9]*:8000/http:\/\/${endpoint}:8000/" ./index.js
