// keys.js determine the credentials to return

if(process.env.NODE_ENV === 'production') {
  // we are in production - return the production keys
  module.exports = require('./prod');
} else {
  // we are in development return the development keys
  module.exports = require('./dev');
}