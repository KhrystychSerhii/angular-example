import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

// Route Guards
import { IsLoggedIn, IsLoggedOut} from './route-guards';
const ROUTE_GUARDS = [
  IsLoggedIn,
  IsLoggedOut
];

// Services
import { RegistrationService, LoginService, RecordsService, CommentService } from './services';
const SERVICES = [
  RegistrationService,
  LoginService,
  RecordsService,
  CommentService
];

// Containers
import { LoggedInLayoutComponent, LoggedOutLayoutComponent } from './containers';
const CONTAINERS = [
  LoggedInLayoutComponent,
  LoggedOutLayoutComponent
];

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
  ],
  declarations: [
    AppComponent,
    ...CONTAINERS
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    },
    ...ROUTE_GUARDS,
    ...SERVICES,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
