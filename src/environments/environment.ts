// # Build for production
// ng build --configuration=production

// # Build for UAT
// ng build --configuration=uat

// # Build for testing
// ng build --configuration=test

// # Build for development
// ng build --configuration=dev

// # Serve production build
// ng serve --configuration=production

// # Serve UAT build
// ng serve --configuration=uat

// # Serve test build
// ng serve --configuration=test

// # Serve development build (default)
// ng serve

// import { environment } from '../environments/environment';

// console.log(environment.apiBaseUrl);
// console.log(environment.environmentName);
// "postinstall": "npx rimraf@latest node_modules && npm dedupe"


export const environment = {
  apiBaseUrl: 'http://localhost:5000',
  environmentName: 'development',
  appVersion: 'development 0.0.1',
};
