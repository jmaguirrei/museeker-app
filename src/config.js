
import store from '/client/store';
// import * as lib from '/client/lib';
import * as components from '/client/ui/components';
import * as fragments from '/client/ui/fragments';
import rootComponent from '/client/ui/Root';

export default {

  client: {
    store,
    // lib,
    rootComponent,
    components,
    fragments,
  },

  env: {

    development: {
      httpPort: 4201,
      socketPort: 4202,
      baseUrl: 'localhost',
      baseFolder: '',
      useServiceWorker: false,
      useManifest: true,
    },

    production: {
      httpPort: 4201,
      socketPort: 4202,
      baseUrl: 'museeker.io',
      baseFolder: 'base-app',
      useServiceWorker: true,
      useManifest: true,
    },

  },

};
