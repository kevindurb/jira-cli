const R = require('ramda');
const JiraApi = require('../lib/JiraApi');
const presentIssue = require('../presenters/issue');

module.exports = (issue) => (
  JiraApi.connect()
  .then((api) => (
    api.getIssue(issue)
  ))
  .then(R.prop('data'))
  .then(presentIssue)
);
