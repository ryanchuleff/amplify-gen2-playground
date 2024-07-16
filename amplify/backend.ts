import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';

const backend = defineBackend({
  auth,
  data
});

// extract L1 CfnUserPool resources
const { cfnUserPool } = backend.auth.resources.cfnResources;

// an empty array denotes "email" and "phone_number" cannot be used as a username
// cfnUserPool.usernameAttributes = []

// update the schema property to add custom attributes
if (Array.isArray(cfnUserPool.schema)) {
  cfnUserPool.schema.push({
    name: 'tenantId',
    attributeDataType: 'String',
    developerOnlyAttribute: false,
    mutable: true,
  });
}