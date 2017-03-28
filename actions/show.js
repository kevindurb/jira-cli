const R = require('ramda');
const JiraApi = require('../lib/JiraApi');
const cred = require('../lib/credentials');

const login = require('../actions/login');

const presentIssue = require('../presenters/issue');
const resultData = R.propOr({}, 'data');

module.exports = (issue) => (
  cred.getCredentials()
  .catch(login)
  .then(JiraApi.create)
  .then((api) => {
    return api.getIssue(issue);
  })
  .then(resultData)
  .then(presentIssue)
);
