Redeploy on Future Updates
Each time you make changes and want to redeploy:

always check index.html, package.json, vit.config.js
bash

# 1. Build
npm run build
cp -r dist ../deploy-temp

# 2. Switch to gh-pages
git checkout --orphan gh-pages
git reset --hard
git clean -fdx

# 3. Copy new build
cp -r ../deploy-temp/* .
git add .
git commit -m "Update deployment"
git push origin gh-pages --force

# 4. Return to main
git checkout main
rm -r ../deploy-temp
