SCRIPT=`basename $0`
echo -e "$SCRIPT: BEGIN"

BRANCH=`git rev-parse --abbrev-ref HEAD`
if [ "$BRANCH" != "gh-pages" ]; then
  git checkout gh-pages; git pull
fi
BRANCH=`git rev-parse --abbrev-ref HEAD`
if [ "$BRANCH" != "gh-pages" ]; then
  echo -e "$SCRIPT: ERROR could not checkout gh-pages"
  exit -1
fi
echo -e "$SCRIPT: git branch: $BRANCH"

echo -e "$SCRIPT: removing existing content"
rm *html favicon.ico _payload.js
rm -rf about api bad_links dist index _nuxt testdir

echo -e "$SCRIPT: copying new content"
cp -r .output/public/* .
node scripts/version.cjs > version
ls -l
git add
git commit -m "gh-pages"

echo -e "$SCRIPT END"
