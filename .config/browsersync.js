const { argv } = require('yargs');
const url = require('url');

let host = 'localhost';
let proxy = 'localhost';

if (argv.env && argv.env.url) {
	host = url.parse(argv.env.url).hostname;
	proxy = argv.env.url;
}

module.exports = {
	host,
	port: 3000,
	open: 'external',
	files: ['**/*.html'],
	ghostMode: {
		clicks: false,
		scroll: true,
		forms: {
			submit: true,
			inputs: true,
			toggles: true
		}
	},
	snippetOptions: {
		rule: {
			match: /<\/body>/i,
			fn: (snippet, match) => `${snippet}${match}`
		}
	},
	proxy
};
