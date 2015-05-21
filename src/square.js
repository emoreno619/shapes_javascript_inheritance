
var Rectangle = require("./rectangle");

// Add the constructor for rectangle and the methods that
// need to be overwritten.  Keep in mind that a rectangle
// has more than just 1 side length.

// Uncomment this when ready:

function Square(width, length, color){
  Rectangle.call(this);
  
  this.sides = 4;
  this.color = color;
  this.width = width;
  this.length = length;
}

Square.prototype = Object.create(Rectangle.prototype);

Square.prototype.constructor = Square;

Square.prototype.area = function() {
  return this.width * this.length;
}

Square.prototype.perimeter = function() {
  return (this.width * 2) + (this.length * 2);
}

Square.prototype.draw = function() {
	console.log();
	var str = "";

	for (var i = 0; i < this.sides -1; i++) {
			

		//LEFT CORNERS	
		if (i == 0){
			str += " " // upper left corner
		} else if (i == 2) {
			str += " " // lower left corner
		}

		//TOP AND BOTTOM
		if (i == 0 || i == 2){
			for (var k = 0; k < this.length * 4 +10; k++) {
				str += "-" // horizontal _
			}
		} else {
			// SIDES - all the rows
			for (var m = 0; m < this.length * 2; m++) {
				//one row of sides
				for (var j = 0; j < this.length*2; j++) {
					if (j == 0 || j == this.length*2 -1){
						str += "|" // vertical |
						if (j == this.length*2 -1)
							str += "\n"
					} else
						str += "   "
				}
			}
		}
		//RIGHT CORNERS
		if (i == 0){
			str += " \n" // upp right corner
		} else if (i == 2) {
			str += " \n" // lower right corner
		}
	}
	console.log(str);
  return "A square with " + this.sides + " sides";
}

Square.prototype.toString = function() {
  return "[Square sides:" + this.sides + ", color:" + this.color +", width:" + this.width +", length:" + this.length + " ]";
}

var aSquare = new Square(8,8, "blue");

// console.log(aSquare.width);
// console.log(aSquare.length);
// console.log(aSquare.sides);
// console.log(aSquare.color);
// console.log(aSquare.area());
// console.log(aSquare.perimeter());
// console.log(aSquare.toString());
// console.log(aSquare.getRGB());

// aSquare.draw();


module.exports = Square;
