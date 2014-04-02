Jsonp Proxy
============

Convert json url into jsonp

Installation
=====

```
# npm install json-proxy

// or clone source code
# git clone https://github.com/fakechris/jsonp-proxy
# cd jsonp-proxy/
# npm -g install

// Then edit config.js, make sure you have everything checked in the config file
// and run!
# node app.js
```

Usage
=====

```
# curl http://ip.taobao.com/service/getIpInfo.php?ip=121.28.12.5

//{"code":0,"data":{"country":"\u4e2d\u56fd","country_id":"CN","area":"\u534e\u5317","area_id":"100000","region":"\u6cb3\u5317\u7701","region_id":"130000","city":"\u77f3\u5bb6\u5e84\u5e02","city_id":"130100","county":"","county_id":"-1","isp":"\u8054\u901a","isp_id":"100026","ip":"121.28.12.5"}}

# curl http://127.0.0.1:8080/service/getIpInfo.php?ip=121.28.12.5&_callback=cbfunc

//cbfunc({"code":0,"data":{"country":"\u4e2d\u56fd","country_id":"CN","area":"\u534e\u5317","area_id":"100000","region":"\u6cb3\u5317\u7701","region_id":"130000","city":"\u77f3\u5bb6\u5e84\u5e02","city_id":"130100","county":"","county_id":"-1","isp":"\u8054\u901a","isp_id":"100026","ip":"121.28.12.5"}})

```

Configuration
=============

All settings are placed in /config.js, hack it as you go.

### Proxy Settings

- ``proxy_url``: *The url proxy to*
- ``replaceHostname``: *Is replace hostname to proxy hostname?*
- ``replaceHeaders``: *Replace specific http request header*
- ``listen_port``: *The port proxy server listened to*

License
=======
Jsonp Proxy is freely distributable under the terms of the MIT license.

Copyright (c) 2014 Chris Song

See LICENCE for details.
