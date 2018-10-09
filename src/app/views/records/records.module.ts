import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { RecordsComponent } from './records.component';
import { RecordItemComponent } from './record-item.component';
import { RecordsListComponent } from './list.component';

import { RecordCardComponent, CommentComponent } from '../../components';

import { RecordsRoutingModule } from './records-routing.module';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    RecordsRoutingModule
  ],
  declarations: [
    RecordsComponent,
    RecordItemComponent,
    RecordsListComponent,
    RecordCardComponent,
    CommentComponent
  ]
})
export class RecordsModule { }
