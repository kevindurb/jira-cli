const R = require('ramda');
const JiraApi = require('../lib/JiraApi');
const presentIssue = require('../presenters/issue');

module.exports = (jql) => (
  JiraApi.connect()
  .then((api) => (
    api.search(jql)
  ))
  .then(R.prop('data'))
  .then(R.prop('issues'))
  .then(R.map(presentIssue))
);
