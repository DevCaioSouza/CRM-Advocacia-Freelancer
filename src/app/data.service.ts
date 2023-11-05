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
  currentUnclickableData = this.unclickableData.asObservable()

  unclickableDataModal(userTextData: any){
    console.log(userTextData)
    this.unclickableData.next(userTextData)

    // const unclickableArray = [...userNameData, ...userEmailData, ...userPhoneData]
    // this.data.next(...unclickableArray)
  }
}
