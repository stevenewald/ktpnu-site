const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@auth': path.resolve(__dirname, 'src/Components/Portal/Auth'),
      '@images': path.resolve(__dirname, 'src/Assets/Images'),
      '@tabs': path.resolve(__dirname, 'src/Components/Portal/Tabs'),
      '@portal': path.resolve(__dirname, 'src/Components/Portal'),
      '@landing': path.resolve(__dirname, 'src/Components/Landing'),
    },
  },
};