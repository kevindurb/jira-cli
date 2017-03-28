const open = require('../actions/open');

module.exports = (app) => (
  app
  .command('open <issue>')
  .description('open jira issue in browser')
  .action(open)
);
