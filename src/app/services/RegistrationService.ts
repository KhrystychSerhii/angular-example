import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/Rx'; // for .map using
import { LocalStorageHelper } from '../lib/LocalStorageHelper';

const lsHelper = new LocalStorageHelper();

@Injectable()
export class RegistrationService {
  constructor() {}

  register(user): Promise<any> {
    return new Promise((resolve, reject) => {
      lsHelper.post('users', user).then(() => {
        lsHelper.setLoggedInUser(user);
        resolve();
      });
    });
  }

}
