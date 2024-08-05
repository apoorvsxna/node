import http from 'http';
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200; // 200 by default
    
    res.write('<h1>Hello there.<h1>');
    res.end(); // not needed in Express
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



// this works as well
// res.end('Hello');

// instead of setHeader and statusCode, writeHead can be used to specify multiple header properties.
// res.writeHead(200, {'Content-Type': 'text/html'});