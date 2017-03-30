const chalk = require('chalk');

const log = (msg) => (data) => {
  console.info(
    chalk.blue('INFO:'),
    msg
  );
  return data;
};

const error = (msg) => () => {
  console.error(
    chalk.red('ERROR:'),
    msg
  );
};

module.exports = {
  log,
  error,
};
