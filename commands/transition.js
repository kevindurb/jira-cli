const transition = require('../actions/transition');

module.exports = (app) => (
  app
  .command('transition <issue>')
  .description('perform transition on issue')
  .action(transition)
 );
