const { Stack } = require("./index.js");
describe("Stack Class", () => {
  it("#push should add a new item to the stack ", () => {
    const stack = new Stack([4, 3, 2]);
    stack.addBack(1);
    expect(stack.peek()).toBe(1);
  });
  // add more tests here...
});
