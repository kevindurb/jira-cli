const R = require('ramda');
const inquirer = require('inquirer');
const JiraApi = require('../lib/JiraApi');
const comments = require('./comments');

const requestComment = () => (
  inquirer.prompt([{
    type: 'editor',
    name: 'comment',
    message: 'Comment:',
  }])
);

module.exports = (issue) => (
  requestComment()
  .then(R.prop('comment'))
  .then(comment => (
    JiraApi.connect()
    .then((api) => (
      api.addComment(issue, comment)
    ))
  ))
  .then(R.always(issue))
  .then(comments)
);
