import {
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-lead-modal',
  templateUrl: './lead-modal.component.html',
  styleUrls: ['./lead-modal.component.scss'],
})
export class LeadModalComponent {
  @ViewChild('selectAllBoxes')
  selectAllRef!: HTMLInputElement;

  @ViewChildren('selectOption')
  selectOptionRef!: QueryList<any>;

  changeCheckBoxValue(event: any) {
    const isChecked = event.srcElement.checked;
    console.log(isChecked);
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
    console.log('Função chamada', checkboxArray);
  }

  deselectAll() {
    const checkboxArray = this.selectOptionRef.toArray();
    checkboxArray[0].nativeElement.checked = false;
    checkboxArray[1].nativeElement.checked = false;
    checkboxArray[2].nativeElement.checked = false;
    checkboxArray[3].nativeElement.checked = false;
  }

  constructor(public dialogRef: MatDialogRef<LeadModalComponent>) {}

  cancel(): void {
    this.dialogRef.close();
  }
}
