// external dependencies
var Presta = require('prestashop-sdk-16');

function init(connection) {
  console.log(connection);
  return new Presta(connection.storeUrl, connection.apiKey, connection.options);
}

module.exports = init;
