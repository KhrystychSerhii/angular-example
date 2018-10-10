import * as _ from 'lodash';

// const test = require('../../assets/example-data.json');

import { exampleData } from '../../assets/example-data';

export class LocalStorageHelper {
  constructor() {}

  public post(path: string, data: any): Promise<any> {
    return new Promise((resolve, reject) => {
      const existingData: any[] = JSON.parse(localStorage.getItem(path));
      if (existingData) {
        const id: number = this.getMaxId(existingData);
        localStorage.setItem(path, JSON.stringify([...existingData, {
          id,
          ...data
        }]));
        setTimeout(resolve, 5);
      } else {
        localStorage.setItem(path, JSON.stringify([data]));
        setTimeout(resolve, 5);
      }
    });

  }

  public get(path: string, params?: {by: string, value: number | string}): Promise<any> {
    return new Promise((resolve, reject) => {
      const existingData: any = JSON.parse(localStorage.getItem(path));
      if (!!params) {
        const searchedData = existingData.filter((d) => { return d[params.by] === params.value; });
        resolve(searchedData || []);
      } else {
        setTimeout(() => {
          resolve(existingData);
        }, 5);
      }
    });
  }

  public put(path, id, data): Promise<any> {
    return new Promise((resolve, reject) => {
      const existingData: any[] = JSON.parse(localStorage.getItem(path));
      const updatedItemIndex: any = _.findIndex(existingData,(e) => e.id === id);
      if (updatedItemIndex >= 0) {
        existingData[updatedItemIndex] = {
          id: id,
          ...data
        };
        localStorage.setItem(path, JSON.stringify([...existingData]));
        setTimeout(resolve, 5);
      } else {
        reject();
      }
    });
  }

  public delete(path, id): Promise<any> {
    return new Promise((resolve, reject) => {
      const existingData: any[] = JSON.parse(localStorage.getItem(path));
      const updatedData: any = _.filter(existingData,(e) => e.id !== id);
      localStorage.removeItem(path);
      localStorage.setItem(path, JSON.stringify([...updatedData]));
      setTimeout(resolve, 5);
    });
  }

  public has(path): boolean {
    return !!localStorage.getItem(path);
  }

  public clear(): Promise<any> {
    return new Promise((resolve, reject) => {
      localStorage.clear();
      setTimeout(resolve, 5);
    });
  }

  public setLoggedInUser(user): void {
    localStorage.setItem('loggedInUser', JSON.stringify(user));
  }

  public removeItem(path: string): void {
    localStorage.removeItem(path);
  }

  public check(path: string): Promise<any> {
    return new Promise((resolve, reject) => {
      if (!localStorage.getItem(path)) {
        localStorage.setItem(path, JSON.stringify(exampleData[path]));
        resolve();
      } else {
        resolve();
      }
    });
  }

  private getMaxId(array: any[]): number {
    let maxId = 1;
    for (let i = 0, length = array.length; i < length; i++ ) {
      if (array[i].id > maxId) {
        maxId = array[i].id;
      }
    }

    return maxId;
  }
}
