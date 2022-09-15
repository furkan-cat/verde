const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@features': path.resolve(__dirname, 'src/features'),
      '@helpers': path.resolve(__dirname, 'src/helpers'),
      '@constants': path.resolve(__dirname, 'src/constants'),
    },
  },
};
