
function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function() {
    console.log('duplicate');
}

// intermediate function in inheritance
function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype); 
    Child.prototype.constructor = Circle; // best practice and dynamic way   
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

extend(Square, Shape)

const s = new Shape();
const c = new Circle(1, 'red');

// Explanation of this above code:-
// We don't have color property, we only have the radius, why didn't it work?
// =>Well, earlier we know that when we use new operator -(const c = new Circle(1, 'red');), three things happen,
// 1. the new operator creates empty object,
// 2. set the latest property to that new object-(new Circle(1, 'red');
// 3. Finally that new object will be returned from this constructor -function Circle(radius, color).
// And also, we knew that if we don't use the new operator 
// this.radius = radius; by default will point to the global object which is 
// window in the browser and global in node.

// => The reason it didn't work, here we're calling shape function, and by default,
//    1.this, in -this.color = color; function, will point to a global object, 
//    2. we didn't set the color property on the new instance of the circle object.
//       we set to the window object, let's verify that in console. window.color ->red.

// How do we fix this problem?
// => to fix this problem, we need to call the shape function, set this -this.color = color;
//    to point to the new instance of the circle object. we knew that every function in js is object.
// 3. Shape.call(), set instance this, color, and this will solve teh problem.

// The Extend function is called intermediate function in inheritance.