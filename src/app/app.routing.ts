import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Auth Guards
import {
  IsLoggedIn,
  IsLoggedOut
} from './route-guards';

// Import Containers
import {
  LoggedInLayoutComponent,
  LoggedOutLayoutComponent
} from './containers';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'records',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LoggedInLayoutComponent,
    children: [
      {
        path: 'records',
        loadChildren: './views/records/records.module#RecordsModule',
        canActivate: [IsLoggedIn]
      }
    ]
  },
  {
    path: '',
    component: LoggedOutLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './views/logged-out/logged-out.module#LoggedOutModule',
        canActivate: [IsLoggedOut]
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
