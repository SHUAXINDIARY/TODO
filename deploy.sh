set -e

npm run build

cd dist 

git init

git add -add

git commit -m 'deploy'

