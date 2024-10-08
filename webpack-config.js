const path = require('path');

module.exports = {
  entry: './public/index.js', // Ruta correcta al archivo de entrada
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'production'
};

