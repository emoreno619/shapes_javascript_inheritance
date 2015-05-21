var Shape = require("./shape");

// Add the constructor for rectangle and the methods that
// need to be overwritten.  Keep in mind that a rectangle
// has more than just 1 side length.

// Uncomment this when ready:

function Rectangle(width, length, color){
	Shape.call(this);

	this.sides = 4;
	this.color = color;
	this.width = width;
	this.length = length;
}

Rectangle.prototype = Object.create(Shape.prototype);

Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function() {
	return this.width * this.length;
}

Rectangle.prototype.perimeter = function() {
	return (this.width * 2) + (this.length * 2);
}

Rectangle.prototype.draw = function() {

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
			for (var k = 0; k < this.length * 4 +12; k++) {
				str += "-" // horizontal _
			}
		} else {
			// SIDES - all the rows
			for (var m = 0; m < this.width * 2; m++) {
				//one row of sides
				for (var j = 0; j < this.width*2; j++) {
					if (j == 0 || j == this.width*2 -1){
						str += "|" // vertical |
						if (j == this.width*2 -1)
							str += "\n"
					} else
						str += "      "
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

	return "A rectangle with " + this.sides + " sides";
}

Rectangle.prototype.toString = function() {
	return "[Rectangle sides:" + this.sides + ", color:" + this.color +", width:" + this.width +", length:" + this.length + " ]";
}

// var aRect = new Rectangle(4,6, "blue");

// console.log(aRect.width);
// console.log(aRect.length);
// console.log(aRect.sides);
// console.log(aRect.color);
// console.log(aRect.area());
// console.log(aRect.perimeter());
// console.log(aRect.toString());
// console.log(aRect.getRGB());



module.exports = Rectangle;
