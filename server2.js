import { createServer } from 'http';
const PORT = process.env.PORT;

const users = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Carl'},
    {id: 3, name: 'Steve'},
];

const server = createServer((req, res) => {
    if(req.url === '/api/users' && req.method === 'GET')
    {
        res.setHeader('Content-Type', 'application/json'); // send json as response
        res.write(JSON.stringify(users));
        res.end();
    }

    else if(req.url.match(/\/api\/users\/\d+/)) // regex to match url
    {
        const id = req.url.split('/')[3];
        const user = users.find((user) => user.id === parseInt(id));
        if(user)
        {
            res.setHeader('Content-Type', 'application/json'); // send json as response
            res.write(JSON.stringify(user));
            res.end();
        }
        else
        {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'application/json'); // send json as response
            res.write(JSON.stringify({message : 'User not found'}));
            res.end();
        }
    }

    else
    {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'application/json'); // send json as response
        res.write(JSON.stringify({message : 'Route not found'}));
        res.end();
    }
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});