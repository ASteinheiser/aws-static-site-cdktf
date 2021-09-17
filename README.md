# aws-static-site-cdktf
Hosting setup for a static website on AWS, including CodePipeline, S3, and Route53 implemented with Terraform `cdktf`.

## Prerequisites
You will need to have `cdktf-cli` installed:
```
npm i -g cdktf-cli
```

## Getting started
You will need a `.env` file with the following values:
```
AWS_ACCESS_KEY_ID=<YourAccessKey>
AWS_SECRET_ACCESS_KEY=<YourSecretKey>
AWS_REGION=<YourAWSRegion>
```

Then you can install dependencies for node and `cdktf` deployment:
```
yarn
yarn get
```

Test building your terraform files without deploying the stack:
```
yarn synth
```

## Deployment
To deploy your stack, simply run:
```
cdktf deploy
```
