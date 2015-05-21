function Shape(sides, color) {
  this.sides = sides;
  this.color = color;
}

Shape.prototype.area = function() {
  return 0;
};

Shape.prototype.perimeter = function() {
  return 0;
};

// Should return an assci version of the shape.  Since the shape
// doesn't make sense here, we return a string.
Shape.prototype.draw = function() {   
   return "A shape with " + this.sides + " sides";
};

Shape.prototype.toString = function() {
  return "[Shape sides:" + this.sides + ", color:" + this.color +" ]"
};

Shape.prototype.getRGB = function() {
 	var result = "rgb(";
 		if(this.color == "red"){
 			result += "255,0,0)"
 		} else if (this.color == "blue"){
 			result += "0,0,255)"
 		} else if (this.color == "green"){
 			result += "0,255,0)"
 		} else {
 			str += "0,0,0)"
 		}

  return result;
}

// var s = new Shape(4, "red");
// console.log("value: " + s.perimeter());
// console.log(s.draw());
// console.log(s.toString());
// console.log(s.getRGB());
// console.log(s.area());


module.exports = Shape;
