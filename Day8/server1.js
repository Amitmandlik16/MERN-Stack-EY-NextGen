var http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    //res.end('Message From Server:- Hello World!');
    //res.end(JSON.stringify({ "id": 1, "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", "price": 109.95, "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday", "category": "men's clothing", "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg", "rating": { "rate": 3.9, "count": 120 } }));
    if (req.url === "/") {
        res.write('Default request');
        res.end();
    }
    else if (req.url === "/welcome") {
        res.write('Message From Server:- Hello World!');
        res.end();
    }
    else if (req.url === "/product") {
        res.write(JSON.stringify({ "id": 1, "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", "price": 109.95, "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday", "category": "men's clothing", "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg", "rating": { "rate": 3.9, "count": 120 } }));
        res.end();
    }
    else if (req.url === "/post") {
        res.write(JSON.stringify({
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        }));
        res.end();
    }
    else if (req.url === "/authentication") {
        res.write(JSON.stringify({
            "id": 1,
            "username": "emilys",
            "email": "emily.johnson@x.dummyjson.com",
            "firstName": "Emily",
            "lastName": "Johnson",
            "gender": "female",
            "image": "https://dummyjson.com/icon/emilys/128",
            "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...", // JWT accessToken (for backward compatibility) in response and cookies
            "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." // refreshToken in response and cookies
        }));
res.end();
    }
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Listening on 127.0.0.1:3000');
});
