const fs = require('fs');
const path = require('path');

//Create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if (err) throw error;
//     console.log("Folder Created")
// })


//Create and write to file


// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', err => {
//     if (err) throw error;
//     console.log("File written to...")
//      Append File
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'I love Node.js!', err => {
//         if (err) throw error;
//         console.log("File written to...")
//     })
// })

//Read File
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//     if (err) throw error;
//     console.log(data);
// })

//Rename File
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloworld.txt'), (err, data) => {
    if (err) throw error;
    console.log('File renamed ...');
})


