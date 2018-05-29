import { CognitoAuth } from 'amazon-cognito-auth-js';
import {
  appClientId,
  appClientSecret,
  appWebDomain,
  scopeArray,
  URI,
} from '../secret';

/*
  ? NOTES: COGNITO CONFIG
  requires 3 config values

  * User Pool App Client ID (required)
  * App Web Domain (req)
  * Scope Array (req)
  * Identity Provider (optional)
  * UserPoolId (optional)
  * AdvancedSecurityDataCollectionFlag (optional)
*/

/*
  TokenScopesArray
  Valid values are found under:
  AWS Console -> User Pools -> <Your user pool> -> App Integration -> App client settings
  Example values: ['profile', 'email', 'openid', 'aws.cognito.signin.user.admin', 'phone']

  RedirectUriSignOut 
  This value must match the value specified under:
  AWS Console -> User Pools -> <Your user pool> -> App Integration -> App client settings -> Sign out URL(s)
*/
const authData = {
  ClientId: `${appClientId}`,
  AppWebDomain: `${appWebDomain}`,
  TokenScopesArray: [...scopeArray],
  RedirectUriSignIn: URI,
  RedirectUriSignOut: URI,
  // IdentityProvider : '<TODO: add identity provider you want to specify>', // e.g. 'Facebook',
  // UserPoolId : '<TODO: add UserPoolId>', // Your user pool id here
  // AdvancedSecurityDataCollectionFlag : '<TODO: boolean value indicating whether you want to enable advanced security data collection>', // e.g. true
};

export default new CognitoAuth(authData);
