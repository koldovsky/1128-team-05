// https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript
class SmallestIntegerFinder {
    constructor(args){
      this.args = args;
    }
    findSmallestInt(args) {
     return Math.min(...args);
    }
  }
  const args = [34, -345, -1, 100]; 
  if (args.length > 0) {
    const minFinder = new SmallestIntegerFinder(args);
    console.log(minFinder.findSmallestInt(args));
  } else {
    console.log("Масив порожній");
  }

//https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
class Point {
    constructor(x, y){
      this.x = x;
      this.y = y;
    }
  }
  class Circle {
    constructor(center, radius) {
      this.center = new Point();
      this.radius = radius;
    }
  }
  function circleCircumference(circle) {
    const thisCircleLength = 2 * Math.PI * circle.radius;
    return roundedCircleLength = thisCircleLength.toFixed(6);
  }
  
  const circle = new Circle(new Point(0, 0), 5);
  const circleLength = circleCircumference(circle);
  console.log(circleLength);