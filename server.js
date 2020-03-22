const http = require('http');
const url = require('url');

function start(route, handle) {
    function onRequest(request, response) {
        const postData = '';
        const pathname = url.parse(request.url).pathname; 
        console.log('Request for ' + pathname + 'recieved.');

        request.setEncoding('utf8');

        request.addListener('data', function(postDataChunk) {
            postData += postDataChunk;
            console.log('Recieved POST data chunk' + postDataChunk + '.');
        });

        request.addListener('end', function() {
            route(handle, pathname, response);
        });
    }
    http.createServer(onRequest).listen(8888);
    console.log('Server has started, Will');
}

exports.start = start;