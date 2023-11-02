import { Component } from '@angular/core';

import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { LeadModalComponent } from '../lead-modal/lead-modal.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  constructor(public dialog: MatDialog) {}

  addLead(): void{
    const dialogRef = this.dialog.open(LeadModalComponent, {
      width: '500px',
      height: '500px',
      panelClass: 'custom-modalbox'
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog was closed')
    })
  }








  leadRoles = ['Role1', 'Role2', 'Role3'];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.leadRoles, event.previousIndex, event.currentIndex);
  }
}
