const Node = require('./node');

class Stack {
    constructor() {
        this.top = null;
        this.size = 0;    
    }

    push(data) {
        const node = new Node(data);

        node.previous = this.top;
        this.top = node;
        this.size += 1; 
        return this.top;
    }

    pop() {
        let temp = this.top;
        this.top = this.top.previous;
        this.size -= 1;
        return temp;
    }

    peek() {
        return this.top.data;
    }

    print() {
        var stringToPrint = ''
        let curr = this.top;
        stringToPrint += `${curr.data} <- `
        while (curr.previous.previous) {
            stringToPrint += `${curr.previous.data} <- `;
            curr = curr.previous;
        }
        stringToPrint += `${curr.previous.data}`;
        console.log(`${stringToPrint}`);

    }
};
  
module.exports = Stack;
