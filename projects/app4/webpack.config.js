const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const mf = require('@angular-architects/module-federation/webpack');
const path = require('path');

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, 'tsconfig.app.json'), [
	/* mapped paths to share */
]);

module.exports = {
	output: {
		uniqueName: 'remoteFour',
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
			name: 'remoteFour',
			filename: 'remoteEntry.js',
			exposes: {
				'RemoteFour': './projects/app4/src/app/remote-four/remote-four.module.ts',
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
