'use strict';
console.log('********** Loading function **********');

const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB({
  apiVersion: '2012-08-10',
  endpoint: 'http://172.19.0.1:8000'
});

exports.handler = (event, context, callback) => {

    if (event.action === "LIST") {
        const params = {};
        dynamodb.listTables(params, function(err, data) {
            if (err) {
                console.error(err);
            } else {
                console.log(data);
            }
        });
    } else if (event.action === "CREATE") {
        const createParams = require('table_info');
        dynamodb.createTable(createParams, function(err, data) {
            if (err) {
                console.error(err);
            } else {
                console.log(data);
            }
        });
    } else {
      console.log(`"${event.action}" action is not exists.`);
    }

    callback(null, '********** Finished function **********');
};
