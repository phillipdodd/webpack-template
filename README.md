# Webpack

Webpack is used to compile Javascript modules. If you have not already gone through the (fantastic) tutorial that they provide on their website, I highly recommend doing so. 

You can find that [here](https://webpack.js.org/guides/getting-started/).

## Setting Up

* After creating your project directory, run
```npm init``` to create your **package.json** file. 

* Create your **.gitignore** file if not already present and add the **node_modules** directory to it. 

* Run ```npm install webpack webpack-cli clean-webpack-plugin --save-dev```

* Edit your **package.json** file: Remove ```"main": "index.js",``` and replace it with ```"private": true,```

* In your root project folder, create two new directories: **dist** and **src**.

* In the root project folder, create the file **webpack.config.js**. It's basic structure looks like this:

```
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  plugins: [
      new CleanWebpackPlugin(['dist']),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
```

* Edit your **package.json** file to include ```"build": "webpack"``` as one of its scripts. This will allow you to easily build the project using ```npm build```. 

* Run ```npm install clean-webpack-plugin --save-dev``` 