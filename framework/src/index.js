const transactions = require('@liskhq/lisk-transactions');
const cryptography = require('@liskhq/lisk-cryptography');
const Application = require('./controller/application');
const BigNumber = require('./modules/chain/helpers/bignum');
const samples = require('../samples');
const version = require('./version');
const validator = require('./controller/helpers/validator');

/**
 * @namespace framework
 * @type {{constants, Application: (module.Application|*), version: string}}
 */
module.exports = {
	Application,
	BigNumber,
	version,
	...samples,
	helpers: {
		validator,
	},
	...transactions,
	cryptography,
};
