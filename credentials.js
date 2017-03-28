const fs = require('fs');
const path = require('path');

const CONFIG_FILE = path.join(
  process.env.HOME,
  '.jira_credentials'
);

const storeCredentials = ({ subdomain, username, password }) => (
  new Promise((resolve, reject) => {
    fs.writeFile(
      CONFIG_FILE,
      JSON.stringify({
        subdomain,
        auth: new Buffer(
          `${username}:${password}`
        ).toString('base64'),
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
