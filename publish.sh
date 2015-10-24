#!/bin/bash
# https://help.github.com/articles/creating-project-pages-manually/

# clone a fresh repo
rm -rf deploy && git clone git@github.com:misaxi/demo-todo.git deploy

# run our compile script
rm -rf dist && npm run publish

# go to the out directory and create a *new* Git repo
cd deploy

# Creates our branch, without any parents (it's an orphan!)
# Switched to a new branch 'gh-pages'
git checkout --orphan gh-pages

# Remove all files from the old working tree
# rm '.gitignore'
git rm -rf .

cp -r ../dist/ ../deploy

git add .
git commit -a -m "auto deployment"
git push --force origin gh-pages
