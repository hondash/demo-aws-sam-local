'use strict'
const express = require('express')
const app = express()

const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
app.use(awsServerlessExpressMiddleware.eventContext())

app.get('/', (req, res) => {
    console.log("GET: /");
    res.json(req.apiGateway.event)
})

app.get('/aaa', (req, res) => {
    console.log("GET: /aaa");
    res.json(req.apiGateway.event)
})

app.get('/bbb', (req, res) => {
    console.log("GET: /bbb");
    res.json(req.apiGateway.event)
})

app.get('/ccc', (req, res) => {
    console.log("GET: /ccc");
    res.json(req.apiGateway.event)
})

module.exports = app
