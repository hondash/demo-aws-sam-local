'use strict'
console.log('Loading function')

exports.handler = async (event, context, callback) => {
    return `Hello, ${event.name}!`
}
