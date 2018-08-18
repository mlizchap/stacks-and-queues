const http = require('http');
const Stack = require('./stack/stack');
const Queue = require('./queue/queue')

const hostname = '127.0.0.1';
const port = 3000;

/************ CODE ******************/
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log("STACK")
stack.print();

const queue = new Queue(); 
queue.enq(1);
queue.enq(2);
queue.enq(2);
console.log("QUEUE")
queue.print();

//console.log(stack.peek());
/******************************/

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port);