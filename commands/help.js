module.exports = (app) => (
  app
  .command('*')
  .action(() => {
    console.log('usage:');
    console.log('jira <command> <args...>');
    console.log('');
    console.log('commands:');
    console.log('login');
    console.log('show');
    console.log('open');
  })
);
