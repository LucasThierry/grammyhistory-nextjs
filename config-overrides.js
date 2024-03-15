const TerserPlugin = require('terser-webpack-plugin');

config.optimization = { minimize: true, minimizer: [new TerserPlugin({ exclude: /\/node_modules\/react-image-gallery/ })], };