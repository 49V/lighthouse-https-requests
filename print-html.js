var https = require('https');

(function getAndPrintHtml() {
  
  var message = '';

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

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

})();