import * as dotenv from 'dotenv'
import { Construct } from 'constructs'
import { App, TerraformStack, TerraformOutput } from 'cdktf'
import { AwsProvider, Instance } from './.gen/providers/aws'

dotenv.config()
const AWS_REGION = process.env.AWS_REGION || 'us-west-1';

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name)

    new AwsProvider(this, 'aws', { region: AWS_REGION })

    const instance = new Instance(this, 'compute', {
      ami: 'ami-01456a894f71116f2',
      instanceType: 't2.micro',
    })

    new TerraformOutput(this, 'public_ip', {
      value: instance.publicIp,
    })
  }
}

const app = new App()
new MyStack(app, 'typescript-aws')
app.synth()
