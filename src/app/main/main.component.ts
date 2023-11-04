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

    this._dataService.currentData.subscribe((data) => {
      const firstColumn = this.board.columns[0].tasks;
      const secondColumn = this.board.columns[1].tasks;
      const thirdColumn = this.board.columns[2].tasks;

      //esse if somente insere o dado vindo no modal na coluna do drag
      if (data !== '') {
        firstColumn.push(data);
        // console.log(firstColumn);
        localStorage.setItem('sessionFirstColumn', JSON.stringify(firstColumn))
      }

      if(secondColumn.length){
        console.log('tem segunda coluna')
      }

    });




    // if (localStorage.getItem('arrayOfLeads')) {
    //   const storedUserName: string = JSON.parse(
    //     localStorage.getItem('arrayOfLeads')!
    //   );

    //   console.log(storedUserName)

    //   for(let i = 0; i <= storedUserName.length; i++){
    //     this.board.columns[0].tasks.splice(0, i, storedUserName)
    //   }

    //   // console.log(storedUserName);
    //   // console.log(this.board.columns[0].tasks);

    //   // this.board.columns[0].tasks.push(storedUserName);
    // }
  }

  //Parte das Colunas

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



  //Parte das colunas - Fim

  // ACIONAR O MODAL DE ADICIONAR LEAD

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
