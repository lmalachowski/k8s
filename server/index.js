const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hi');
});

app.post('/todos', async (req, res) => {
  //add todo (req.body.todo) to DB
})

app.delete('/todos', async (req, res) => {
  //delete todo (req.body.todo) from DB
})

app.listen(5000, err => {
  console.log('Listening');
});
