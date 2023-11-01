import { Component } from '@angular/core';

import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  leadRoles = [
    'Role1',
    'Role2',
    'Role3',
  ];

  drop(event: CdkDragDrop<string[]>){
    moveItemInArray(this.leadRoles, event.previousIndex, event.currentIndex)
  }

}
