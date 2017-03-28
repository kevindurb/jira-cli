const R = require('ramda');
const chalk = require('chalk');

const getKey = R.propOr('', 'key');
const getSummary = R.pathOr('', ['fields', 'summary']);
const getStatus = R.pathOr('', ['fields', 'status', 'name']);
const getAssignee = R.pathOr('', ['fields', 'assignee', 'displayName']);
const getDescription = R.pathOr('', ['fields', 'description']);

module.exports = (issue) => {
  console.log(chalk.blue.underline.bold(getKey(issue)));
  console.log(chalk.green.underline.bold('summary:'), getSummary(issue));
  console.log(chalk.green.underline.bold('assignee:'), getAssignee(issue));
  console.log(chalk.green.underline.bold('status:'), getStatus(issue));
  console.log(chalk.green.underline.bold('description:'));
  console.log(getDescription(issue));
};
