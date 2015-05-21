/** Pakr static asset server
 *
 *  @copyright  Copyright (C) 2015 by Yieme
 *  @module     pakr-static
 */
'use strict';

function pakrStatic(req, res, next) {
  console.log(req.url)
  next()
}


function server(options) {
  return require('middle-server')(options)
}

module.exports = pakrStatic
module.exports.server = server
