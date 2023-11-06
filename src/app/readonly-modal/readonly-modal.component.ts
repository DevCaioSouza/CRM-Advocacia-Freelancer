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
    console.log(this.checkAutor);
  }

  userTextData = JSON.parse(localStorage.getItem('textUserData')!);



  userName: string = this.userTextData[0][0];
  userEmail: string = this.userTextData[0][1];
  userPhoneNumber: string = this.userTextData[0][2];

  checkTodos: boolean = this.userTextData[0][3];
  checkSucumbenciais: boolean = this.userTextData[0][4];
  checkContratuais: boolean = this.userTextData[0][5];
  checkDativos: boolean = this.userTextData[0][6];
  checkAutor: boolean = this.userTextData[0][7];

  cancel(): void {
    this.dialogRef.close();
  }
}
