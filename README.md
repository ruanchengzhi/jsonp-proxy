Jsonp Proxy
============

Convert json url into jsonp

Installation
=====

```
# git clone https://github.com/fakechris/jsonp-proxy
# cd jsonp-proxy/
# npm -g install

// Then edit config.js, make sure you have everything checked in the config file
// and run!
# node app.js
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
