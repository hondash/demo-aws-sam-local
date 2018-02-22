'use strict';
console.log('********** Loading function **********');

const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB({
  apiVersion: '2012-08-10',
  endpoint: 'http://172.19.0.1:8000'
});

exports.handler = (event, context, callback) => {
    callback(null, {
        statusCode: 501,
        body: "Not implemented"
    })
};
