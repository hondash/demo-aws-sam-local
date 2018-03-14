'use strict'
const express = require('express')
const app = express()

const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
app.use(awsServerlessExpressMiddleware.eventContext())

app.get('/', (req, res) => {
    res.json(req.apiGateway.event)
})

app.get('/aaa', (req, res) => {
    res.json(req.apiGateway.event)
})

app.get('/bbb', (req, res) => {
    res.json(req.apiGateway.event)
})

app.get('/ccc', (req, res) => {
    res.json(req.apiGateway.event)
})

module.exports = app
