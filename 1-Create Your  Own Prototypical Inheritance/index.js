
function Shape() {
}

Shape.prototype.duplicate = function() {
    console.log('duplicate');
}

function Circle(radius) {
    this.radius = radius;
}

// Circle.prototype = Object.create(Object.prototype); //objcetBase
Circle.prototype = Object.create(Shape.prototype); 

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