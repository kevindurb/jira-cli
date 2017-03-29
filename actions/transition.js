const R = require('ramda');
const inquirer = require('inquirer');
const JiraApi = require('../lib/JiraApi');
const show = require('./show');
const h = require('../lib/helpers');

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

const transitionsProp = R.propOr({}, 'transitions');
const transitionProp = R.propOr({}, 'transition');

module.exports = (issue) => (
  JiraApi.connect()
  .then((api) => (
    api.getTransitions(issue)
  ))
  .then(h.dataProp)
  .then(transitionsProp)
  .then(buildChoiceArray)
  .then(selectTransition)
  .then(transitionProp)
  .then(transition => (
    JiraApi.connect()
    .then(api => (
      api.doTransition(issue, transition)
    ))
  ))
  .then(h.pipe(issue))
  .then(show)
);
