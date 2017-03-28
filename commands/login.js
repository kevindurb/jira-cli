const inquirer = require('inquirer');
const cred = require('../credentials');

const subdomainQuestion = {
  type: 'input',
  name: 'subdomain',
  message: 'Subdomain:',
};

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
    subdomainQuestion,
    usernameQuestion,
    passwordQuestion,
  ])
);

module.exports = (app) => {
  app
  .command('login')
  .description('store auth information')
  .action(() => {
    requestInformation()
    .then(cred.storeCredentials)
    .then(() => {
      console.log('credentials stored!');
    });
  });
};
