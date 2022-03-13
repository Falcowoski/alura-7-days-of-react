#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy: Realizado deploy no GitHub Pages'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:Falcowoski/alura-7-days-of-react.git main:gh-pages

cd -