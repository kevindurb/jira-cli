const R = require('ramda');
const JiraApi = require('../lib/JiraApi');

const presentIssue = require('../presenters/issue');
const resultData = R.propOr({}, 'data');

module.exports = (issue) => (
  JiraApi.connect()
  .then((api) => (
    api.getIssue(issue)
  ))
  .then(resultData)
  .then(presentIssue)
);
