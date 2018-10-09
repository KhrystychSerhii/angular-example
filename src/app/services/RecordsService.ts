import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/Rx'; // for .map using
import { LocalStorageHelper } from '../lib/LocalStorageHelper';

const lsHelper = new LocalStorageHelper();

@Injectable()
export class RecordsService {
  constructor() {}

  getRecords(): Promise<any> {
    return lsHelper.get('records');
  }

  getRecordById(id: number): Promise<any> {
    return lsHelper.get('records', {by: 'id', value: id});
  }

}
