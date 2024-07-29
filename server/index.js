// server.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());


let book1 = {
    id:'book1',
    title:'angular'
}

let book2 = {
    id:'book2',
    title:'html'
}

let items = [book1 , book2];

app.get('/api/items', (req, res) => {
  res.json(items);
});

const randomId = function(length = 6) {
    return Math.random().toString(36).substring(2, length+2);
};


app.post('/api/items', (req, res) => {
  const newItem = req.body;
  items.push({id: randomId, title: newItem.title});
  res.status(201).json(newItem);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});