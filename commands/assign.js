const assign = require('../actions/assign');

module.exports = (app) => (
  app
  .command('assign <issue> <assignee>')
  .description('assign an issue to someone')
  .action(assign)
);
