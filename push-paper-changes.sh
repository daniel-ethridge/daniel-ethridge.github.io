#! /usr/bin/bash

DATE_TODAY=$(date)

git branch
git merge main
git add src/assets/literature.json -n
git add src/assets/literature.json
git commit -m "Added literature: $DATE_TODAY"
git push

git switch main
git merge add-papers
git push
source build.sh

git switch add-papers
git branch
