import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DataService } from '../data.service';
import { LeadModalComponent } from '../lead-modal/lead-modal.component';
import { elementAt, filter } from 'rxjs';

@Component({
  selector: 'app-readonly-modal',
  templateUrl: './readonly-modal.component.html',
  styleUrls: ['./readonly-modal.component.scss'],
})
export class ReadonlyModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ReadonlyModalComponent>,
    private _dataService: DataService
  ) {}

  ngOnInit(): void {
    this._dataService.currentEmailData.subscribe((data) => {
      this.clickedUserEmail = data;
      this.verifyUser(this.clickedUserEmail)
    });
    this.userName = this.userFullData[0][0]
    this.userEmail = this.userFullData[0][1]
    this.userPhoneNumber = this.userFullData[0][2]

    this.checkTodos = this.userFullData[0][3]
    this.checkSucumbenciais = this.userFullData[0][4]
    this.checkContratuais = this.userFullData[0][5]
    this.checkDativos = this.userFullData[0][6]
    this.checkAutor = this.userFullData[0][7]
  }

  public userTextData = JSON.parse(localStorage.getItem('textUserData')!);

  public clickedUserEmail: string = '';

  public userFullData: any[] = [];

  verifyUser(clickedUser: string) {
    for(let i = 0; i < this.userTextData.length; i++){


      if(clickedUser === this.userTextData[i][1]){
        const arrayTest = this.userTextData[i]
        this.userFullData.push(arrayTest)
        return
      }
    }
  }

  userName: string = ''
  userEmail: string = ''
  userPhoneNumber: string = ''

  checkTodos!: boolean;
  checkSucumbenciais!: boolean;
  checkContratuais!: boolean;
  checkDativos!: boolean;
  checkAutor!: boolean;

  cancel(): void {
    this.dialogRef.close();
  }
}
