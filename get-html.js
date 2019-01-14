var https = require('https');

function getHTML(requestOptions, callback) {

  var message = '';

  https.get(requestOptions, function(response) {

    console.log('Enter');

    response.setEncoding('utf8');

    response.on('data', function (data) {
      message += data;
    });

    response.on('end', function() {
      callback(message);
    });

  });

  return;

}

function printHTML(html) {
  console.log(html);
  }

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);