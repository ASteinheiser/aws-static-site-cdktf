# aws-static-site-cdktf
Hosting setup for a static website on AWS, including CodePipeline, S3, and Route53 implemented with Terraform `cdktf`.

## Getting started
First, you will need a `.env` file with the following values:
```
AWS_ACCESS_KEY_ID=<YourAccessKey>
AWS_SECRET_ACCESS_KEY=<YourSecretKey>
```

Then you can install dependencies for node and `cdktf` deployment:
```
yarn
cdktf get
```

## Deployment
To deploy your stack, simply run:
```
cdktf deploy
```
