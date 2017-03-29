#!/usr/bin/env node

const app = require('commander');
const login = require('./commands/login');

app
.version('1.0.0')
  .usage('[command] <arguments>')

require('./commands/login')(app);
require('./commands/show')(app);
require('./commands/open')(app);
require('./commands/assign')(app);
require('./commands/transition')(app);
require('./commands/help')(app);

app.parse(process.argv);

if (!process.argv.slice(2).length) {
  app.help();
}
