import { Component, OnInit } from '@angular/core';

import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { LeadModalComponent } from '../lead-modal/lead-modal.component';
import { DataService } from '../data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(public dialog: MatDialog, private dataService: DataService) {}

  ngOnInit() {
    this.dataService.currentData.subscribe((data) => {
      console.log(data);
      this.leadRoles = [data];
    });
  }

  leadRoles: any;

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.leadRoles, event.previousIndex, event.currentIndex);
  }

  // ACIONAR O MODAL DE ADICIONAR LEAD

  addLead(): void {
    const dialogRef = this.dialog.open(LeadModalComponent, {
      width: '500px',
      height: '500px',
      panelClass: 'custom-modalbox',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog was closed');
    });
  }
}
