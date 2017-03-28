const fs = require('fs');
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

const storeCredentials = (authData) => (
  new Promise((resolve, reject) => {
    const credObject = buildCredObject(authData);

    fs.writeFile(
      CONFIG_FILE,
      JSON.stringify(credObject),
      { mode: CREDENTIAL_PERMS },
      (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(credObject);
        }
      }
    );
  })
);

const getCredentials = () => (
  new Promise((resolve, reject) => {
    fs.readFile(
      CONFIG_FILE,
      (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(JSON.parse(data));
        }
      }
    );
  })
);

module.exports = {
  storeCredentials,
  getCredentials,
};
