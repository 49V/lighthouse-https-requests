var https = require('https');

function HTTPSFunctions() {

  this.printHTML = function (html) {
    console.log(html);
    }

  this.getHTML = function (requestOptions, callback) {

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
}

module.exports = HTTPSFunctions;
