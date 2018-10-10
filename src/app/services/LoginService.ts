import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx'; // for .map using
import { LocalStorageHelper } from '../lib/LocalStorageHelper';
import { RegistrationService } from './RegistrationService';

const lsHelper = new LocalStorageHelper();

@Injectable()
export class LoginService {

  constructor(
    private http: Http,
    private reg: RegistrationService
  ) {}

  isLoggedIn(): boolean {
    return lsHelper.has('loggedInUser');
  }

  login(user: {email: string, password: string}): Promise<any> {
    return new Promise((resolve, reject) => {
      lsHelper.get('users').then((users) => {
        if (!users) {
          reject();
        } else {
          const dbUser = users.find((u) => u.email === user.email);
          if (!!dbUser && (dbUser.password === user.password)) {
            lsHelper.setLoggedInUser(dbUser);
            resolve();
          } else {
            reject();
          }
        }
      });
    });
  }

  getLoggedInUser(): Promise<any> {
    return lsHelper.get('loggedInUser');
  }

  logOut(): void {
    lsHelper.removeItem('loggedInUser');
  }

}
