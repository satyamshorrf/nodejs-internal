const fs = require('fs');

setTimeout(() => console.log ('Hello from Timer 1'), 0);

setImmediate(() => console.log ('Hello from Immediate Fn 1'));

fs.readFile('test.txt', 'utf8', () => {
    console.log('IO Polling Finish')

    setTimeout(() => console.log ('Hello from Timer 2'), 0);
    setTimeout(() => console.log ('Hello from Timer 3'), 5 * 1000);

    setImmediate(() => console.log ('Hello from Immediate Fn 2'));
});

console.log('Hello from the top-level code')

 

