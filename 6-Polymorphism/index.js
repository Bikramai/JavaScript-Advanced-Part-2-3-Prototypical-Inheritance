// Polymorphism :- means poly means many, morph means form. so polymorphism mean many forms.
// It's an extremely powerful technique in object-oriented programming.
// Each object will provide a different implementation of the duplicate method.
// so we have many implementations, or many forms of the duplicate method.




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

function Square() {
}

extend(Square, Shape);

Square.prototype.duplicate = function() {
    console.log('duplicate square');
}

const s = new Shape();
const c = new Circle(1, 'red');

// Example of polymorphism below
// Why polymorphism is so powerful?
// Well, before oop, we have to implement if, else statement. 
// now, Oop, we encapsulate our variables and functions into objects. 
// In contrast, when we encapsulate variables and functions into objects, and use inheritance,
// we canexecute many forms of a method, using a single line of code. That's the beauty of polymorphism.

const shapes = [
    new Circle(),
    new Square()
];

for (let shape of shapes)
    shape.duplicate();