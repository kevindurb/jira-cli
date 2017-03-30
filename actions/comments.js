const R = require('ramda');
const JiraApi = require('../lib/JiraApi');
const presentComment = require('../presenters/comment');
const h = require('../lib/helpers');

module.exports = (issue) => (
  JiraApi.run('getComments', issue)
  .then(R.prop('data'))
  .then(R.prop('comments'))
  .then(R.forEach(presentComment))
  .catch(h.error(`could not get comments for ${issue}`))
);
