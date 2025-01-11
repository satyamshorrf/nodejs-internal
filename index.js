const fs = require('fs');

setTimeout(() => console.log ('Hello from Timer 1'), 0);

setImmediate(() => console.log ('Hello from Immediate Fn 1'));

console.log('Hello from the top-level code')

 

