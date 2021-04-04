import * as cdk from '@aws-cdk/core';
import * as lambda from "@aws-cdk/aws-lambda";
import * as iam from "@aws-cdk/aws-iam";

export class CoreConceptsStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    const role = new iam.Role(this, "LambdaRole", {
      assumedBy: new iam.ServicePrincipal("lambda.amazonaws.com"),
    });

    const policy = new iam.PolicyStatement({
      effect: iam.Effect.ALLOW,
      actions: ["s3:Get*", "s3:List*"],
      resources: ["*"],
    });

    //granting IAM permissions to role
    role.addToPolicy(policy);

    new lambda.Function(this, "lambdaFn", {
      code: lambda.Code.fromAsset("lambda"),
      runtime: lambda.Runtime.NODEJS_10_X,
      handler: "app.handler",
      tracing: lambda.Tracing.ACTIVE,
      role: role,
    });

  }
}
