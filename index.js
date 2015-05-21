'use strict';

var os            = require('os')
var Dias          = require('dias')
var pkg           = require('./package.json')
var Logger        = require('ceo-logger')
var middleServer  = require('middle-server')
var favicon       = require('serve-favicon')(__dirname + '/favicon.ico')
var publicFiles   = middleServer.static('public')

Dias(function(dias) {
  var logVariables  = { server: { id: pkg.name, ver: pkg.version, ua: dias.useragent, node: dias.node, pid: process.pid } }
  var logger        = new Logger(logVariables, false)

  function logError(err, req, res, next) {
    res.status(500).send({ code: 500, error: err.message || err })
  }

  process.on('uncaughtException', function (err) {
    logger.error(err)
    logger.error(err.stack)
  })

  middleServer({
    logger: logger,
    pre:    [
      middleServer.log,
      favicon,
    ],
    post:   [
      publicFiles,
      logError
    ]
  })
})
