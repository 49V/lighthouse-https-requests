var https = require('https');

function getAndPrintHTML(requestOptions) {
  
  var message = '';

  https.get(requestOptions, function (response) {
    response.setEncoding('utf8');

    response.on('data', function(data) {
      message += data;
    })

    response.on('end', function() {
      console.log(message);
    })
  });

  return;

};

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};

getAndPrintHTML(requestOptions);