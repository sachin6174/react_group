class Stack {
  //constructor
  constructor() {
    this.data = [];
    this.data.length = 4;
    this.nextIndex = 0;
    this.capacity = 4;
  }
  size() {
    return this.nextIndex;
  }

  isEmpty() {
    return this.nextIndex == 0;
  }

  // insert element
  push(element) {
    if (this.nextIndex == this.capacity) {
      this.data.length = 2 * this.capacity;
      capacity *= 2;
    }
    this.data[this.nextIndex] = element;
    this.nextIndex++;
  }

  // delete element
  pop() {
    if (this.isEmpty()) {
      console.log("Stack is empty ");
      return null;
    }
    this.nextIndex--;
    return this.data[this.nextIndex];
  }
  top() {
    if (this.isEmpty()) {
      console.log("Stack is empty ");
      return null;
    }
    return this.data[this.nextIndex - 1];
  }
}

s = new Stack();
s.push(5);
s.push("sachinkumar");
s.push(6);
s.push(30);
// while(!(s.isEmpty())){
//     console.log(s.top());
//     s.pop();
// }

console.log(s.size());
