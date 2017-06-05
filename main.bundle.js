webpackJsonp([1,4],{

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)(false);
// imports


// module
exports.push([module.i, ".tool-bar{\n    font-family: 'Raleway', sans-serif;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)(false);
// imports


// module
exports.push([module.i, ".main-card{\n    position:absolute;\n    margin-top: 20px;\n    margin-bottom: 20px;\n    margin-right: 5px;\n    width: 80%;\n    left: 50%;\n    -webkit-transform: translate(-50%);\n            transform: translate(-50%);\n    height: 80%;\n}\n\n.case{\n    width: 8.5%;\n    max-width: 1.8em;\n    max-height: 5%;\n    /*max-height: 2em;*/\n    text-align: center;\n    font-size: 1.5em;\n    font-family: 'Pacifico';\n    border: 1px solid black;\n    margin: 0;\n}\n\n.sudoku-grid{\n    position: absolute;\n    margin-top: 20px;\n    margin-bottom: 20px;\n    text-align: center;\n    width: 90%;\n    height: 80%;\n    z-index: -1;\n}\n.buttons{\n    width: 56px;\n    float:right;\n}\n\n.thick-border-right{\n    border-right: 4px solid black;\n}\n\n.thick-border-left{\n    border-left: 4px solid black;\n}\n\n.thick-border-top{\n    border-top: 4px solid black;\n}\n\n.thick-border-bottom{\n    border-bottom: 4px solid black;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\n  <span class=\"tool-bar\">Sudoku Solver</span>\n</md-toolbar>\n<sudoku-card></sudoku-card>"

/***/ }),

/***/ 152:
/***/ (function(module, exports) {

module.exports = "<h2 md-dialog-title>Camera Dialog</h2>\n<md-dialog-content>We're working on it</md-dialog-content>\n<md-dialog-actions>\n  <button md-button md-dialog-close>Close</button>\n  <button md-button md-dialog-close>Yeah Dude!</button>\n</md-dialog-actions>"

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

module.exports = "<md-card class=\"main-card\">\n    <div class=\"buttons\">\n    <button md-fab primary style=\"margin:2px\" (click)=\"updateAllowedValues()\">Solve</button>\n    <button md-fab primary style=\"margin:2px\" (click)=\"openCameraDialog()\">\n        <md-icon>photo_camera</md-icon>\n    </button>\n  </div>\n  <br>\n    <div class=\"sudoku-grid\">\n        <div *ngFor=\"let array of grid, let indexy = index;trackBy:trackByIndex;\">\n            <input *ngFor=\"let digit of array, let index = index;trackBy:trackByIndex;\" \n                    class=\"case\" maxlength=\"1\" type=\"text\" \n                    [(ngModel)]=\"array[index]\" \n                    [ngClass]=\"{'thick-border-right': (index+1)%3===0, 'thick-border-left': index===0, 'thick-border-top': indexy==0, 'thick-border-bottom': (indexy+1)%3===0}\" \n                    (keyup)=\"onKey($event,indexy,index)\" disabled>\n        </div>\n    </div>\n</md-card>"

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(84);


/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraDialog; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CameraDialog = (function () {
    function CameraDialog() {
    }
    CameraDialog.prototype.ngOnInit = function () {
    };
    return CameraDialog;
}());
CameraDialog = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'camera-dialog',
        template: __webpack_require__(152)
    }),
    __metadata("design:paramtypes", [])
], CameraDialog);

//# sourceMappingURL=camera-dialog.component.js.map

/***/ }),

/***/ 83:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 83;


