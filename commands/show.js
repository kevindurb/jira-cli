const chalk = require('chalk');
const R = require('ramda');
const JiraApi = require('../JiraApi');
const cred = require('../credentials');

const getKey = R.propOr('', 'key');
const getSummary = R.pathOr('', ['fields', 'summary']);
const getStatus = R.pathOr('', ['fields', 'status', 'name']);
const getAssignee = R.pathOr('', ['fields', 'assignee', 'displayName']);
const getDescription = R.pathOr('', ['fields', 'description']);

const getBaseIssueData = result => (
  result.data
);

const presentIssue = (issue) => {
  console.log(chalk.blue.underline.bold(getKey(issue)));
  console.log(chalk.green.underline.bold('summary:'), getSummary(issue));
  console.log(chalk.green.underline.bold('assignee:'), getAssignee(issue));
  console.log(chalk.green.underline.bold('status:'), getStatus(issue));
  console.log(chalk.green.underline.bold('description:'));
  console.log(getDescription(issue));
};

module.exports = (app) => {
  app
  .command('show <issue>')
  .description('show jira issue details')
  .action((issue) => {
    cred.getCredentials()
    .then(JiraApi.create)
    .then((api) => {
      return api.getIssue(issue);
    })
    .then(getBaseIssueData)
    .then(presentIssue);
  });
};
