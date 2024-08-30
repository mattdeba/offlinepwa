import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { enableProdMode } from '@angular/core';


enableProdMode();
// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('/ngsw-worker.js');
//   });
// }


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
