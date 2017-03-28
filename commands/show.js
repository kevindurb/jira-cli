const show = require('../actions/show');

module.exports = (app) => (
  app
  .command('show <issue>')
  .description('show jira issue details')
  .action(show)
);
