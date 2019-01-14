var HTTPS = require('../http-functions');

var HTTPSInstance = new HTTPS();

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverse (html) {
  html = html.split("").reverse().join("");
  console.log(html);
}

HTTPSInstance.getHTML(requestOptions, printReverse);