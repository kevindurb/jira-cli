const R = require('ramda');
const JiraApi = require('../lib/JiraApi');
const search = require('./search');

module.exports = () => (
  search('assignee = currentUser()')
);
