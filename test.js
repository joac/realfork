const realfork = require('bindings')('realfork');


console.log("This happens before the fork");

let i = 0

if (realfork.fork()) {
  console.log("I'm the child");
  for (i=0; i<100; i++) {
    realfork.sleep();
    console.log("child", i);
  }
} else {
  console.log("I'm the parent");
  for (i=0; i<50; i++) {
    realfork.sleep();
    console.log("parent", i);
  }
}
console.log("finished");

