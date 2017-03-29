const R = require('ramda');
const chalk = require('chalk');

const getKey = R.propOr('', 'key');
const getSummary = R.pathOr('', ['fields', 'summary']);
const getStatus = R.pathOr('', ['fields', 'status', 'name']);
const getAssignee = R.pathOr('', ['fields', 'assignee', 'name']);
const getDescription = R.pathOr('', ['fields', 'description']);

const blueBold = chalk.blue.underline.bold;
const greenBold = chalk.green.underline.bold;

module.exports = (issue) => {
  console.log('');
  console.log(blueBold(getKey(issue)));
  console.log(greenBold('summary:'), getSummary(issue));
  console.log(greenBold('assignee:'), getAssignee(issue));
  console.log(greenBold('status:'), getStatus(issue));
  if (getDescription(issue)) {
    console.log(greenBold('description:'));
    console.log(getDescription(issue));
  }
};
