// Mixins function
function mixin(target, ...sources) { // rest operator
    Object.assign(target, ...sources); // spread operator coz we're spreading an array into multiple objects.
}
const canEat = {
    eat: function(){
        this.hunger--;
        console.log('eating');
    }
};

const canWalk = {
    walk: function() {
        console.log('walking');
    }
};

const canSwim = {
    swim: function(){
        console.log('swim');
    }
};

function Person() {
}

//basically modified the prototype of person, and added the capability to eat and walk.
//Object.assign(Person.prototype, canEat, canWalk);
mixin(Person.prototype, canEat, canWalk);

const person = new Person();
console.log(person);

function Goldfish() {
}

// Composition or mixing gives us great flexibility.
mixin(Goldfish.prototype, canEat, canSwim);

const goldfish = new Goldfish();
console.log(goldfish);