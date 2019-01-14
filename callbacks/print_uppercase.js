var HTTPS = require('../http-functions');

var HTTPSInstance = new HTTPS();

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (html) {
  console.log(html.toUpperCase());
}

HTTPSInstance.getHTML(requestOptions, printUpperCase);