const realfork = require('bindings')('realfork');


console.log("Esto es antes del fork");

let i = 0

if (realfork.fork()) {
  console.log("Soy el hijo");
  for (i=0; i<100; i++) {
    console.log('hijo', i);
  }
} else {
  console.log("Soy el padre");
  for (i=0; i<50; i++) {
    console.log('padre', i);
  }
}
console.log("Terminé");

