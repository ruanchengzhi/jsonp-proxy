/**
 * Hosts the web server behind CASv2 Authentication or Google OAuth2 Authentication
 * with nodejs and express.
 * License: MIT
 * Author: Chris Song.
 * Project: https://github.com/fakechris/cas-proxy
 */

var connect = require('connect');
var url = require('url');
var httpProxy = require('http-proxy');
var querystring = require('querystring');

var config = require('./config');

console.log('Server starting...');

var proxy = httpProxy.createProxyServer({
  target: config.proxy_url
});

config.hostname = url.parse(config.proxy_url).hostname;

run();

function run() {
  connect.createServer(
    function(req, res, next) {
      var _write = res.write;
      var _req = req;
      res.write = function(data) {
        //debugger;
        var callback_name = querystring.parse(url.parse(req.url).query)._callback || "_cb"
        _write.call(res, callback_name + "(" + data.toString() + ");");
      }
      next();
    },
    function(req, res) {
      // modify req host header
      if (config.replaceHostname) {
        req['headers'].host = config.hostname;
      }
      req['headers'].http_x_forwarded_for = req.connection.remoteAddress;
      for (header in config.replaceHeaders) {
        req['headers'][header] = config.replaceHeaders[header];
      }
      proxy.web(req, res, { target: config.proxy_url }, function(e){
        console.log('error '+ e);
      });        
    }
  ).listen(config.listen_port);
  console.log('Server listening on ' + config.listen_port);
}

