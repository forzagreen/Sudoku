

//Soduku samples:
// taken from : http://www.puzzles.ca/sudoku_puzzles/sudoku_easy_123.html
// and solution from : http://www.puzzles.ca/sudoku_puzzles/sudoku_easy_123_solution.html
tab123 = [[1,0,8,0,9,5,3,6,0], [0,0,0,0,0,0,4,5,0], [0,5,0,2,0,6,0,0,8], [7,0,0,3,0,9,6,0,4], [4,0,0,0,2,0,5,1,0], [5,0,2,0,0,0,0,0,0], [0,1,4,0,8,0,0,0,0], [0,3,0,0,6,7,0,0,0], [2,0,0,1,3,0,9,0,0]];
tab123_solution = [[1,4,8,7,9,5,3,6,2], [6,2,7,8,1,3,4,5,9], [3,5,9,2,4,6,1,7,8], [7,8,1,3,5,9,6,2,4], [4,9,3,6,2,8,5,1,7], [5,6,2,4,7,1,8,9,3], [9,1,4,5,8,2,7,3,6], [8,3,5,9,6,7,2,4,1], [2,7,6,1,3,4,9,8,5]];

//construct new table, with possible values
var tab123_new = [];
tab123.forEach(function(l) {
	var newLine = [];
	l.forEach(function(c) {
		var p = [];
		if (c != 0) { 
			p.push(c); 
		} else if (c == 0) {
			p = [1,2,3,4,5,6,7,8,9];
		}
		var point = {
			"l": tab123.indexOf(l), 
			"c": l.indexOf(c),
			"v": c, 
			"p": p
		}
		newLine.push(point);
	});
	tab123_new.push(newLine);
});

//Run through lines and modify p
tab123_new.forEach( function(l) {
	var valuesInLine = [];
	// tab123_new.forEach( function(l) {
	// 	// console.log(l);
	// });
	l.forEach( function(cell) {
		if(valuesInLine.indexOf(cell.v) == -1) { //if does not exist, then push
			valuesInLine.push(cell.v); 
		}
	});
	valuesInLine.forEach( function(value) {
		//remove indesired values prom l.p
		// console.log(l);
		l.forEach( function(cell) {
			var index = cell.p.indexOf(value);
			if (index > -1) {
			    cell.p.splice(index, 1);
			}
		});
		
	})
});

//Run through columns and modify p
for(var j=0; j<9; j++) { //run through the 9 columns: j is the column number
	var valuesInColumn = [];
	for(var i=0; i<9; i++) { //run through cells of one column: i is the line number
		if(valuesInColumn.indexOf(tab123_new[i][j].v) == -1) { //if does not exist, then push
			valuesInColumn.push(tab123_new[i][j].v);
		}
	}
	valuesInColumn.forEach( function(value) {
		for(var i=0; i<9; i++) {
			var index = tab123_new[i][j].p.indexOf(value);
			if (index > -1) {
				tab123_new[i][j].p.splice(index, 1);
			}
		}		
	});
}

//Run through zones and modify p
for (var i = 0; i<9 ; i+=3) {
	for (var j = 0; j<9 ; j+=3) { // i and j define a zone
		var valuesInZone = [];
		for (var k=i; k<=i+3; k++) {
			for (var n=i; n<=i+3; n++) {
				if(valuesInZone.indexOf(tab123_new[k][n].v) == -1) { //if does not exist, then push
					valuesInZone.push(tab123_new[k][n].v);
				}
			}
		}
		//TODO: remove proposed values
	};
};

tab123.forEach(function(l) {
    var p = document.createElement("p");
    var t = document.createTextNode(l);
    p.appendChild(t);
    document.body.appendChild(p);
});


//reconstruct the old table
var tab123_old = [];
tab123_new.forEach(function(l) {
	var line = [];
	l.forEach(function(cell) {
		line.push(cell.v);
	});
	tab123_old.push(line);
})

document.body.appendChild(document.createElement("hr"));
tab123_old.forEach(function(l) {
    var p = document.createElement("p");
    var t = document.createTextNode(l);
    p.appendChild(t);
    document.body.appendChild(p);
});

console.log(tab123_new);





