import http from 'http';

const server = http.createServer((request, response) => {
    console.log(request.url);

    response.end('Oi Oi!')
});

server.listen(3000);