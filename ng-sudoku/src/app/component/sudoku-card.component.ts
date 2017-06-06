import { Component, OnInit } from '@angular/core';
import {MdDialog} from '@angular/material';

import {CameraDialog} from './camera-dialog.component';
@Component({
    moduleId: module.id,
    selector: 'sudoku-card',
    templateUrl: '../html/sudoku-card.component.html',
    styleUrls: ['../css/sudoku-card.component.css']
})

export class SudokuCard implements OnInit {
    dimension: number = 3;
    //debuggingPurposes
    grid: Array<Array<number>> = [
        [, , , , , , , 9, ,],
        [1, , , ,2, 9, , , ,],
        [, 5, 9, , , 8, 6, , 2,],
        [, 4, 7, 1, 9, , 3, , ,],
        [9, , 6, 3, , 2, 1, , ,],
        [, , 1, , 8, 7, 9, 2, ,],
        [6, , 4, 8, , , 5, 1, ,],
        [, , , 9, 4, , , , 7,],
        [, 9, , , , 1, 4, 8, ,]];

    gridObj: Array<Array<any>>;

    constructor(public dialog: MdDialog) { }

    ngOnInit() {
        this.initialize();
    }

    openCameraDialog(){
        this.dialog.open(CameraDialog);
    }

    trackByIndex(index: number, obj: any): any {
        return index;
    }

    onKey(event: any, indexy: number, index: number) {
        // Get ASCII code of character
        let value = event.key.charCodeAt(0);
        // verify if input is whithin 1-9
        if (value < 49 || value > 58) {
            this.grid[indexy][index] = undefined;
        }        
    }

    initialize() {
        //Initialize GridObject
        this.gridObj = this.grid.map(
            line => {
                let lineArray = [];
                for (let i = 0; i < 9; i++) {
                    lineArray[i] = {
                        value: line[i],
                        cellType: (line[i] ? undefined : "emptyCell"),
                        allowedValues: (line[i] ? undefined : new Set([1,2,3,4,5,6,7,8,9])),
                        numberAllowedValues: function() {
                            return this.allowedValues ? this.allowedValues.size : 1;
                        }
                    }
                }
                return lineArray;
            });
    }

    updateAllowedValues() {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (this.gridObj[i][j].value) {
                    this.updateAllowedValuesForCell(i, j);
                }
            }
        }
    }

    updateCellValue(i, j) {
        // There is one value in the allowedValues set
        this.gridObj[i][j].value = Array.from(this.gridObj[i][j].allowedValues)[0];

        // Display effect ;)
        setTimeout(() => {
            this.updateAllowedValuesForCell(i, j);
        }, 100);
    }

    updateAllowedValuesForCell(i, j) {
        let needUpdates: Array<Array<number>>=[];
        
        //clean the line
        for (let m = 0; m < 9; m++) {
            if (!this.gridObj[i][m].value) {
                if (this.gridObj[i][m].allowedValues.has(this.gridObj[i][j].value)) {
                    this.gridObj[i][m].allowedValues.delete(this.gridObj[i][j].value);
                    if (this.gridObj[i][m].numberAllowedValues() == 1) {
                        this.updateCellValue(i, m);
                    }
                }

            }
        }

        //clean the column
        for (let m = 0; m < 9; m++) {
            if (!this.gridObj[m][j].value) {
                if (this.gridObj[m][j].allowedValues.has(this.gridObj[i][j].value)) {
                    this.gridObj[m][j].allowedValues.delete(this.gridObj[i][j].value);
                    if (this.gridObj[m][j].numberAllowedValues() == 1) {
                        this.updateCellValue(m, j);
                    }
                }
            }
        }

        //clean the 3*3 grid
        let modi = Math.floor(i / 3);
        let modj = Math.floor(j / 3);

        for (let k = -1; k < 2; k += 2) {
            for (let l = -1; l < 2; l += 2) {
                let indexy1 = 3 * modi + ((i + k + 3) % 3);
                let indexy2 = 3 * modj + ((j + l + 3) % 3);
                if (!this.gridObj[indexy1][indexy2].value) {
                    if (this.gridObj[indexy1][indexy2].allowedValues.has(this.gridObj[i][j].value)) {
                        this.gridObj[indexy1][indexy2].allowedValues.delete(this.gridObj[i][j].value);
                        if (this.gridObj[indexy1][indexy2].numberAllowedValues() == 1) {
                            this.updateCellValue(indexy1, indexy2);
                        }
                    }
                }
            }
        }

    }
}

