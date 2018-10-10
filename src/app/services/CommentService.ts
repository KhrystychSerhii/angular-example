import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/Rx'; // for .map using
import { LocalStorageHelper } from '../lib/LocalStorageHelper';

const lsHelper = new LocalStorageHelper();

@Injectable()
export class CommentService {

  constructor(
    private http: Http
  ) {}

  getComments(recordId: number): Promise<any> {
    return new Promise((resolve, reject) => {
      lsHelper.check('comments').then(() => {
        lsHelper.get('comments', {by: 'record', value: recordId}).then(comments => {
          resolve(comments);
        });
      })
    });

  }

  addComment(comment): Promise<any> {
    return lsHelper.post('comments', comment);
  }

}
