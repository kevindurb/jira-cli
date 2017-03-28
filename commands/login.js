const login = require('../actions/login');

module.exports = (app) => (
  app
  .command('login')
  .description('store auth information')
  .action(login)
 );
