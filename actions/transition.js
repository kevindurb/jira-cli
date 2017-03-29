const R = require('ramda');
const inquirer = require('inquirer');
const JiraApi = require('../lib/JiraApi');
const show = require('./show');

const selectTransition = (choices = []) => (
  inquirer.prompt([{
    type: 'list',
    name: 'transition',
    message: 'Choose the transition:',
    choices,
  }])
);

const buildChoiceArray = R.map(
  transition => ({
    value: transition.id,
    name: transition.name,
  })
);

module.exports = (issue) => (
  JiraApi.connect()
  .then((api) => (
    api.getTransitions(issue)
  ))
  .then(R.prop('data'))
  .then(R.prop('transitions'))
  .then(buildChoiceArray)
  .then(selectTransition)
  .then(R.prop('transition'))
  .then(transition => (
    JiraApi.connect()
    .then(api => (
      api.doTransition(issue, transition)
    ))
  ))
  .then(R.always(issue))
  .then(show)
);