/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(94);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_app_component__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__component_sudoku_card_component__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__component_camera_dialog_component__ = __webpack_require__(59);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__component_app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__component_sudoku_card_component__["a" /* SudokuCard */],
            __WEBPACK_IMPORTED_MODULE_8__component_camera_dialog_component__["a" /* CameraDialog */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MaterialModule */]
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_8__component_camera_dialog_component__["a" /* CameraDialog */]],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__component_app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Sudoku Solver';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(151),
        styles: [__webpack_require__(149)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__camera_dialog_component__ = __webpack_require__(59);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SudokuCard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SudokuCard = (function () {
    function SudokuCard(dialog) {
        this.dialog = dialog;
        this.dimension = 3;
        //debuggingPurposes
        this.grid = [
            [, , , , , , , 9, ,],
            [1, , , , 2, 9, , , ,],
            [, 5, 9, , , 8, 6, , 2,],
            [, 4, 7, 1, 9, , 3, , ,],
            [9, , 6, 3, , 2, 1, , ,],
            [, , 1, , 8, 7, 9, 2, ,],
            [6, , 4, 8, , , 5, 1, ,],
            [, , , 9, 4, , , , 7,],
            [, 9, , , , 1, 4, 8, ,]
        ];
    }
    SudokuCard.prototype.ngOnInit = function () {
        this.initialize();
    };
    SudokuCard.prototype.openCameraDialog = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__camera_dialog_component__["a" /* CameraDialog */]);
    };
    SudokuCard.prototype.trackByIndex = function (index, obj) {
        return index;
    };
    SudokuCard.prototype.onKey = function (event, indexy, index) {
        // Get ASCII code of character
        var value = event.key.charCodeAt(0);
        // verify if input is whithin 1-9
        if (value < 49 || value > 58) {
            this.grid[indexy][index] = undefined;
        }
    };
    SudokuCard.prototype.initialize = function () {
        //Initialize GridObject
        console.log("Loading grid to gridObj");
        this.gridObj = this.grid.map(function (line) {
            var lineArray = [];
            for (var i = 0; i < 9; i++) {
                lineArray[i] = {
                    value: line[i],
                    allowedValues: (line[i] ? undefined : new Set([1, 2, 3, 4, 5, 6, 7, 8, 9])),
                    numberAllowedValues: function () { return this.allowedValues.size; }
                };
            }
            return lineArray;
        });
    };
    SudokuCard.prototype.updateAllowedValues = function () {
        console.log("Clicked Solve");
        for (var i = 0; i < 9; i++) {
            for (var j = 0; j < 9; j++) {
                if (this.gridObj[i][j].value) {
                    this.updateAllowedValuesForCell(i, j);
                }
            }
        }
    };
    SudokuCard.prototype.updateAllowedValuesForCell = function (i, j) {
        var _this = this;
        var needUpdates = [];
        //clean the line
        for (var m = 0; m < 9; m++) {
            if (!this.gridObj[i][m].value) {
                if (this.gridObj[i][m].allowedValues.has(this.gridObj[i][j].value)) {
                    this.gridObj[i][m].allowedValues.delete(this.gridObj[i][j].value);
                    if (this.gridObj[i][m].numberAllowedValues() == 1) {
                        needUpdates.push([i, m]);
                    }
                }
            }
        }
        //clean the column
        for (var m = 0; m < 9; m++) {
            if (!this.gridObj[m][j].value) {
                if (this.gridObj[m][j].allowedValues.has(this.gridObj[i][j].value)) {
                    this.gridObj[m][j].allowedValues.delete(this.gridObj[i][j].value);
                    if (this.gridObj[m][j].numberAllowedValues() == 1) {
                        needUpdates.push([m, j]);
                    }
                }
            }
        }
        //clean the 3*3 grid
        var modi = Math.floor(i / 3);
        var modj = Math.floor(j / 3);
        for (var k = -1; k < 2; k += 2) {
            for (var l = -1; l < 2; l += 2) {
                var indexy1 = 3 * modi + ((i + k + 3) % 3);
                var indexy2 = 3 * modj + ((j + l + 3) % 3);
                if (!this.gridObj[indexy1][indexy2].value) {
                    if (this.gridObj[indexy1][indexy2].allowedValues.has(this.gridObj[i][j].value)) {
                        this.gridObj[indexy1][indexy2].allowedValues.delete(this.gridObj[i][j].value);
                        if (this.gridObj[indexy1][indexy2].numberAllowedValues() == 1) {
                            needUpdates.push([indexy1, indexy2]);
                        }
                    }
                }
            }
        }
        // needUpdates=undefined;
        if (needUpdates.length > 0) {
            needUpdates.map(function (couple) {
                var l = couple[0];
                var m = couple[1];
                // There is one value in the allowedValues set
                _this.gridObj[l][m].value = Array.from(_this.gridObj[l][m].allowedValues)[0];
                // Display effect ;)
                setTimeout(function () {
                    _this.grid[l][m] = _this.gridObj[l][m].value;
                    _this.updateAllowedValuesForCell(l, m);
                }, 100);
            });
        }
    };
    return SudokuCard;
}());
SudokuCard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'sudoku-card',
        template: __webpack_require__(153),
        styles: [__webpack_require__(150)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialog */]) === "function" && _a || Object])
], SudokuCard);

var _a;
//# sourceMappingURL=sudoku-card.component.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[206]);
//# sourceMappingURL=main.bundle.js.map