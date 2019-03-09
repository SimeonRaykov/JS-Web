const http = require('http');
const fs = require('fs');
const url = require('url');

const port = 8080;

http
    .createServer((req, res) => {
        const message = 'Hello World';
        const parsedUrl = url.parse(req.url);

        res.writeHead(200, {
            'content-type': 'text-plain'
        });

        if (parsedUrl.path === '/') {
            res.write('Home Page');
        } else {
            res.write('Something else page');
        }
        res.end();
    })
    .listen(port);