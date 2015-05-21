var Shape = require("./shape");

// Add the constructor for rectangle and the methods that
// need to be overwritten.  Keep in mind that a rectangle
// has more than just 1 side length.

// Uncomment this when ready:

function equiTriangle(sideLength, color){
	Shape.call(this);

	this.sides = 3;
	this.color = color;
	this.sideLength = sideLength;
}

equiTriangle.prototype = Object.create(Shape.prototype);

equiTriangle.prototype.constructor = equiTriangle;

equiTriangle.prototype.area = function() {
	return (.5 * this.sideLength * Math.sqrt(.75 * this.sideLength * this.sideLength));
}

equiTriangle.prototype.perimeter = function() {
	return (this.sideLength * 3);
}

equiTriangle.prototype.draw = function() {

	console.log();
	var str = " ";
	//Row by row
	for (var i = 0; i < this.sideLength; i++) {
		//Top
		if(i == 0){
			for (var j = 0; j < this.sideLength*2+2; j++) {
				str += "-"
			}
		}

		str += "\n"

		//Sides
		for (var m = 0; m < i + 1; m++){
			str += " " 
			var spaceStore = 0;
			if (m == i)
				spaceStore = m;
		}

		// This char "\"
		str += String.fromCharCode(92);

		for (var k = 0; k < this.sideLength*2 - 2*i; k++){
			str += " "
		}
		// This char "/"
		str += String.fromCharCode(47);

		// Bottom tip
		if (i == this.sideLength -1){
			str += "\n"
			for (var n = 0; n < spaceStore +2; n++){
				str += " "
			}
			str += String.fromCharCode(92) + String.fromCharCode(47);
		}

	}
	
	console.log(str);

	return "A equiTriangle with " + this.sides + " sides";
}

equiTriangle.prototype.toString = function() {
	return "[equiTriangle sides:" + this.sides + ", color:" + this.color +", side length:" + this.sideLength + " ]";
}

var anEquiTri = new equiTriangle(40, "blue");

console.log(anEquiTri.sideLength);
console.log(anEquiTri.sides);
console.log(anEquiTri.color);
console.log(anEquiTri.area());
console.log(anEquiTri.perimeter());
console.log(anEquiTri.toString());
console.log(anEquiTri.getRGB());

anEquiTri.draw();

module.exports = equiTriangle;
