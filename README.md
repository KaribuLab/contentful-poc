# Contentful POC

## Getting started

First create a file `.env` in the root of your project, like this:

```shell
CONTENT_MANAGEMENT_ACCESS_TOKEN=<your-token>
CONTENT_DELIVERY_ACCESS_TOKEN=<your-token>
CONTENT_TYPE_ID=product
ENVIRONMENT_ID=master
SPACE_ID=<your-space-id>
ENTRY_ID=<your-entry-id> # This is for the get command
PLAN_ID=<your-plan-id>
```

Then run the following commands

```shell
npm install
npm run get
npm run load
```