import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';

export class SimpleLambdaTracingStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    new lambda.Function(this, "lambdaFn", {
      code: lambda.Code.fromAsset('function'),
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: 'index.handler',
      tracing: lambda.Tracing.ACTIVE,
    });

  }
}
