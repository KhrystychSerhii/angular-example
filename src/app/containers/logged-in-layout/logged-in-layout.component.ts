import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LocalStorageHelper } from '../../lib/LocalStorageHelper';
const lsHelper = new LocalStorageHelper();

@Component({
  selector: 'app-logged-in-layout',
  templateUrl: './logged-in-layout.component.html',
  styleUrls: ['./logged-in-layout.component.css']
})
export class LoggedInLayoutComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }


  logout() {
    this.router.navigateByUrl('login');
    lsHelper.clear();
  }

}
