
/*
 *	create and delete choir groups
 */


var countGroups = 2;
var objArr = new Array(16);
// size
var xSize = 160;
var ySize = 240;
// patch coords
var xPatch = 200;
var yPatch = 870;
// presentation coords
var xPres = 20;
var yPres = 250;
// x offset for new choir groups
var dx = 170;

/* add a new chorus group */
function add() {
	if(countGroups < 8) {
		// resize background panel
		var p = this.patcher.getnamed("choirgroups_panel");
		p.message("presentation_rect", 10, yPres - 40, (countGroups + 1 ) * dx + 10, 330);
		// add new bpatcher
		var g = this.patcher.newdefault(xPatch + (countGroups * dx), yPatch, "bpatcher", "group.maxpat",
			"@presentation", 1, 
			"@presentation_rect", xPres + (countGroups * dx), yPres, xSize, ySize,
			"@args", countGroups + 1, countGroups + 3);
		objArr[countGroups++] = g;
	}
	
}

/* remove last chorus group*/
function del() {
	if(countGroups > 2) {
		// remove bpatcher
		this.patcher.remove(objArr[--countGroups]);
		var p = this.patcher.getnamed("choirgroups_panel");
		// resize background panel
		p.message("presentation_rect", 10, yPres - 40, (countGroups ) * dx + 10, 330);
	}
}