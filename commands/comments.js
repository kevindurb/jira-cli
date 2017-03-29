const comments = require('../actions/comments');

module.exports = (app) => (
  app
  .command('comments <issue>')
  .description('show jira issue comments')
  .action(comments)
);
