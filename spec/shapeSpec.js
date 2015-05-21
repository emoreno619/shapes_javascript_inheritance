var Shape = require('../src/shape.js'),
redTriangle,
blueQuadrilateral,
greenPentagon,
aShape;

describe('Shape', function(){

  beforeEach(function(){

    redTriangle = new Shape(3, "red")
    blueQuadrilateral = new Shape(4, "blue")
    greenPentagon = new Shape(5, "green")
  });

  describe('#area', function(){
    it('should return 0, because each shape type area function is defined in its respective class', function(){
      expect(redTriangle.area()).toEqual(0)
      expect(blueQuadrilateral.area()).toEqual(0)
      expect(greenPentagon.area()).toEqual(0)
    });
  });

  describe('#perimeter', function(){
    it('should return 0, because each shape type perimeter function is defined in its respective class', function(){
      expect(redTriangle.perimeter()).toEqual(0)
      expect(blueQuadrilateral.perimeter()).toEqual(0)
      expect(greenPentagon.perimeter()).toEqual(0)
    });
  });

  describe('#draw', function(){
    it('should draw an ASCII image of the shape and return a string describing the shape and its number of sides', function(){
      expect(redTriangle.draw()).toEqual("A shape with 3 sides")
      expect(blueQuadrilateral.draw()).toEqual("A shape with 4 sides")
      expect(greenPentagon.draw()).toEqual("A shape with 5 sides")
    });
  });

  describe('#toString', function(){
    it('should return a string describing the shape (e.g., number of sides and color)', function(){
      expect(redTriangle.toString()).toEqual("[Shape sides:3, color:red ]")
      expect(blueQuadrilateral.toString()).toEqual("[Shape sides:4, color:blue ]")
      expect(greenPentagon.toString()).toEqual("[Shape sides:5, color:green ]")
    });
  });

  describe('#getRGB', function(){
    it('should return the rgb value (as a string) for the shape color', function(){
      expect(redTriangle.getRGB()).toEqual("rgb(255,0,0)")
      expect(blueQuadrilateral.getRGB()).toEqual("rgb(0,0,255)")
      expect(greenPentagon.getRGB()).toEqual("rgb(0,255,0)")
    });
  });
});