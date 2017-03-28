const axios = require('axios');
const cred = require('../lib/credentials');
const login = require('../actions/login');

class JiraApi {

  constructor(jiraDomain, authData) {
    this.jiraDomain = jiraDomain;
    this.authData = authData;

    this.jira = axios.create({
      baseURL: `https://${jiraDomain}.atlassian.net/rest/api/latest/`,
      headers: {
        'Authorization': `Basic ${authData}`,
      },
    });
  }

  getIssue(id = '') {
    return this.jira.get(`issue/${id}`);
  }

}

JiraApi.create = ({ subdomain, auth }) => (
  new JiraApi(subdomain, auth)
);

JiraApi.connect = () => (
  cred.getCredentials()
  .catch(login)
  .then(JiraApi.create)
);

module.exports = JiraApi;
