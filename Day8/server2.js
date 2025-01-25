var http = require('http');
var fs = require('fs');
const { error } = require('console');
var os = require('os'); 

console.log(os.freemem());
console.log(os.cpus());
console.log("Normal log");
console.warn("Danger");
console.assert(true,"Transaction Completed");
console.assert(false,"Transaction Failed");



const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    if (req.url === "/") {
        fs.readFile("test1.txt", (error, data) => {
            res.write(data);
            res.end();
        })
    }
    else if (req.url === "/welcome") {
        res.write('Message From Server:- Hello World!');
        res.end();
    }
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Listening on 127.0.0.1:3000');
});
