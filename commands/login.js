const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const CONFIG_FILE = path.join(
  process.env.HOME,
  '.jira_credentials'
);

const usernameQuestion = {
  type: 'input',
  name: 'username',
  message: 'Username:',
};

const passwordQuestion = {
  type: 'password',
  name: 'password',
  message: 'Password:',
};

const requestInformation = () => (
  inquirer.prompt([
    usernameQuestion,
    passwordQuestion,
  ])
);

const storeCredentials = (credentials) => (
  new Promise((resolve, reject) => {
    fs.writeFile(
      CONFIG_FILE,
      JSON.stringify({
        username: credentials.username,
        password: credentials.password,
      }),
      (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      }
    );
  })
);

module.exports = (app) => {
  app
  .command('login')
  .description('store auth information')
  .action(() => {
    requestInformation()
    .then(storeCredentials)
    .then(() => {
      console.log('credentials stored!');
    });
  });
};
