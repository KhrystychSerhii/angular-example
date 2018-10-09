import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Components
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';

// Routing Module
import { LoggedOutRoutingModule } from './logged-out-routing.module';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
      LoggedOutRoutingModule
    ],
    declarations: [
        LoginComponent,
        RegisterComponent
    ]
})
export class LoggedOutModule { }
