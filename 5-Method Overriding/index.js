// Method Overriding:- which basically means reimplementating a method in a child object. 


function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function() {
    console.log('duplicate');
}

// intermediate function in inheritance
function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype); 
    Child.prototype.constructor = Child; // best practice and dynamic way   
}

function Circle(radius, color) {
    Shape.call(this, color); // this is the instance of the circle object.

    this.radius = radius;
}

extend(Circle, Shape);

Circle.prototype.draw = function(){
    console.log('draw');
}

function Square(size) {
    this.size = size;
}

extend(Square, Shape);

Circle.prototype.duplicate = function() {
    Shape.prototype.duplicate.call(this);

    console.log('duplicate circle');
}

const s = new Shape();
const c = new Circle(1, 'red');

// Note:- When we access a property or a method on an objcet, 
// JavaScript engine walks up the prototype chain and picks the first implementation.