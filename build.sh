#! /bin/bash

ng build
echo audiovascular.com > ./dist/website/CNAME
npx angular-cli-ghpages --dir=dist/website
