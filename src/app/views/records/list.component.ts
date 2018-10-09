import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RecordsService } from '../../services';

@Component({
  template: `
        <div class="animated fadeIn" style="margin-top: 70px;">
            <div class="row">
                <div *ngFor="let record of recordsList; let index = index;" class="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                    <app-record-card [record]="record" (click)="goToRecord(record.id)"></app-record-card>
                </div>
            </div>
            
        </div>
    `,
})

export class RecordsListComponent implements OnInit {
  public recordsList: any = [];


  constructor(
    private recordsService: RecordsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.recordsService.getRecords().then((records) => {
      this.recordsList = records;
    });
  }

  goToRecord(id: number): void {
    this.router.navigate(['/records', id]);
  }

}
