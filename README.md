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
/* 8 -> 1 -> 9 */
```

### Stack Methods
#### push()
- create a new node
- point the new node's previous pointer to the old top
- make the new node the new top 

#### pop()
- make the old top a temp node 
- make the new top the old top's previus node 
- return the temp (the old top)

### Queue Methods 
#### enqueue()
- create a new node
- if there is no first node - assign the newly created node to `this.first`
- if there is a first node - assign current to the first node and iterate through the node, changing `current` to `current.next` and once there is no `current.next` assign the new node to it.
- increase the size;
- return the node.

#### dequeue()
- assign `temp` to the first node.
- make the old `first` node the `first.next` node.
- decrease the size;
- return the `temp` node (the first node being removed)


## Example Problems
- [Min Stack](https://leetcode.com/problems/min-stack)
