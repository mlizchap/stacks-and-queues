# Stacks and Queues
## Arrays
- this takes advantage of Javascript's built in array methods.  
    - Both use the `push()` method to add elements. 
    - Stacks remove items at the end using `pop()`
    - Queues remove items at the beginning using `shift()`
    
### Stacks
- uses `push()` and `pop()`
    ```javascript
    const stack = [];
    stack.push(8); /* [8] */
    stack.push(1); /* [8,1] */
    stack.pop();   /* [8]  */
    ```
### Queues
- uses `push()` and `shift()`
    ```javascript
    const queue = [];
    queue.push(8); /* [8] */
    queue.push(1); /* [8,1] */
    queue.shift(); /* [1] */
    ```

## Implementing Your Own Data Structure
### Node Classes
- nodes for **stacks** only care about the **previous node** because the **last(top)** node will be popped off and the previous node will be the new top.  
```javascript
/* 8 <- 1 <- 9 */
```
- nodes for **queues** only care about the **next node** because the **first** node will be removed and the next node will become the first node. 
```javascript
/* 8 <- 1 <- 9 */
```

### Stack Methods
- push() - creates a new node and adds to the top of the stack
- pop()

### Queue Methods 
- enqueue() - creates a new node and adds to the first of the queue
- dequeue() - 

