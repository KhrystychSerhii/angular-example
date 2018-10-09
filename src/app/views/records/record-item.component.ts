import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { RecordsService, CommentService, LoginService } from '../../services';

@Component({
    templateUrl: 'record-item.component.html'
})
export class RecordItemComponent implements OnInit {
    record: any;
    comments: any[] = [];
    comment: any = {};
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
        console.log('user', user);
        this.user = user;
      });
     this.getRecords();
    }


    leaveComment(comment) {
      console.log('comment', comment);

      this.commentService.addComment({
        'record': this.record.id,
        'text': comment.text,
        'reting': 5,
        'email': this.user.email
      }).then(() => {
        console.log('success');
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
          });
        });
      });
    }
}
