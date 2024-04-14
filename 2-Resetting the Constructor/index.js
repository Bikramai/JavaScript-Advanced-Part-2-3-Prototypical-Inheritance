
function Shape() {
}

Shape.prototype.duplicate = function() {
    console.log('duplicate');
}

function Circle(radius) {
    this.radius = radius;
}

//first we have the structure of prototype
// Circle.prototype.constructor = Circle;
// new Circle.prototype.constructure() => new Circle();
Circle.prototype = Object.create(Shape.prototype); 
Circle.prototype.constructor = Circle; // best practice and dynamic way 

Circle.prototype.draw = function(){
    console.log('draw');
}
const s = new Shape();
const c = new Circle();

// Explanation of this above code:-
// 1. So here's our shape, 
// it inherits from this object which we call shapebase.
// and in shapebase we have the duplicate method.
// and as we see, shapebase inherits from from object, which is our objectbase,
// the root of all objectsi javascript. 

// Note:- Whenever we reset the prototype, as a best practice, 
// make sure to reset the constructor as well.