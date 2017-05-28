import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'sudoku-card',
    templateUrl: '../html/sudoku-card.component.html',
    styleUrls: ['../css/sudoku-card.component.css']
})

export class SudokuCard implements OnInit {
    dimension: number = 3;
    //debuggingPurposes
    grid: Array<Array<number>>=[[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]]

    constructor() { }

    ngOnInit() { }

    trackByIndex(index: number, obj: any): any {
        return index;
  }
}