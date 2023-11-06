import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private data = new BehaviorSubject('');
  currentData = this.data.asObservable();

  constructor() {}

  setData(data: any) {
    this.data.next(data);
  }

  //Unclickable modal props

  private unclickableData = new BehaviorSubject('');
  currentUnclickableData = this.unclickableData.asObservable();

  unclickableDataModal(userAllInputsData: any) {
    console.log(userAllInputsData);
    this.unclickableData.next(userAllInputsData);
  }
}
