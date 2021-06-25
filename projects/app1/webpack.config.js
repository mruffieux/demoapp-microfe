const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, "tsconfig.app.json"), [
  /* mapped paths to share */
]);

module.exports = {
  output: {
    uniqueName: "app1",
    publicPath: "auto",
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      remotes: {
        Remote1: "remote1@http://localhost:5001/remoteEntry.js",
        Remote3: "remote3@http://localhost:5002/remoteEntry.js",
        RemoteFour: "remoteFour@http://localhost:5004/remoteEntry.js",
        NestedMfe: "nestedMfe@http://localhost:5006/remoteEntry.js",
      },
      shared: {
        "@angular/core": { singleton: true, strictVersion: true },
        "@angular/common": { singleton: true, strictVersion: true },
        "@angular/router": { singleton: true, strictVersion: true },
        rxjs: { singleton: true, strictVersion: true },

        ...sharedMappings.getDescriptors(),
      },
    }),
    sharedMappings.getPlugin(),
  ],
};
