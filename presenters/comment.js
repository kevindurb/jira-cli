const R = require('ramda');
const moment = require('moment');
const chalk = require('chalk');

const getCreatedTime = R.pathOr('', ['created']);
const getAuthor = R.pathOr('', ['author', 'name']);
const getBody = R.pathOr('', ['body']);

const separator = chalk.blue('---------------------------------------');

module.exports = (comment) => {
  const time = chalk.blue(
    moment(
      getCreatedTime(comment)
    ).format('l LT')
  );
  const author = chalk.blue(getAuthor(comment));

  console.log('');
  console.log(separator);
  console.log(`${time} : ${author}`);
  console.log(getBody(comment));
  console.log(separator);
};
