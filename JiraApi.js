const axios = require('axios');

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

module.exports = JiraApi;
