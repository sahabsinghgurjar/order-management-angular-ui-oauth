export const environment = {
  production: true,
  env:"prod",
  appBaseUrl:"https://orderapp.neighborhoodexpo.com",
  oktaConfig :{
    issuer: 'https://dev-676339.okta.com/oauth2/default',
    redirectUri: window.location.origin + '/callback',
   // redirectUri:'http://localhost:4200/callback',
   //redirectUri:'http://localhost:4200/orderManagement/home',
  // post_logout_redirect_uri:'http://localhost:4200/orderManagement/home/logout',
    clientId: '0oa18t6gtrUU5vlxk4x7',
    scopes: ['read','profile','openid','groups']
  }
}
