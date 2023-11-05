import { Component, OnInit } from '@angular/core';

import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { LeadModalComponent } from '../lead-modal/lead-modal.component';
import { DataService } from '../data.service';
import { Board } from '../models/board.model';
import { Column } from '../models/column.model';
import { ReadonlyModalComponent } from '../readonly-modal/readonly-modal.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(public dialog: MatDialog, private _dataService: DataService) {}

  ngOnInit() {
    const getFirstColumnSession = JSON.parse(localStorage.getItem('sessionFirstColumn')!);
    if(getFirstColumnSession){
      this.board.columns[0].tasks.push(...getFirstColumnSession)
    }

    const getSecondColumnSession = JSON.parse(localStorage.getItem('sessionSecondColumn')!)
    if(getSecondColumnSession){
      this.board.columns[1].tasks.push(...getSecondColumnSession)
    }

    const getThirdColumnSession = JSON.parse(localStorage.getItem('sessionThirdColumn')!)
    if(getThirdColumnSession){
      this.board.columns[2].tasks.push(...getThirdColumnSession)
    }


    this._dataService.currentData.subscribe((data) => {
      const firstColumn = this.board.columns[0].tasks;

      //esse if somente insere o dado vindo no modal na coluna do drag
      //é o ponto de entrada da informação na view
      if (data !== '') {
        firstColumn.push(data);
      }

    });
  }

  saveLeadsInfo(){
    const firstColumn = this.board.columns[0].tasks;
    const secondColumn = this.board.columns[1].tasks;
    const thirdColumn = this.board.columns[2].tasks;

    if(firstColumn.length){
      localStorage.setItem('sessionFirstColumn', JSON.stringify(firstColumn))
    } else {
      localStorage.setItem('sessionFirstColumn', JSON.stringify(null))
    }

    if(secondColumn.length){
      localStorage.setItem('sessionSecondColumn', JSON.stringify(secondColumn))
    } else {
      localStorage.setItem('sessionSecondColumn', JSON.stringify(null))
    }

    if(thirdColumn.length){
      localStorage.setItem('sessionThirdColumn', JSON.stringify(thirdColumn))
    } else {
      localStorage.setItem('sessionThirdColumn', JSON.stringify(null))
    }

  }

  board: Board = new Board('Gerenciamento de Leads', [
    new Column('Cliente Potencial', []),
    new Column('Dados Confirmados', []),
    new Column('Análise do Lead', []),
  ]);

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  // ACIONAR O MODAL DE ADICIONAR LEAD

  leadPreview(): void{
    console.log('user clicked')
    const dialogRef = this.dialog.open(ReadonlyModalComponent, {
      width: '500px',
      height: '500px',
      panelClass: 'custom-modalbox',
    });

  }

  addLead(): void {
    const dialogRef = this.dialog.open(LeadModalComponent, {
      width: '500px',
      height: '500px',
      panelClass: 'custom-modalbox',
    });

    // dialogRef.afterClosed().subscribe((result) => {
    //   console.log('Dialog was closed');
    // });
  }
}
