import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { LoginService } from '../services';

@Injectable()
export class IsLoggedIn {

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {
    if (this.loginService.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
