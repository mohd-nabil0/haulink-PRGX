const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

// Remove "svg" from asset extensions and add it to source extensions
config.resolver.assetExts = config.resolver.assetExts.filter(ext => ext !== 'svg');
config.resolver.sourceExts.push('svg');

config.transformer.babelTransformerPath = require.resolve('react-native-svg-transformer');

module.exports = config;
