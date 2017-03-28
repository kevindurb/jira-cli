const R = require('ramda');
const JiraApi = require('../lib/JiraApi');

const presentIssue = require('../presenters/issue');
const show = require('./show');

module.exports = (issue, assignee) => (
  JiraApi.connect()
  .then((api) => (
    api.assignIssue(issue, assignee)
  ))
  .then(() => (
    show(issue)
  ))
  .catch(() => {
    console.error(
      `ERROR: could not assign ${issue} to ${assignee}`
    );
  })
);
