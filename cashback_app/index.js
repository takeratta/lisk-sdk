const { Application, genesisBlockDevnet } = require('../framework/src');
const Cashback = require('./transactions/cashback');

const app = new Application('my-app', genesisBlockDevnet);

app.registerTransaction(9, Cashback);

app
	.run()
	.then(() => app.logger.info('App started...'))
	.catch(error => {
		console.error('Faced error in application', error);
		process.exit(1);
	});
