var argv = require('yargs')
  .command('create', 'Create a new account', function (yargs) {
    yargs.options({
      name: {
        demand: true,
        alias: 'n',
        description: 'Account name (ex: Twitter, Facebook)',
        type: 'string'
      },
      username: {
        demand: true,
        alias: 'u',
        description: 'Account username or email',
        type: 'string'
      },
      password: {
        demand: true,
        alias: 'p',
        description: 'Account Password',
        type: 'string'
      }
    }).help('help');
  })
  .command('get', 'Get an existing account', function (yargs) {
    yargs.options({
      name: {
        demand: true,
        alias: 'n',
        description: 'Account name (ex: Twitter, Facebook)',
        type: 'string'
      }
    }).help('help');
  })
  .help('help')
  .argv;

console.log(argv);

var command = argv._[0];

console.log(command);
