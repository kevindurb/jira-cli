const R = require('ramda');
const inquirer = require('inquirer');
const JiraApi = require('../lib/JiraApi');
const show = require('./show');
const helpers = require('../lib/helpers');

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

const resultData = R.propOr({}, 'data');
const getTransitions = R.propOr({}, 'transitions');
const getTransition = R.propOr({}, 'transition');

module.exports = (issue) => (
  JiraApi.connect()
  .then((api) => (
    api.getTransitions(issue)
  ))
  .then(resultData)
  .then(getTransitions)
  .then(buildChoiceArray)
  .then(selectTransition)
  .then(getTransition)
  .then(transition => (
    JiraApi.connect()
    .then(api => (
      api.doTransition(issue, transition)
    ))
    .then(() => issue)
  ))
  .then(show)
);
