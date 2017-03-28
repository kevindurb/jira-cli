const open = require('open');
module.exports = (issue) => {
  open(`https://churchcommunity.atlassian.net/browse/${issue}`);
};
