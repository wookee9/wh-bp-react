# React Sass Boilerplate

A simple (but opinionated) React boilerplate, Sass and Webpack batteries included.


## Quickstart

* Clone the repository with `git clone https://github.com/wookee9/wh-bp-react.git`
* Install all modules with `npm install`
* Run the initial build setup with `npm run build-dev`
* Finally `npm run watch` kicks off a dev server at [http://localhost:8080](http://localhost:8080), with hot module reloading and live reload.


## What's under the hood?

#### [React](https://facebook.github.io/react/)
Component based single page app library.  

#### [Babel](https://babeljs.io/)
Allows you to use JSX and ES6 in your React app. Used as part of the webpack build process, ready to go.  

#### [Webpack](https://webpack.github.io/)
Takes all of your code and assets, and outputs an optimised bundle.js for you.  

#### [Webpack DLL Plugin](https://robertknight.github.io/posts/webpack-dll-plugins/)
Worth mentioning as not everyone may have heard of it. The DLL plugin (included as part of Webpack) lets you split out your vendor libs into a separate bundle, helping to make your hot / live reloads more performant during development.

#### [Sass](http://sass-lang.com/)
CSS with extra handy features.  

See package.json for a complete list of libs included.


## Deployment

`npm run build-production` will spit you out a nice clean set of html and js files in /app/dist, minified and ready for action.
