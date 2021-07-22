const express = require('express');
const app = express();
app.use(express.json);

const books = [
    {
        id:1,
        name:'otgan kunlar'
    },
    {
        id:2,
        name:'killer'
    },
    {
        id:3,
        name:'tarix'
    },
];

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api/books', (req, res) => {
    res.send(books);
});

app.get('/show/:id', (req, res) => {
    const book = books.find(b=>b.id === parseInt(req.params.id));
     if(!book)
     res.status(404).send('Berilgan kitob topilmadi');
    res.send(book);
});

app.get('/articl/:year/:month', (req, res) => {
    res.send(req.params);
});

app.post('/api/create', (req, res) => {
    const book = {
        id:books.length+1,
        name:req.body.name
    };
    books.push(book);
    res.status(201).send(book);
});
//const port = process.env.PORT || 8000;

app.listen(5000, () => {
    console.log('Port ishga tushdi!');
});

//Run app, then load http://localhost:port in a browser to see the output.