const R = require('ramda');
const JiraApi = require('../lib/JiraApi');
const presentIssue = require('../presenters/issue');
const h = require('../lib/helpers');

module.exports = (jql) => (
  JiraApi.run('search', jql)
  .then(R.prop('data'))
  .then(R.prop('issues'))
  .then(R.map(presentIssue))
  .catch(h.error('search failed!'))
);
