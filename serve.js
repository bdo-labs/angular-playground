
/**
 * Module dependencies.
 */
var express = require('express');
var compression = require('compression');
var logger = require('morgan');
var pkg = require('./package.json');
var readFile = require('fs').readFileSync;
var entry = readFile('./index.html', 'utf-8');

/**
 * Expose `server`.
 */
module.exports = server;

/**
 * Creates a server instance.
 *
 * I've wrapped the server in a function to easily
 * create new instances from an external CLI etc.
 *
 * @param {Object} opts
 * @return {Application} app
 * @api public
 */
function server(opts){
  opts = opts || {};

  // Environment.
  var app = express();
  app.set('name', pkg.name);
  app.set('version', pkg.version);

  // Middle-ware.
  if ('test' != opts.env) app.use(logger());
  app.use(compression());
  app.use(express.static('./build'));
  app.use('/humans.txt', function(req, res){ res.sendfile('./humans.txt'); });

  // Leave routing etc. to the client.
  // Meaning that routes that don't get a static hit, will be
  // dynamically routed to the `index.html` file.
  app.use(function(req, res){
    var html = entry.replace('{{name}}', app.get('name'));
    res.type('html');
    res.end(html);
  });

  return app;
}

/**
 * Start a server automatically if there's no parent process.
 */
if (!module.parent){
  var port = process.env.PORT || 3000;
  var app = server({
    env: process.env.NODE_ENV || 'development',
  });
  app.listen(port);
  console.log('Listening on port %s', port);
}

