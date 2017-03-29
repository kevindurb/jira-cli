const addComment = require('../actions/add-comment');

module.exports = (app) => (
  app
  .command('add-comment <issue>')
  .description('add comment to issue')
  .action(addComment)
);
