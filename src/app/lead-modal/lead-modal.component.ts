import {
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
  numberAttribute,
} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DataService } from '../data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-lead-modal',
  templateUrl: './lead-modal.component.html',
  styleUrls: ['./lead-modal.component.scss'],
})
export class LeadModalComponent {
  @ViewChild('selectAllBoxes')
  selectAllBoxesRef!: ElementRef;

  @ViewChildren('selectOption')
  selectOptionRef!: QueryList<any>;

  @ViewChild('nomeCompleto')
  usernameElement!: ElementRef;

  @ViewChild('userEmail')
  userEmailElement!: ElementRef;

  @ViewChild('phoneNumber')
  userPhoneNumberElement!: ElementRef;

  arr: any[] = [];

  constructor(
    public dialogRef: MatDialogRef<LeadModalComponent>,
    private _dataService: DataService,
    private _snackBar: MatSnackBar
  ) {}

  saveLeadData(): void {
    const userName = this.usernameElement.nativeElement.value;
    const userEmail = this.userEmailElement.nativeElement.value;
    const userPhoneNumber = this.userPhoneNumberElement.nativeElement.value;

    //Lidando com os dados de input do Checkbox

    const checkboxSelectAll = this.selectAllBoxesRef;
    const checkboxArray = this.selectOptionRef.toArray();

    const checkBoxOneValue = checkboxSelectAll.nativeElement.checked;
    const checkBoxTwoValue = checkboxArray[0].nativeElement.checked;
    const checkBoxThreeValue = checkboxArray[1].nativeElement.checked;
    const checkBoxFourValue = checkboxArray[2].nativeElement.checked;
    const checkBoxFiveValue = checkboxArray[3].nativeElement.checked;

    const allUserData = [
      userName,
      userEmail,
      userPhoneNumber,
      checkBoxOneValue,
      checkBoxTwoValue,
      checkBoxThreeValue,
      checkBoxFourValue,
      checkBoxFiveValue,
    ];

    // this._dataService.setData(userName);

    const parsedData = JSON.parse(localStorage.getItem('textUserData')!);
    // console.log(parsedData)

    const userData = [allUserData]

    if(parsedData !== null){
      userData.push(...parsedData);
    }

    // localStorage.setItem('textUserData', JSON.stringify(userData));

    //NOVO BLOCO

    this.getAllEmails();

    const checkIfEmailExists = this.arr.filter(element => element == userEmail)

    console.log(checkIfEmailExists)

    if(checkIfEmailExists.length){
      alert('E-mail já cadastrado')
      return
    }

    this._dataService.setData(userName);
    localStorage.setItem('textUserData', JSON.stringify(userData));

    //FIM DO NOVO BLOCO

    this.dialogRef.close();
  }

  getAllEmails() {
    const parsedStorage = JSON.parse(localStorage.getItem('textUserData')!);

    if(parsedStorage !== null){
      for (let i = 0; i < parsedStorage.length; i++) {
        const emailsDeUsuarios = parsedStorage[i][1];
        this.arr.push(emailsDeUsuarios);
      }
    }
    console.log(this.arr);
  }

  changeCheckBoxValue(event: any) {
    const isChecked = event.srcElement.checked;
    if (isChecked) {
      this.selectAll();
    } else {
      this.deselectAll();
    }
  }

  selectAll() {
    const checkboxArray = this.selectOptionRef.toArray();
    checkboxArray[0].nativeElement.checked = true;
    checkboxArray[1].nativeElement.checked = true;
    checkboxArray[2].nativeElement.checked = true;
    checkboxArray[3].nativeElement.checked = true;
  }

  deselectAll() {
    const checkboxArray = this.selectOptionRef.toArray();
    checkboxArray[0].nativeElement.checked = false;
    checkboxArray[1].nativeElement.checked = false;
    checkboxArray[2].nativeElement.checked = false;
    checkboxArray[3].nativeElement.checked = false;
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
