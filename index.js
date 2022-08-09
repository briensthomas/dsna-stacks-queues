class Stack {
    #list;

    constructor(initialList) {
        if (initialList) this.#list = initialList;
    }

    addBack(item) {
        this.#list.push(item);
        return this.#list;
    }

    removeBack() {
        this.#list.pop();
        return this.#list
    }


    get count() {
        return this.#list.length
    }

}

const dataStructure = new Stack([4, 3, 2])
console.log('AddBack function', dataStructure.addBack(1));
console.log('Remove Back function', dataStructure.removeBack())
console.log('Peek', dataStructure.peek());

class Queue {
    #list;

    constructor(initialList) {
        if (initialList) this.#list = initialList;
    }

    dequeue() {
        this.#list.unshift();
        return this.#list
    }

    enqueue(item) {
        this.#list.push(item);
        return this.#list
    }

    hasNext() {
        this.#list.peek()
        if (peek === null) {
            return false
    } else return true;
}
}

const otherDataStructure = new Queue ([ 5, 6, 7])

module.exports = { Stack, Queue };
