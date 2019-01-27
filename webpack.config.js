
const path = require('path');

module.exports = {
    entry: {
        Home: "./pages/home/components/Home.jsx"
    },
    output: {
        path: path.resolve(__dirname, './pages/home/bundles'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test:  /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.(png|jpg|svg)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        name: '/images/[name].[ext]'
                    },
                  },
                ],
            },
        ]
    }
}