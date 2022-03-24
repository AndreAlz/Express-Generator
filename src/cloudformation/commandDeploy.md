# DEV
```
aws cloudformation deploy \
	--template-file ./root.yaml \
	--s3-bucket infra-node-dev \
	--stack-name iprovider-dev \
	--parameter-overrides \
        ENV=dev \
	--capabilities CAPABILITY_NAMED_IAM CAPABILITY_AUTO_EXPAND \
	--region us-east-2

```

# QAS
```
aws cloudformation deploy \
	--template-file ./root.yaml \
	--s3-bucket infra-node-qas \
	--stack-name iprovider-qas \
	--parameter-overrides \
        ENV=qas \
	--capabilities CAPABILITY_NAMED_IAM CAPABILITY_AUTO_EXPAND \
	--region us-west-2

```

# TRIAL
```
aws cloudformation deploy \
	--template-file ./root.yaml \
	--s3-bucket infra-node-trial \
	--stack-name iprovider-trial-stack \
	--parameter-overrides \
        ENV=trial \
	--capabilities CAPABILITY_NAMED_IAM CAPABILITY_AUTO_EXPAND \
	--region us-west-2

```