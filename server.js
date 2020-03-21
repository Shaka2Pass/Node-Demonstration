// //requires the http module that ships with Node.js and is accessible through the http variable.
// const http = require('http');
// //createServer as a mothod called listen and takes a numeric port number our http servier is going to listen on. 
// http.createServer(function(request, response){
//     console.log('Request Recieved Will');
//     response.writeHead(200, { 'Content-Type': 'text/plain' });
//     response.write('hello world');
//     response.end();
// }).listen(8000);

// console.log(`Server has started.`);

const http = require('http');

function onRequest(request, response) {
    console.log('Request recieved Will');
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write('hello will world');
    response.end();
}

http.createServer(onRequest).listen(8000);

console.group('Server is fully functional Will');