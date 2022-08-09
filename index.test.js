const { Stack } = require('./index.js');
const { Queue } = require('./index.js');
describe('Stack Class', () => {
    it('#push should add a new item to the stack', () => {
        const stack = new Stack();
        stack.push(1);
        expect(stack.peek()).toEqual(1);
    });
  // add more tests here...
});

describe('Queue Class', () => {
    it('#enqueue should add an item to the back', () => {
        const queue = new Queue();
        queue.enqueue('fox');
        queue.enqueue('goose');
        expect(queue.count).toBe(2);
        expect(queue.next).toBe('fox');
    });

    it('#dequeue should remove an item from the front', () => {
        const queue = new Queue();
        queue.enqueue('fox');
        queue.enqueue('goose');
        const item = queue.dequeue();
        expect(queue.count).toBe(1);
        expect(queue.next).toBe('goose');
        expect.item.toBe(item);
    });
});