const promisify = require('promisify-node');
const fs = promisify('fs');
const path = require('path');

const CREDENTIAL_PERMS = parseInt('0600', 8);

const CONFIG_FILE = path.join(
  process.env.HOME,
  '.jira_credentials'
);

const buildCredObject = ({ subdomain, username, password }) => ({
  auth: new Buffer(
    `${username}:${password}`
  ).toString('base64'),
  subdomain,
});

const storeCredentials = (authData) => {
  const credObject = buildCredObject(authData);

  return fs.writeFile(
    CONFIG_FILE,
    JSON.stringify(credObject),
    { mode: CREDENTIAL_PERMS }
  ).then(() => (credObject))
};

const getCredentials = () => (
  fs.readFile(CONFIG_FILE)
  .then(JSON.parse)
);

module.exports = {
  storeCredentials,
  getCredentials,
};
