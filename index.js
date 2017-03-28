#!/usr/bin/env node

const app = require('commander');
const login = require('./commands/login');

app.version('1.0.0');

require('./commands/login')(app);

app.parse(process.argv);
