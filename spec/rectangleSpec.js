var Rectangle = require("../src/rectangle");

var blueRectangle;

describe("Rectangle", function() {
  beforeEach(function() {
    blueRectangle = new Rectangle(4,6, "blue");
  });

  describe("Area", function() {
    it("should be 24 for a rectangle with sides of 4 and 6", function() {
      expect(blueRectangle.area()).toEqual(24);
    });
  });

  describe("Perimeter", function() {
    it("should be 20 for a square with side lengths 4,6", function() {
      expect(blueRectangle.perimeter()).toEqual(20);
    });
  });

  describe("Draw", function() {
    it("should draw an ASCII image of the shape and return a string describing the shape and its number of sides", function() {
      expect(blueRectangle.draw()).toEqual("A rectangle with 4 sides");
    });
  });

  describe("toString", function() {
    it("should return a string describing the shape (e.g., number of sides and color)", function() {
      expect(blueRectangle.toString()).toEqual("[Rectangle sides:4, color:blue, width:4, length:6 ]");
    });
  });

  describe("getRGB", function() {
    it("should return the rgb value (as a string) for the shape color", function() {
      expect(blueRectangle.getRGB()).toEqual("rgb(0,0,255)");
    });
  });

});