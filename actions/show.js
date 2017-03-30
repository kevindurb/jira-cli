const R = require('ramda');
const JiraApi = require('../lib/JiraApi');
const presentIssue = require('../presenters/issue');
const h = require('../lib/helpers');

module.exports = (issue) => (
  JiraApi.run('getIssue', issue)
  .then(R.prop('data'))
  .then(presentIssue)
  .catch(h.error(`could not get issue ${issue}`))
);
