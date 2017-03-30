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

module.exports = (issue) => (
  JiraApi.run('getTransitions', issue)
  .then(R.prop('data'))
  .then(R.prop('transitions'))
  .then(buildChoiceArray)
  .then(selectTransition)
  .then(R.prop('transition'))
  .then(transition => (
    JiraApi.run('doTransition', issue, transition)
    .catch(h.error(`could not transition ${issue} to ${transition}`))
  ))
  .then(R.always(issue))
  .then(show)
  .catch(h.error(`could not get transitions for issue ${issue}`))
);
