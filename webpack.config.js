const path = require('path');

module.exports = {
  entry: './popup.js',  // Replace 'yourScript.js' with your main script's name
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
