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
5. 