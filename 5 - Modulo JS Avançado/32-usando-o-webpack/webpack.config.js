//Resgatando do node o metodo de resolução de caminhos
const path = require('path')

//Exportando as configurações para o webpack
module.exports = {
  //Configurações de entry points, ou arquivos a ser minificados
  entry: {
    index: './src/index.js',
    hello: './src/hello.js'
  },
  //Configurações de saida dos arquivos
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].min.js'
  },
  //Declaração do modo
  mode: 'development'
}