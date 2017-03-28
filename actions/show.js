const R = require('ramda');
const JiraApi = require('../lib/JiraApi');

const presentIssue = require('../presenters/issue');
const resultData = R.propOr({}, 'data');

module.exports = (issue) => (
  JiraApi.connect()
  .then((api) => {
    return api.getIssue(issue);
  })
  .then(resultData)
  .then(presentIssue)
);
