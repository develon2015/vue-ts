import * as path from 'path';
import * as webpack from 'webpack';

const DIR_PROJECT = __dirname;
const DIR_SRC = path.resolve(DIR_PROJECT, 'src');
const DIR_DIST = path.resolve(DIR_PROJECT, 'dist');

function handleConfig(env, argv) {
    console.log({ env, argv });
    let config: webpack.Configuration = {
        mode: 'development',
        module: {
            rules: [
                { test: /\.vue$/, loader: 'vue-loader' },
                { test: /\.css$/, use: ['vue-style-loader', 'css-loader'] },
            ],
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
            alias: {
                "@": DIR_SRC,
            },
        },
        externals: {
            ['vue']: 'Vue',
        }
    };
    return config;
}

module.exports = handleConfig;