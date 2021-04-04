import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as CoreConcepts from '../lib/core_concepts-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new CoreConcepts.CoreConceptsStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
