import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../../services/RegistrationService';

@Component({
  templateUrl: 'register.component.html'
})
export class RegisterComponent {
  user: any = {};
  cPassword: string = '';
  error: boolean = false;

  constructor(
    private registrationService: RegistrationService,
    private router: Router
  ) { }

  isButtonDisabled(user, cPassword) {
    return !user.email || !user.password || (user.password !== cPassword);
  }

  register(user) {
    this.registrationService
      .register(user)
      .then((s) => {
        this.router.navigateByUrl('/records');
      }, (e) => {
        this.toggleError();
      });
  }

  //
  private toggleError(): void {
    this.error = true;
    setTimeout((() => {
      this.error = false;
    }).bind(this), 2000);
  }

}
