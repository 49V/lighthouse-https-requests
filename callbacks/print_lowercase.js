var HTTPS = require('../http-functions');

var HTTPSInstance = new HTTPS();

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printLowerCase (html) {
  console.log(html.toLowerCase());
}

HTTPSInstance.getHTML(requestOptions, printLowerCase);