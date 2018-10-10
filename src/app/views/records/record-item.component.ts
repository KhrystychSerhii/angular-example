import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { RecordsService, CommentService, LoginService } from '../../services';

import * as _ from 'lodash';

@Component({
    templateUrl: 'record-item.component.html'
})
export class RecordItemComponent implements OnInit {
    record: any;
    comments: any[] = [];
    comment: any = {};
    recordRating: number = 1;
    user: any;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private loginService: LoginService,
        private recordsService: RecordsService,
        private commentService: CommentService
    ) {

    }

    ngOnInit() {
      this.loginService.getLoggedInUser().then((user) => {
        this.user = user;
      });
     this.getRecords();
    }


    leaveComment(comment) {

      this.commentService.addComment({
        'record': this.record.id,
        'text': comment.text,
        'rating': comment.rating,
        'email': this.user.email
      }).then(() => {
        this.comment = {};
        this.getRecords();
      }, () => {
        console.log('reject');
      });
    }

    private getRecords() {
      this.activatedRoute.params.subscribe(params => {
        this.recordsService.getRecordById(+params.id).then(record => {

          this.record = record[0];
          const promises = [];
          this.record.commentsIds.forEach(r => {
            promises.push(this.commentService.getComments(r));
          });
          Promise.all(promises).then((comments) => {
            this.comments = [].concat(...comments);
            this.recordRating = this.calculateRating(this.comments);
          });
        });
      });
    }

    private calculateRating(comments: any[]) {
      const summ = _.sumBy(comments, 'rating');

      return +(summ / comments.length).toFixed(2);
    }
}
