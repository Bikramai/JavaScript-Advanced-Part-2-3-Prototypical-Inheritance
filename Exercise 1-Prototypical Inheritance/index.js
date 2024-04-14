// Parent Object
function HtmlElement() {
    this.click = function() {
        console.log('clicked');
    }
}

HtmlElement.prototype.focus = function() {
    console.log('focused');
}

// we set the item array here
function HtmlSelectElement(items = []) { //ES6 we can initialize the parameter
    this.item = items;

    // we have two methods add item and remove item
    this.addItem = function(item) {
        this.items.push(item);
    }

    this.removeItem = function(item) {
        this.items.splice(this.items.indexOf(item), 1);
        HtmlSelectElement.prototype.constructor = HtmlSelectElement;
    }
}

// important and tricky part
HtmlSelectElement.prototype = new HtmlElement();



// we set the protoype of this HtmlSelectElement to an instance of an HtmlElement Object. 
// Earlier in the section, we used the different approach. So we used object.create and pass let's say HtmlElement.prototype,
// But this will not work in the current implementation.

// Let me explain why. Here, object.create will create a new object and set the prototype of that object
// to the prototype of html element.

