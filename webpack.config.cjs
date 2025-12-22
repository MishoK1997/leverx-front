const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin"); // Add this at the top


module.exports =(evn, argv) => {

  
  return {
    

      entry: "./src/main.tsx",

      output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.[contenthash].js",
        publicPath: "/", // CRITICAL: Ensures assets load correctly from the root
        clean: true,
      },

      // DEV or PROD mode
      mode: argv.mode || "development", 

      // Changed to standard source-map (or 'hidden-source-map') for production to avoid large bundle sizes
      devtool: "source-map",

      resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".css", ".scss"],
      },

      module: {
        rules: [
          {
            test: /\.(ts|tsx|js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: [
                  "@babel/preset-env",
                  ["@babel/preset-react", { runtime: "automatic" }],
                  "@babel/preset-typescript",
                ],
              },
            },
          },
          {
            test: /\.(css|scss)$/,
            use: ["style-loader", "css-loader", "sass-loader"],
          },
          {
            test: /\.(svg|png|jpg|jpeg|gif|ico|otf|ttf|woff|woff2)$/, // Expanded to include images/fonts
            type: "asset/resource",
          },
        ],
      },

      plugins: [
        new HtmlWebpackPlugin({
          template: "./public/index.html",
        }),
        // This copies the _redirects file to the dist folder
        new CopyPlugin({
          patterns: [
            { 
              from: "public/_redirects", 
              to: ".",
              noErrorOnMissing: true // Won't crash if you forget to create the file
            }, 
          ],
        }),
        new CopyPlugin({
          patterns: [
            { 
              from: "public", // Source: your local 'public' folder
              to: "",
              globOptions: {
                ignore: ["**/index.html"], // Add this line!
              },
            },
          ],
        }),
      ],

      optimization: {
        splitChunks: {
          chunks: 'all', // This separates node_modules into a separate file
        },
      },

      devServer: {
        static: path.join(__dirname, "public"),
        port: 8080,
        hot: true,
        compress: true,
        historyApiFallback: true,
      },
  } 
}