const { Stack, Queue } = require("./index.js");
describe("Stack Class", () => {
  it.skip("#push should add a new item to the stack ", () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.count).toEqual(1);
  });
  // add more tests here...
});

describe("Queue Class", () => {
  it("#enqueue should add an item to the back", () => {
    const queue = new Queue();
    queue.enqueue("fox");
    queue.enqueue("goose");
    expect(queue.count).toBe(2);
    expect(queue.next).toBe("fox");
  });
});

