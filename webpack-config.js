const path = require('path');

module.exports = {
  entry: 'public/index.js', // Cambia esto a la ruta correcta de tu archivo de entrada
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'production'
};
