SCRIPT=`basename $0`
echo -e "$SCRIPT: BEGIN"

set -e # exit on error

echo -e "$SCRIPT: generating static build..."
git checkout main
npm run clean
npm run generate

echo -e "$SCRIPT git checkout gh-pages"
git checkout gh-pages; git pull
BRANCH=`git rev-parse --abbrev-ref HEAD`
if [ "$BRANCH" != "gh-pages" ]; then
  echo -e "$SCRIPT: ERROR could not checkout gh-pages"
  exit -1
fi
echo -e "$SCRIPT: git branch: $BRANCH"

echo -e "$SCRIPT: removing existing content"
rm *html favicon.* _payload.js
rm -rf about api bad_links dist index _nuxt testdir

echo -e "$SCRIPT: copying new content"
cp -r .output/public/* .
ls -l

echo -e "$SCRIPT: updating github"
git add .
git commit -m "gh-pages"
git push
git checkout main

echo -e "$SCRIPT END"
