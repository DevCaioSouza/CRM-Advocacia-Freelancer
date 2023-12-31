import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './interfaces/User';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  //props de dados de nomes
  private data = new BehaviorSubject<User>({name: '', email: ''});
  currentData = this.data.asObservable();


  setData(data: User) {
    this.data.next(data);
  }

  //Props de dados de email
  private emailData = new BehaviorSubject('');
  currentEmailData = this.emailData.asObservable()

  setEmailData(dataEmail: any){
    this.emailData.next(dataEmail)
  }


  //Unclickable modal props

  private unclickableData = new BehaviorSubject('');
  currentUnclickableData = this.unclickableData.asObservable();

  unclickableDataModal(userAllInputsData: any) {
    console.log(userAllInputsData);
    this.unclickableData.next(userAllInputsData);
  }
}
