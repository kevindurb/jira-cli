const R = require('ramda');
const JiraApi = require('../lib/JiraApi');
const h = require('../lib/helpers');

const presentIssue = require('../presenters/issue');
const show = require('./show');

module.exports = (issue, assignee) => (
  JiraApi.run('assignIssue', issue, assignee)
  .then(R.always(issue))
  .then(show)
  .catch(h.error(`could not assign ${issue} to ${assignee}`))
);
