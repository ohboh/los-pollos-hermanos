const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output:{
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
        {
            test: /\.(mp4)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]'
                }  
              }
            ]
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
              {
                loader: 'file-loader', 
                options: {
                    name: "[name].[ext]"
                }
            }
            ]
          },
        {
            test: /\.html$/i,
            loader: "html-loader",
          },
    ],
  },
};
