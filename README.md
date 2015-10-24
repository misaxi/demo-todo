# Bean's Jar

## Project background
A simple todo app built on Angular Material, live demo http://misaxi.github.io/demo-todo/index.html

## Project structure
```
algo\                 # algorithms, e.g. counting subsequence

app\                  # application folder

  - scripts\          # scripts folder, using babelify to transpile ES6 -> ES5
    - main.js         # entry file for browserify
    - controllers\    # ng controllers

  - fonts\            # material icon hosted locally

  - styles\           # css via sass

deploy\               # temp folder for publishing app to github pages
dist\                 # temp folder for html, compiled js, css
```

## Development workflow
- install node.js v4
- install dependencies
  ```
  $ npm install
  ```
- watch changes on html, css, js and compile on the fly
  ```
  $ npm run watch
  ```
- live reload
  ```
  $ npm run dev
  ```

## Publishing
To publish the app to the github pages, run the following command
```
$ npm run publish
```
