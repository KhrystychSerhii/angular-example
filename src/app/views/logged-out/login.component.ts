import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {
    LoginService
} from '../../services';

@Component({
    templateUrl: 'login.component.html'
})
export class LoginComponent {
    public error = false;
    public user = {
        email: 'example1@mail.com',
        password: 'qwerty123'
    };

    constructor(
        private router: Router,
        private loginService: LoginService
    ) { }

    goTo(page) {
        switch (page) {
            case 'forgotPassword':
                this.router.navigateByUrl('/forgot-password');
                break;

            case 'register':
                this.router.navigateByUrl('/register');
                break;

            default:
                console.log('invalid page name', page);
                break;
        }
    }

    login(user) {
      this.loginService.login(user).then(() => {
        console.log('must navigate');
        this.router.navigateByUrl('/records');
      }, () => {
        this._toggleError();
      });
    }

    //
    _toggleError(): void {
        this.error = true;
        // setTimeout((() => {
        //     this.error = false;
        // }).bind(this), 2000);
    }

}
