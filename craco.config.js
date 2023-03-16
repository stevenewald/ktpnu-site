const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@images': path.resolve(__dirname, 'src/Assets/Images'),
      '@portal': path.resolve(__dirname, 'src/Components/Portal'),
      '@landing': path.resolve(__dirname, 'src/Components/Landing'),
    },
  },
};