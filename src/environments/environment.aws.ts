export const environment = {
  production: false,
  env:"aws",
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
