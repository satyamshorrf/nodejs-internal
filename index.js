const fs = require('fs');
const crypto = require('crypto');

const start = Date.now();

process.env.UV_THREADPOOL_SIZE = 10

setTimeout(() => console.log ('Hello from Timer 1'), 0);

setImmediate(() => console.log ('Hello from Immediate Fn 1'));

fs.readFile('test.txt', 'utf8', () => {
    console.log('IO Polling Finish')

    setTimeout(() => console.log ('Hello from Timer 2'), 0);
    setTimeout(() => console.log ('Hello from Timer 3'), 5 * 1000);

    setImmediate(() => console.log ('Hello from Immediate Fn 2'));

    // CPU Intensive Work
    crypto.pbkdf2('password1', 'salt1', 100000, 1024, 'sha512', () => {
    console.log(`${Date.now() - start}ms`,'Password 1 Done')
    })

    crypto.pbkdf2('password2', 'salt1', 100000, 1024, 'sha512', () => {
    console.log(`${Date.now() - start}ms`,'Password 2 Done')
    })

    crypto.pbkdf2('password3', 'salt1', 100000, 1024, 'sha512', () => {
    console.log(`${Date.now() - start}ms`,'Password 3 Done')
    })

    crypto.pbkdf2('password4', 'salt1', 100000, 1024, 'sha512', () => {
    console.log(`${Date.now() - start}ms`,'Password 4 Done')
    })

    crypto.pbkdf2('password5', 'salt1', 100000, 1024, 'sha512', () => {
    console.log(`${Date.now() - start}ms`,'Password 5 Done')
    })

    crypto.pbkdf2('password6', 'salt1', 100000, 1024, 'sha512', () => {
    console.log(`${Date.now() - start}ms`,'Password 6 Done')
    })

});

console.log('Hello from the top-level code')

 

