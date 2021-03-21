// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'rli5tkyyq5'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`
export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'dev-965zdczv.us.auth0.com',            // Auth0 domain
  clientId: 'wPdgKJjkeHBVOfutXT1F904XaL4J0WwP',       // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
