var Square = require("../src/square");

var greenSquare;

describe("Square", function() {
  beforeEach(function() {
    greenSquare = new Square(8,8, "green");
  });

  describe("Area", function() {
    it("should be 64 for a square with sides of length 8", function() {
      expect(greenSquare.area()).toEqual(64);
    });
  });

  describe("Perimeter", function() {
    it("should be 32 for a square with sides length 8", function() {
      expect(greenSquare.perimeter()).toEqual(32);
    });
  });

  describe("Draw", function() {
    it("should draw an ASCII image of the shape and return a string describing the shape and its number of sides", function() {
      expect(greenSquare.draw()).toEqual("A square with 4 sides");
    });
  });

  describe("toString", function() {
    it("should return a string describing the shape (e.g., number of sides and color)", function() {
      expect(greenSquare.toString()).toEqual("[Square sides:4, color:green, width:8, length:8 ]");
    });
  });

  describe("getRGB", function() {
    it("should return the rgb value (as a string) for the shape color", function() {
      expect(greenSquare.getRGB()).toEqual("rgb(0,255,0)");
    });
  });

});