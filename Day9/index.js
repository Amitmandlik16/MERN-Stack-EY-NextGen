const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Get: Hello World!');
});

app.post('/', (req, res) => {
    res.send('Post: Hello World!');
});

app.get('/status', (req, res) => {
    res.sendStatus(500);
});

app.get('/download', (req, res) => {
    res.download('./Express-JS.png');
});

app.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    console.log('\nemail: ' + email);
    console.log('password: ' + password);
    res.send('Login Successful.');
});


app.get('/json', (req, res) => {
    res.json({
        "users": [
            {
                "id": 1,
                "name": "John Doe",
                "email": "johndoe@example.com",
                "age": 28,
                "isActive": true
            },
            {
                "id": 2,
                "name": "Jane Smith",
                "email": "janesmith@example.com",
                "age": 32,
                "isActive": false
            }
        ]
    });
});

app.get('/xml', (req, res) => {
    const xmlData = `<?xml version="1.0" encoding="UTF-8"?>
<library>
    <book id="1">
        <title>Effective Java</title>
        <author>Joshua Bloch</author>
        <genre>Programming</genre>
        <published>2008</published>
        <available>true</available>
    </book>
    <book id="2">
        <title>Clean Code</title>
        <author>Robert C. Martin</author>
        <genre>Programming</genre>
        <published>2008</published>
        <available>true</available>
    </book>
    <book id="3">
        <title>The Pragmatic Programmer</title>
        <author>Andrew Hunt, David Thomas</author>
        <genre>Programming</genre>
        <published>1999</published>
        <available>false</available>
    </book>
</library>`;

    res.set('Content-Type', 'application/xml');
    res.send(xmlData);
});

app.get('/html', (req, res) => {
    const htmlData = `<!DOCTYPE html>
<html>
<head>
    <title>HTML Response</title>
</head>
<body>
    <h1>HTML Response</h1>
    <p>This is the HTML Response for the request http://127.0.01:3000/html.</p>
</body>
</html>`;

    res.status(500).send(htmlData);
});

app.listen(port, () => {
    console.log(`index.js listening on localhost(http://127.0.01:3000) port ${port}`);
});
