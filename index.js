class Stack {
    #list;

    constructor(initialList) {
        if (initialList) this.#list = initialList;
    }

    // push(item) {
    //     this.#list(...this.#list, item);
    //     return this.#list;
    // }

    // pop() {
    //     this.#list.pop();
    //     return this.#list
    // }


    // get count() {
    //     return this.#list.length
    // }

}

// const dataStructure = new Stack([4, 3, 2])
// console.log('AddBack function', dataStructure.push(1));
// console.log('Remove Back function', dataStructure.pop())

class Queue {
    #queue;

    constructor(queue) {
        this.#queue = queue || []
    }

    enqueue(item) {
        this.#queue.push(item)
        return this.#queue
    }

    dequeue() {
        this.#queue.unshift();
        return this.#queue;
    }

    get count() {
        return this.#queue.length;
    }

    get next() {
        return this.#queue[0]
    }

}
const newQueue = new Queue([1, 2, 3])
console.log('Enqueue', newQueue.enqueue(4));

module.exports = { Stack, Queue };
