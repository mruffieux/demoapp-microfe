const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const mf = require('@angular-architects/module-federation/webpack');
const path = require('path');

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, 'tsconfig.app.json'), [
	/* mapped paths to share */
]);

module.exports = {
	output: {
		uniqueName: 'anotherOne',
		publicPath: 'auto',
	},
	optimization: {
		runtimeChunk: false,
	},
	resolve: {
		alias: {
			...sharedMappings.getAliases(),
		},
	},
	plugins: [
		new ModuleFederationPlugin({
			name: 'anotherOne',
			filename: 'remoteEntry.js',
			exposes: {
				'AnotherOne': './projects/app6/src/app/another-one/another-one.module.ts',
			},
			// remotes: {},
			shared: {
				'@angular/core': { singleton: true, strictVersion: true },
				'@angular/common': { singleton: true, strictVersion: true },
				'@angular/router': { singleton: true, strictVersion: true },
        "rxjs": { singleton: true, strictVersion: true },

				...sharedMappings.getDescriptors(),
			},
		}),
		sharedMappings.getPlugin(),
	],
};
