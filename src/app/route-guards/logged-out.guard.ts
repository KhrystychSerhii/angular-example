import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { LoginService } from '../services';

@Injectable()
export class IsLoggedOut {

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {
    if (!this.loginService.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['records']);
    return false;
  }
}
