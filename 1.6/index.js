// external dependencies
var Presta = require(__dirname+'/presta');

function init(connection) {
  console.log(connection);
  return new Presta(connection.storeUrl, connection.apiKey, connection.options);
}

module.exports = init;
