import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

const installedModules = {};
let modules;

@Component({
  selector: 'try-partial-bundling-dummy',
  template: 'dummy'
})
export class Dummy {}

@NgModule({
  declarations: [AppComponent, Dummy],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: () => {
          return new Promise(res => {
            const s = document.createElement('script');
            s.setAttribute('src', './main.mylib.js');
            document.head.appendChild(s);
            setTimeout(() => {
              modules = (window as any).webpackJsonpmylib[0][1];
              const r = __webpack_require__('../../libs/mylib/src/index.ngfactory.js');
              res(r['MylibModuleNgFactory']);
            }, 100);
          });
        }
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}


function __webpack_require__(moduleId) {
  // Check if module is in cache
  if (installedModules[moduleId]) {
    return installedModules[moduleId].exports;
  }
  // Create a new module (and put it into the cache)
  const module = installedModules[moduleId] = {
    i: moduleId,
    l: false,
    exports: {}
  };

  // Execute the module function
  modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

  // Flag the module as loaded
  module.l = true;

  // Return the exports of the module
  return module.exports;
}
