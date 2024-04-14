function HtmlSelectElement(items = []) {
    this.item = items;

    this.addItem = function(item) {
        this.items.push(item);
    }

    this.removeItem = function(item) {
        this.items.splice(this.items.indexOf(item), 1)
    }

    this.render = function() {
        return `
    <select>${this.items.map(item => `  //multipe option elements. by using map method ES6
        <option>${item}<option>`).join('')}
    </select>`;
    }
}

function HtmlImageElement(src) { //here is the constructor that receive src parameter.
    this.src = src; //here we set the source property

    this.render = function() {  // also definen render method
        return `<img src="${this.src}" />` //return this Html Markup by using template string. this is part of ES6.
    }
}
HtmlImageElement.prototype = new HTMLElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;