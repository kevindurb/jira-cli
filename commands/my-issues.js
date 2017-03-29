const myIssues = require('../actions/my-issues');

module.exports = (app) => (
  app
  .command('my-issues')
  .description('show my jira issues')
  .action(myIssues)
);
