module.exports = (app) => (
  app
  .command('*')
  .action((other) => {
    console.log(`ERROR: ${other} is not a command`);
    app.help();
  })
);
