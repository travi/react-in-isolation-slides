/* eslint import/no-extraneous-dependencies: ['error', {'devDependencies': true}] */
import webpack from 'webpack';
import {getIfUtils, removeEmpty} from 'webpack-config-utils';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

export default function (env = 'development') {
  const {ifDevelopment, ifProduction} = getIfUtils(env);
  const assetsPath = path.resolve(__dirname, './lib');
  const defaultChunks = ['vendor', 'manifest'];

  return {
    devtool: ifDevelopment('cheap-module-source-map', 'source-map'),

    entry: {
      slides: './src',
      vendor: removeEmpty([
        // ifDevelopment('webpack-hot-middleware/client'),
        'react',
        'react-dom',
        'spectacle'
      ])
    },
    output: {
      path: assetsPath,
      filename: ifProduction('[name]-[chunkhash].js', '[name].js'),
      publicPath: '/'
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: [['es2015', {modules: false}], 'react'],
            plugins: removeEmpty([
              ifProduction('transform-react-remove-prop-types'),
              ifDevelopment('transform-react-jsx-source'),
              'transform-runtime'
            ]),
            comments: false,
            cacheDirectory: true
          }
        },
        {
          test: /\.example$/,
          use: 'raw-loader'
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                limit: 8192,
                publicPath: '..//'
              }
            },
            {
              loader: 'img-loader',
              options: {
                progressive: true
              }
            }
          ]
        },
        {
          test: /\.svg$/,
          loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
        },
        {
          test: /\.mustache$/,
          loader: 'mustache-loader'
        }
      ]
    },
    plugins: removeEmpty([
      ifDevelopment(new webpack.NamedModulesPlugin()),
      ifDevelopment(new webpack.NoEmitOnErrorsPlugin()),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(env)
        }
      }),
      new HtmlWebpackPlugin({
        chunks: [...defaultChunks, 'slides'],
        filename: 'index.html',
        template: 'src/presentation.mustache',
        title: 'React in Isolation'
      })
    ]),

    mode: env,
    optimization: {
      minimize: ifProduction(true, false)
    }
  };
}
