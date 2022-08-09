class Stack {
    #list;

    constructor(initialList) {
        if (initialList) this.#list = initialList;
    }

    addBack(item) {
        this.#list.push(item);
        return this.#list;
    }

}

const dataStructure = new Stack([4, 3, 2])
console.log(dataStructure.addBack(1));

class Queue {}

module.exports = { Stack, Queue };
