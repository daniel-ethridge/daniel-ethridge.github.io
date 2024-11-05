#! /usr/bin/bash

DATE_TODAY=$(date)

git merge main
git add src/app/_services/json/literature.json
git commit -m "Added literature: $DATE_TODAY"
git push

git switch main 
git merge add-papers
git push
source build.sh

git switch add-papers
