// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  env:"local",
  appBaseUrl:"",
  
 oktaConfig :{
  issuer: 'https://dev-676339.okta.com/oauth2/default',
  redirectUri: window.location.origin + '/callback',
 // redirectUri:'http://localhost:4200/callback',
 //redirectUri:'http://localhost:4200/orderManagement/home',
// post_logout_redirect_uri:'http://localhost:4200/orderManagement/home/logout',
  clientId: '0oau6kwt7fXnMRA904x6',
  scopes: ['read','profile','openid','groups']
}
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
