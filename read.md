This project's goal was to learn setting up webpack from 
start. I choose to follow this tutorial:
https://www.valentinog.com/blog/webpack/#webpack_4_getting_started_with_zero_conf


Worthwhile notes: 

1. By default npm run build (aka webpack - check package.json) 
   looks for index.js file (default file) in './src' thus it threw 
   error when no such file exists. In previous webpack versions
   ( < 4 ) it took entry point path from webpack.config.js 

<!-- after creating ./src/index.js -->

2. By default npm run build will build main.js file in dist folder
3. Webpack 4+ introduces production and development mode. By default 
   npm run webpack uses production. Production mode does minification.
4. We can change default output by adding source path and '--output' +
   destination path to webpack command ex. 
   "webpack --mode development ./foo/src/js/index.js --output ./foo/main.js"
5. Webpack also supports transpilation of es6+ to es5 so that old browsers
   can do something out of it. Webpack provides this feature by LOADERS.
   In case of JS we use babel-loader

    npm i @babel/core babel-loader @babel/preset-env --save-dev
    + webpack.config.js file (can change with scripts section + --module-bind js=babel-loader )

    for react transpiling
    npm i react react-dom --save-dev 
    npm i @babel/preset-react --save-dev

    for html proccessing
    npm i html-webpack-plugin html-loader --save-dev

    when html is setup the js is automaticlly bundled with html

    for css
    npm i mini-css-extract-plugin css-loader --save-dev

