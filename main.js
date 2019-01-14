var HTTPS = require('./http-functions');

var HTTPSInstance = new HTTPS();

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};


HTTPSInstance.getHTML(requestOptions, HTTPSInstance.printHTML);