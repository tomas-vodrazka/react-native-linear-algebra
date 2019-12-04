// Change 1 (import the blacklist utility)
const blacklist = require("metro-config/src/defaults/blacklist");
const defaultAssetExts = require("metro-config/src/defaults/defaults")
  .assetExts;

module.exports = {
  resolver: {
    // Change 2 (add 'bin' to assetExts)
    assetExts: ["bin", ...defaultAssetExts],
    // Change 3 (add platform_node to blacklist)
    blacklistRE: blacklist([/platform_node/])
  }
};
