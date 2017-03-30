const inquirer = require('inquirer');
const cred = require('../lib/credentials');
const h = require('../lib/helpers');

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

module.exports = () => (
  requestInformation()
  .then(cred.storeCredentials)
  .then(h.log('credentials stored!'))
);
