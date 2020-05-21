const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const baseConfig = () => ({
  entry: './src/index.js', //wskazuje, w którym pliku JS znajduje się główny kod aplikacji.
  output: { //wskazuje miejsce, w którym ma być wygenerowana wersja produkcyjna,
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'scripts_bundle.js',
  },
  devServer: {
    historyApiFallback: true,
  },
  module: { //zawiera kon3gurację dla różnych typów plików – np. dla plików JS czy SCSS.
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  }, 
  plugins: [ //mamy listę wtyczek webpacka, które są niezbędne w naszej aplikacji.
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
});

const devConfig = () => ({
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: [
          'style-loader', 
          {
            loader: 'css-loader',
            query: {
              modules: true, 
              localIdentName: '[name]_[local]_[hash:base64:5]',
            },
          }, 
          'sass-loader',
        ],
      },
    ],
  },
});

const prodConfig = () => ({
  module: {
    rules: [
      {
        test:/\.(s*)css$/,
        use:[
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            query: {
              modules: true, 
              localIdentName: '[name]_[local]_[hash:base64:5]',
            },
          }, 
          'sass-loader',
        ],
      },
    ],
  }, 
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles_bundle_[name].css',
      chunkFilename: '[id].css',
    }),
  ],
});

module.exports = (env, argv) => { //f. strzalk - ma za zadania: skrócenie zapisu, oraz nie zmieniane kontekstu this.
  const modeConfig = argv.mode == 'production' ? prodConfig : devConfig;

  return merge(baseConfig(), modeConfig());
};
