
import { Injectable, Optional } from '@angular/core';

let nextId = 1;

export class UserServiceConfig {
  userName = 'Philip Marlowe';
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  id = nextId++;

  constructor(@Optional() config?: UserServiceConfig) {
    if (config) { this._userName = config.userName; }
  }

  get userName() {
    // Demo: add a suffix if this service has been created more than once
    const suffix = this.id > 1 ? ` times ${this.id}` : '';
    return this._userName + suffix;
  }
  private _userName = 'Sherlock Holmes';  // tslint:disable-line: variable-name
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/