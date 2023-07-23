const path = require("path");

module.exports = {
  entry: "./src/index.ts", // Entry point of your application
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory for bundled files
    filename: "bundle.js", // Output file name
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"], // File extensions to resolve
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Apply the following loaders to TypeScript files
        exclude: /node_modules/,
        use: "ts-loader", // Use ts-loader to transpile TypeScript code
      },
    ],
  },
};
