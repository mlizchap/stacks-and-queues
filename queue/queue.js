const Node = require('./node');

class Queue {
    constructor() {
        this.first = null;
        this.size = 0;
    }

    enq(data) {
        const node = new Node(data);

        if (!this.first) {
            this.first = node;
        } else {
            let curr = this.first;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = node;
        }
        this.size++;
        return node;
    }

    deq() {
        let temp = this.first;
        this.first = this.first.next;
        this.size--;
        return temp;
    }

    print() {
        var stringToPrint = ''
        let curr = this.first;
        stringToPrint += `${curr.data} <- `
        while (curr.next.next) {
            stringToPrint += `${curr.next.data} <- `;
            curr = curr.next;
        }
        stringToPrint += `${curr.next.data}`;
        console.log(`${stringToPrint}`);
    }
}

module.exports = Queue;