const { getDefaultConfig } = require("expo/metro-config");
const { withNativewind } = require("nativewind/metro"); // Note the lowercase 'w' in withNativewind in v5 docs

const config = getDefaultConfig(__dirname);

// Remove the { input: './global.css' } part!
module.exports = withNativewind(config);
