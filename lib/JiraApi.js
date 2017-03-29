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

  getIssue(issue = '') {
    return this.jira.get(`issue/${issue}`);
  }

  getComments(issue = '') {
    return this.jira.get(`issue/${issue}/comment`);
  }

  addComment(issue = '', body = '') {
    return this.jira.post(
      `issue/${issue}/comment`,
      {
        body,
      }
    );
  }

  getTransitions(issue = '') {
    return this.jira.get(`issue/${issue}/transitions`);
  }

  doTransition(issue = '', transitionId) {
    return this.jira.post(
      `issue/${issue}/transitions`,
      {
        transition: {
          id: transitionId,
        },
      }
    );
  }

  assignIssue(issue, assignee) {
    return this.jira.put(
      `issue/${issue}/assignee`,
      { name: assignee }
    );
  }

  search(jql) {
    return this.jira.post(
      'search',
      {
        jql,
        fields: [
          'summary',
          'status',
          'assignee',
        ],
      }
    );
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
