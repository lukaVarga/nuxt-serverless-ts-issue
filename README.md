# Example Frontend

## Build Setup

```bash
# Install dependencies
$ npm install

# Serve develop server at localhost:3000 using Nuxt.js
$ npm run dev

# Build
$ npm run build

# Prod server start with built assets
$ npm run start

## SERVERLESS DEPLOYMENT ##
# You must run `yarn sls:create` before `yarn sls:deploy`
# Build assets, Create Domain and S3 Bucket, Deploy the function and bundled assets
$ npm run sls:create

# launch local server with bundled assets and 'serverless-offline' plugin
$ npm run sls:local

# Re-build and deploy the function and bundled assets
$ npm run sls:deploy

# Remove all stacks
# Please do not delete it separately and use this script
$ npm run sls:remove
```

Make sure you regularly use
```
npm run lint
```

## Commit

We use commitizen and semantic versioning. For commiting, use
```
npm run commit
```
