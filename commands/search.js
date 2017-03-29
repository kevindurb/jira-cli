const search = require('../actions/search');

module.exports = (app) => (
  app
  .command('search <jql>')
  .description('search jira with jql')
  .action(search)
);
