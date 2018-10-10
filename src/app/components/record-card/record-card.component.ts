import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-record-card',
  templateUrl: 'record-card.component.html',
  styles: [
    `.padding {
      padding: 5px 20px 0;
    }`
  ]
})
export class RecordCardComponent implements OnInit {
  @Input('record') record;
  // @Output('removeBusiness') removeBusiness = new EventEmitter<any>();

  // public showConfirmButtons: boolean;

  constructor(
    private router: Router
  ) {}

  ngOnInit() {}
}
